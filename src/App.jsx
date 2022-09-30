import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { EuiProvider } from '@elastic/eui';
import { Home, Products, ProtectedRoute } from './routes';
import 'core-js/stable';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';

const App = () => {
  return (
    <BrowserRouter>
        <EuiProvider colorMode="light">
          <IntlProvider locale={navigator.language}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              } />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
          </IntlProvider>
        </EuiProvider>
    </BrowserRouter>
  )
};

export default App;
