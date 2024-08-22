import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="">
        <Layout>
          <Dashboard />
        </Layout>
    </div>
  );
}

export default App;
