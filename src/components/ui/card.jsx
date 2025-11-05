import PropTypes from "prop-types";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border border-gray-700 bg-[#111] p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
