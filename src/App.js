import logo from './logo.svg';
import './App.css';
import CounterApp from './components/Counter-App/CounterApp';
import ShortForm from './components/form/ShortForm';
import LongForm from './components/form/LongForm';
import CounterAppWithUseReducer from './components/Counter-App/CounterAppWithUseeReducer';

function App() {
  return (
    <div className="App">
      {/* <h1>Counter App With useReducer</h1> */}
      {/* <h1>SHORT FORM</h1> */}
      {/* <CounterApp /> */}
      {/* <h1>COUNTER APP WITH useReducer</h1> */}
      {/* <CounterAppWithUseReducer /> */}
      {/* <ShortForm /> */}
      <h1>Long Form</h1>

      <LongForm />
    </div>
  );
}

export default App;
