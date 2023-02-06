import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import Button from './components/Button';
import IPdisplay from './components/IPdisplay';
import Latency from './components/Latency';


const pages = [
  //-------------
  {
    heading: "Summary page 1",
    content: [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" },
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

  // const pageTitle = pages[currentPage].heading;
  const samplePageData = pages[currentPage].content.map((d,index)=>{
    const k=`sampleCard${index}`;
    return (
      <Card style={{maxWidth:'290px'}} title={d.title} key={k}>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
        </p>
      </Card>
    )
  });

  const pageButtons = pages.map((p,index)=>{
    const k=`button${index}`;
    return (
      <Button key={k}>{p.heading}</Button>
    )
  });

  return (
    <div className="App">
      <Banner title={document.title}/>
      {/* {pageButtons} */}
      <Exhibit className='exhibit' /*title={pageTitle}*/>
        <Card title="IP Address">
            <IPdisplay/>
            <IPdisplay ipv6={true}/>
            <Latency/>
        </Card>
        {samplePageData}
      </Exhibit>
    </div>
  );
}

export default App;
