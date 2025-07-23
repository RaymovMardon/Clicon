// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   images?: string[];
//   price: number;
//   description: string;
// }

// const Index1 = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products/category/vehicle")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data.products);
//       });
//   }, []);

//   return (
//     <section>
//       <main className="container mx-auto bg-gray-100 py-8 px-4">
//         <h2 className="text-xl font-[600] text-gray-900 mb-4">RELATED PRODUCTS</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="flex justify-around items-center gap-3 border border-gray-500 p-3 px-0 rounded-md ">
//               <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded mb-2" />
//               <span>
//                 <h3 className="text-lg font-semibold">{product.title}</h3>
//                 <p className="text-blue-600 font-bold">${product.price}</p>
//               </span>
//             </div>
//           ))}
//         </div>
//       </main>
//     </section>
//   );
// };

// export default Index1;
