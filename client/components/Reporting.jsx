import React from 'react';
import Map from './Maps.jsx';
class Reporting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}

    // this.updatingName = this.updatingName.bind(this);
    // this.updatingDescription = this.updatingDescription.bind(this);
    // this.submitInfo = this.submitInfo.bind(this);
    // this.menuChange = this.menuChange.bind(this);
  }


  // updatingName(e) {
  //   this.setState ({name: e.target.value})
  // }
  // updatingDescription(e) {
  //   this.setState ({description: e.target.value})
  // }
  //
  // submitInfo(e){
  //   console.log(this.state.issue + " " + this.state.name + " and " + this.state.description);
  // }
  // menuChange(e) {
  //   this.setState({issue: e.target.value});
  // }
  render() {
    return (
      <div>
        <select onChange={this.props.menu}>
          <option value="default">Choose an issue</option>
          <option value="trash">Trash Pickup</option>
          <option value="road">Roadwork</option>
          <option value="traffic">Traffic Light</option>
        </select>
        <input type="text" onChange={this.props.name} placeholder='Enter your Name' />
        <input type="text" onChange={this.props.description} placeholder="Enter a description" />
        <button onClick={this.props.submit} type='submit'>Submit</button>
      </div>
    )
  }
}

export default Reporting;
