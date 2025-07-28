import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const BusinessForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phoneNumber: '',
    emailAddress: '',
    businessAddress: '',
    websiteURL: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const businessRef = ref(database, 'businessLeads');
      const newRef = push(businessRef);
      await set(newRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setStatus({ type: 'success', message: 'Business details submitted successfully!' });

      setFormData({
        businessName: '',
        contactPerson: '',
        phoneNumber: '',
        emailAddress: '',
        businessAddress: '',
        websiteURL: '',
      });

      setTimeout(() => {
        if (formData.emailAddress === 'adminsathish@gmail.com') {
          navigate('/admin/business-leads');
        } else {
          navigate('/');
        }
      }, 1500);
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
    }
  };

  return (
    <>
    
      <div className="business-form-page">
        <div className="business-form-container">
          <h2 className="business-form-title">
            <i className="bi bi-building me-2"></i>Submit Business Details
          </h2>

          {status.message && (
            <div className={`business-form-alert ${status.type === 'success' ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="business-form">
            <div className="business-form-group">
              <label>Business Name *</label>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
            </div>

            <div className="business-form-group">
              <label>Contact Person *</label>
              <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
            </div>

            <div className="business-form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>

            <div className="business-form-group">
              <label>Email Address *</label>
              <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
            </div>

            <div className="business-form-group">
              <label>Business Address *</label>
              <textarea name="businessAddress" rows="3" value={formData.businessAddress} onChange={handleChange} required />
            </div>

            <div className="business-form-group">
              <label>Website URL</label>
              <input type="url" name="websiteURL" value={formData.websiteURL} onChange={handleChange} />
            </div>

            <button type="submit" className="business-form-submit">
              <i className="bi bi-send me-2"></i>Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BusinessForm;
