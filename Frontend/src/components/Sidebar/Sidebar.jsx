import React from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../../utils';

const Sidebar = ({ isOpen, onClose }) => {
  
  const navigate = useNavigate();
   const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        // handleSuccess('User Loggedout');
       handleSuccess('User Logged Out')
           setTimeout(() => {
      navigate('/login');
    }, 1500);
    }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="logo">User</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <ul className="nav-links">
        <li><Link to="/home"> User Dashboard</Link></li>
        <li><Link to="/urlscan">UrlScan</Link></li>
        <li><Link to="/domains">Domain List</Link></li>
        <li onClick={handleLogout}><Link>Logout</Link></li>
        <Link to="/errors">Error Domains</Link>
      </ul>
      <ToastContainer/>
    </div>
    
  );
};

export default Sidebar;
