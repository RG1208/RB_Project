"use client"
import React, { useState } from 'react';

export default function SettingsPage() {
  const [platformName, setPlatformName] = useState('ResQ Bridge');
  const [timezone, setTimezone] = useState('UTC');
  const [defaultLanguage, setDefaultLanguage] = useState('en');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSave = () => {
    // Perform API call or state management logic
    alert('Settings have been saved successfully!');
  };

  const handleCancel = () => {
    // Reset or revert changes
    alert('Changes have been canceled.');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* General Settings */}
      <section className="bg-white p-6 rounded-md shadow mb-6 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="platformName">
            Platform Name
          </label>
          <input
            type="text"
            id="platformName"
            value={platformName}
            onChange={(e) => setPlatformName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="timezone">
            Timezone
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="EST">EST</option>
            {/* Add more timezones as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="defaultLanguage">
            Default Language
          </label>
          <select
            id="defaultLanguage"
            value={defaultLanguage}
            onChange={(e) => setDefaultLanguage(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </section>

      {/* Security & Access Control */}
      <section className="bg-white p-6 rounded-md shadow mb-6 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Security & Access Control</h2>
        
        <div className="flex items-center mb-4">
          <label className="block font-medium mb-1 mr-4" htmlFor="twoFactorAuth">
            Two-Factor Authentication
          </label>
          <input
            id="twoFactorAuth"
            type="checkbox"
            checked={twoFactorAuth}
            onChange={(e) => setTwoFactorAuth(e.target.checked)}
            className="h-5 w-5 border border-gray-300"
          />
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-white p-6 rounded-md shadow mb-6 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <p className="text-gray-600 mb-4">
          Configure how you’d like to receive incident and system alerts.
        </p>
        {/* Additional notification settings can go here */}
      </section>

      {/* Integration Settings */}
      <section className="bg-white p-6 rounded-md shadow mb-6 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Integrations</h2>
        <p className="text-gray-600 mb-4">
          Connect external services like map APIs, payment gateways, or chat platforms.
        </p>
        {/* Additional integration options can be added here */}
      </section>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleCancel}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
