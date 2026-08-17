import React from 'react';
import { BarChart3, TrendingUp, Download } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/common/Button';

export const AdminReports = () => {
  return (
    <DashboardLayout title="Platform Analytics & Reports">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-[#21191A]">Monthly Revenue & Growth Analytics</h3>
          <Button variant="primary" size="sm" icon={Download}>
            Export Full PDF Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
            <h4 className="font-bold text-base text-[#21191A] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#8B1020]" /> Revenue Breakdown
            </h4>
            <div className="space-y-3 text-xs text-[#625557]">
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Gross Service Volume:</span>
                <strong className="text-[#21191A]">₹18,45,000</strong>
              </div>
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Platform Commission Fees:</span>
                <strong className="text-[#2F9B68]">₹1,84,500</strong>
              </div>
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Provider Payouts Completed:</span>
                <strong className="text-[#21191A]">₹16,60,500</strong>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
            <h4 className="font-bold text-base text-[#21191A] flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#8B1020]" /> Top Performing Cities
            </h4>
            <div className="space-y-3 text-xs text-[#625557]">
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Bengaluru:</span>
                <strong className="text-[#8B1020]">54% of Total Bookings</strong>
              </div>
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Hyderabad:</span>
                <strong className="text-[#8B1020]">24% of Total Bookings</strong>
              </div>
              <div className="flex justify-between border-b border-[#8B1020]/05 pb-2">
                <span>Mumbai:</span>
                <strong className="text-[#8B1020]">22% of Total Bookings</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
