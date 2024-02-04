import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const LoginPage = loadable(() => import("./pages/LoginPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} loader={LoginPage.load} />
    </Routes>
  );
};

export default App;
