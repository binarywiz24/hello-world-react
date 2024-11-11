import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('http://127.0.0.1:8000/');
  return (
    <div className="container">
      {loading && <p>{loading}</p>}
      {data && <p>"{data[0].message}"</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
