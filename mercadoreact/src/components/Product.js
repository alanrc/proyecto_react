import React, { Component } from 'react';
import slugify from '../helpers/String';



class Product extends Component {

	constructor() {
		super()
		this.state = {
			visto : false
		}
	}

	verProducto(event) {
		// console.log(this)
		event.preventDefault()
		this.setState({ visto : true })
	}

	render() { 
		// console.log(this.props)

		const url = `MR-${this.props.item.idProducto}-${slugify(this.props.item.Nombre)}`

		const estilo = this.state.visto === true ? " card bg-dark " : "card bg-light"

		return ( 
			<article className="col-3">
				{/* <div className="card w-25" style={{width: '18rem'}}> */}
				<div className={estilo}>
					<img src={this.props.item.Imagen} className="card-img-top w-100" alt={this.props.item.Nombre} />
					<div className="card-body">
						<h5 className="card-title">
							{this.props.item.Marca} - {this.props.item.Nombre}
						</h5>
						<p className="card-text">{this.props.item.Presentacion}</p>
						<p><span className="badge badge-info">$ {this.props.item.Precio}</span></p>
						<a href={url} onClick={this.verProducto.bind(this)} className="btn btn-primary">Ver +</a>
						{/* <button className="btn btn-danger" data-toggle="modal" data-target="#react-modal">Editar</button> */}
						<button className="btn btn-danger" onClick={this.props.onEditarProducto.bind(this)}>Editar</button>
					</div>
				</div>
			</article>
		)
	}
}
/*
class Item extends Component {
	constructor() {
		super()
		this.state = {
			products : []
		}
	}
}*/
 
export default Product;