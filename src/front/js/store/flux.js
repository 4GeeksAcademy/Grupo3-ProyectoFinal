const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			signup: false,
			isloged: false,
			message: null,
			user_data: {
				name: null,
				last_name: null,
				email: null,
				password: null
			},
			login_user: {
				email: null,
				password: null
			},
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
				}
			],

			// quotations: []
		},
		actions: {
			isPropertyEmpty: (obj) => {
				for (const key in obj) {
					if (obj[key] === "" || obj[key] == null || obj[key] === undefined) {
						return true;
					}
				}
				return false;
			},
			signUpUser: async () => {
				const store = getStore()
				const actions = getActions()
				try {

					if (actions.isPropertyEmpty(store.user_data)) {
						alert("Le falta llenar algunos datos");
						return;
					}

					const response = await fetch(process.env.BACKEND_URL + "/signup", {
						method: 'POST',
						body: JSON.stringify(store.user_data),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					const result = await response.json()
					if (response.status == 400) {
						setStore({ signup: false })
						alert(result.message)

					}


					if (response.ok) {
						setStore({ signup: true })
						alert("User add success")
					}


				} catch (error) {
					console.error(error + " Error loading message from backend");
					setStore({ signup: false })
				}
			},
			logInUser: async () => {
				const store = getStore()
				const actions = getActions()
				try {
					if (actions.isPropertyEmpty(store.login_user)) {
						alert("Le falta llenar algunos datos :S");
						return;
					}

					const response = await fetch(process.env.BACKEND_URL + "/login", {
						method: 'POST',
						body: JSON.stringify(store.login_user),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const result = await response.json()
					console.log(result);

					if (response.ok) {
						localStorage.setItem("jwt-token", result.access_token);
						alert("Login success");
						setStore({ isloged: true });
						return true;
					} else {
						setStore({ isloged: false })
						alert(result.message)
					}

				} catch (error) {
					console.log(error + " Error loading message from backend")
					setStore({ isloged: false })
				}

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			postQuotationData: async (taskArray) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user/client/quation/create", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(taskArray)
					});

					if (!response.ok) {
						throw new Error('Error en la petición');
					}

					const responseData = await response.json();
					setData(responseData);
				} catch (error) {
					console.error('Ha habido un error:', error);
				}

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

			handleChange: (e, type) => {
				const store = getStore()
				if (type == "login") {
					const newUserData = { ...store.login_user }
					newUserData[e.target.name] = e.target.value
					setStore({ login_user: newUserData })
				} else if (type == "signup") {
					const newUserData = { ...store.user_data }
					newUserData[e.target.name] = e.target.value
					setStore({ user_data: newUserData })
				}
			}
		}
	};
};

export default getState;
