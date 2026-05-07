import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const DoctorPatients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Alice Brown', age: 30, lastVisit: '2026-05-10', condition: 'Regular Checkup' },
    { id: 2, name: 'Bob Wilson', age: 45, lastVisit: '2026-05-11', condition: 'Skin Rash' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Patients</h2>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Age</th>
              <th className="text-left p-4">Last Visit</th>
              <th className="text-left p-4">Condition</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{patient.name}</td>
                <td className="p-4">{patient.age}</td>
                <td className="p-4">{patient.lastVisit}</td>
                <td className="p-4">{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DoctorPatients;
