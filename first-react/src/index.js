import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App"

// taking the root from the index.html
const rootElement = document.getElementById('root');


// creating the root element in react and giving it the root HTML
const root = ReactDOM.createRoot(rootElement);

// rendering the react component
root.render(<App />);