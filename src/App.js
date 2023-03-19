import "./App.css";
import { routes } from "./app/routes";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utilities/history";
const maproutes = routes.map((item, index) => {
  return <Route key={index} path={item.path} element={<item.Component />} />;
  // => <Route key="1" path="/" element=<Home />
});
function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>{maproutes}</Routes>
    </HistoryRouter>
  );
}

export default App;
