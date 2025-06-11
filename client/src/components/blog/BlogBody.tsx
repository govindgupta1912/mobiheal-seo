import { Blog } from "../../types/blog";
import { FaArrowRight, FaCheckCircle, FaLink } from 'react-icons/fa';

const BlogBody = ({ blog }: { blog: Blog }) => (
  <article className="prose prose-lg max-w-none">
    <p className="text-xl font-medium text-gray-600 leading-relaxed mb-8">
      {blog.introduction}
    </p>
    <img 
      src={blog.featureImage} 
      className="rounded-2xl my-8 shadow-lg hover:shadow-xl transition-shadow duration-300" 
      alt="feature" 
    />
    {blog.sections.map((sec, i) => (
      <section key={i} className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{sec.heading}</h2>
        {sec.content.map((para, j) => (
          <p key={j} className="text-gray-700 mt-4 leading-relaxed text-lg">
            {para}
          </p>
        ))}
        {sec.listItems && (
          <ul className="list-none pl-0 mt-6 space-y-3">
            {sec.listItems.map((item, k) => (
              <li key={k} className="flex items-start gap-3">
                <span className="text-blue-600 mt-2">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    ))}

    {/* Conclusion Section */}
    {blog.conclusion && (
      <section className="my-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {blog.conclusion.content}
          </p>

          {/* SEO Recommendations */}
          {blog.seoRecommendations && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <FaLink className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Recommended Internal Links</h3>
                  <p className="text-sm text-gray-500 mt-1">Explore more related content</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {blog.seoRecommendations.internalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-green-50 p-2 rounded-lg">
                        <FaCheckCircle className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 group-hover:text-blue-700">
                          {link.text}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          {blog.conclusion.cta && (
            <div className="bg-gradient rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{blog.conclusion.cta.title}</h3>
              <p className="text-blue-100 mb-6">
                {blog.conclusion.cta.description}
              </p>
              <a 
                href={blog.conclusion.cta.buttonLink}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {blog.conclusion.cta.buttonText}
                <FaArrowRight />
              </a>
            </div>
          )}
        </div>
      </section>
    )}
  </article>
);

export default BlogBody;
