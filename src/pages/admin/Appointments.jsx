import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Alice Brown', doctor: 'Dr. Smith', date: '2024-07-01', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patient: 'Bob Wilson', doctor: 'Dr. Johnson', date: '2024-07-02', time: '11:00 AM', status: 'Completed' },
    { id: 3, patient: 'Charlie Davis', doctor: 'Dr. Lee', date: '2024-07-03', time: '02:00 PM', status: 'Cancelled' },
    { id: 4, patient: 'Diana Evans', doctor: 'Dr. Brown', date: '2024-07-04', time: '03:00 PM', status: 'Scheduled' },
    { id: 5, patient: 'Ethan Harris', doctor: 'Dr. Wilson', date: '2024-07-05', time: '09:00 AM', status: 'Scheduled' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ patient: '', doctor: '', date: '', time: '', status: 'Scheduled' });



  useEffect(() => {
    const saved = localStorage.getItem('appointments');
    if (saved) setAppointments(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleAdd = () => {
    if (!formData.patient || !formData.doctor || !formData.date || !formData.time) return;
    const newAppointment = { ...formData, id: Date.now() };
    setAppointments([...appointments, newAppointment]);
    setFormData({ patient: '', doctor: '', date: '', time: '', status: 'Scheduled' });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Appointments Management</h2>
        <button onClick={() => setShowModal(true)} className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-700">
          <FiPlus />
          <span>Add Appointment</span>
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Patient</th>
              <th className="text-left p-4">Doctor</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{appointment.patient}</td>
                <td className="p-4">{appointment.doctor}</td>
                <td className="p-4">{appointment.date}</td>
                <td className="p-4">{appointment.time}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">{appointment.status}</span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800"><FiEdit /></button>
                    <button onClick={() => handleDelete(appointment.id)} className="text-red-600 hover:text-red-800"><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Appointment</h3>
            <input type="text" placeholder="Patient Name" value={formData.patient} onChange={(e) => setFormData({ ...formData, patient: e.target.value })} className="w-full p-2 border rounded mb-3" />
            <input type="text" placeholder="Doctor Name" value={formData.doctor} onChange={(e) => setFormData({ ...formData, doctor: e.target.value })} className="w-full p-2 border rounded mb-3" />
            <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full p-2 border rounded mb-3" />
            <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full p-2 border rounded mb-3" />
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full p-2 border rounded mb-4">
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <div className="flex space-x-2">
              <button onClick={handleAdd} className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">Add</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
