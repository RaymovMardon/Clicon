import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

interface Product {
  id: number;
  title: string;
  images: string;
  price: number;
  description: string;
}

interface Props {
  category: string;
  excludeId?: number;
}

const Index1 = ({ category, excludeId }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = excludeId
          ? data.products.filter((p: Product) => p.id !== excludeId)
          : data.products;
        setProducts(filtered);
      });
  }, [category, excludeId]);

  return (
    <section className="mt-12 bg-white py-6 px-4 rounded-md shadow-sm">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">RELATED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`} 
              className="block bg-white border rounded-lg p-4 shadow hover:shadow-lg transition duration-200 hover:scale-[1.02]"
            >
              <img
                src={product.images || "https://via.placeholder.com/150"}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index1;
