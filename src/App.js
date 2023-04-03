import "./App.css";
import { routes } from "./app/routes";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utilities/history";
import HandleUserAccess from "./HOCs/HandleUserAccess";
const maproutes = routes.map((item, index) => {
  return (
    <Route key={index} path={item.path} element={<item.Component />}>
      {item.childs &&
        item.childs.map((child, index) => {
          return (
            <Route
              key={index}
              path={child.path}
              element={<child.Component />}
            />
          );
        })}
    </Route>
  );
  // => <Route key="1" path="/" element=<Home />
});
function App() {
  return (
    <HistoryRouter history={history}>
      <HandleUserAccess>
        <Routes>{maproutes}</Routes>
      </HandleUserAccess>
    </HistoryRouter>
  );
}

export default App;
