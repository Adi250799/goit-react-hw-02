import PropTypes from 'prop-types';

const Options = ({ onFeedbackChange, onReset, hasFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedbackChange('good')}>Good</button>
      <button onClick={() => onFeedbackChange('neutral')}>Neutral</button>
      <button onClick={() => onFeedbackChange('bad')}>Bad</button>
      {hasFeedback && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onFeedbackChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  hasFeedback: PropTypes.bool.isRequired,
};

export default Options;