import React from 'react';
import NavBarActivity from '../components/NavBarActivity';
import styles from "./ActivityPage.module.css";

const ActivityPage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <NavBarActivity />
  
        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold text-center">Welcome to the Activity Page</h1>
          <p className="text-gray-700 text-center mt-4">
            This is where your activity content will go.
          </p>
        </div>
      </div>
    );
  };
  
  export default ActivityPage;