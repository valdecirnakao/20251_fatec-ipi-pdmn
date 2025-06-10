// rafce
import './Accordion.css'
import React, { useState } from 'react'
import { Card } from 'primereact/card'

// desestruturar a coleção de itens no parâmetro da af.
const Accordion = ({itens}) => {

    const [indiceAtivo, setIndiceAtivo] = useState(null)
    const itemClicado = (indice) => {
        //atualize a variável indiceAtivo, atribuindo a ela, o valor do indice clicado, causando impacto visual
        setIndiceAtivo(indice)
    }

    const expressaoJSX = itens.map((item, indice) => {
        //escolher entre a palavra down ou right em função de o item da vez ter sido o último clicado ou não, usando as variáveis de indice ativo e do indice da vez.
        //operador ternário
        const classExibirIcone = indice === indiceAtivo ? 'down' : 'right' 
        //escolher entre hidden e a cadeia vazia
        const classExibirConteudo = indice === indiceAtivo ? '' : 'hidden'
        return (
            <Card id="accordion" key={indice} className='border-1 border-400'>
                <div onClick={() => itemClicado(indice)}>
                    <i className = {`pi pi-angle-${classExibirIcone}`}></i>
                    <h5 className = 'inline ml-3'>{item.titulo}</h5>
                </div>
                <p className={classExibirConteudo}>
                    {item.conteudo}
                </p>
            </Card>
        )
    })
    return (
    //usar a função map para iterar sobre a coleção de itens
    //para cada item, produzir uma div. ela tem um h4 com o título e um p com o conteúdo
    <div>
        {
            expressaoJSX
        }
    </div>
    )
}

export default Accordion