import React from 'react';  
import { Card } from 'antd';  
import './App.css';  

const { Meta } = Card;  

const App: React.FC = () => (  
  <div className="card-container">  
    <Card  
      hoverable  
      style={{ width: 240 }}  
      cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/SweetCoffee.jpg" />}  
    >  
      <Meta title="Sweet & Coffe EC" description="www.sweet&coffe.com" />  
    </Card>  
  </div>  
);  

export default App;