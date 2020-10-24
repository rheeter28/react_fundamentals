import React  from 'react';

import { Card, CardText, CardBody, CardTitle, Button,CardSubtitle, Row, Col,} from 'reactstrap';

const FunctionalComponentDemo = () => {
  
  return(
    <div className="main">
      <div className="mainDiv">
        <div>
        <h1>Functional Component</h1>
        <p>Functional Components are the primary tool in React to build a small, modular piece of your page</p>
      </div>
      <div>
        <dl>
          <dt>Can use state</dt>
          <dd>With the "useState" hook, functional components can now both render a display to the page and update the information to be shown</dd>
          <dt>No 'this' keyword</dt>
          <dd>Older class components use 'this', functional components have no 'this' object</dd>
          <dt>Can use Effects</dt>
          <dd>With the 'useEffect' hook, functional components can perfrom side effect with any props or state changes.</dd>
          <dt>return()</dt>
          <dd>Must retrun single element, but this element may have nested elements inside.</dd>
        </dl>
        <h1>Functional Syntax versus Arrow Function</h1>

        <hr />
        <h1>Challenge</h1>
        <Row>
          <Col md='6'>
            <HelloWorldFatArrow className='logo' />
          </Col>
          <Col md='6'>
            <HelloWorld />
          </Col>
        </Row>

      </div>
    </div>
  </div>
  );
};





export default FunctionalComponentDemo;

const HelloWorld = function () {
  return (
    <div>
      <Card>
        <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
        <CardBody>
        <CardTitle>Regual Ole Function</CardTitle>
        <CardSubtitle>A SJ Library</CardSubtitle>
        <CardText><pre>const HelloWorld = function()</pre>.</CardText>
        <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  )
};

//Fat Arrow Functinoal Comonent - 3 fewer lines, Common in react...
const HelloWorldFatArrow = () =>
<div>
  <Card>
    <img width="100%" height="280" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" ald="Card cap" />
    <CardBody>
      <CardTitle>Fat Arrow</CardTitle>
      <CardSubtitle>A JS Library</CardSubtitle>
      <CardText><pre> const HelloWorld = () => </pre>.</CardText>
      <Button>Go somewhere man</Button>
    </CardBody>
  </Card>
</div>

