import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf, updateSmurf, changeUpdate, deleteSmurf } from '../actions'
import './App.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import logo from '../logo.jpg'

import './App.css';
import { Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap'


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
        this.props.changeUpdate()

    }
    deleteSmurf = (event, smurf) => {
        this.props.deleteSmurf(smurf)

    }

  
    render() {
        if (this.props.updatingSmurf) {return(
            <Form className="newform" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Edit Smurf Name</Label>
            <Input type="name" name="name" id="exampleEmail" placeholder="smurf name..." 
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Edit Smurf Age</Label>
            <Input type="age" name="age" id="" placeholder="age..." 
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Edit Smurf Height</Label>
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
        <div className="smurfs" >
                {this.props.smurfs.map((smurf, key) => {
                    return(
                        <Card key={key} body inverse color="primary">
                            <img src={logo} />
                            <CardTitle>{`Name: ${smurf.name}`}</CardTitle>
                            <CardText>{`Age: ${smurf.age}`}</CardText>
                            <CardText>{`Height: ${smurf.height}`}</CardText>
                            <Button onClick={(event) => this.changeUpdate(event, smurf)} color="secondary" size="sm">Edit Smurf</Button>
                            <Button color="danger" onClick={(event) => this.deleteSmurf(event, smurf)} size="sm">Delete Smurf</Button>
                        </Card>
                    )
                })}
                <h4>Add a New Smurf to the Village:</h4>
        <Form className="newform" inline>
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

export default connect(mapState, {getSmurfs, addSmurf, updateSmurf, changeUpdate, deleteSmurf})(Smurfs)
