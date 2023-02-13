import { Component } from "react"

export class Componentlife extends Component {
    constructor(props){
        super(props)
        console.log("1- first step -construction")
        this.state = {
            status : true
        }
    }

    render() {
        console.log("2- Second step render")
        return(
            <div>
                <h1>Rendu</h1>
                <button onClick={() => this.setState({status : false})}>change status</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("3- third Step end mounting")
    }

    componentDidUpdate(){
        console.log("4 - end of update")
    }

    componentWillUnmount(){
        console.log("before unmount of componnent")
    }
}