import React from 'react';

/* Importar modulos propios */
import Header from './components/Header'
import Menu from './components/Menu'
import Product from './components/Product'
import Modal from './components/Modal'

/* Impoertar recursos propios */
// import './App.css';
// import productos from './productos.json'
import Client from './helpers/Client'
const API = new Client()

/* -----  Ciclo de vida de un Componente  -----
	1) constructor() // <-- Setear el "estado" inicial
	2) componentWillMount() // <-- Trabajar con datos Asincronicos (AJAX)
	3) componentDidMount()  // <-- Trabajar con datos Sincronicos (Loops)
	4) render() // <-- Armar la interfaz grafica (segun el "estado")
*/

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			title : "Mercado React v1.1",
			slogan : "Mucho más que JavaScript",
			products : [],
			loaded : false
		}
	}

	componentWillMount() {
		/* //Datos Asincronicos obtenidos directamente.....
		fetch("https://api.myjson.com/bins/fb377").then((response) => {
			//Capa 1: Covertir los datos........
			return response.json()
		}).then((productos) => {
			//Capa 2: Usar  los datos
			this.setState({ products : productos, loaded : true })
		}) */

		/* Datos Asincronicos obtenidos mediante un modulo Helper ...*/
		API.getData("https://api.myjson.com/bins/fb377").then((productos) => {
			this.setState({ products : productos, loaded : true })
		})
	}

	// Metodo para editar Producto
	editarProducto() {
		console.log('Editare el producto #')
		console.log(this)
		// console.log(this.state.products[13])
	}

	agregarProducto() {

	}
	borrarProducto() {

	}
	buscarProducto() {

	}

	render() {
		/* Acá se pueden programar cosas que desemboquen en el return */
		if (!this.state.loaded) {//<-- Si No esta cargado
			return <div>Iniciando App..</div>
		} else {//<-- Si EFECTIVAMENTE esta cargado....
			const losProductos = this.state.products.map(
				(prodcut , index) => <Product item={prodcut} key={index} itemID={prodcut.idProducto} onEditarProducto={this.editarProducto} />
			)
			return (
				/***************  ACÁ VAN TODOS LOS COMPONENTES   *************/   
				<div className="App">
					<Header title={this.state.title} slogan={this.state.slogan} />

					<button onClick={this.editarProducto.bind(this)}> editar</button>

					<Menu links={this.state.products} />
					<section className="row">{losProductos}</section>
					<Modal />
				</div>
				/*****************    ACÁ FUERA NADA   *************/
			)	
		}
	}
}


export default App;
