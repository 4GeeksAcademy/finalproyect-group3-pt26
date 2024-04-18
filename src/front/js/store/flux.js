const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null || localStorage.getItem("token"),
			isLogedds: false,
			message: null,
			user: JSON.parse(localStorage.getItem("user")) || null,
			register: [],
			paquetes:[],
			tour:[],
			hotel:[]
		},
		actions: {
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
			Login: async (user) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST", // *GET, POST, PUT, DELETE, etc.
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user), // body data type must match "Content-Type" header,tanbier se le puede pasar {email,y password}
				})
				const data = await resp.json()

				if (resp.ok) {
					localStorage.setItem("token", data.token);
					localStorage.setItem("user", JSON.stringify({ username: data.username }));
					setStore({
						token: data.token, user: {
							username: data.username // Suponiendo que recibes el nombre de usuario del servidor
						}, isLogedds: true
					})
					return true
				}
				else {
					return false
				}

			},
			handleLogout: async (navigate) => {
				const store = getStore()
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/logout", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token
						}
					})

					const data = await resp.json()

					if (resp.ok) {
						localStorage.removeItem('token');
						setStore({
							token: null,
							isLogedds: false,
							message: null
						})
						navigate('/')
					}

					else {
						console.error("Error al cerrar sesion", resp.statusText)
					}

				} catch (error) {
					console.error("Error al cerrar sesion", error)
				}
			},
			handleSubmit: async ({ username, email, password }, navigate) => {

				if (!username || !email || !password) {
					alert('Por favor, completa todos los campos del formulario.');
					return;
				}
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ username, email, password, is_active: true }), // body data type must match "Content-Type" header,tanbier se le puede pasar {email,y password}
					})

					if (resp.ok) {
						const data = await resp.json();
						setStore(prevState => ({ ...prevState, register: data })); //me traigo la copia del estado anterior y modifico la data de registro
						navigate('/login')
						// alert('Usuario registrado exitosamente. Por favor, inicia sesión.');

					} else {

						const errorData = await resp.json();
						alert('Error al registrar el usuario: ' + errorData.message);
						console.error("Error al registrar el usuario", resp.statusText);

					}

				} catch (error) {
					alert('Error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
					console.log('Error al Registrar el Usuarion', error)
				}

			},
			paquetes: async () => {
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/paquetes")
					const data = await resp.json()
					setStore({ paquetes: data })
					// siempre tenemos que devolver algo para resolver la promesa
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			tour: async () => {
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/tour")
					const data = await resp.json()
					setStore({ paquetes: data })
					// siempre tenemos que devolver algo para resolver la promesa
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			paquetes: async () => {
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/paquetes")
					const data = await resp.json()
					setStore({ paquetes: data })
					// siempre tenemos que devolver algo para resolver la promesa
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},



		}
	};
};

export default getState;
