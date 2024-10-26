
import React, { useState } from 'react';
import LoadingAnimation from './Components/LoadingAnimation';
import { Home } from './All';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation setIsLoading={setIsLoading} />
      ) : (
        <Home />
       
      )}
    </>
  );
}

export default App;
