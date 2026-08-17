import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

export const AdminUsers = () => {
  const users = [
    { id: 'U-101', name: 'Vikram Malhotra', email: 'vikram.m@example.com', role: 'Customer', city: 'Bengaluru', status: 'Active', joined: '2025-06-12' },
    { id: 'U-102', name: 'Priya Verma', email: 'priya.cleaning@example.com', role: 'Provider', city: 'Bengaluru', status: 'Active', joined: '2024-03-10' },
    { id: 'U-103', name: 'Rahul Deshmukh', email: 'rahul.d@example.com', role: 'Customer', city: 'Mumbai', status: 'Active', joined: '2025-01-20' },
    { id: 'U-104', name: 'Amit Sharma', email: 'amit.plumber@example.com', role: 'Provider', city: 'Bengaluru', status: 'Active', joined: '2023-11-05' }
  ];

  return (
    <DashboardLayout title="Registered Users Management">
      <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
        <h3 className="font-bold text-lg text-[#21191A]">Users Directory ({users.length})</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#21191A]">
            <thead className="bg-[#FFF4F2] text-[#8B1020] uppercase text-[10px] font-bold">
              <tr>
                <th className="p-3 rounded-l-xl">User ID</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">City</th>
                <th className="p-3 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B1020]/05">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="p-3 font-bold">{u.id}</td>
                  <td className="p-3 font-semibold">{u.name}</td>
                  <td className="p-3 text-[#625557]">{u.email}</td>
                  <td className="p-3"><span className="bg-[#FFF4F2] text-[#8B1020] font-bold px-2 py-0.5 rounded">{u.role}</span></td>
                  <td className="p-3">{u.city}</td>
                  <td className="p-3"><span className="bg-[#E6F4ED] text-[#2F9B68] font-bold px-2 py-0.5 rounded">✓ {u.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};
