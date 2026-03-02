import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Removed service pages: sprint, intel, audit */}
        </Route>

        {/* Catch-all 404 for removed service routes and other unknown paths */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-center p-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
                <p className="text-slate-400 mb-6">
                  The page you&apos;re looking for does not exist.
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
