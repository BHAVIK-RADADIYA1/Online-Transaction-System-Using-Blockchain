import { Route, Routes } from "react-router-dom";
import { Coins, Hero, CoinDetails } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/coins:id" element={<CoinDetails />} />
      <Route path="/coins" element={<Coins />} />
    </Routes>
  );
}

export default App;
