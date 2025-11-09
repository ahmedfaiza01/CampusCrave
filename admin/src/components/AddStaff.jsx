import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { styles } from '../assets/dummyadmin';

const AddStaff = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    salary: '',
    image: null,
    preview: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = e => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === 'preview') return;
      payload.append(key, val);
    });

    try {
      await axios.post('http://localhost:4000/api/staff', payload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Staff added successfully!');
      setFormData({ name: '', role: '', phone: '', email: '', salary: '', image: null, preview: '' });
    } catch (err) {
      console.error('Error:', err.response || err.message);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className="max-w-4xl mx-auto">
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Add New Staff Member</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className={styles.uploadLabel}>
              {formData.preview ? (
                <img src={formData.preview} alt="Preview" className={styles.previewImage} />
              ) : (
                <div className="text-center p-4">
                  <FiUpload className={styles.uploadIcon} />
                  <p className={styles.uploadText}>Click to upload staff photo</p>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" required />
            </label>

            <input type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder="Full Name" className={styles.inputField} required />

            <input type="text" name="role" value={formData.role} onChange={handleChange}
              placeholder="Role (e.g., Chef, Manager)" className={styles.inputField} required />

            <input type="text" name="phone" value={formData.phone} onChange={handleChange}
              placeholder="Phone Number" className={styles.inputField} required />

            <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="Email Address" className={styles.inputField} required />

            <input type="number" name="salary" value={formData.salary} onChange={handleChange}
              placeholder="Salary (Tk)" className={styles.inputField} required />

            <button type="submit" className={styles.actionBtn}>Add Staff</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
