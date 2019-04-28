import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class EditContact extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({store, actions}) => {
					let id = this.props.match.params.id;
					let EDITid = store.contacts[id].id;
					
					return(
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input id="NameInput" type="text" className="form-control" placeholder="Full Name" 
										defaultValue={store.contacts[id].full_name}/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input id="EmailInput" type="email" className="form-control" placeholder="Enter email" 
										defaultValue={store.contacts[id].email}/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input id="PhoneInput" type="phone" className="form-control" placeholder="Enter phone" 
										defaultValue={store.contacts[id].phone}/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input id="AddressInput" type="text" className="form-control" placeholder="Enter address"
										defaultValue={store.contacts[id].address}/>
									</div>
									<button type="button" className="btn btn-primary form-control"
									onClick={() => actions.updateContact(this.props.history, EDITid,
									document.querySelector('#NameInput').value,
									document.querySelector('#EmailInput').value,
									document.querySelector('#PhoneInput').value,
									document.querySelector('#AddressInput').value
									)}
									>save</button>
									<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
								</form>
							</div>
						</div>
					);	
				}}
			</Context.Consumer>
		);
	}
}

EditContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
