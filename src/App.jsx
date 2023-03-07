import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import routes from "./routes/routes";


import { Fragment } from "react";
import CssBaseline  from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline/>
      <BrowserRouter>
        <div className="App">
            <Routes>
              {routes.map((route, index) => {
               let Page = route.component;
               let Layout = MainLayout;
  
               if(route.layout) {
                Layout = route.layout;
  
               } else if(route.layout === null) {
                  Layout = Fragment
               }
  
               return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                        <Page/>
                    </Layout>
                  }
                />
               )
              })}
            </Routes>
        </div>
      </BrowserRouter>

    </>
    );
}

export default App;
