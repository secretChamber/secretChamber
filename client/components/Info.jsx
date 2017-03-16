import React from 'react'
import {InfoWindow} from 'react-google-maps';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.saveData = this.saveData.bind(this);
  }
  saveData(e) {
    console.log('data saved', e);
  }
  render() {
    return (
    <div>
      <tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>
      <tr><td>Address:</td> <td><input type='text' id='address'/> </td> </tr>
      <tr><td>Type:</td> <td><select id='type'> +
                 <option value='trash' SELECTED>Trash</option>
                 <option value='roadwork'>Road Work</option>
                 <option value='traffic'>Traffic Sign</option>
                 </select> </td></tr>
                 <tr><td></td><td><input type='button' value='Save' onClick={this.saveData}/></td></tr>
    </div>
    )
  }
}

export default Info