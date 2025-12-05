'use client';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* Main content gets left margin to account for the fixed sidebar */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}