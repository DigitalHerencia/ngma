import { Sidebar } from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const FanDashboard = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="content">
        <h2 className="text-3xl font-bold mb-6">Fan Dashboard</h2>
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-4">Followed Creators</Card>
          <Card className="p-4">Messages</Card>
          <Card className="p-4">Subscription Management</Card>
          <Card className="p-4">Exclusive Content</Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FanDashboard;
