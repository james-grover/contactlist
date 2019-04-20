import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
		
			fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())
				.then(data => {
					//  .then(json => console.log(json))
					//	.catch(error => console.log(error));

					let { store } = this.state;
					store.contacts = data;
					this.setState({ store });
					//console.log (data);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
