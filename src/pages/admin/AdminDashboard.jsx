import React from 'react';
import { Users, ShieldCheck, Briefcase, Calendar, DollarSign, AlertCircle, FileText } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { MOCK_ADMIN_STATS } from '../../data/mockData';
import { StatusBadge } from '../../components/common/StatusBadge';

export const AdminDashboard = () => {
  return (
    <DashboardLayout title="Admin Control Center">
      <div className="space-y-8">
        
        {/* Admin Header */}
        <div className="bg-[#5C0713] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#E7A51A] uppercase tracking-wider block">Platform Administration</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Worksy Platform Overview</h2>
            <p className="text-xs text-[#FFF4F2]/80 mt-1">Monitor live users, provider verification queues, bookings, and financial analytics.</p>
          </div>
        </div>

        {/* 7 Stat Cards matching Section 27 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Total Users</span>
              <Users className="w-5 h-5 text-[#8B1020]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#21191A]">{MOCK_ADMIN_STATS.totalUsers}</span>
            <span className="text-[10px] text-[#2F9B68] font-bold block mt-1">+42 new this week</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Providers</span>
              <ShieldCheck className="w-5 h-5 text-[#8B1020]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#21191A]">{MOCK_ADMIN_STATS.totalProviders}</span>
            <span className="text-[10px] text-[#2F9B68] font-bold block mt-1">385 Verified</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Services</span>
              <Briefcase className="w-5 h-5 text-[#8B1020]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#21191A]">{MOCK_ADMIN_STATS.totalServices}</span>
            <span className="text-[10px] text-[#625557] font-bold block mt-1">Across 16 Categories</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Bookings</span>
              <Calendar className="w-5 h-5 text-[#8B1020]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#21191A]">{MOCK_ADMIN_STATS.totalBookings}</span>
            <span className="text-[10px] text-[#2F9B68] font-bold block mt-1">98% Completed</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Revenue</span>
              <DollarSign className="w-5 h-5 text-[#8B1020]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#8B1020]">{MOCK_ADMIN_STATS.totalRevenue}</span>
            <span className="text-[10px] text-[#2F9B68] font-bold block mt-1">+18% growth</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Pending Verify</span>
              <AlertCircle className="w-5 h-5 text-[#B87C0D]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#B87C0D]">{MOCK_ADMIN_STATS.pendingVerifications}</span>
            <span className="text-[10px] text-[#B87C0D] font-bold block mt-1">Review queue</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider">Complaints</span>
              <AlertCircle className="w-5 h-5 text-[#C94B55]" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#C94B55]">{MOCK_ADMIN_STATS.openComplaints}</span>
            <span className="text-[10px] text-[#C94B55] font-bold block mt-1">Requires action</span>
          </div>

        </div>

        {/* System Activity Table */}
        <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
          <h3 className="font-bold text-lg text-[#21191A]">Recent Platform Bookings Audit</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#21191A]">
              <thead className="bg-[#FFF4F2] text-[#8B1020] uppercase text-[10px] font-bold">
                <tr>
                  <th className="p-3 rounded-l-xl">Booking ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8B1020]/05">
                <tr>
                  <td className="p-3 font-bold">BK-9481</td>
                  <td className="p-3">Vikram Malhotra</td>
                  <td className="p-3">Priya Verma</td>
                  <td className="p-3">Full House Deep Cleaning</td>
                  <td className="p-3 font-extrabold text-[#8B1020]">₹1,899</td>
                  <td className="p-3"><StatusBadge status="Confirmed" /></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">BK-8312</td>
                  <td className="p-3">Ananya Roy</td>
                  <td className="p-3">Amit Sharma</td>
                  <td className="p-3">Bathroom Leakage Repair</td>
                  <td className="p-3 font-extrabold text-[#8B1020]">₹499</td>
                  <td className="p-3"><StatusBadge status="In Progress" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
