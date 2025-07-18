import React from "react";

const BlogCard = () => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <div className="h-48 bg-gray-300 w-full" />
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
          <span>👤 Floyd Miles</span>
          <span>📅 17 Oct, 2020</span>
          <span>👁 826</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Curabitur massa orci, consectetur et blandit ac, auctor et tellus.
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.
        </p>
        <button className="text-orange-600 font-medium hover:underline">
          READ MORE →
        </button>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">CATEGORY</h2>
        <ul className="space-y-2 text-sm">
          {[
            "All",
            "Electronics Devices",
            "Computer & Laptop",
            "Computer Accessories",
            "SmartPhone",
            "Headphone",
            "Mobile Accessories",
            "Gaming Console",
            "Camera & Photo",
          ].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="category" className="accent-orange-500" />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">LATEST BLOG</h2>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-3 mb-2">
            <div className="w-16 h-12 bg-gray-300 rounded" />
            <div>
              <p className="text-sm">Curabitur pulvinar aliquam lectus</p>
              <span className="text-xs text-gray-500">28 Nov, 2015</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">GALLERY</h2>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-full aspect-square bg-gray-200 rounded" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">POPULAR TAG</h2>
        <div className="flex flex-wrap gap-2">
          {["Game", "iPhone", "TV", "SSD", "Graphics Card", "Macbook", "Asus Laptop"].map((tag) => (
            <span
              key={tag}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm hover:bg-orange-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4 md:flex gap-6">
      <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
        <Sidebar />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, idx) => (
          <BlogCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
