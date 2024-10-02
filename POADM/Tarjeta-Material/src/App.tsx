// app.tsx

import React from 'react';
import MediaCard from './CardComponet';

const App: React.FC = () => {
  return (
    <div>
      <h1>Tiranosaurio Rex</h1>
      <MediaCard />  {/* Aquí estás usando tu componente */}
    </div>
  );
};

export default App;
