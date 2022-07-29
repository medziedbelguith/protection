import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import {  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import AlertProtection from './components/AlertProtection';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [user,setUser]=useState(null)
  const login=() => setUser({name:"hichem",role:"admin"})
  const logout=() => setUser(null);
  return (
   <>
   <h1>React Router</h1>
   
     { !user ? (<button onClick={login}>se connecter </button>) : (<button onClick={logout}>se deconnecter</button>)}
   
   <Router>
   <Navigation/>
   <Routes>
  <Route path="/home" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>}/>
  <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>}/>
  <Route path="/admin" element={<ProtectedRoute user={user && user.role=="admin"}><Admin/></ProtectedRoute>}/>
  <Route path="/not_connected" element={<AlertProtection/>}/>
  <Route path="/*" element={<p>There's nothing  here: 404  </p>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
