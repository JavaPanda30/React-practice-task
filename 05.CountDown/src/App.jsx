import  { useState, useEffect } from 'react';
const App = () => {
  const [CurrHour, setHour] = useState(0);
  const [CurrMinute, setMinute] = useState(0);
  const [CurrSecond, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hour, minute, second } = e.target;

    const hoursValue = parseInt(hour.value, 10);
    const minutesValue = parseInt(minute.value, 10);
    const secondsValue = parseInt(second.value, 10);

    if (hoursValue >= 0 && minutesValue >= 0 && secondsValue >= 0) {
      setHour(hoursValue);
      setMinute(minutesValue);
      setSecond(secondsValue);
      setIsActive(true);
    } else {
      document.getElementById("errorval").textContent = "Enter Valid Time Frame";
    }
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (CurrSecond > 0) {
          setSecond(CurrSecond - 1);
        } else if (CurrMinute > 0 && CurrSecond === 0) {
          setSecond(59);
          setMinute(CurrMinute - 1);
        } else if (CurrHour > 0 && CurrMinute === 0 && CurrSecond === 0) {
          setSecond(59);
          setMinute(59);
          setHour(CurrHour - 1);
        } else {
          setIsActive(false);
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, CurrHour, CurrMinute, CurrSecond]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Enter Time to Start Countdown</h1>
        <input type="number" name="hour" placeholder="Enter Hours" />
        <input type="number" name="minute" placeholder="Enter Minutes" />
        <input type="number" name="second" placeholder="Enter Seconds" />
        <button type="submit">Start</button>
      </form>
      <p id="errorval"></p>
      <h1 className="clock">
        <span>{CurrHour.toString().padStart(2, '0')}</span>:
        <span>{CurrMinute.toString().padStart(2, '0')}</span>:
        <span>{CurrSecond.toString().padStart(2, '0')}</span>
      </h1>
    </div>
  );
};

export default App;
