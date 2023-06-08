import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { AuthContext } from './Contaxts/AuthProvider';

function App() {
  const { isDarkMode } = useContext(AuthContext)
  const darkModeStyles = {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  };

  const lightModeStyles = {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
  };

  const appStyles = isDarkMode ? darkModeStyles : lightModeStyles;
  return (
    <div style={appStyles}>

      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
