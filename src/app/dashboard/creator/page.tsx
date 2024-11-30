import { Sidebar } from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const CreatorDashboard = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="content">
        <h2 className="text-3xl font-bold mb-6">Creator Dashboard</h2>
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-4">Content Creation Tools</Card>
          <Card className="p-4">Earnings Overview</Card>
          <Card className="p-4">Subscriber Insights</Card>
          <Card className="p-4">Upcoming Schedules</Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatorDashboard;
