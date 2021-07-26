import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

const ListEmp = (props) => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Job Role</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.EmpData.map((emp) => {
                            return (
                                <tr>
                                    <td>{emp.firstname}</td>
                                    <td>{emp.lastname}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phonenumber}</td>
                                    <td>{emp.dateofbirth}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.jobrole}</td>
                                    <td>{emp.salary}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}

export default ListEmp;
