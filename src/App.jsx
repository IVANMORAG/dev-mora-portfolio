import { lazy, Suspense } from 'react';
import './App.css'; // Si tienes estilos globales

// Carga perezosa del componente
const CircuitoPresentacion = lazy(() => import('./components/CircuitoPresentacion'));

function App() {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#111'
      }}>
        {/* Puedes personalizar este loader */}
        <div style={{ color: '#4af', fontSize: '1.5rem' }}>Cargando portfolio...</div>
      </div>
    }>
      <CircuitoPresentacion />
    </Suspense>
  );
}

export default App;