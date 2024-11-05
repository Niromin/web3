import { useContext } from 'react'
import { Context as CountersContext } from '../contexts/CountersContext';



import './App.css'

function App() {
  return (
    <>
    <GoodButton/>
    <OkButton/>
    <BadButton/>
    <ResetButton/>
    </>
  )
}

const GoodButton = () => {
  const { good, increaseGood } = useContext(CountersContext )

  return (
      <div>
      <p>Good: {good}</p>
      <button onClick={increaseGood}>increase good</button>

      </div>
  );
};

const OkButton = () => {
  const { ok, increaseOk } = useContext(CountersContext )

  return (
      <div>
      <p>Ok: {ok}</p>
      <button onClick={increaseOk}>increase ok</button>

      </div>
  );
};

const BadButton = () => {
  const { bad, increaseBad } = useContext(CountersContext )

  return (
      <div>
      <p>Bad: {bad}</p>
      <button onClick={increaseBad}>increase bad</button>

      </div>
  );
};

const ResetButton = () => {
  const{ resetAll } = useContext(CountersContext)

  return (
      <div>
      <button onClick={resetAll}>Reset scores</button>

      </div>
  );
};
export default App
