import { Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;