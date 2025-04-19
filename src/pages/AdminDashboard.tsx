
import React from 'react';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Users 
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // Sample data (would come from backend in real app)
  const stats = [
    { title: 'Total Products', value: '124', icon: Package, color: 'bg-mh-lavender' },
    { title: 'Total Orders', value: '56', icon: ShoppingCart, color: 'bg-mh-pink' },
    { title: 'Revenue', value: '$12,450', icon: DollarSign, color: 'bg-mh-peach' },
    { title: 'Customers', value: '78', icon: Users, color: 'bg-mh-blue' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-playfair font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-20 mr-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-playfair font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Order ID</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Customer</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-sm">#MH1001</td>
                  <td className="py-3 text-sm">Sarah Ahmed</td>
                  <td className="py-3 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Delivered
                    </span>
                  </td>
                  <td className="py-3 text-sm text-right">$125.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-sm">#MH1002</td>
                  <td className="py-3 text-sm">Leila Mahmoud</td>
                  <td className="py-3 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Processing
                    </span>
                  </td>
                  <td className="py-3 text-sm text-right">$89.50</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">#MH1003</td>
                  <td className="py-3 text-sm">Nadia Khan</td>
                  <td className="py-3 text-sm">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 text-sm text-right">$210.25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-playfair font-semibold mb-4">Top Products</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-md mr-4"></div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Premium Silk Hijab</h3>
                <p className="text-xs text-gray-500">$45.00 · 24 sold</p>
              </div>
              <div className="text-green-600 text-sm">+12%</div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-md mr-4"></div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Everyday Abaya</h3>
                <p className="text-xs text-gray-500">$89.00 · 18 sold</p>
              </div>
              <div className="text-green-600 text-sm">+8%</div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-md mr-4"></div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Sport Hijab</h3>
                <p className="text-xs text-gray-500">$35.00 · 15 sold</p>
              </div>
              <div className="text-red-600 text-sm">-3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
