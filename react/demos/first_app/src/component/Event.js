import React, { Component } from 'react'
import EventComponentChild from './EventChild'

class EventComponant extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : { contenu : "message initial"}
        }
    }

    cahngeInput = (e) => {
        console.log(e.target.value)
    }


    render(){
        return (
            <>
            <input type="text" name ="nameInput" onChange={this.cahngeInput} placeholder='Taper du texte ici'></input>
            <h2>Composant parent : {this.state.message.contenu}</h2>
            <EventComponentChild message={this.state.message}></EventComponentChild>
            </>
        )
    }
}

export default EventComponant;