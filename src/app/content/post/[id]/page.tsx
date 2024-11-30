import { Card } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const PostPage = ({ id }: { id: string }) => {
  return (
    <DashboardLayout>
      <div className="content">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Post Details</h2>
          <p>This is the content for post ID: {id}</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PostPage;
