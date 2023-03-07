import React from 'react'

export default function Session(sessionName, timeStart, timeEnd, date, facultyName) {
    return (
        <tr>
            <td>{date}</td>
            <td>{timeStart} to {timeEnd} </td>
            <td>{sessionName}</td>
            <td>{facultyName}</td>
        </tr>
    )
}
