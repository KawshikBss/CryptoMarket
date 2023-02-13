import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import routes from "./routes";
import Layout from "./layouts/Layout";
import { Suspense } from "react";

function App() {
    return (
        <>
            <Routes>
                {routes.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            path={item.path ? item.path : "/"}
                            element={
                                <Layout>
                                    <Suspense fallback={<h1>Loading...</h1>}>
                                        <item.component />
                                    </Suspense>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
