import React from "react"
import Relax from "./relaxamento.png"
import Bem from "./bem.png"

function Main(){
    return(
        <main>
            <section>
                <img id="relax"src={Relax} alt=""/>
                <h2>Relaxamento</h2>
                <button>SAIBA MAIS</button>
            </section>

            <section>
                <img id="relax" alt=""/>
                <h2>Controle de Ansiedade</h2>
                <button>SAIBA MAIS</button>
            </section>

            <section>
                <img id="relax"src={Bem} alt=""/>
                <h2>Saúde e Bem Estar</h2>
                <button>SAIBA MAIS</button>
            </section>
        </main>
    )
}
export default Main;