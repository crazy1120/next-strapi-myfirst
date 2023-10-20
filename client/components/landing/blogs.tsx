import { blogs } from "@/pages";
import Blog from "./blog";

interface BlogsProps {
  blogs: blogs[];
}

const BlogList: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <section className="flex flex-col items-center bg-gray-900 py-10 lg:py-20 px-2.5 lg:px-3">
      <p className="text-3xl lg:text-6xl font-bold text-center mb-[30px] lg:mb-[50px]">
        What&apos;s New
      </p>
      <div className="flex flex-wrap justify-around">
        {blogs.map((blog, ind) => (
          <Blog key={ind} info={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
