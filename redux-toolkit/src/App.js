import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterReducer';
import { sign_in } from './redux/isLoggedReducer';


function App() {
  const { count } = useSelector(state => state.counter);
  const { isLogged } = useSelector(state => state.isLogged);

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>USING REDUX TOOLKIT</h1> <br />
      {/* counter logic */}
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>INCREMENT BY 5</button>
      <br/><br/>

      {/* sign up logic */}
      <h1>User Auth</h1>
      <button onClick={() => dispatch(sign_in())}>{isLogged ? 'Logout' : 'login'}</button>
      {!isLogged ? 
      <div>
        <pre>Logged out</pre>
        <h3>Hidden information</h3>
      </div>
      : 
      <div>
        <pre>Logged in</pre>
        <h3>You are beautiful</h3>
      </div>
     }
    </div>
  );
}

export default App;
