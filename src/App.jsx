import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" Component={HomePage} />
                <Route exact path="/cv" Component={HomePage} />
            </Routes>
            
        </Router>
    );
    
}