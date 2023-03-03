import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <h1>React Training</h1>
      <div>
        <h2>Iteration 1 | Component: IdCard</h2>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={'1992-07-14'}
          picture={'https://randomuser.me/api/portraits/men/44.jpg'}
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={'1988-05-11'}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h2>Iteration 2 | Component: Greetings</h2>
        <Greetings />
      </div>
    </div>
  );
}

export default App;
