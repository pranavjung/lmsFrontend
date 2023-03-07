import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
// ListGroupItemHeading, ListGroupItemText 

export default function Notice() {
    return (
        <>
            <ListGroup>
                <ListGroupItem>
                    <a href='/#'>TEXT</a><br />
                    <a href='/#'>TEXT2</a><br />
                    <a href='/#'>TEXT3</a><br />
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
