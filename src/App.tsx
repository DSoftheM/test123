import { Route, Routes } from "react-router-dom";
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

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}

