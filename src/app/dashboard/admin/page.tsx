import { Sidebar } from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="content">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-4">User Management</Card>
          <Card className="p-4">Moderation Queue</Card>
          <Card className="p-4">Analytics</Card>
          <Card className="p-4">Reports</Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
