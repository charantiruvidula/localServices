import React, { useState } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/common/Button';
import { useApp } from '../../context/AppContext';

export const AdminProviders = () => {
  const { providers } = useApp();
  const [providerList, setProviderList] = useState(providers);

  const toggleVerify = (id) => {
    setProviderList(providerList.map(p => p.id === id ? { ...p, verified: !p.verified } : p));
  };

  return (
    <DashboardLayout title="Provider Verification Queue">
      <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
        <h3 className="font-bold text-lg text-[#21191A]">Provider Verification Directory</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#21191A]">
            <thead className="bg-[#FFF4F2] text-[#8B1020] uppercase text-[10px] font-bold">
              <tr>
                <th className="p-3 rounded-l-xl">Provider</th>
                <th className="p-3">Profession</th>
                <th className="p-3">Experience</th>
                <th className="p-3">City</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Verification Badge</th>
                <th className="p-3 rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B1020]/05">
              {providerList.map((p) => (
                <tr key={p.id}>
                  <td className="p-3 font-bold flex items-center gap-2">
                    <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                    <span>{p.name}</span>
                  </td>
                  <td className="p-3 text-[#625557]">{p.profession}</td>
                  <td className="p-3">{p.experience}</td>
                  <td className="p-3">{p.location}</td>
                  <td className="p-3 font-bold text-[#E7A51A]">{p.rating} ★</td>
                  <td className="p-3">
                    {p.verified ? (
                      <span className="bg-[#E6F4ED] text-[#2F9B68] font-bold px-2 py-0.5 rounded text-[10px] inline-flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </span>
                    ) : (
                      <span className="bg-[#FFF4F2] text-[#B87C0D] font-bold px-2 py-0.5 rounded text-[10px]">
                        Pending Review
                      </span>
                    )}
                  </td>
                  <td className="p-3">
                    <Button 
                      variant={p.verified ? "outline" : "primary"} 
                      size="xs"
                      onClick={() => toggleVerify(p.id)}
                    >
                      {p.verified ? "Revoke Verification" : "Approve & Verify"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};
