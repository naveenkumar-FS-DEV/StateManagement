import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./Utils/CounterSlice";

const App = () => {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

  const handleIncrement = ()=>{
      dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  } 
  const handleReset = ()=>{
    dispatch(reset())
  }

  return (
    <div>
      <section>
        <h3>{count}</h3>
        <div id="btns">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </section>
    </div>
  )
}

export default App
