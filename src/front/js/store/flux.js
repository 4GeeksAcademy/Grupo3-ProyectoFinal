const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
			}
		}
	};
};

export default getState;
