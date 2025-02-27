export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, John Doe</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
            🔔
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
              JD
            </div>
            <span className="text-gray-600">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
} 