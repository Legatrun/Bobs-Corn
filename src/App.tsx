import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationHeader } from './layouts/MainLayout';
import { AppRoutes } from './router/AppRoutes';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-zinc-100 p-4 md:p-8 font-sans flex flex-col gap-6">
        <NavigationHeader />
        <AppRoutes />
        <footer className="text-center text-xs text-zinc-400">
          Diseñado por Jair Merlo. © 2025
        </footer>
      </div>
    </Router>
  );


}

export default App
