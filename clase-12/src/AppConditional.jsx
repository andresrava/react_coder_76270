import ConditionalExample from "./components/ConditionalProps";
const AppConditional = () => {
    return (
      <div>
        <h2>Conditional Props and Attributes Example</h2>
        <ConditionalExample isActive={false} isDisabled={false} isError={true} />
        <ConditionalExample isActive={false} isDisabled={true} isError={false} />
        <ConditionalExample isActive={true} isDisabled={false} isError={false} />
      </div>
    );
  };
  
  export default AppConditional;