import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import AuthLayout from '@/layouts/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form className="space-y-4">
          <form className="space-y-4">
            <div>
              <label>Full Name</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                name="fullName"
              />
            </div>

            <div>
              <label>Email Address</label>
              <Input type="email" placeholder="Enter your email" name="email" />
            </div>

            <div>
              <label>Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
              />
            </div>

            <Button variant="default" className="w-full mt-4">
              Register
            </Button>
          </form>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <a href="/auth/login" className="text-blue-600">
            Login
          </a>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default RegisterPage;
