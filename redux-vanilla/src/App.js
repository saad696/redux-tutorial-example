import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, loggedIn } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>USING VANILLA REDUX</h1> <br />
      {/* counter logic */}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>-</button>
      {/* <button onClick={() => dispatch(incrementByAmount(5))} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>INCREMENT BY 5</button> */}
      <br/><br/>

      {/* sign up logic */}
      <h1>User Auth</h1>
      <button onClick={() => dispatch(loggedIn())}>{isLogged ? 'Logout' : 'login'}</button>
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
