import "./conditional.css"
// Componente principal
const ConditionalExample = ({ isActive, isDisabled, isError }) => {
  // Class Anti-Pattern: Definir estilos condicionalmente dentro del render.
  const buttonClasses = isError
    ? 'btn btn-danger'
    : isActive
    ? 'btn btn-success'
    : 'btn btn-primary';

  return (
    <div>
      {/* Conditional Props */}
      <button
        className={buttonClasses} // Multi-class conditional attributes
        disabled={isDisabled} // Conditional attribute (true/false)
        onClick={isDisabled ? null : () => alert('Button clicked!')} // Conditional props for event handling
      >
        {isDisabled ? 'Disabled' : isError ? 'Error' : 'Click Me'}
      </button>
    </div>
  );
};

export default ConditionalExample;