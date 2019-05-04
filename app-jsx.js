let hola = class Hola extends React.Component {
	
	render(){
		return <div>Hola {this.props.nombre} !!!</div>
	}
}

// ReactDOM.render(COMPONENTE, AREA)
ReactDOM.render(
	<hola nombre = "JSX" />,
	document.querySelector("#app")
	)