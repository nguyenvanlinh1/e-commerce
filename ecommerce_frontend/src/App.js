//import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./custommer/components/Routers/CustomerRouters";
import AdminRouters from "./custommer/components/Routers/AdminRouters";

function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/admin/*" element={<AdminRouters />} />

          <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
