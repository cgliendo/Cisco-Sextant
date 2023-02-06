import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import IPdisplayTest from './components/IPdisplayTest';
// import IPdisplay from './components/IPdisplay';
import Latency from './components/Latency';

function App() {
  
  const sampleData = (<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
  </p>);

  return (
    <div className="App">
      <Banner title={document.title}/>
      {/* {pageButtons} */}
      <Exhibit className='exhibit' /*title={pageTitle}*/>
        <Card title="Network">
            <IPdisplayTest />
            <IPdisplayTest ipv6={true}/>
            {/* <IPdisplay /> */}
            {/* <IPdisplay ipv6={true}/> */}
            <Latency/>
        </Card>
        <Card title="Component 2">
          {sampleData}
        </Card>
        <Card title="Component 3">
          {sampleData}
        </Card>
        <Card style={{height:'400px'}}title="Big Component">
          {sampleData}
        </Card>
      </Exhibit>
    </div>
  );
}

export default App;
