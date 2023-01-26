import Router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/fonts.css';
function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
