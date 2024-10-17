import ReactDom from 'react-dom/client';

const App = () => {
  return (
    <div>App</div>
  )
}

// get root
const root = ReactDom.createRoot(document.getElementById('root'));

// render the app component
root.render(<App />);


