import { useState } from 'react';
import HandIcon from './HandIcon';
import Dice from './Dice';
import Button from './Button'

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecords] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    records.push(nextNum);
  }

  const handleClearClick = () => {
    setNum();
    setSum(0);
    setRecords([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{records.join(', ')}</p>
      </div>
    </div>
  )
}

export default App;
