// CSSInJSExamples.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/* ---------------------- 1. Inline Styles ---------------------- */
const InlineStyleExample = () => {
  const buttonStyle = {
    backgroundColor: "tomato",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Inline Style</button>;
};

const inlineCode = `
const buttonStyle = {
  backgroundColor: "tomato",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

return <button style={buttonStyle}>Inline Style</button>;
`;

/* ---------------------- 2. Styled Components ---------------------- */

const styledCode = `
const StyledButton = styled.button\`
  background: \${(props) => (props.primary ? "tomato" : "gray")};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    opacity: 0.8;
  }
\`;

<StyledButton primary>Primary</StyledButton>
<StyledButton>Secondary</StyledButton>
`;

/* ---------------------- 3. Emotion ---------------------- */


const emotionCode = `
const dynamicStyle = (isPrimary) => css\`
  background: \${isPrimary ? "tomato" : "gray"};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 5px;
\`;

<div css={dynamicStyle(true)}>Emotion CSS Prop</div>
<EmotionDiv>Emotion Styled Component</EmotionDiv>
`;

/* ---------------------- 4. CSS Modules ---------------------- */
// Button.module.css
// .button {
//   background-color: tomato;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 8px;
//   cursor: pointer;
// }



const cssModuleCode = `
// Button.module.css
.button {
  background-color: tomato;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

<button className={styles.button}>CSS Module</button>
`;

/* ---------------------- Main Demo Component ---------------------- */
export default function CSS() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🎨 CSS-in-JS Approaches in React</h2>

      {/* Inline Styles */}
      <h3>1️⃣ Inline Styles</h3>
      <InlineStyleExample />
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {inlineCode}
      </SyntaxHighlighter>

      {/* Styled Components */}
      <h3>2️⃣ Styled Components</h3>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {styledCode}
      </SyntaxHighlighter>

      {/* Emotion */}
      <h3>3️⃣ Emotion</h3>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {emotionCode}
      </SyntaxHighlighter>

      {/* CSS Modules */}
      <h3>4️⃣ CSS Modules</h3>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {cssModuleCode}
      </SyntaxHighlighter>
    </div>
  );
}
