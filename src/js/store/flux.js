

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},


		actions: {
			// Use getActions to call a function within a fuction
			

			deleteContact: (indexToDelete) => {

				const store = getStore();
				console.log("delete contact",indexToDelete)
				// console.log(store.contacts.filter( (contacts, contactsIndex)=> contactsIndex != indexToDelete))
				// setStore({ contacts: store.contacts.filter( (contacts, contactsIndex)=> contactsIndex != indexToDelete) });
				
				
				const requestOptions = {
				  method: "DELETE",
				  redirect: "follow"
				};
				
				fetch("https://playground.4geeks.com/contact/agendas/Agenda_cm1/contacts/" + indexToDelete, requestOptions)
				  .then((response) => response.text())
				  .then((result) => {
					console.log(result)
					fetch("https://playground.4geeks.com/contact/agendas/Agenda_cm1/contacts")
					.then ((response)=>response.json())
						.then( (data)=>setStore({ contacts: data.contacts}))
						})
				  .catch((error) => console.error(error));
			},



			postContactsToAgenda: (newData) => {
				console.log(newData)

				const store = getStore();
						
				fetch('https://playground.4geeks.com/contact/agendas/Agenda_cm1/contacts', {
					method: "POST",
					body: JSON.stringify(newData),
					headers: {
					"Content-Type": "application/json"
					}
        		})
				.then ((response)=>response.json())
					.then(  ()=>  getActions().loadSomeData())


					// .then( (data)=>setStore({ contacts: data.contacts}))
	
			},

			// const: [inputValue, setInputValue] = useState(""),
			// const: [task, setTask] = useState([]),

			editContact: (newData, theidcontact) => {


				const store = getStore();
						
				fetch('https://playground.4geeks.com/contact/agendas/Agenda_cm1/contacts/' + theidcontact, {
					method: "PUT",
					body: JSON.stringify(newData),
					headers: {
					"Content-Type": "application/json"
					}
        		})
				.then ((response)=>response.json())
				.then(  ()=>  getActions().loadSomeData())
	
			},

			loadSomeData: () => {
				console.log("load somedata")
				

				fetch("https://playground.4geeks.com/contact/agendas/Agenda_cm1/contacts")
				.then ((response)=>response.json())
				.then( (data)=>setStore({ contacts: data.contacts}))

				;


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},




			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

		}
	};
};

export default getState;
