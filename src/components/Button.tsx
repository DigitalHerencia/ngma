import { Button as ShadButton } from '@/components/ui/button';

const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) => {
  return <ShadButton {...props}>{children}</ShadButton>;
};

export { Button };
