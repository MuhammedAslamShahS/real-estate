import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import PropertyList from "./pages/PropertyList";
import EditProperty from "./pages/EditProperty";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/properties" element={<PropertyList />} />
                <Route path="/edit-property/:id" element={<EditProperty />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
