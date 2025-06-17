import { FaRegCheckCircle } from "react-icons/fa";
import { Blog } from "../../types/blog";
import {
  FaArrowRight,
  FaArrowLeft,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

const BlogBody = ({ blog }: { blog: Blog }) => (
  <article className="max-w-3xl mx-auto px-4 text-gray-800">
    {/* Intro */}
    <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-6 mt-8">
      {blog.introduction}
    </p>

    {/* Feature Image */}
    <img
      src={blog.featureImage}
      alt="Feature"
      className="rounded-2xl my-6 w-full object-cover shadow-md"
    />

    {/* Sections */}
    {blog.sections.map((sec, i) => (
      <section key={i} className="">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          {sec.heading}
        </h2>
        {sec.content.map((para, j) => (
          <p key={j} className="text-base text-gray-700 leading-relaxed mb-3">
            {para}
          </p>
        ))}
        {sec.listItems && (
          <ul className="mt-4 space-y-2">
            {sec.listItems.map((item, k) => (
              <li
                key={k}
                className="flex gap-2 items-start text-gray-700 text-sm"
              >
                <FaRegCheckCircle className="text-green-500 mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    ))}

    {/* Conclusion Section */}
    {blog.conclusion && (
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Conclusion
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          {blog.conclusion.content}
        </p>

        {/* Related Content
        {blog.seoRecommendations && (
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Explore More Related Content
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {blog.seoRecommendations.internalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="group p-4 rounded-lg border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <div className="flex gap-3">
                    <div className="bg-green-100 p-2 rounded-md">
                      <FaCheckCircle className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-blue-700 font-medium group-hover:text-blue-900">
                        {link.text}
                      </h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )} */}

        {/* CTA */}
        {blog.conclusion.cta && (
          <div className="bg-gradient text-white rounded-2xl px-6 py-8 shadow-md">
            <h3 className="text-xl font-bold mb-2">
              {blog.conclusion.cta.title}
            </h3>
            <p className="text-blue-100 mb-4">
              {blog.conclusion.cta.description}
            </p>
            <a
              href="https://calendly.com/mobiheal-demo/booking"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition"
            >
              {blog.conclusion.cta.buttonText}
              <FaArrowRight />
            </a>
          </div>
        )}
      </section>
    )}

    {/* Bottom Bar: Share Icons + Prev/Next */}
    <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href
          )}`}
          className="text-gray-500 hover:text-blue-600 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`}
          className="text-gray-500 hover:text-blue-400 transition"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}&text=${encodeURIComponent(blog.title)}`}
          className="text-gray-500 hover:text-blue-700 transition"
        >
          <FaFacebookF size={20} />
        </a>
      </div>

      {/* Prev/Next Links */}
      {/* <div className="flex gap-4 text-sm">
        <a
          href="/blog/previous-post"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
        >
          <FaArrowLeft /> Previous Post
        </a>
        <a
          href="/blog/next-post"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
        >
          Next Post <FaArrowRight />
        </a>
      </div> */}
    </div>
  </article>
);

export default BlogBody;
