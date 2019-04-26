import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import { Context } from "../store/appContext.jsx";

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false  
		};
	}

	render() {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return store.contacts.map((item, index) => {
					return (
						<div className="container" key={item.index}>
							<div>
								<p className="text-right my-3">
									<Link className="btn btn-success" to="/add">Add new contact</Link>
								</p>
								<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
									<ul className="list-group pull-down" id="contact-list">
										<ContactCard onDelete={() => this.setState({ showModal: true})} id={index} key={index}/>
										
									</ul>
								</div>
							</div>
							<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
						</div>
					);
				});
					}}
		</Context.Consumer>
		);
	}
}
