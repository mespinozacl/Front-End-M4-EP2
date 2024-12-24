import DoctorList from './components/DoctorList';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';
import UserProfile from './components/UserProfile';
import UserProvider from './components/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
      <div className="app-container">
        <DoctorList />
        <ServiceList />
        <AppointmentForm />
        <UserProfile />
      </div>
      <div>

      </div>
      </UserProvider>
    </div>
  );
}

export default App;