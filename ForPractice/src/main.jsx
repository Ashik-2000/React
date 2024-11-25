import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

class Clock extends React.Component {
  render() {
    return (
      <h1>
        <span>{new Date().toLocaleDateString()}</span>
      </h1>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));