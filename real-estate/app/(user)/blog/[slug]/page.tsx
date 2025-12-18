import Image from 'next/image';
import { Clock, Eye, MessageCircle } from 'lucide-react';
import { blogsData } from '@/lib/data';

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogSlugPage = async ({ params }: BlogSlugPageProps) => {
  // Await params in Next.js 15+
  const { slug } = await params;
  
  // Find the blog by slug
  const blog = blogsData.find((b) => b.slug === slug);

  // If blog not found, show message
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacing */}
      <div className="h-20"></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full mb-6">
          <span className="text-sm font-medium">{blog.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Author Info and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                fill
                src={blog.author.avatar}
                alt={blog.author.name}
                className="object-cover"
              />
            </div>
            <span className="font-medium text-gray-900">{blog.author.name}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❤️ {blog.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>{blog.comments}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={16} />
              <span>{blog.views}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden relative h-[500px]">
          <Image
            fill
            src={blog.featuredImage}
            alt={blog.title}
            className="object-cover"
            priority
          />
        </div>

        {/* Content Article */}
        <article className="prose prose-lg max-w-none">
          {/* Intro Paragraphs */}
          <div className="space-y-6 mb-8">
            {blog.content.intro.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quote Block */}
          <div className="bg-white border-l-4 border-teal-500 p-6 my-8 rounded-r-xl">
            <p className="text-gray-800 italic mb-3 leading-relaxed">
              "{blog.content.quote.text}"
            </p>
            <p className="text-sm text-gray-600">— {blog.content.quote.author}</p>
          </div>

          {/* Middle Content with Image - Only render if image exists */}
          {blog.content.sections[0]?.image && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 items-start">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt. At feugiat sapien varius idMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt. At feugiat sapien varius id.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus vitae, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, et donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden relative h-[300px]">
                <Image
                  fill
                  src={blog.content.sections[0].image}
                  alt="Interior design"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Main Sections */}
          {blog.content.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {section.content}
              </p>
              
              {/* Bullet Points if exist */}
              {section.bulletPoints && (
                <ul className="space-y-2 mb-6">
                  {section.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-teal-600 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Second List if exist */}
              {section.secondList && (
                <ul className="space-y-2">
                  {section.secondList.map((point, idx) => (
                    <li key={idx} className="text-teal-600 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {blog.content.conclusion.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {blog.content.conclusion.content}
            </p>
          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogSlugPage;
