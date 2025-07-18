import React from 'react';

interface Product {
  name: string;
  price: string;
}

interface Section {
  title: string;
  products: Product[];
}

const productSections: Section[] = [
  {
    title: 'RELATED PRODUCT',
    products: [
      { name: 'Bose Sport Earbuds', price: '$1,500' },
      { name: 'Simple Mobile 4G LTE', price: '$1,500' },
      { name: '4K UHD TV with Chromecast', price: '$1,500' },
    ],
  },
  {
    title: 'PRODUCT ACCESSORIES',
    products: [
      { name: 'Samsung Galaxy S21 5G', price: '$1,500' },
      { name: '5G LTE Gaming Phone', price: '$1,500' },
      { name: 'Sony DSC-HX8 Zoom', price: '$1,500' },
    ],
  },
  {
    title: 'APPLE PRODUCT',
    products: [
      { name: 'TOZO T6 Wireless Earbuds', price: '$1,500' },
      { name: 'JBL FLIP 4 Speaker', price: '$1,500' },
      { name: 'Wyze Cam Pan v2', price: '$1,500' },
    ],
  },
  {
    title: 'FEATURED PRODUCTS',
    products: [
      { name: 'Washing Machine Model 18NMF', price: '$1,500' },
      { name: 'Sony DSC-HX8 Camera', price: '$1,500' },
      { name: 'Dell Optiplex 7000x', price: '$1,500' },
    ],
  },
];

const ProductGridSections: React.FC = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {productSections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="space-y-4">
            {section.products.map((item, i) => (
              <div
                key={i}
                className="border p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="w-full h-28 bg-gray-100 mb-2 rounded-lg" />
                <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                <p className="text-blue-500 font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductGridSections;
