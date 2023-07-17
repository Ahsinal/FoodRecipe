
import './App.scss';
import Header from './component/Header';
import Recipelist from './component/Recipelist';
import Tabs from './component/Tabs';
function App() {
  return (
    <div className="main">
      <Header/>
      <Tabs/>
      {/* <Recipelist/> */}
    </div>
  );
}

export default App;
