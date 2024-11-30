const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-6 text-white">
      <nav className="space-y-4">
        <a href="/dashboard" className="block">
          Dashboard
        </a>
        <a href="/subscriptions" className="block">
          Subscriptions
        </a>
        <a href="/messages" className="block">
          Messages
        </a>
        <a href="/settings" className="block">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export { Sidebar };
