import { useState } from "react";
import Fifth from "./components/Fifth";
import First from "./components/First";
import Forth from "./components/Forth";
import Second from "./components/Second";
import Sixth from "./components/Sixth";
import Third from "./components/Third";
import Seventh from "./components/Seventh";
import Eighth from "./components/Eighth";
import Ninth from "./components/Ninth";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      {count == 0 ? (
        <div>
          <p>Are piche kaha aa rhi ho aage jao</p>
          <button onClick={() => setCount(count + 1)}><i className='bx bxs-right-arrow' ></i></button>
        </div>
      ) : count == 1 ? (
        <First count={count} setCount={setCount} />
      ) : count == 2 ? (
        <Second count={count} setCount={setCount} />
      ) : count == 3 ? (
        <Third count={count} setCount={setCount} />
      ) : count == 4 ? (
        <Forth count={count} setCount={setCount} />
      ) : count == 5 ? (
        <Fifth count={count} setCount={setCount} />
      ) : count == 6 ? (
        <Sixth count={count} setCount={setCount} />
      ) : count == 7 ? (
        <Seventh count={count} setCount={setCount} />
      ) : count == 8 ? (
        <Eighth count={count} setCount={setCount} />
      ) : count == 9 ? (
        <Ninth count={count} setCount={setCount} />
      ) : (
        <div>Ooups ye kon sa page khul gya Sorry</div>
      )}
    </>
  );
}

export default App;
