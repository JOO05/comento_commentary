import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";

const Home = lazy(() => import("./pages/Home"));
const Skill = lazy(() => import("./pages/Skill"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Suspense fallback={<div>Page Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}