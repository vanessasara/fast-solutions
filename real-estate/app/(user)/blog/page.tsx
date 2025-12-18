import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/data';

const BlogListingPage = () => {
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacing */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-semibold">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Real estate insights
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay ahead in the property market with expert advice and updates
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.slug}`}
              className="block group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Blog Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    fill
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Blog Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 capitalize">
                      {blog.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2">
                      {blog.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    {blog.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListingPage;
