import React from "react";
import { Navbar} from "./Navbar";
import { List } from "./List";

export class App extends React.Component{
    render(){
        return(
            <div className="container">
            <Navbar />
            <List/>
            </div>
        )
    }
}