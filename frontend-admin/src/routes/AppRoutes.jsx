import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddProperty from "../pages/AddProperty";
import PropertyList from "../pages/PropertyList";
import EditProperty from "../pages/EditProperty";
import Layout from "../layout/Layout";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<Layout />}>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/properties" element={<PropertyList />} />
                <Route path="/edit-property/:id" element={<EditProperty />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
