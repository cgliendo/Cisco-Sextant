import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import Button from './components/Button';
import IPdisplay from './components/IPdisplay';


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
  const samplePageData = pages[currentPage].content.map((d,index)=>{
    const k=`sampleCard${index}`;
    return (
      <Card title={d.title} key={k}>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
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
      {pageButtons}
      <Exhibit title={pageTitle}>
        <Card title="IP Address">
          <p>
            IPV4: <IPdisplay/><br/>
            IPV6: <IPdisplay ipv6={true}/>
          </p>
        </Card>
        {samplePageData}
      </Exhibit>
    </div>
  );
}

export default App;
