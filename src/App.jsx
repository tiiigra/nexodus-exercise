import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Products } from './routes';
import { IntlProvider } from 'react-intl';
import 'core-js/stable';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

const App = () => (
  <BrowserRouter>
      <EuiProvider colorMode="light">
        <IntlProvider locale={navigator.language}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </IntlProvider>
      </EuiProvider>
  </BrowserRouter>
);

export default App;
