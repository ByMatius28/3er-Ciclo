import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://i.blogs.es/85460a/portada/650_1200.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          T-Rex
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        El Tyrannosaurus rex, o T-rex, fue un enorme dinosaurio carnívoro que vivió hace unos 68-66 millones de años. Medía hasta 12 metros de largo y tenía una poderosa mandíbula con dientes afilados. Es famoso por ser uno de los depredadores más temibles de su época.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Leer Mas</Button>
      </CardActions>
    </Card>
  );
}