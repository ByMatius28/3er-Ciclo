import { Card, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react';  

const CardComponent = () => {  
  return (  
    <Card maxW='sm'>  
      <CardBody>  
        <Image  
          src='https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart'  
          alt='Green double couch with wooden legs'  
          borderRadius='lg'  
        />  
        <Stack mt='6' spacing='3'>  
          <Heading size='md'>Ps5</Heading>  
          <Text>  
            Esta es las nueva Ps5 lanzada con su potencia y su gran diseño podras disfrutas de todos los juegos 
          </Text>  
          <Text color='blue.600' fontSize='2xl'>  
            $750  
          </Text>  
        </Stack>  
      </CardBody>  
      <Divider />  
      <CardFooter>  
        <ButtonGroup spacing='2'>  
          <Button variant='solid' colorScheme='blue'>  
            Comprar ahora  
          </Button>  
          <Button variant='ghost' colorScheme='blue'>  
            Añadir al Carrito 
          </Button>  
        </ButtonGroup>  
      </CardFooter>  
    </Card>  
  );  
};  

export default CardComponent; // Asegúrate de exportarlo para que pueda ser usado en otros archivos