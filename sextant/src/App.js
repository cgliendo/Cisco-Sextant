import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import Button from './components/Button';


const pages = [
  //-------------
  {
    heading: "Summary page 1",
    content: [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" },
    { title: "Card 5" },
    { title: "Card 6" },
    { title: "Card 7" },
  ]},
  //-------------
  {
    heading: "Summary page 2",
    content: [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" }
  ]},
  //-------------
];

function App() {
  const [currentPage,setCurrentPage] = useState(0);

  const pageTitle = pages[currentPage].heading;
  const pageData = pages[currentPage].content.map((d)=>{
    return (
      <Card title={d.title}/>
    )
  });

  const pageButtons = pages.map((p)=>{
    return (
      <Button>{p.heading}</Button>
    )
  });

  return (
    <div className="App">
      <Banner title={document.title}/>
      {pageButtons}
      <Exhibit title={pageTitle}>
        {pageData}
      </Exhibit>
    </div>
  );
}

export default App;
