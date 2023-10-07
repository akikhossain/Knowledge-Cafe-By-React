import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt="{`title`}" />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <h3>{reading_time} min read</h3>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href="">#{hash}</a>
        </span>
      ))}
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
