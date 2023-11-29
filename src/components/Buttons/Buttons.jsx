import css from './Buttons.module.css';

const Buttons = ({ handleClick, options }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map((option, id) => (
        <button
          key={id}
          className={css.button}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
