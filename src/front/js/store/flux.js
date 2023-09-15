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
			quotations: [],
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

			getQuotations: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/quotation/get");
					const data = await response.json();
					console.log("i");
					console.log(data);

					setStore({ quotations: data.quotations });

				} catch (error) {
					console.error(error);
				}
			},

			postQuotationData: async (taskArray, leadName, projectProposalName, total, callback) => {

				let bodyObject = {
					'tasks': taskArray,
					'project_proposal_name': projectProposalName,
					'lead_name': leadName,
					'total': total
				}

				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/quation/create", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},

						body: JSON.stringify(bodyObject)
					});

					if (!response.ok) {
						throw new Error('Error en la petición');
					}

					if (callback) {
						callback();
					}
				}

				catch (error) {
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

			resetPasswordRequest: async (email) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/reset_password_request', {
						method: 'POST',
						body: JSON.stringify(email),
						headers: {
							'Content-Type': 'application/json',
						},
					});

					if (response.ok) {
						return true;
					} else {
						const result = await response.json();
						alert(result.message);
					}
				} catch (error) {
					console.error(error + ' Error requesting password reset');
					return false;
				}
			},

			updatePassword: async (data, token) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/update_password/' + token, {
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
					});

					if (response.ok) {
						return true;
					} else {
						const result = await response.json();
						alert(result.message);
					}
				} catch (error) {
					console.error(error + ' Error requesting password reset');
					return false;
				}
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
