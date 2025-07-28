import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AdminBusinessLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const leadsRef = ref(database, 'businessLeads');
    onValue(leadsRef, (snapshot) => {
      const data = snapshot.val();
      const list = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];
      setLeads(list.reverse());
    });
  }, []);

  return (
    <>
      <div className="leads-page">
        <div className="leads-container">
          <h2 className="leads-title">
            <i className="bi bi-building me-2"></i>Business Leads
          </h2>
          <div className="leads-table-wrapper">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Business Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="leads-empty">No leads found</td>
                  </tr>
                ) : (
                  leads.map((lead, index) => (
                    <tr
                      key={lead.id}
                      className="leads-row fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td>{lead.businessName}</td>
                      <td>{lead.contactPerson}</td>
                      <td>{lead.emailAddress}</td>
                      <td>{lead.phoneNumber}</td>
                      <td>{lead.businessAddress}</td>
                      <td>
                        <a href={lead.websiteURL} target="_blank" rel="noreferrer">
                          {lead.websiteURL}
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBusinessLeads;
