import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './sidebar/Sidebar'; 
import Dashboard from './sidebar/Dashboard';
import RoleManagement from './sidebar/RoleManagement';
import Schedule from './sidebar/Schedule';
import Users from './sidebar/Users';
import Yardview from './sidebar/Yardview';
import Reports from './sidebar/Reports';
import Alarms from './sidebar/Alarms';
import CommunicationStatus from './sidebar/CommunicationStatus';
import Events from './sidebar/Events';
import Configuration from './sidebar/Configuration';
import Settings from './sidebar/Settings';
import Module from './sidebar/Module';
import Card from './cardcomponent/Card';
function App() {
    return (
        <BrowserRouter>
          
                <Routes>
                    {/* <Route path="/" element={<Dashboard />} />
                    <Route path="/yardview" element={<Yardview />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/rolemanagement" element={<RoleManagement />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/alarms" element={<Alarms />} />
                    <Route path="/communicationstatus" element={<CommunicationStatus />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/configuration" element={<Configuration />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/module" element={<Module />} /> */}
                     <Route path="/" element={<Card />} />
                </Routes>
           
        </BrowserRouter>
    );
}


export default App;
