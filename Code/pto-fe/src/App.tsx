import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
