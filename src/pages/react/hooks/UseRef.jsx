import React, {useRef} from 'react';

function UseRef() {
    const myRef = useRef(null);

  // You can use myRef to access a DOM element or store a mutable value
  // For example, you can focus an input element or keep track of a previous value

  // Example of focusing an input element
  const focusInput = () => {
    if (myRef.current) {
      myRef.current.focus();
    }
  };

  // Render the component
  // Note: You can add an input element and a button to demonstrate the focus functionality
  // For simplicity, this example just returns a simple message     
  return (
    <div>
      <h1>UseRef Hook Example</h1>
      <p>This page demonstrates the use of the useRef hook in React.</p>
      <p><input ref={myRef} type="text" placeholder="Focus me with the button" /></p>
      <p><button onClick={focusInput}>Focus Input</button></p>
      <p>UseRef is useful for accessing DOM elements directly or keeping mutable values.</p>
      <p>Check the console for any additional logs or messages.</p>
      <p>Remember to explore the useRef documentation for more advanced use cases.</p>
      <p>Enjoy learning React!</p>
      <p>Feel free to modify this component to suit your needs.</p>
      <p>Happy coding!</p>
    </div>
  );
}

export default UseRef;