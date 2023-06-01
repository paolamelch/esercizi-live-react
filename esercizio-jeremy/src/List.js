import React from "react";

export class List extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            items : [],
            img : [],
        }
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then((val) => val.json())
        .then((val) => {
            this.setState(
                {items : val.map((item) => 
                <li key={item.id} className="list-items">
                    <img src={item.image} className="images"></img>
                    <div>{item.title}</div>
                    <div> ${item.price}</div>
                </li>)}
                )
        })
    }
      
    render(){
        return(
            <div>
                <ul>{this.state.img} {this.state.items}</ul>
            </div>
        )
    }
}