import React from "react";
import HomeBanner from "./components/HomeBanner";
import "./App.scss";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <HomeBanner />
              </React.Fragment>
            }
          />

          <Route
            path="/login"
            element={
              <React.Fragment>
                <Header />
                <Login page={true} />
              </React.Fragment>
            }
          />

          <Route
            path="/register"
            element={
              <React.Fragment>
                <Header />
                <Login page={false} />
              </React.Fragment>
            }
          />

          <Route
            path="dashboard"
            element={
              <React.Fragment>
                <Header />
                <Banner />
                <List title="Netflix Original" param="orignals" />
                <List title="Trending Now" param="trending_now" />
                <List title="Now Playing" param="now_playing" />
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <List title="Upcoming Original" param="upcoming" />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
