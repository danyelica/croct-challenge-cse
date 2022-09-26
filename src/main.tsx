import { CroctProvider } from '@croct/plug-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import MainRoutes from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CroctProvider appId="00000000-0000-0000-0000-000000000000">
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
  </CroctProvider>
)
