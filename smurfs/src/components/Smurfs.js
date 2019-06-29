import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf, updateSmurf, changeUpdate } from '../actions'
// import DeleteFriend from './DeleteFriend'
// import UpdateFriend from './UpdateFriend'
// import AddFriend from './AddFriend'
// import PrivateRoute from './PrivateRoute'

// import Loader from 'react-loader-spinner'

import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap'



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

    handleUpdateSubmit = () => {
        this.props.updateSmurf(this.state.newSmurf)
    }

    changeUpdate = (event, smurf) => {
        this.setState({newSmurf: smurf})
        this.props.updateSmurf(smurf)

    }

  
    render() {
        if (this.props.updatingSmurf) {return(
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
            <Button color="warning" onClick={this.handleUpdateSubmit}>Update Smurf</Button>

            </FormGroup>
        </Form>
            )   
        }
    return(
        <div >
                <h1>{this.props.smurfs.map((smurf, key) => {
                    return(
                    <h4 key={key}>
                        {smurf.name}
                        <Badge onClick={(event) => this.changeUpdate(event, smurf)} color="secondary" size="sm">update</Badge>
                    </h4>
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
        updatingSmurf: state.updatingSmurf,
    }
}

export default connect(mapState, {getSmurfs, addSmurf, updateSmurf, changeUpdate})(Smurfs)
