import { Banner } from "./components/banner";
import { Numbercounter } from "./components/numbercounter";
import { useState } from "react";
function App() {
  const [count, numbercount] = useState(0);
  return (
    <div>
      <Banner />
      <Numbercounter count={count} numbercount={numbercount} />
    </div>
  );
}

export default App;
