import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
function App() {

  // class Widget {
  //   title: "thing"
  // };

  const widgets = [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" },
    { title: "Card 5" },
    { title: "Card 6" },
    { title: "Card 7" },
  ]

  const renderWidgets = widgets.map((w)=>{
    return (
      <Card title={w.title}></Card>
    )
  });

  return (
    <div className="App">
      <Banner title={document.title}/>
      <Exhibit>
        {renderWidgets}
      </Exhibit>
    </div>
  );
}

export default App;
