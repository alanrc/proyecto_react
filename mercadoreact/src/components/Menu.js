import React, { Component } from 'react'
import slugify from '../helpers/String'

// class Menu extends React.Component
class Menu extends Component {
	render() {
		// console.log(this.props)
		return(
			<nav className="navbar navbar-dark bg-primary navbar-expand-sm">
				<ul className="navbar-nav mx-auto">
					<Items links={this.props.links} />
				</ul>
			</nav>
		)
	}
}

class Items extends Component {

	constructor() {
		super()
		this.state = {
			categories : [],
			loaded : false
		}
	}

	componentDidMount() {

		console.log("estos son links abajo " )
		console.log(...this.props.links)
		
		this.setState({
			categories : [ ...new Set( this.props.links.map(link => link.Categoria) ) ],
			loaded : true
		})
	}

	/*
	slugify(string) { // -----   Convertir texto a URL Friendly   ------
		const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
		const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
		const p = new RegExp(a.split('').join('|'), 'g')
	  
		return string.toString().toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with ‘and’
			.replace(/[^\w-]+/g, '') // Remove all non-word characters
			.replace(/--+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, '') // Trim - from end of text
	} */

	render() {
		
		console.log(this.state.categories)

		if (!this.state.loaded) {
			return <li>Cargando..</li>
		} else {
			console.log("Hay datos ... el estado esta cargado :)")
			return this.state.categories.map(
				(link, index) =>
				<li className="nav-item" key={index}>
					<a className="nav-link" href={slugify(link)}>{link}</a>
				</li>
			)
		}
	}
}

export default Menu;