import { Sidebar } from '@/components/ui/sidebar';
import { NavigationMenu } from '@/components/ui/navigation-menu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <NavigationMenu />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
