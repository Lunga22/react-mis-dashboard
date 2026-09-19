import React, { useState } from 'react';

export default function App() {
  const [metrics] = useState([
    { title: 'System Uptime', value: '99.9%', status: 'Optimal' },
    { title: 'Active PostgreSQL DBs', value: '4 Connections', status: 'Healthy' },
    { title: 'Pending MIS Reports', value: '0 Queued', status: 'Synchronized' }
  ]);

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', padding: '30px', background: '#f8f9fa', color: '#333' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#003366' }}>Datamatics MIS & React Dashboard</h1>
        <p style={{ color: '#666' }}>Real-time system telemetry and database monitoring interface.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {metrics.map((item, index) => (
          <div key={index} style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid #003366' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>{item.title}</h4>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>{item.value}</div>
            <span style={{ display: 'inline-block', marginTop: '10px', fontSize: '12px', background: '#e2f0d9', color: '#385723', padding: '3px 8px', borderRadius: '4px' }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
