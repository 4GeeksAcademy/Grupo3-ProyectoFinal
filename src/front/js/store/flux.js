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
			quotations: [],
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

			getQuotations:  async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/quotation/get");
					const data = await response.json();
					console.log("i");
					console.log(data);

					setStore({quotations: data.quotations});
					
				} catch (error) {
					console.error(error);
				}
			},

			postQuotationData: async (taskArray,leadName, projectProposalName, total,callback) => {
				
				let bodyObject = {
					'tasks':taskArray,
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
			}
		}
	};
};

export default getState;
