import { Link, Outlet, Route, Routes } from "react-router-dom";
import photoPath from "./photo.avif";

function Home() {
    return (
        <>
            <img src="src/photo.avif" alt="" />
            Home
            <img src={photoPath} alt="" />
        </>
    );
}
function Test() {
    return (
        <>
            <img src="src/photo.avif" alt="" />
            Test
            <img src={photoPath} alt="" />
        </>
    );
}

function SharedComponent() {
    return (
        <div>
            <Link to={"/"}>Go to /home123</Link>
            <Link to={"/test"}>Go to /test</Link>
            <Outlet />
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route element={<SharedComponent />}>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Route>
        </Routes>
    );
}

