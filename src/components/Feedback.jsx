import PropTypes from 'prop-types';

const Feedback = ({ feedback }) => {
  return (
    <div>
      <p>{feedback.good} Good</p>
      <p>{feedback.neutral} Neutral</p>
      <p>{feedback.bad} Bad</p>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
