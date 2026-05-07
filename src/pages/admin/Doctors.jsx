import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiPlus, FiEdit, FiTrash2, FiX } from 'react-icons/fi';

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Smith', specialty: 'Cardiologist', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Dr. Sarah Johnson', specialty: 'Dermatologist', email: 'sarah@example.com', phone: '123-456-7891' },
    { id: 3, name: 'Dr. Emily Davis', specialty: 'Pediatrician', email: 'emily@gmail.com', phone: '123-456-7892' },
    { id: 4, name: 'Dr. Michael Brown', specialty: 'Orthopedic Surgeon', email: 'michael@gmail.com', phone: '123-456-7893' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', specialty: '', email: '', phone: '' });

  const handleAddDoctor = () => {
    setFormData({ name: '', specialty: '', email: '', phone: '' });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', specialty: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = {
      id: doctors.length + 1,
      ...formData,
    };
    setDoctors([...doctors, newDoctor]);
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Doctors Management</h2>
        <button
          onClick={handleAddDoctor}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-700"
        >
          <FiPlus />
          <span>Add Doctor</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm"
      >
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Specialty</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{doctor.name}</td>
                <td className="p-4">{doctor.specialty}</td>
                <td className="p-4">{doctor.email}</td>
                <td className="p-4">{doctor.phone}</td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Add New Doctor</h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <FiX />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
