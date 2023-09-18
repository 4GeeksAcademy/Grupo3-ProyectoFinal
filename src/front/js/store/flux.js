import Swal from 'sweetalert2';

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
			current_user: {},
			projectData: {
				client: "",
				projectName: "",
				projectDescription: "",
				startDate: "",
				endDate: "",
				hourPrice: ""
			},
			projects: [],
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
						localStorage.setItem("jwt-token", result.token);
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

			getProfile: async () => {
				try {
					const token = localStorage.getItem("jwt-token");
					if (token) {
						console.log("token" + token)
						const response = await fetch(process.env.BACKEND_URL + "/profile", {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`
							}
						});
						console.log(response)
						if (response.ok) {
							const result = await response.json();
							setStore({ current_user: result.user });
						} else {
							throw new Error('Failed to fetch user profile');
						}
					}
				} catch (error) {
					console.error(error);
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
			},

			getProjects: () => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
						// Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "api/projects", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ projects: data["projects"] }))
					.catch(error => console.log("Error al obtener proyectos:", error));
			},

			getProjectById: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + `api/project/${id}`);
					const data = await response.json();
					if (data.project) {
						setStore({ projectData: data.project });
					}
				} catch (error) {
					console.log("Error al obtener proyecto:", error);
				}
			},

			postProjectRegister: async (client, projectName, projectDescription, startDate, endDate, hourPrice) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						client_id: client,
						name: projectName,
						description: projectDescription,
						Date: startDate,
						deadline: endDate,
						hour_price: hourPrice
					})
				};
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/project/create", requestOptions)
					const data = await response.json();
					if (data.msg === 'Se ha creado el proyecto con éxito') {
						Swal.fire("Éxito", data.msg, "success");
					} else {
						Swal.fire("Error", data.msg, "error");
					}
				} catch (error) {
					Swal.fire("Error", "Ocurrió un error al crear el proyecto", "error");
				}
			},

			deleteProject: async (projectId) => {
				Swal.fire({
					title: '¿Estás seguro?',
					text: "Una vez eliminado, no podrás recuperar este proyecto!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Sí, eliminar!'
				}).then(async (result) => {
					if (result.isConfirmed) {
						try {
							const response = await fetch(process.env.BACKEND_URL + `api/project/${projectId}`, {
								method: 'DELETE',
							});
							if (response.ok) {
								Swal.fire("Eliminado", "El proyecto ha sido eliminado", "success").then(() => {
									getActions().getProjects();
								});
							} else {
								Swal.fire("Error", "Ocurrió un error al eliminar el proyecto", "error");
							}
						} catch (error) {
							Swal.fire("Error", "Ocurrió un error al eliminar el proyecto", "error");
						}
					} else {
						Swal.fire("Cancelado", "El proyecto está a salvo!", "info");
					}
				});
			},

			updateProject: async (id, projectDetails) => {
				const requestOptions = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(projectDetails)
				};
				try {
					const response = await fetch(process.env.BACKEND_URL + `api/project/${id}`, requestOptions);
					const data = await response.json();
					if (response.status === 200) {
						console.log(data.msg);
						getActions().getProjectById(id);
					} else {
						console.log(data.msg);
					}
				} catch (error) {
					console.log("Error al editar el proyecto:", error);
				}
			},

			updateProjectData: (updatedData) => {
				const currentData = getStore().projectData;
				setStore({
					projectData: {
						...currentData,
						...updatedData
					}
				});
			}
		}
	};
};

export default getState;

