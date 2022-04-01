import React,{Component} from "react";

class Historial extends Component {
    render(){
        return (
            <div className="recordatorio">
                <h3>Eleccion anterior:{this.props.seleccionAnterior}</h3>
                <h4>Historial de Elecciones </h4>
                <ul>
                {this.props.historialO}
                </ul>
            </div>
        );
    }
}
export default Historial;