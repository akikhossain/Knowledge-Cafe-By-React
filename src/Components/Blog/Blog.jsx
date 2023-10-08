import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-9" src={cover} alt="{`title`}" />
      <div className="flex justify-between">
        <div className="flex gap-6 mb-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3>{reading_time} min read</h3>
          <button
            onClick={() => handleBookmarks(blog)}
            className="text-2xl text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href="">#{hash}</a>
        </span>
      ))}{" "}
      <br />
      <button
        className="text-purple-600 text-xl"
        onClick={() => handleReadingTime(id, reading_time)}
      >
        Mark as Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
