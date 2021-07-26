import React, { Component } from 'react';
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
            <div style={{marginLeft:'25rem',marginTop:'5rem'}}>
                <Form onSubmit={this.handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="firstname" style={{marginBottom:'0.5rem'}} value={this.state.firstname} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter last Name" name="lastname" style={{marginBottom:'0.5rem'}} value={this.state.lastname} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" style={{marginBottom:'0.5rem'}} value={this.state.email} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number: </Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" name="phonenumber" style={{marginBottom:'0.5rem'}} value={this.state.phonenumber} onChange={this.handlechange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date of Birth: </Form.Label>
                        <Form.Control type="date" placeholder="Enter email" name="dateofbirth" style={{marginBottom:'0.5rem'}} value={this.state.dateofbirth} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Home Address: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" name="address" style={{marginBottom:'0.5rem'}} value={this.state.address} onChange={this.handlechange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job Role: </Form.Label>
                        <Form.Control type="text" placeholder="Password" name="jobrole" style={{marginBottom:'0.5rem'}}  value={this.state.jobrole} onChange={this.handlechange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary: </Form.Label>
                        <Form.Control type="number" placeholder="Enter Salary" name="salary" style={{marginBottom:'0.5rem'}} value={this.state.salary} onChange={this.handlechange} />
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
