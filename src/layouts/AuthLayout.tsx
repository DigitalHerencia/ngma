export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
}
