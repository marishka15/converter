import { useState } from 'react';
import type { ChangeEvent } from 'react';
import './App.css';

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function App() {
  const [hex, setHex] = useState('#34495e');
  const [result, setResult] = useState('rgb(52, 73, 94)');
  const [isError, setIsError] = useState(false);
  const [background, setBackground] = useState('#34495e');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  setHex(value);

  if (value.length < 7) {
    setIsError(false);
    return;
  }

  const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(value);

  if (isValidHex && value.length === 7) {
    const rgb = hexToRgb(value);

    setBackground(value);
    setResult(rgb);
    setIsError(false);
  } else {
    setBackground('#e74c3c');
    setResult('Ошибка!');
    setIsError(true);
  }
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: background,
      }}
    >
      <div className="container">
        <input
          className="input-field"
          type="text"
          value={hex}
          onChange={handleChange}
        />

        <div className={`result ${isError ? 'error' : ''}`}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
