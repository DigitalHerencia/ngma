import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import AuthLayout from '@/layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
        <form className="space-y-4">
          <Input type="email" placeholder="Enter your email" />
          <label>Email Address</label>
          <Input type="password" placeholder="Enter your password" />
          <label>Password</label>
          <Button variant="default" className="w-full mt-4">
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm">
          Don&apos;t have an account?{' '}
          <a href="/auth/register" className="text-blue-600">
            Register
          </a>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default LoginPage;
