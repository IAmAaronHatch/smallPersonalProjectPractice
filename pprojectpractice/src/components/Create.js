import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Character from './Character'

class Create extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            age: '',
            power: '',

            characters: []
        }
    }

    componentDidMount () {
        axios.get('/api/characters').then(res => {
            this.setState({characters: res.data})
        })
    }

    updateCharacter = (characters) => {
        this.setState({ characters })
    }

    addCharacter = () => {
        const { name, age, power } = this.state
        const newCharacter = { name, age, power }

        axios.post('/api/characters/', newCharacter).then(res => {
            this.updateCharacter(res.data)
        })
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleAge = (e) => {
        this.setState({ age: e.target.value })
    }
    handlePower = (e) => {
        this.setState({ power: e.target.value })
    }


    render() {
        let characterMap = this.state.characters.map(c => {
            return <Character updateCharacter={this.updateCharacter} c={c} />
        })
        return (
            <div>
                Create Testing

                <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input
                    type="number"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleAge}
                />
                <input
                    type="text"
                    placeholder="power"
                    value={this.state.power}
                    onChange={this.handlePower}
                />
                <button onClick={this.addCharacter}>Create Character</button>

                {characterMap}



                <Link to='/'><button>Go Back</button></Link>
            </div>
        )
    }
}

export default Create