import Image from 'next/image';
import Link from 'next/link';
import { blogsSection } from '@/lib/data';

const BlogListingPage = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold">Blog</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Real estate insights
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Stay ahead in the property market with expert advice and updates
            </p>
          </div>

          <Link href="/blog">
            <button className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg w-full md:w-auto whitespace-nowrap">
              Read all articles
            </button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogsSection.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6">
                <Image
                  fill
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{blog.date}</p>
                </div>

                <span className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold ${blog.categoryColor} self-start sm:self-auto`}>
                  {blog.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListingPage;
