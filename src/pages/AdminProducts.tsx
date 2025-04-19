
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Product } from '@/components/ProductCard';
import { toast } from '@/components/ui/use-toast';

// Updated interface to match product type
interface ProductFormData {
  id?: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

// Sample product data (would come from API in real app)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Silk Hijab',
    price: 45.99,
    image: 'https://picsum.photos/id/237/300/300',
    category: 'Hijabs',
  },
  {
    id: '2',
    name: 'Modern Abaya',
    price: 89.99,
    image: 'https://picsum.photos/id/238/300/300',
    category: 'Abayas',
  },
  {
    id: '3',
    name: 'Sport Hijab',
    price: 35.99,
    image: 'https://picsum.photos/id/239/300/300',
    category: 'Activewear',
  },
];

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductFormData>({
    name: '',
    price: 0,
    image: '',
    category: 'Hijabs',
  });

  const categories = ['Hijabs', 'Abayas', 'Jilbabs', 'Bukini Wear', 'Activewear'];

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNew = () => {
    setCurrentProduct({
      name: '',
      price: 0,
      image: '',
      category: 'Hijabs',
    });
    setShowForm(true);
  };

  const handleEdit = (product: Product) => {
    // Convert product to ProductFormData format
    setCurrentProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      toast({
        title: "Product deleted",
        description: "The product has been successfully removed."
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentProduct.id) {
      // Update existing product
      const updatedProducts = products.map(product => 
        product.id === currentProduct.id ? { ...currentProduct as Product } : product
      );
      setProducts(updatedProducts);
      toast({
        title: "Product updated",
        description: "The product has been successfully updated."
      });
    } else {
      // Add new product
      const newProduct = {
        ...currentProduct,
        id: Date.now().toString(),
      } as Product;
      setProducts([...products, newProduct]);
      toast({
        title: "Product added",
        description: "The new product has been successfully added."
      });
    }
    
    setShowForm(false);
  };

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-playfair font-bold">Products</h1>
          <p className="text-gray-500">Manage your product catalog</p>
        </div>
        <button 
          className="inline-flex items-center px-4 py-2 bg-mh-lavender text-gray-800 rounded-md hover:bg-mh-lavender/90 transition-colors"
          onClick={handleAddNew}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-12 w-12 rounded-md overflow-hidden">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => handleEdit(product)}
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found matching your search.
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">
                {currentProduct.id ? 'Edit Product' : 'Add New Product'}
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Product Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    value={currentProduct.name}
                    onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    value={currentProduct.price}
                    onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <input
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    value={currentProduct.image}
                    onChange={(e) => setCurrentProduct({...currentProduct, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    value={currentProduct.category}
                    onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-mh-lavender text-gray-800 rounded-md hover:bg-mh-lavender/90 transition-colors"
                >
                  {currentProduct.id ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
