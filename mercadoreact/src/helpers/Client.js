class Client {

	getData(url) {

		return fetch(url).then((data) => {
			//Capa 1: Covertir los datos........
			return data.json()
		}).then((json) => {
			//Capa 2: Usar  los datos
			return json

		})
	}

}

 
export default Client