import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ eachNews }) => {
  const formattedDate = new Date(
    eachNews.author.published_date
  ).toLocaleDateString();
  const {id}=eachNews;
  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author + Share */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={eachNews.author.img} alt={eachNews.author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{eachNews.author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary cursor-pointer">
          {eachNews.title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={eachNews.thumbnail_url}
          alt={eachNews.title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-accent">
        {eachNews.details.length > 200 ? (
          <>
            {eachNews.details.slice(0, 200)}...
            <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
              Read more
            </Link>
          </>
        ) : (
          eachNews.details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: Math.floor(eachNews.rating.number) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{eachNews.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{eachNews.total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;