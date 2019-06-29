import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'
// import DeleteFriend from './DeleteFriend'
// import UpdateFriend from './UpdateFriend'
// import AddFriend from './AddFriend'
// import PrivateRoute from './PrivateRoute'

// import Loader from 'react-loader-spinner'

import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'



// import { BrowserRouter as Route } from "react-router-dom";



class Smurfs extends React.Component {
    constructor() {
      super();
      this.state = {
          newSmurf: {
              name: '',
              age: null,
              height: '',
          }
      }
    }
  
    componentDidMount() {
      this.props.getSmurfs()
    }
    handleChange = event => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = () => {
        this.props.addSmurf(this.state.newSmurf)
    }

  
    render() {
        // if (this.props.isFetchingData) {return(
        //     <Loader type="ThreeDots" color="red" height={80} width={80} />
        //     )   
        // }
    return(
        <div >
                <h1>{this.props.smurfs.map((smurf, key) => {
                    return(
                    <h4 key={key}>{smurf.name}</h4>
                    )
                })}</h1>
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">New Smurf Name</Label>
            <Input type="name" name="name" id="exampleEmail" placeholder="smurf name..." 
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">New Smurf Age</Label>
            <Input type="age" name="age" id="" placeholder="age..." 
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">New Smurf Height</Label>
            <Input type="height" name="height" id="" placeholder="height..." 
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}/>
                    <br></br>
            <Button color="warning" onClick={this.handleSubmit}>Add Smurf to Village</Button>

            </FormGroup>
        </Form>
        </div>
    )       
    }

}
const mapState = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapState, {getSmurfs, addSmurf})(Smurfs)
