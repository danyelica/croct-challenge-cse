import { CroctProvider } from '@croct/plug-react';
import ReactDOM from 'react-dom/client';
import HomePage from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CroctProvider appId="00000000-0000-0000-0000-000000000000">
    <HomePage />
  </CroctProvider>
)
