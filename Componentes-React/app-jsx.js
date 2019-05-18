/* Componentes */
class Hola extends React.Component {

	render(){
		return <div>Hola {this.props.nombre}!!!</div>
	}
  
  }
  
////////////////////////////////////////////////////////
/* Visualizacion de componentes */

ReactDOM.render(
	<Hola nombre="Modulo 'Hola' en JSX" />,
	document.querySelector("#app")
)
