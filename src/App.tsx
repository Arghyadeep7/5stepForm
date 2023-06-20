import { Routes, Route, Navigate } from "react-router-dom";

import { useAppSelector } from "./store/Hook";

import Login from "./components/Login";
import Forgot from "./components/Forgot";
import MultiStep from "./components/MultiStep/MultiStep";
import Submitted from "./components/MultiStep/Submitted";

function App() {

  const loggedIn = useAppSelector(state => state.profile.loggedIn);
  
  return (
    <Routes>
      <Route path="/" element={
        !loggedIn? <Login /> : <Navigate replace to="/multistep" /> }
      />
      <Route path="/multistep" element={
        loggedIn? <MultiStep /> : <Navigate replace to="/" /> }
      /> 
      <Route path="/forgot" element={
        !loggedIn? <Forgot /> : <Navigate replace to="/multistep" /> }
      />
      <Route path="/submitted" element={
        loggedIn? <Submitted /> : <Navigate replace to="/" /> } 
      />
      <Route path="*" element={
        loggedIn? <Navigate replace to="/" /> : <Navigate replace to="/multistep" /> } 
      />
    </Routes>
  );
}

export default App;
