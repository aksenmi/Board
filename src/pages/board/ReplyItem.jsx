import PropTypes from "prop-types";

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ReplyItem({ item }) {
  return (
    <div className="p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src={`${import.meta.env.VITE_API_SERVER}/files/${item.user.profile}`}
          alt=""
        />
        <a className="text-blue-500" href="">
          {item.user.name}
        </a>
        <time className="text-gray-500" dateTime={item.createdAt}>
          {item.createdAt}
        </time>
      </div>
      <pre className="text-sm whitespace-pre-wrap">{item.comment}</pre>
    </div>
  );
}

export default ReplyItem;
