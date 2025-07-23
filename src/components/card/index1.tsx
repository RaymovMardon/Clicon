// import { useEffect, useState } from "react";


// interface Product {
//     id: number;
//     title: string;
//     image: string;
//     images?: string[];
//     price: number;
//     description: string;
//   }
// const Index1 = () => {
//     const [product, setProduct] = useState<Product | null>(null);
//     useEffect( () => {
//         fetch(`https://dummyjson.com/products/category/vehicle`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setProduct({...data.products[0], images: data.products[0]});
//         },);
//     })
//   return (
//     <section>
//       <main className='container mx-auto bg-gray-100 border border-red py-8 px-4 '>
//         <h2 className='text-xl font-[600] text-gray-900'>RELATED PRODUCTS</h2>
//         <div>
//             <div className='flex gap-4 justify-between border border-gray-700 p-4'>
//                 <img src={product?.image} alt="" />
//                 <span>
//                    <h3 className="text-xl font-[600]">{product?.title}</h3>
//                    <p>{product?.description}</p>
//                 </span>
//             </div>
//         </div>
//       </main>
//     </section>
//   )
// }

// export default Index1