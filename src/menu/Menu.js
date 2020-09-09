import React, {Component} from 'react'
import logo from './svg/logo.svg'

import sobre from './svg/icon-info-circle.svg'
import login from './svg/icon-user-alt.svg'
import home from './svg/icon-home.svg'

class Menu extends Component {
    render() {

        console.log(this.props.page)

        let botoes = {}

        botoes['home'] = <div className="menu">
            <a className="sobre" href={"./sobre.html"}>
                <img src={sobre} alt="Sobre" />sobre
            </a>
            <a className="login" href={"./login.html"}>
                <img src={login} alt="Login" />login
            </a>
        </div>
        botoes['login'] = <div className="menu">
            <a className="home" href={"./index.js"}>
                <img src={home} alt="Sobre" />home
            </a>
        </div>
        botoes['sobre'] = <div className="menu">
            <a className="home" href={"./index.js"}>
                <img src={home} alt="Sobre" />home
            </a>      
            <a className="login" href={"./login.html"}>
                <img src={login} alt="Login" />login
            </a>               
        </div>

        return <div className="container">
                    <div className="logo">
                        <a href={"./menu.js"} target="_parent">
                            <img src={logo} alt="HashtagFinder" />
                        </a>
                    </div>
                    {botoes[this.props.page]}
                </div>;
    }
}

export default Menu;