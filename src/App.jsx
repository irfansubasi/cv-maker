import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import EditCVPage from "./components/EditCVPage";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/editcv" element={<EditCVPage />} />
            </Routes>
        </Router>
    );
    
}