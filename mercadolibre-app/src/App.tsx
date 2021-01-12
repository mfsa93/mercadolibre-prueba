import { Suspense } from 'react';
import './App.css';
import Header from './modules/Header'
import Routes from './main/routes'
function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Suspense>
  );
}

export default App;
