import React, {/* Fragment */ } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Input, Label, Table, CardHeader, /*CardSubtitle, CardTitle, CardText, CardFooter, Container*/ } from "reactstrap";
import Navbar from './Navbar';


export function UpdateProfile(emailID, password, name, designation, contactNo, address, dob, gender, bloodGroup, ccatRollNo, studentPrn) {
    return (
        <Form>
            <FormGroup>
                <Label for="Name">Name: </Label>
                <Input type="text" name="name" id="Name" value={name} />
            </FormGroup>
            <FormGroup>
                <Label for="Email">Email Id: </Label>
                <Input type="email" name="emailId" id="Email" value={emailID} />
            </FormGroup>
            <FormGroup>
                <Label for="pwd">Password: </Label>
                <Input type="password" name="password" id="pwd" value={password} />
            </FormGroup>
            <FormGroup>
                <Label for="contact">Email: </Label>
                <Input type="text" name="contactNo" id="contact" value={contactNo} />
            </FormGroup>
            <FormGroup>
                <Label for="address">Address: </Label>
                <Input type="text" name="addr" id="address" value={address} />
            </FormGroup>
            <FormGroup>
                <Label for="dob">Date of Birth: </Label>
                <Input type="text" name="dob" id="dob" value={dob} />
            </FormGroup>
            <FormGroup>
                <Label for="gender">Gender: </Label>
                <Input type="text" name="gender" id="gender" value={gender} />
            </FormGroup>
            <FormGroup>
                <Label for="bloodgrp">Blood Group: </Label>
                <Input type="text" name="bloodgrp" id="bloodgrp" value={bloodGroup} />
            </FormGroup>

            if(designation == Student){
                updateStudent(ccatRollNo, studentPrn) //Needs correction
            }
        </Form>
    );
}

export default function Profile(user) {
    return (
        <>
        <Navbar />
            <Card className='text-center'>
                <CardHeader>Profile</CardHeader>
                <CardBody>
                    <div>
                        <Table striped border hover variant="dark">
                            <tr>
                                <th>Name:</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th>EmailId:</th>
                                <td>{user.emailID}</td>
                            </tr>
                            <tr>
                                <th>Password:</th>
                                <td><Button color="primary">Update Password</Button></td>
                            </tr>
                            <tr>
                                <th>Designation:</th>
                                <td>{user.designation}</td>
                            </tr>
                            <tr>
                                <th>Contact No.:</th>
                                <td>{user.contactNo}</td>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <th>Date of Birth:</th>
                                <td>{user.dob}</td>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <th>Blood Group:</th>
                                <td>{user.bloodGroup}</td>
                            </tr>
                        </Table>
                    </div>
                    {/* <CardTitle>Profile</CardTitle>
                        <CardText>Name: {user.name}</CardText>
                        <CardText>emailId: {user.emailID}</CardText>
                        <CardText>password: <Button>Update Password</Button> </CardText>
                        <CardText>Designation: {user.designation}</CardText>
                        <CardText>Contact No.: {user.contactNo}</CardText>
                        <CardText>Address: {user.address}</CardText>
                        <CardText>Date of Birth: {user.dob}</CardText>
                        <CardText>Gender: {user.gender}</CardText>
                        <CardText>Blood Group: {user.bloodGroup}</CardText> */}
                </CardBody>
            </Card>
        </>
    )
}

const updateStudent = (ccatRollNo, studentPrn) => {
    return (
        <>
            <FormGroup>
                <Label for="ccatNo"></Label>
                <Input type="text" name="ccatNo" id="ccatNo" value={ccatRollNo} />
            </FormGroup>
            <FormGroup>
                <Label for="prn"></Label>
                <Input type="text" name="prn" id="prn" value={studentPrn} />
            </FormGroup>
        </>
    );
}