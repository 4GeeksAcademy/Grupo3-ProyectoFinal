import Swal from 'sweetalert2';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			projectData: {
				client: "",
				projectName: "",
				projectDescription: "",
				startDate: "",
				endDate: "",
				hourPrice: ""
			},
			projects: []
		},
		actions: {
			getProjects: () => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
						// Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "api/user/projects", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ projects: data["projects"] }))
					.catch(error => console.log("Error al obtener proyectos:", error));
			},
			getProjectById: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + `api/user/projects/${id}`);
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
					const response = await fetch(process.env.BACKEND_URL + "api/user/createProject", requestOptions)
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
							const response = await fetch(process.env.BACKEND_URL + `api/user/projects/${projectId}`, {
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
					const response = await fetch(process.env.BACKEND_URL + `api/user/projects/${id}`, requestOptions);
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
