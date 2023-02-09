import React, { Component } from 'react'

class EventComponentChild extends Component {
    constructor(props){
        super(props)
    }

    clickLink = (e) => {
        e.preventDefault()
        console.log("clique sur le lien")
    }

    render() {
        const {contenu} = this.props.message
        return(
            <div>
                <h2>Composant Enfant : {contenu}</h2>
                <a href="http://www.google.fr" onClick={this.clickLink}>Lien enfant</a>
            </div>
        )
    }

}

export default EventComponentChild;