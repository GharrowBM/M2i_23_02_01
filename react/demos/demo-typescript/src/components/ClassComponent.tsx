import { PureComponent } from "react";

interface ClassComponentProps {
  startValue: number;
}

interface ClassComponentState {
  name: string;
  age: number;
}

class ClassComponent extends PureComponent<ClassComponentProps, ClassComponentState> {
  constructor(props: ClassComponentProps) {
    super(props)
    this.state = {
      name: "Blabla",
      age: 15
    }
  }

  render () {
    return (
      <>
      <p>
        {this.state.name}
        {this.props.startValue}
      </p>
      </>
    )
  }
}

export default ClassComponent