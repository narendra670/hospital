import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Alice Brown', date: '2026-05-10', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patient: 'Bob Wilson', date: '2026-05-11', time: '2:00 PM', status: 'Scheduled' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h2>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Patient</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{appointment.patient}</td>
                <td className="p-4">{appointment.date}</td>
                <td className="p-4">{appointment.time}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DoctorAppointments;
