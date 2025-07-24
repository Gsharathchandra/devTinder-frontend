import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";       // ✅ You must import these
import Profile from "./components/Profile";   // ✅ You must import these
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed/>}/>
          <Route path="login" element={<Login />} />
          <Route path="profile/view" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
