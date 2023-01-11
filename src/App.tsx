import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
