import ReactDOM from "react-dom";
import React from "react";

class BotaoHome extends React.Component{
    render(){
       console.log(this.props.page)
       let botao={}
       return(botao ['home'] = <div>
            <a  className = "homeLink" href={"./home.html"}>
       <h1 className ="home">HOME</h1>
        </a>
       </div> )
    }
}
export default BotaoHome