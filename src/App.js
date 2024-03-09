import './App.css';
import Filter from './filter/filter';
import CardLibrary from './library/card-library';
import TopNavigation from './navigation/top-navigation';

function App() {
  return (
    <div className="root">
      <TopNavigation />
      <Filter />
      <CardLibrary />
    </div>
  );
}

export default App;
