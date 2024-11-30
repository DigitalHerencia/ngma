import { Sidebar } from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const ContentFeedPage = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="content">
        <h2 className="text-3xl font-bold mb-6">Content Feed</h2>
        <div className="grid grid-cols-2 gap-6">
          {[...Array(9)].map((_, idx) => (
            <Card key={idx} className="p-4">
              <h3 className="font-bold">Post {idx + 1}</h3>
              <p>Post description...</p>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentFeedPage;
