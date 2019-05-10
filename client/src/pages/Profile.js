import React, { Component } from "react";

import Nav from "../components/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




class Profile extends Component{
    render(){
        return(
        <div>
            <Nav/>
            <div id="flex-container">
            <div id="flex">
            <Card style={{ width: '650px', height: '700px' }} id="card1">
 
  <Card.Body>
   

   
  </Card.Body>
</Card>
</div>
<div>
<Card style={{ width: '650px', height: '700px' }} id="card2">
<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/18/10/58/paw-163683_1280.jpg" id="paws" />
  <Card.Body>
    <Card.Title>Lets Find out some info to find your doggy play date match</Card.Title>
    
    <Card.Text>
   Large breed or small breed?
   <br/>
   <hr/>
   Does your pet get along with people?
   <br/> 
   <hr/>
   How old is your pet?
   <br/>
   <hr/>



    </Card.Text>
    <Card.Link href="#">Find me a Match</Card.Link>
    
  </Card.Body>
</Card>
</div>
</div>
        </div>
    
        )
    }

}


export default Profile;