import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';

const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter
			future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
		>
			<QueryClientProvider client={query}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>,
);
