import React from "react";

export class Navbar extends React.Component{
    render(){
        return(
            <div className="container-navbar">
                <div className="container-flex">
                    <div>
                    <img alt="AMAZON LOGO"></img>
                    </div>
                    <div>
                    <button>TUTTE LE CATEGORIE</button>
                    <input type="text" placeholder="Cerca su Amazon.it"/>
                    </div>
                    <div>ACCOUNT</div>
                    <div>CARRELLO</div>
                </div>
            </div>
        )
    }
}