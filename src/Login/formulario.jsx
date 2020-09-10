import ReactDOM from "react-dom";
import React from "react";
import BgIMG from '../componentes/hero-bg.jpg';
import IconHome from '../componentes/icon-home.svg';
import BotaoH from '../componentes/botaoHome'
//Iniciando as credenciais vazias
var credenciais = {
    usuario: '',
    senha: ""
}
//Pegando os name dos Inputs
function handleValue(e) {
    credenciais[e.target.name] = e.target.value;
}
//Funçao que verifica se os dados existem na API
function loginUser(e) {
    e.preventDefault()
    var requestOptions = {
    method: 'GET',
    headers: {},
    redirect: 'follow'
    };

    fetch("https://api.airtable.com/v0/appEnlSQDPT6iYdgZ/Login?api_key=keySN0JAq3DIPdHUT&filterByFormula=(AND({Email}='"+credenciais.usuario+"',{Senha}='"+credenciais.senha+"'))", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        //Verifica se as credencias de fato existem
        if (result.records.length) {
            console.log('usuario logado')
        } else {
            console.log('credenciais invalidas')
        }
    })
    .catch(error => console.log('error', error));
    
}
function Login(){
    return <div className = "content" style ={{
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        width: `100vw`,
        height: `100vh`,
        position: `absolute`}}>
        <BotaoH/>
        <form className ="formulario" 
            style ={{display: "flex",
            flexDirection: "column",
            alignContent: "center", 
            alignItems: "center",}}>
            <h1 className ="titulo-login">Login</h1>
                <input className="inputs" type="text" placeholder="Usuário" name="usuario" onChange={handleValue}></input> <br></br>
                <input className="inputs" type="password" placeholder="Senha" name="senha" onChange={handleValue}></input> <br></br>
                <input className="botao-acessar" type="button" onClick={loginUser} value="ACESSAR"></input>
    </form> 
    </div>
}

console.log(BgIMG);

function BackIMG(){
    return <img src = {BgIMG} alt = 'BackGround' className ='imgBG'/>
}

console.log(IconHome);

function Icon(){
    return <img src = {IconHome} alt = 'HomeIcon' className ='icon'/>
}

export {Login, BackIMG, Icon}


