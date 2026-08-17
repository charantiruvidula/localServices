import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/common/Button';

export const AdminComplaints = () => {
  const complaints = [
    { id: 'CMP-104', customer: 'Ananya Roy', provider: 'Amit Sharma', issue: 'Provider arrived 45 mins past scheduled slot.', status: 'Open', date: '2026-08-14' },
    { id: 'CMP-102', customer: 'Rahul D.', provider: 'Priya Verma', issue: 'Additional charges requested for balcony cleaning.', status: 'Resolved', date: '2026-08-10' }
  ];

  return (
    <DashboardLayout title="Customer Complaints & Disputes">
      <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
        <h3 className="font-bold text-lg text-[#21191A]">Open & Resolved Disputes ({complaints.length})</h3>
        <div className="divide-y divide-[#8B1020]/10">
          {complaints.map((c) => (
            <div key={c.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[#8B1020]">{c.id}</span>
                  <span className="text-xs text-[#8A7779]">• {c.date}</span>
                </div>
                <h4 className="font-bold text-sm text-[#21191A] mt-1">{c.issue}</h4>
                <p className="text-xs text-[#625557] mt-0.5">Customer: {c.customer} | Provider: {c.provider}</p>
              </div>

              <div>
                {c.status === 'Open' ? (
                  <Button variant="primary" size="xs">
                    Resolve Dispute
                  </Button>
                ) : (
                  <span className="bg-[#E6F4ED] text-[#2F9B68] font-bold px-3 py-1 rounded-full text-xs inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Resolved
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
