import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'

class AddEmp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            dateofbirth: "",
            address: "",
            jobrole: "",
            salary: "",
        }
    }
    handlechange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        this.props.newemp(this.state)
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            dateofbirth: "",
            address: "",
            jobrole: "",
            salary: "", 
        })
    }
    render() {
        return (
            <div style={{marginLeft:'15rem',marginTop:'2rem',marginRight:'15rem'}}>
                <Form onSubmit={this.handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="firstname"  value={this.state.firstname} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter last Name" name="lastname"  value={this.state.lastname} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"  value={this.state.email} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number: </Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" name="phonenumber" style={{marginBottom:'0.5rem'}} value={this.state.phonenumber} onChange={this.handlechange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date of Birth: </Form.Label>
                        <Form.Control type="date" placeholder="Enter email" name="dateofbirth"  value={this.state.dateofbirth} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Home Address: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" name="address"  value={this.state.address} onChange={this.handlechange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job Role: </Form.Label>
                        <Form.Control type="text" placeholder="Password" name="jobrole"   value={this.state.jobrole} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary: </Form.Label>
                        <Form.Control type="number" placeholder="Enter Salary" name="salary"  value={this.state.salary} onChange={this.handlechange} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddEmp;
