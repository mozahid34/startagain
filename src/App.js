import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Card, Col, Form, Row } from 'react-bootstrap';
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
  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news = {nw} ></News> )
    
        }
  
    
  
</Row>
    </div>
  );
}

export default App;
