import * as React from 'react';
import { default as Box } from '@mui/material/Box';
import { default as Card } from '@mui/material/Card';
import { default as CardActions } from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Card.css';

export default function BasicCard({ user, index, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Invoke the onDelete callback prop
  };

  return (
    <div className='card_container'>
      <Card
        sx={{ minWidth: 300, display: 'flex', justifyContent: 'space-evenly', alignItems:'center' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              🧑‍💼 &nbsp; USER {index + 1}
            </Typography>
            <Typography variant='h5' component='div'>
              {user.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              📧 &nbsp; {user.email}
            </Typography>
            <Typography variant='body2'>📞 &nbsp; {user.phone}</Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <CardActions>
              <Box sx={{ pr: 1 }}>
                <Link to={`/edit/${user.id}`}>
                  <Button size='small' variant='contained'>
                    EDIT
                  </Button>
                </Link>
              </Box>
              <Box>
                <Button
                  size='small'
                  variant='contained'
                  color='error'
                  onClick={handleDelete}
                >
                  DELETE
                </Button>
              </Box>
            </CardActions>
          </Box>
        </Box>

        <CardMedia
          // sx={{ width: 140 }}
          className='card_media'
          image='Profile_Icon.png'
          title='green iguana'
          component='img'
        />
      </Card>
    </div>
  );
}
