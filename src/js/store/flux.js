const BASE_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starships: [],
			favorite: [],
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
			]
		},
		actions: {
			getPeople: async() => {
				const response = await fetch(
					BASE_URL + "people?page=1&limit=100"
				)
				const body = await response.json();
				const people = body.results;
				setStore({
					people: people
				})
			},
			getStarships: async() => {
				const response = await fetch(
					BASE_URL + "starships?page=1&limit=100"
				)
				const body = await response.json();
				const starships  = body.results;
				setStore({
					starships: starships
				})
			},

			getPerson: async(id) => {
				const response = await fetch(
					BASE_URL + "people/" + id
				)
				const body = await response.json();
				const person  = body.result;
				return person;
			},

			getStars: async (id) => {
				const response = await fetch(
					BASE_URL + "starships/" + id
				)
				const body = await response.json();
				const starship  = body.result;
				return starship;
			},

			addFavorite: (item) => {
				const favorite = getStore().favorite
				favorite.push(item);
				setStore({favorite:[...new Set(favorite)]});								
			},
			removeFavorite: (index) => {
				let store=getStore();
				let newFavorite=store.favorite.filter((item, idx) => idx !== index);
				setStore({favorite:newFavorite});
			},
			


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
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
			}
		}
	};
};

export default getState;
