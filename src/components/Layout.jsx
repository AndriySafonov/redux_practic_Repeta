//-----counter-------
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/myValue/slice';

// export const Layout = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(state => state.myValue);
//   console.log(value);

//   return (
//     <div>
//       {value}
//       <button onClick={() => dispatch(increment(100))}>Increment</button>
//       <button onClick={() => dispatch(decrement(50))}>Decrement</button>
//     </div>
//   );
// };

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar/>
      <Outlet />
    </div>
  );
};
