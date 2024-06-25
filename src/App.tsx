import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { privateRoutes } from "./infrastructure/router";
import { PrivateRoute } from "./infrastructure/router/private-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {privateRoutes.map((page, index) => {
            if (page.private) {
              return (
                <Route
                  key={index}
                  path={page.path}
                  element={
                    <PrivateRoute component={<page.component />} />
                  } />
              )
            }
            else {
              return (
                <Route
                  key={index}
                  path={page.path}
                  element={
                    <page.component />
                  } />
              )
            }
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
