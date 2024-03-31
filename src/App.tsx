import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar";
import { sidebarLinks } from "./nav";

export default function App() {
    return (
        <Routes>
            <Route element={<Sidebar />}>
                {sidebarLinks.map((link, i) => {
                    return <Route key={i} path={link.url} element={link.element} />;
                })}
            </Route>
        </Routes>
    );
}

