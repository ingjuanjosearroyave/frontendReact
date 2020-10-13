import React, { Component } from 'react'
import axios from 'axios'
import moduleName from 'module'
import cors from 'cors'

const url = "http://localhost:3001/api/v1/controlRetiro";

export default class controlRetiro extends React.Component {

    state = {
        control: [],
        controlRetiro: {
            codigo: "",
            fechaIngreso: "",
            numeroOrdeñosaDescartar: "",
            fechaSalida: "",
            observaciones: "",
            medicamento: "",
            bovino: "",
            horaIngreso: ""
        }
    }

    componentDidMount() {
        this.listarControl();
    }

    /*
    getControl = async () => {
        const res = await axios.get(url);
        this.setState({
            control: res.data
        });
        console.log(this.state.control);
    }*/

    listarControl() {
        axios
            .get("http://localhost:3001/api/v1/controlRetiro")
            .then(response => {
                console.log(response)
                /*this.setState({
                    control: response.data
                });
                console.log("Prueba DE QUE ENTRO")
                console.log(this.state.control);
                console.log("ENTRO")*/
                console.log(response);
                this.control = response.data.info;
                console.log(this.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    /*
    fetchData = async () =>{
        try{
            //let url = 'https://jsonplaceholder.typicode.com/users'
             //let url = "http://127.0.0.1:8000/";
            //let url = `https://localhost:3001/`;
            //let url = 'http://localhost:3001/api/v1/controlRetiro'
          
            axios.get(url)
            .then(res =>{
                this.setState({control: res.data});
                console.log(res.data);
                console.log("control")
                console.log(this.state.control)
            })
            .catch(error => {
                console.log(error);
            });
        }catch(error){
            console.log(error);
        }
    }*/

    renderControl = (control, index) => {
        return (
            /*
            <tr key = {index}>
            <td>{celo.id}</td>
            <td>{celo.name}</td>
            <td>{celo.username}</td>
         </tr>*/


            <tr key={index}>
                <td>{control.codigo}</td>
                <td>{control.fechaIngreso}</td>
                <td>{control.horaIngreso}</td>
                <td>{control.horasRetiroLeche}</td>
                <td>{control.nombreBovino}</td>
                <td>{control.nombreMedicamento}</td>
                <td>{control.numeroOrdenosaDescartar}</td>
                <td>{control.observaciones}</td>
            </tr>
        )

    }



    render() {
        //const locationControl = this.state.control.LOCATION
        //  ? this.state.control.LOCATION.split(',')
        //: [];
        //console.log(locationControl)
        return (
            <div className="row">
                <div className="col-md-8">
                    <br />
                    <h1>PIG Plataforma de Gestion Ganadera</h1>
                    <br />
                    <h2>Control de Retiro de Leche</h2>
                    <br />
                </div>
                <table className="table" striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Fecha Ingreso</th>
                            <th>Número de Ordeños a descartar</th>
                            <th>Fecha Salida</th>
                            <th>Observaciones</th>
                            <th>Medicamento Suministrado</th>
                            <th>Nombre Bovino</th>
                            <th>Hora Ingreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.control.map(controlRetiro => {
                            console.log("entro")
                            return (
                                <tr>
                                    <td>{controlRetiro.codigo}</td>
                                    <td>{controlRetiro.fechaIngreso}</td>
                                    <td>{controlRetiro.horaIngreso}</td>
                                    <td>{controlRetiro.horasRetiroLeche}</td>
                                    <td>{controlRetiro.nombreBovino}</td>
                                    <td>{controlRetiro.nombreMedicamento}</td>
                                    <td>{controlRetiro.numeroOrdenosaDescartar}</td>
                                    <td>{controlRetiro.observaciones}</td>
                                    <td><button className="btn btn-success">Prueba</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

