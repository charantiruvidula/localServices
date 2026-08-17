import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ServiceCard } from '../../components/service/ServiceCard';
import { useApp } from '../../context/AppContext';

export const AdminServices = () => {
  const { services } = useApp();

  return (
    <DashboardLayout title="Platform Services Catalog">
      <div className="space-y-6">
        <h3 className="font-bold text-lg text-[#21191A]">All Active Platform Listings ({services.length})</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
