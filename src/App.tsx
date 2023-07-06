import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { RootState } from "./redux/store"

function App() {
  const {count} = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-50 ">
          <button type="button" className="rounded-md bg-green-600 px-3 py-2" onClick={()=>dispatch(increment())}>Increment</button>
          <button type="button" className="rounded-md bg-yellow-600 px-3 py-2" onClick={()=>dispatch(incrementByAmount(5))}>Increment By Value</button>
          <div>{count}</div>
          <button type="button" className="rounded-md bg-red-600 px-3 py-2" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
  )
}

export default App
