import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi'; // Used for the delete icon

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:4000/api/staff');
      setStaff(res.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
      // Optional: Add a state for error message
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff member?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:4000/api/staff/${id}`);
      fetchStaff(); // Refresh the list
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  if (loading) {
    return <div className="p-6 text-amber-400">Loading staff members...</div>;
  }

  return (
    <div className="min-h-screen bg-[#332323] p-4 md:p-8">
      {/* Container matching the dark background card from your image */}
      <div className="bg-[#2d1f1f] rounded-xl shadow-lg p-4 md:p-8">
        <h2 className="text-3xl text-amber-400 font-semibold mb-6 text-center">Manage Staff Members</h2>
        
        {/* Table Wrapper and Styling */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* Table Header */}
            <thead className="text-amber-300 border-b border-gray-600 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 font-medium">Image</th>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium">Role</th>
                <th className="py-3 px-4 font-medium">Email</th>
                <th className="py-3 px-4 font-medium text-right">Salary (Tk)</th>
                <th className="py-3 px-4 font-medium text-center">Delete</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {staff.length > 0 ? (
                staff.map((s) => (
                  <tr key={s._id} className="border-b border-gray-700 hover:bg-[#382626]">
                    {/* Image */}
                    <td className="py-4 px-4">
                      <img 
                        src={s.imageUrl || 'placeholder.jpg'} // Use a placeholder if imageUrl is missing
                        alt={s.name} 
                        className="w-12 h-12 object-cover rounded-full" 
                      />
                    </td>
                    {/* Name */}
                    <td className="py-4 px-4 text-white font-medium">{s.name}</td>
                    {/* Role */}
                    <td className="py-4 px-4 text-amber-200">{s.role}</td>
                    {/* Email */}
                    <td className="py-4 px-4 text-gray-300">{s.email}</td>
                    {/* Salary */}
                    <td className="py-4 px-4 text-white font-bold text-right">
                      {s.salary ? s.salary.toLocaleString() : 'N/A'}
                    </td>
                    {/* Delete Button */}
                    <td className="py-4 px-4 text-center">
                      <button 
                        onClick={() => handleDelete(s._id)} 
                        className="text-red-400 hover:text-red-600 transition duration-150 ease-in-out p-1 rounded-full"
                        aria-label={`Delete staff member ${s.name}`}
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-gray-400">
                    No staff members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffList;