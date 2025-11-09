import React, { useState, useEffect } from "react";
import axios from "axios";

const StaffInventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "", unit: "" });
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/inventory");
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/inventory", newItem);
      setNewItem({ itemName: "", quantity: "", unit: "" });
      fetchInventory();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:4000/api/inventory/${id}`, { status });
      fetchInventory();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  if (loading) return <div className="p-4 text-yellow-400">Loading inventory...</div>;

  return (
    <div className="min-h-screen bg-[#332323] p-6">
      <h2 className="text-3xl text-amber-400 font-semibold mb-6 text-center">Inventory Management</h2>

      {/* Add Item Form */}
      <form onSubmit={handleAdd} className="bg-[#2d1f1f] p-4 rounded-xl mb-6 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.itemName}
          onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })}
          className="px-3 py-2 rounded bg-[#3c2a2a] text-white flex-1"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="px-3 py-2 rounded bg-[#3c2a2a] text-white w-28"
          required
        />
        <input
          type="text"
          placeholder="Unit"
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          className="px-3 py-2 rounded bg-[#3c2a2a] text-white w-28"
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-[#2d1f1f] rounded-xl p-4 shadow-lg">
        <table className="min-w-full text-left text-white">
          <thead className="text-amber-300 border-b border-gray-600 uppercase">
            <tr>
              <th className="py-3 px-4">Item</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Unit</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((i) => (
                <tr key={i._id} className="border-b border-gray-700 hover:bg-[#382626]">
                  <td className="py-3 px-4">{i.itemName}</td>
                  <td className="py-3 px-4">{i.quantity}</td>
                  <td className="py-3 px-4">{i.unit}</td>
                  <td className="py-3 px-4">{i.status}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleStatus(i._id, "Available")}
                      className="bg-green-600 px-2 py-1 rounded m-1 hover:bg-green-700"
                    >
                      Available
                    </button>
                    <button
                      onClick={() => handleStatus(i._id, "Low Stock")}
                      className="bg-yellow-500 px-2 py-1 rounded m-1 hover:bg-yellow-600"
                    >
                      Low
                    </button>
                    <button
                      onClick={() => handleStatus(i._id, "Out of Stock")}
                      className="bg-red-600 px-2 py-1 rounded m-1 hover:bg-red-700"
                    >
                      Out
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-400 py-6">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffInventory;
