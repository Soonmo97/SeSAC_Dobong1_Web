import { Component } from 'react';

class MyComponent extends Component {
  // 마운트(Mount) 되었을 때
  componentDidMount() {
    console.log('class component, mount됨!!');
  }

  // 업데이트(Update) 되었을 떄
  componentDidUpdate() {
    console.log('class component, update됨!!');
  }

  // 언마운트(Unmount) 예정일 때
  componentDidUnmount() {
    console.log('class component, unmount됨!!');
  }

  render() {
    return <p>My Component {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisableState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisableState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
