import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

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
						<div className="container" key={index}>
							<div>
								<p className="text-right my-3">
									<Link className="btn btn-success" to="/add">Add new contact</Link>
								</p>
								<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
									<ul className="list-group pull-down" id="contact-list">
										<ContactCard id={index} key={index} onDelete={() => 
											actions.deleteContact(this.props.id, this.props.history)	
										}/>
										
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
Contacts.propTypes={
	id: PropTypes.number,
	history: PropTypes.object
};