import React, {useState} from "react";
import Logo from "./logo1.jpg"


function Header(){
    return(
        <header>
            <div>
                <img  src={Logo} alt="" />
                <h2 >spa</h2>
            </div>
            <nav>
                <ul>
                    <li>Serviços</li>
                    <li>Atendimento</li>
                    <li>Contatos</li>
                    <li>Agenda</li>
                </ul>
            </nav>
            <form action="">
                <label >Usuário</label>
                <input type="text" placeholder="usuário"/>
                <label>Senha</label>
                <input type="password"  placeholder="senha"/>
                <button>Entrar</button>
            </form>

        </header>
    )    
}
export default Header;