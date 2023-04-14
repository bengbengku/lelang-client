import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import { appStyles } from "./styles/appStyles";
import DashboardLelang from "./pages/dashboardLelang";

function App() {
  const { classes } = appStyles();
  return (
    <main className={classes.app}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/lelang" element={<DashboardLelang />} />
        <Route path="/dashboard/lelang/:isCreate" element={<DashboardLelang />} />
      </Routes>
    </main>
  );
}

export default App;
