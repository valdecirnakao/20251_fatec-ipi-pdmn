import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import App from '../App'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (evento) => {
        this.setState({ termoDeBusca: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div
                    className='flex flex-column'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText
                            onChange={this.onTermoAlterado}
                            className='w-full'
                            placeholder={this.props.dica}
                            value={this.state.termoDeBusca} />
                    </IconField>
                    <Button
                        label='OK'
                        outlined />
                </div>
            </form>

        )
    }
}

Busca.defaultProps = {
    dica: 'Buscar algo...'
}