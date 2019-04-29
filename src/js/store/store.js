const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact: (history, index, name, email, phone, address) => {
				let store = getStore();
				let APIid = store.contacts[store.contacts.length -1].id;
				let AddAPIid = Number(APIid) + 1;
				
				let newContact ={
					full_name: name,
					email: email,
					phone: phone,
					address: address
				};
				store.contacts.push(newContact);
				setStore({store});
				history.push('/');
				
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: 'POST',
					headers: {
						"Content-type": "application/json;charset=utf-8"
					},
					body:   JSON.stringify({
						"id": AddAPIid.toString(),
						"agenda_slug": "downtown_viii",
						"full_name": name,
						"email": email,
						"phone": phone,
						"address": address
					})
				})
				.then(response => response.json())
				.then(getUpdatedData => {
                 fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii')
                  .then(response => response.json())
//                  .then(myJson => alert(JSON.stringify(myJson))) 
                  .then(data => {
					let store  = getStore();
					store.contacts = data;
					setStore({store});
                  });
			
              })
			.catch(error => {
                    alert(error);
              }); 	
				
			},
			updateContact: (history, EDITid, name, email, phone, address) =>{
			//let store = getStore();
			//console.log(EDITid);
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
			.then(getUpdatedData => {
                 fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii')
                  .then(response => response.json())
//                  .then(myJson => alert(JSON.stringify(myJson))) 
                  .then(data => {
					let store  = getStore();
					store.contacts = data;
					setStore({store});
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
				let APIid = store.contacts[id.index].id;
				//console.log(store.contacts[id.index].id);
				store.contacts.splice(id.index,1);
				setStore({store});
				history.push('/');
				fetch("https://assets.breatheco.de/apis/fake/contact/" + APIid, {
                method: 'DELETE',
                headers: {
                  "Content-type": "application/json;charset=utf-8"
                }
                
			});
				
				//console.log(store);
			}
			
			
			
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


