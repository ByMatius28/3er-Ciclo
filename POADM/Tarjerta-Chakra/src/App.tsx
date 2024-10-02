import { ChakraProvider } from '@chakra-ui/react';  
import CardComponent from './CardComponent'; // Asegúrate de usar la ruta correcta  

const App = () => {  
  return (  
    <ChakraProvider>  
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>  
        <CardComponent />  
      </div>  
    </ChakraProvider>  
  );  
};  

export default App;