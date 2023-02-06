import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import IPdisplayTest from './components/IPdisplayTest';
// import IPdisplay from './components/IPdisplay';
import Latency from './components/Latency';
import ProgressBar from './components/ProgressBar';

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
          {sampleData}
        </Card>
        <Card title="Big Component">
            <div className='box-container'>
              <IPdisplayTest />
              <IPdisplayTest ipv6={true}/>
            </div>
            <ProgressBar label='data' value={30} percent={30} unit='%'/>
            <ProgressBar label='data' value={45} percent={45} unit='%'/>
            <ProgressBar label='data' value={60} percent={60} unit='%'/>
            <ProgressBar label='data' value={22} percent={22} unit='%'/>
            <ProgressBar label='data' value={43} percent={43} unit='%'/>
        </Card>
      </Exhibit>
    </div>
  );
}

export default App;
