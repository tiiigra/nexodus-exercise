import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Products } from './routes';
import 'core-js/stable';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

const App = () => (
  <BrowserRouter>
      <EuiProvider colorMode="light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </EuiProvider>
  </BrowserRouter>
);

export default App;
