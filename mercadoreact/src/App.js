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
        this.actualizarEstado = this.actualizarEstado.bind(this)
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
		API.getData("https://api.myjson.com/bins/dcg2p").then((productos) => {
			this.setState({ products : productos, loaded : true })
		})
    }
    
    // Metodos
    actualizarEstado(theProduct, borrar = false) {
		// 0) VAriable comun
		let nuevo = []

		// 1) Desactivar el render()
		this.setState({loaded: false})

		// 2) "Actualizar" o "Borrar"
		if (!borrar) { // Si No hay que "borrar" ... entonces "actualizar"
		/*
            this.setState({
                products : this.state.products.map(
                    oldProduct => oldProduct.idProducto === theProduct.idProducto ? theProduct : oldProduct
                )
			}, () => {this.setState({loaded: true}) }) */
			nuevo  = this.state.products.map(
				oldProduct => oldProduct.idProducto === theProduct.idProducto ? theProduct : oldProduct
			)
		} else { // Si EFECTIVAMENTE hay que "borrar"... entonces "borrar"
			/*
			this.setState({
				products : this.state.products.filter(
					oldProduct => oldProduct.idProducto !== theProduct.idProducto
				)
			},() => {this.setState({loaded: true}) }) */
			nuevo =  this.state.products.filter(
				oldProduct => oldProduct.idProducto !== theProduct.idProducto
			)
		}

		this.setState({products: nuevo}, () => {
			window.localStorage.setItem("_products", JSON.stringify(nuevo))//<--- Actualizo el localStorage
			this.setState({loaded: true})

		})
		// 3) Reactivar el render()
		// this.setState({loaded: true})

    }

	render() {
		/* Acá se pueden programar cosas que desemboquen en el return */
		if (!this.state.loaded) {//<-- Si No esta cargado
			return <div>Iniciando App..</div>
		} else {//<-- Si EFECTIVAMENTE esta cargado....
			const losProductos = this.state.products.map(
				(product , index) => <Product item={product} key={index} onActualizarProducto={this.actualizarEstado} />
			)
			return (
				/***************  ACÁ VAN TODOS LOS COMPONENTES   *************/   
				<div className="App">
					<Header title={this.state.title} slogan={this.state.slogan} />
					<Menu links={this.state.products} />
                    <section className="container-fluid">
                        <div className="row">{losProductos}</div>
                    </section>
					<Modal />
				</div>
				/*****************    ACÁ FUERA NADA   *************/
			)	
		}
	}
}


export default App;
