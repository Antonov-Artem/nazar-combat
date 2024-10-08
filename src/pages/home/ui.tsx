import { useState } from 'react';

export const Home = () => {
  const [coins, setCoins] = useState(0);

  const onClick = () => setCoins(coins + 1);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-16 bg-neutral-800">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-yellow-200 bg-yellow-400 text-2xl font-bold leading-none text-yellow-200 select-none">
          $
        </div>
        <div className="text-3xl font-medium text-white select-none">
          {new Intl.NumberFormat().format(coins)}
        </div>
      </div>
      <div
        className="w-64 h-64 p-4 rounded-full bg-indigo-500 active:scale-95 transition"
        onClick={onClick}
      >
        <div
          className="w-full h-full p-4 rounded-full"
          style={{ background: 'radial-gradient(#312e81 25%, #262626 80%)' }}
        >
          <img src="/eagle.png" className="select-none" />
        </div>
      </div>
    </div>
  );
};
