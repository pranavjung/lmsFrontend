import React from 'react'
// import Session from './Session'
import { Table } from 'reactstrap'

export default function Sessions() {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Timing</th>
                    <th>SessionName</th>
                    <th>Faculty Name</th>
                </tr>
                {/* <Session
                    sessionName="WPT"
                    timeStart="10AM"
                    timeEnd="12PM"
                    date="07-03-2023"
                    facultyName="Harshita"
                /> */}
            </thead>
        </Table>
    )
}