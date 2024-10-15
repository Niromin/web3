import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);

  function clickGood(){
    setGood(good +1);
    setTotal(total +1);
  }

  function clickNeutral(){
    setNeutral(neutral +1);
    setTotal(total +1);
  }

  function clickBad(){
    setBad(bad +1);
    setTotal(total +1);
  }

  return (
    <div>
      <h2>give feedback</h2>

      <ClickCounter handler={clickGood} message={"good"}/>
      <ClickCounter handler={clickNeutral} message={"neutral"}/>
      <ClickCounter handler={clickBad} message={"bad"}/>

      <Statistic good={good} neutral={neutral} bad={bad} total={total} />

    </div>
  )
}

const ClickCounter = ({ handler, message }) => {

    return (
        <div>
        <button onClick={handler}>
            {message}
        </button>

        </div>
    );
};

const Statistic = ({ good, neutral, bad, total }) => {
    if (total < 1) return <p>No feedback given</p>;
    
    return (
        <div>
        <h2>statistics</h2>
        <table>
            <tr><StatisticLine value={good} message={"good"} /></tr>
            <tr><StatisticLine value={neutral} message={"neutral"} /></tr>
            <tr><StatisticLine value={bad} message={"bad"} /></tr>
            <tr><StatisticLine value={total} message={"total"} /></tr>
            <tr><StatisticLine value={(good - bad) / total} message={"average"} /></tr>
            <tr><StatisticLine value={(100/total)*good} message={"positif"} /></tr>
        </table>

        </div>
    );
};

const StatisticLine = ({ value, message }) => {

    return (
        <p>{message}:{value}</p>
    );
};



export default App