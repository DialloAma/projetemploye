import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import {FcEditImage, FcDeleteRow} from 'react-icons/fc'

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
                                <tr key={emp.id}>
                                    <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Body>
                                        <EditUser userdata={user} updateuse={update} closemodal={handleClose} />
                                    </Modal.Body>

                                </Modal>
                                    <td>{emp.firstname}</td>
                                    <td>{emp.lastname}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phonenumber}</td>
                                    <td>{emp.dateofbirth}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.jobrole}</td>
                                    <td>{emp.salary}</td>
                                    <td><FcEditImage/>  <FcDeleteRow  style={{color:'red', cursor:'pointer'}} onClick={()=>props.deletemp(emp.id)} /></td>
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
