/* 
React provides the React.lazy() function to dynamically import components only when they are required.
Lazy loading is a technique that defers the loading of non-critical resources until they are needed. 
This helps reduce initial load time, improve performance, and enhance user experience.

In React, lazy loading is primarily used to dynamically load components using React.lazy and Suspense.

*/

import React, { lazy, Suspense } from "react";

// Lazy load components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Home />
      <About />
    </Suspense>
  );
}

export default App;

//  Lazy Loading with React Router

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomeS = lazy(() => import("./Home"));
const AboutS = lazy(() => import("./About"));

function AppS() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<HomeS />} />
          <Route path="/about" element={<AboutS />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppS;

// Lazy Loading Images

<img src="large-image.jpg" loading="lazy" alt="Large Image" />
