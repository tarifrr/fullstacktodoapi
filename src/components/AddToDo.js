import React from 'react';
import {Grid,Row,Col,Button,FormControl} from 'react-bootstrap';



const AddToDo = ({onClick}) => {
    return (
      <Grid>
       <Row className="showGrid">
        <Col smOffset={4} sm={4} mdOffset={4} md={4}>

          <input type="text" placeholder="Enter Todo" />

          <Button type="submit" bsStyle="primary" bsSize="small" active="true" onClick={onClick}>Add Todo Item</Button>

            </Col>
            </Row>
          </Grid>
    )

}

export default AddToDo;
