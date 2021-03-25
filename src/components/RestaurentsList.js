import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class RestaurentsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,

        }
    }

    componentDidMount() {
        fetch(" http://localhost:3000/restaurent").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>This is RestaurentsList</h1>
                {
                    this.state.list ?
                        <div class="container">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Owner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        
                                         <tr>  
                                             <td>{item.id}</td>
                                             <td>{item.name}</td>
                                             <td>{item.owner}</td> 
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </div> : <p>Please wait</p>
                }
            </div>
        );
    }
}

export default RestaurentsList;