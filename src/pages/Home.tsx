import { useState } from 'react';
import { Button, Image } from '@mantine/core';

import reactLogo from '../assets/react.svg';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <a href="https://vitejs.dev">
          <Image radius="md" src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org">
          <Image radius="md" src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex flex-col">
        <Button type="button" onClick={() => setCount(prev => prev + 1)}>
          Count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default Home;
