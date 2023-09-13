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
			fetch (`${getStore().urlappi}/client`)
			.then ((response) => response.json())
			.then ((data) =>{
				for(let item of data.results){
					fetch(item.url)
					.then((response) => response.json())
					.then((data)=>{
						setStore({
							clients: [...getStore().clients, data.result]
						});
					}).catch((error)=>{
						console.log(error);
					})
				}
			}).catch((error)=>{
				console.log(error);})
		},
	}
		}
	};

export default getState;
