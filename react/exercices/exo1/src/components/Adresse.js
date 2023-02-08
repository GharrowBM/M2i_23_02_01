import { Component } from 'react';

export class Adresse extends Component{
    constructor(props){
        super(props)

    }

    render() {
        const {rue, ville, cp} = this.props.adresse
        return(
            <div>
                Rue : {rue}, Ville : {ville}, Code Postal : {cp}
            </div>
        )
    }


}