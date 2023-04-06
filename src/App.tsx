import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { appStyles } from "./styles/appStyles";

function App() {
  const { classes } = appStyles();
  return (
    <main className={classes.app}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
