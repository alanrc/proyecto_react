import React from 'react';

/* Importar modulos propios */
import Header from './components/Header'
import Menu from './components/Menu'
import Product from './components/Product'
/* Impoertar recursos propios */
// import './App.css';
import productos from './productos.json'


class App extends React.Component {

	constructor() {
		super()
		console.log(productos)
		this.state = {
			title : "MercadoReact",
			slogan : "Múcho más que JavaScript",
			// products : ["Música", "Deportes", "Electro", "Pesca", "Calzado Masculino"]
			/*
			products : [
				{ nombre : "Guitarra Criolla", precio : 1200, stock : 300, categoria : "Música" },
				{ nombre : "Paleta Pin Pong x 2", precio : 350, stock : 650, categoria : "Deportes" },
				{ nombre : "Microondas", precio : 8600, stock : 100, categoria : "Electro" },
				{ nombre : "Pelota Basquet", precio : 960, stock : 225, categoria : "Deportes" },
				{ nombre : "Marcadores de Color", precio : 85, stock : 400, categoria : "Librería" }
			] */
			products : productos
		}
	}

	render() {
		/* Acá se pueden programar cosas que desemboquen en el return */
		// const losProductos = <Product item={this.state.products[67]} />
		const losProductos = this.state.products.map(
			(prodcut , index) => <Product item={prodcut} key={index} />
		)
		return (
			/***************  ACÁ VAN TODOS LOS COMPONENTES   *************/   
			<div className="App">
				<Header title={this.state.title} slogan={this.state.slogan} />
				<Menu links={this.state.products} />
				{/* <Product item={this.state.products[53]} /> */}
				<section className="row">
					{losProductos}
				</section>
				
			</div>
			/*****************    ACÁ FUERA NADA   *************/
		)
	}
}


export default App;
