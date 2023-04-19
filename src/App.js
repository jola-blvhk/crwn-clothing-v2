import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => (
  <div>
    <h1>This is the shop</h1>
  </div>
);
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
