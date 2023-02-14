import { Component } from "react"

export class Componentlife extends Component {
    constructor(props){
        super(props)
        console.log("1- first step - construction")
        this.state = {
            status : true
        }
    }

    changeState(){
        this.setState((state) => {
            return {status : !state.status}
        })
    }

    render() {
        console.log("2- Second step - render")
        return(
            <div>
                <h1>Rendu</h1>
                <button onClick={() => this.changeState()}>change status</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("3 -- 3th Step - end mouting")
    }

    componentDidUpdate(){
        console.log("4- 4th step - end of update")
    }

    componentWillUnmount(){
        console.log("5- 5th step - before unmount of component")
    }
}