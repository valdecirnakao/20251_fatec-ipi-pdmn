import React from 'react'
import Accordion from './components/Accordion'
import Busca from './components/Busca'

const itens = [
    {
        titulo: 'Java',
        conteudo: 'Linguagem compilada e interpretada.'
    },
    {
        titulo: 'Python',
        conteudo: 'Linguagem interpretada e dinamicamente tipada.'
    },
    {
        titulo: 'JavaScript',
        conteudo: 'Interpretada. Executa do lado do cliente e do lado do servidor.'
    }
]

const App = () => {
    const expressaoJSX = <Busca />
    return (
        <div>
            {expressaoJSX}
        </div>
    )

//   return (
//     <div>
//         {/* passar a lista via props, associando ela a um props chamdo itens */}
//         <Accordion 
//           itens = {itens}
//         />
//     </div>
//   )
}

export default App