const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact: (history, index, name, email, phone, address) => {
				let store = getStore();
				let newContact ={
					full_name: name,
					email: email,
					phone: phone,
					address: address
				};
				store.contacts.push(newContact);
				setStore({store: newContact});
				history.push('/');
				
			}
			
			
			
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


