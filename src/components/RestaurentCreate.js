import React, { Component } from 'react';

class RestaurentCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            owner:null
        }
    }
    create(){
        fetch(' http://localhost:3000/restaurent',{
            method:"Post",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                alert("Restaurent Added")
            })
        })
    }
    render() {
        return (
            <div>
               <h1>Add Restaurent </h1> 
               <div>
                   <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Restaurent Name"/>
                   <br/><br/>
                   <input onChange={(event)=>{this.setState({owner:event.target.value})}} placeholder="Enter Owner Name"/>
                   <br/><br/>
                   <button onClick={()=>{this.create()}}>Add</button>
               </div>
            </div>
        );
    }
}

export default RestaurentCreate;