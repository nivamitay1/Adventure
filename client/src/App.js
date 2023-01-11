import React from "react";
import { useDispatch } from "react-redux";
import Home from "./components/home/Home";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Results from "./components/results/Results";

const theme = createTheme({
  palette: {
    main: { main: "#91c4cf" },
  },
});

function App() {
  let dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Results />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
