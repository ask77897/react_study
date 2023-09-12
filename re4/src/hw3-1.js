import React, { useState } from 'react';

function Lottery() {
  const [mode, setMode] = useState('auto'); // 초기 모드는 '자동'
  const [manualNumbers, setManualNumbers] = useState(['', '', '', '', '', '']);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 45) + 1;
  };

  const generateAutoNumbers = () => {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 6) {
      const randomNumber = generateRandomNumber();
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleManualNumberChange = (index, value) => {
    const newManualNumbers = [...manualNumbers];
    newManualNumbers[index] = value;
    setManualNumbers(newManualNumbers);
  };

  const generateNumbers = () => {
    if (mode === 'auto') {
      const autoNumbers = generateAutoNumbers();
      setManualNumbers(autoNumbers.map(String));
    }
  };

  return (
    <div className="App">
      <h1>로또 번호 생성기</h1>
      <div>
        <label>
          <input
            type="radio"
            value="auto"
            checked={mode === 'auto'}
            onChange={handleModeChange}
          />
          자동 생성
        </label>
        <label>
          <input
            type="radio"
            value="manual"
            checked={mode === 'manual'}
            onChange={handleModeChange}
          />
          수동 입력
        </label>
      </div>
      {mode === 'manual' && (
        <div>
          <h2>수동으로 번호 입력:</h2>
          <ul>
            {manualNumbers.map((number, index) => (
              <li key={index}>
                <input
                  type="number"
                  min="1"
                  max="45"
                  value={number}
                  onChange={(e) =>
                    handleManualNumberChange(index, e.target.value)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={generateNumbers}>번호 생성</button>
      <h2>생성된 번호:</h2>
      <ul>
        {manualNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lottery;