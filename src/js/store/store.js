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
				
			},
			updateContact: (history, EDITid, name, email, phone, address) =>{
			let store = getStore();
			console.log(EDITid);
			fetch("https://assets.breatheco.de/apis/fake/contact/" + EDITid, {
                method: 'PUT',
                headers: {
                  "Content-type": "application/json;charset=utf-8"
                },
                body:   JSON.stringify({
                        "full_name": name,
                        "email": email,
                        "agenda_slug": "downtown_viii",
                        "address": address,
                        "phone": phone
                })
			})
			
			.then(response => response.json())
              //.then(myJson => alert(JSON.stringify(myJson)))
              .then(getUpdatedData => {
                  fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii')
                  .then(response => response.json())
                   // .then(myJson => alert(JSON.stringify(myJson))
                  .then(data => {
                      let store = this.state;
                      store.contacts = data;
                      this.setState({ store });
                    })
			.then(update => {
                      history.push('/');
                  });
              })
			.catch(error => {
                    alert(error);
              }); 	
			},
			
			
			deleteContact:(id, history) => {
				let store = getStore();

				store.contacts.splice(id.index,1);
				setStore({store: store});
				
				history.push('/');
				//console.log(store);
			}
			
			
			
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


