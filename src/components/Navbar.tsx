import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-black text-white">
      <div className="text-lg font-bold">NEXTGEN MANAGEMENT AGENCY</div>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export { Navbar };
