import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
      <input value={hours} type="number" placeholder="Hours" />
    </>
  );
}

export default App;
