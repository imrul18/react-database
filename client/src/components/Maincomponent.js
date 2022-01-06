import { Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import Home from "./home/Home";
import myStore from "../redux/store";
import { Provider } from "react-redux";

function MainComponent() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <Routes>
          <Route path="" exact element={<Registration />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default MainComponent;
