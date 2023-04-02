import "./App.css";
import { adminRoutes, routes } from "./app/routes";
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
const mapAdminRoutes = adminRoutes.map(
  ({ path, component: Component, children }) => {
    return (
      <Route path={path} element={<Component />} key={path}>
        {children?.map(
          ({ path, component: ChildComponent, children1: GrandChildren }) => {
            return (
              <Route path={path} element={<ChildComponent />} key={path}>
                {GrandChildren?.map(
                  ({ path, component: GrandChildComponent }) => {
                    return (
                      <Route
                        key={path}
                        path={path}
                        element={<GrandChildComponent />}
                      />
                    );
                  }
                )}
              </Route>
            );
          }
        )}
      </Route>
    );
  }
);
function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        {maproutes}
        {mapAdminRoutes}
      </Routes>
    </HistoryRouter>
  );
}

export default App;
