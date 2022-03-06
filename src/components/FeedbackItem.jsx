import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
        className="close"
      >
        <FaTimes color="purpule" />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className="edit"
      >
        <FaEdit />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
