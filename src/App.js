import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Card, Col, Form, Offcanvas, Row, Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';


function App() {
   const [news, setNews] = useState([])
   useEffect(() => {
     fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=027161a93a4749838213e9e46d2c18c3')
      .then(res => res.json())
      .then(data => setNews(data.articles))
   },[])

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      
      
    


      {
        news.length === 0 ? 
        <div>
          <Spinner animation="grow" />
        </div>
      :
      <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news = {nw} ></News> )
    
        }
  
    
  
</Row>
}
    </div>
  );
}

export default App;
