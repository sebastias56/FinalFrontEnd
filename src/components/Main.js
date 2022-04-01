import React, {Component} from "react";
import data from './data.json';
import Botones from './Botones';
import Historial from './Historial';
class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            contadorH:2,
            contadorO:0,
            historia: data[0].historia,
            historialO: [],
            seleccionAnterior:"",
        }
    }
    historiaA=(e)=>{
        if(this.state.contadorH<=5){
            this.setState({
                contadorO: this.state.contadorO+2,
                contadorH: this.state.contadorH+1
              })
            const historia=data.find(data=>{
                return data.id=== this.state.contadorH+"a"
            })
            this.setState({
                historia: historia.historia,
            })
        this.state.historialO.push("A")
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.contadorH !== this.state.contadorH)
            {
                this.setState({
                    seleccionAnterior: this.state.historialO[this.state.contadorH-3]
                })
            } 
    }
   
    
    historiaB=(e)=>{
        if(this.state.contadorH<=5){
            this.setState({
                contadorO: this.state.contadorO+2,
                contadorH: this.state.contadorH+1
              })
            const historia=data.find(data=>{
                return data.id=== this.state.contadorH+"b"
            })
            this.setState({
                historia: historia.historia
            })
            this.state.historialO.push("B")
        }
        }
    
    render(){


        if(this.state.contadorH>5){


            return( 
                <div className="layout">

                    <h1 className="historia">FIN.???</h1>
                    <Historial
                     historialO={this.state.historialO.map(
                     (e, index) => (
                           <li key={index}>{e}</li>
                           ))}
                          seleccionAnterior={this.state.seleccionAnterior}
                          />
                </div>
                     )
        }


            else{
                return(
                    <div className="layout">
                         <h1 className="historia">{this.state.historia}</h1>
                         <Botones
                             historiaA={this.historiaA}
                             historiaB={this.historiaB}
                             opcionA={data[this.state.contadorO].opciones.a}
                             opcionB={data[this.state.contadorO].opciones.b}
                         />
                         <Historial
                             historialO={this.state.historialO.map(
                                 (e, index) => (
                                   <li key={index}>{e}</li>
                                 ))}
                             seleccionAnterior={this.state.seleccionAnterior}
                         />
                     </div>
                        )
                }
    }
}
export default Main;