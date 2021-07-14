import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterReducer';
import { sign_in } from './redux/isLoggedReducer';
import { getUsers } from './redux/fetchReducer'
import { useEffect } from 'react';


function App() {
  const { count } = useSelector(state => state.counter);
  const { isLogged } = useSelector(state => state.isLogged);
  const { users } = useSelector(state => state.users);
  const { status } = useSelector(state => state.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">
      <h1>USING REDUX TOOLKIT</h1> <br />
      {/* counter logic */}
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))} style={{margin: '2rem', padding: '.5rem 2.5rem', fontSize: '30px'}}>INCREMENT BY 5</button>
      <br/><br/> <hr />

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
     <br/><br/> <hr />

     {/* sign up logic */}
     <h1>Users async data (using Redux Thunk)</h1>
     <div style={{display: 'flex', justifyContent: 'center'}}>
     <table >
       <tr>
         <th>Name</th>
         <th>Username</th>  
         <th>Email</th>  
         <th>Phone</th>  
       </tr>     
        {status === 'Loading' ? <div>loading</div> 
        : users.map(user => (
          <tr key={user.id}>
            <td key={user.id}>{user.name}</td>
            <td key={user.id}>{user.username}</td>
            <td key={user.id}>{user.email}</td>
            <td key={user.id}>{user.phone}</td>
        </tr>
            ))}
     </table>
     </div>
     <br/><br/> <hr />
    </div>
  );
}

export default App;
