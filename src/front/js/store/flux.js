import Swal from 'sweetalert2';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			clients: [],
			favorites: [],
			
		},
		actions: {
		addFavorites: (fav) => {
			let store= getStore() 
			let verify = store.favorites.some((item)=> fav._id == item._id)
			if (verify) {
				let newFavorites = store.favorites.filter((item)=> item._id != fav._id)
				setStore({
					favorites: newFavorites
				})
			} else {
				setStore({
					favorites: [...store.favorites, fav]
				})
			}
		},
		getClients: () => {
			fetch (process.env.BACKEND_URL + "/api/user/clients")
			.then ((response) => response.json())
			.then ((data) =>{
				setStore({clients: data.clients})
			}).catch((error)=>{
				console.log(error);})
		},
	
		// deleteClients: () => {
		// 	fetch (process.env.BACKEND_URL + "/api/user/clients" + id, {
		// 		method: 'DELETE'
		// 	}) 
		// 	.then ((response) => response.json())
		// 	.then ((data) =>{
		// 		setStore({clients: data.clients})
		// 	}).catch((error)=>{
		// 		console.log(error);})
		// },
		deleteClients: async (client_Id) => {
			Swal.fire({
				title: '¿Estás seguro?',
				text: "Una vez eliminado el cliente no se podrá recuperar información relacionada a esta persona",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#23cfb06b',
				cancelButtonColor: '#03BFCB',
				confirmButtonText: 'Borrar'
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						const response = await fetch(process.env.BACKEND_URL + `api/user/clients/${client_Id}`, {
							method: 'DELETE',
						});
		  if (response.ok) {
							Swal.fire("Eliminado", "El cliente ha sido eliminado", "success").then(() => {
								getActions().getClients();
							});
						} else {
							Swal.fire("Error", "Hubo un error eliminando este cliente, por favor, vuelve a intentarlo", "error");
						}
					} catch (error) {
						Swal.fire("Error", "Ocurrió un error al eliminar el cliente", "error");
					}
				} else {
					Swal.fire("Cancelado", "", "info");
				}
			});
		},
	}
		}
	};

export default getState;
