import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as Element;
const App = () => <div>123</div>;
createRoot(rootElement).render(<App />);
