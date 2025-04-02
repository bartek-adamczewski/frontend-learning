import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RocketsList from "~/RocketsList";
import RocketDetailsPage from "~/RocketDetails";
import * as RoutesConstants from "@/constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesConstants.HOME} element={<Navigate to={RoutesConstants.ROCKETS} />} />
        <Route path={RoutesConstants.ROCKETS} element={<RocketsList />} />
        <Route path={RoutesConstants.ROCKETS_LIST} element={<RocketDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
