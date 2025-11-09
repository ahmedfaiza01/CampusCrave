import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminSubscriptions = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subscriptions from backend
  const fetchSubs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/subscriptions");
      console.log("✅ Subscriptions from API:", res.data); // debug
      setSubs(res.data);
    } catch (error) {
      console.error("❌ Error fetching subscriptions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update subscription status
  const handleStatus = async (id, status) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/subscriptions/${id}`, { status });
      console.log("✅ Updated subscription:", res.data); // debug
      setSubs(subs.map((s) => (s._id === id ? { ...s, status } : s)));
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  // Initial fetch only
  useEffect(() => {
    fetchSubs();
  }, []);

  if (loading) {
    return <div className="p-6 text-amber-400">Loading subscriptions...</div>;
  }

  return (
    <div className="min-h-screen bg-[#332323] p-4 md:p-8">
      <div className="bg-[#2d1f1f] rounded-xl shadow-lg p-4 md:p-8">
        <h2 className="text-3xl text-amber-400 font-semibold mb-6 text-center">
          Student Subscriptions
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="text-amber-300 border-b border-gray-600 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium">Email</th>
                <th className="py-3 px-4 font-medium">Plan</th>
                <th className="py-3 px-4 font-medium">Duration</th>
                <th className="py-3 px-4 font-medium text-right">Price (Tk)</th>
                <th className="py-3 px-4 font-medium text-center">Status</th>
                <th className="py-3 px-4 font-medium text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {subs.length > 0 ? (
                subs.map((s) => (
                  <tr key={s._id} className="border-b border-gray-700 hover:bg-[#382626] text-white">
                    <td className="py-4 px-4">{s.name}</td>
                    <td className="py-4 px-4 text-gray-300">{s.email}</td>
                    <td className="py-4 px-4 text-amber-200">{s.plan}</td>
                    <td className="py-4 px-4">{s.duration}</td>
                    <td className="py-4 px-4 text-right font-bold">{s.price?.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center">{s.status}</td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleStatus(s._id, "Accepted")}
                        className="bg-green-600 text-white px-2 py-1 rounded m-1 hover:bg-green-700 transition"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatus(s._id, "Rejected")}
                        className="bg-red-600 text-white px-2 py-1 rounded m-1 hover:bg-red-700 transition"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-6 text-center text-gray-400">
                    No subscriptions found.
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

export default AdminSubscriptions;
