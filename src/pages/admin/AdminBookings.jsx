import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { BookingCard } from '../../components/booking/BookingCard';
import { useApp } from '../../context/AppContext';

export const AdminBookings = () => {
  const { bookings } = useApp();

  return (
    <DashboardLayout title="Platform Bookings & Transactions">
      <div className="space-y-6">
        <h3 className="font-bold text-lg text-[#21191A]">All System Bookings ({bookings.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((bk) => (
            <BookingCard key={bk.id} booking={bk} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
