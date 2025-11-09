import React, { useEffect, useState } from "react";
import axios from "axios";

const StaffSubscriptions = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Pending");

  // Fetch subscriptions from backend
  const fetchSubs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/subscriptions");
      setSubs(res.data);
    } catch (error) {
      console.error("❌ Error fetching subscriptions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Staff can only update status
  const handleStatus = async (id, status) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/subscriptions/${id}`, { status });
      setSubs(subs.map((s) => (s._id === id ? res.data : s)));
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  const filteredSubs = subs.filter((s) =>
    filter === "All" ? true : s.status === filter
  );

  if (loading) return <div className="p-6 text-amber-400">Loading subscriptions...</div>;

  return (
    <div className="min-h-screen bg-[#242020] p-4 md:p-8">
      <div className="bg-[#2e2323] rounded-xl shadow-lg p-6">
        <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6 text-center">
          Staff – Subscription Requests
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-3 justify-center mb-4">
          {["All", "Pending", "Accepted", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg ${
                filter === status
                  ? "bg-amber-500 text-black"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Subscriptions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="text-amber-300 border-b border-gray-600 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4 text-right">Price (Tk)</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubs.length > 0 ? (
                filteredSubs.map((s) => (
                  <tr key={s._id} className="border-b border-gray-700 text-white">
                    <td className="py-4 px-4">{s.name}</td>
                    <td className="py-4 px-4">{s.email}</td>
                    <td className="py-4 px-4 text-amber-200">{s.plan}</td>
                    <td className="py-4 px-4">{s.duration}</td>
                    <td className="py-4 px-4 text-right font-bold">
                      {s.price?.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">{s.status}</td>
                    <td className="py-4 px-4 text-center">
                      {s.status === "Pending" ? (
                        <>
                          <button
                            onClick={() => handleStatus(s._id, "Accepted")}
                            className="bg-green-600 px-3 py-1 rounded m-1 hover:bg-green-700"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatus(s._id, "Rejected")}
                            className="bg-red-600 px-3 py-1 rounded m-1 hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-gray-400">No action</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-400">
                    No subscriptions {filter !== "All" ? `(${filter})` : ""}.
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

export default StaffSubscriptions;
