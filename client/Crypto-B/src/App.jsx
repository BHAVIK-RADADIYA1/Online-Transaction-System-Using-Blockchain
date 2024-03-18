import { Route, Routes } from "react-router-dom";
import { Coins, Hero, CoinDetails } from "./components";
import { Exchanges } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Hero />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/coins/:id" element={<CoinDetails />} />
      <Route path="/coins" element={<Coins />} />
    </Routes>
  );
}

export default App;
