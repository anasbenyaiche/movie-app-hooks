import React from "react";
import MoviePage from "./Pages/MoviePage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UpdateMovie from "./components/UpdateMovie";
export default function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie" component={MoviePage} />
      <Route exact path="/movies/:id" component={UpdateMovie} />
    </div>
  );
}
