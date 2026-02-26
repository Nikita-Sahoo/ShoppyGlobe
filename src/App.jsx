import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Header from './components/Header';
import './App.css';

// Loading component for Suspense
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loader"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;