import React, {Component} from 'react'
import axios from 'axios'

class Character extends Component {
    constructor (props) {
        super (props)

        this.state = {
            name: props.c.name,
            age: props.c.age,
            power: props.c.power,
            edit: false
        }
    }


    render(){
        const { c } = this.props
        return(
            <div>
                <h4>{c.name}</h4>
                <p>age: {c.age}</p>
                <p>power: {c.power}</p>
                
            </div>
        )
    }
}





export default Character