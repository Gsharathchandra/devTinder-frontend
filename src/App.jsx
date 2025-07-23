import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";


function App() {
  //hello
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/test" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
