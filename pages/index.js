import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Note } from '@material-ui/icons';
import NoteCard from '../components/NoteCard';

const useStyles = makeStyles({

  sideHome: {
    marginLeft:80
  }
})

const homes = [
  {
      title: 'New Leads',
     id: 1,
      num: 241
  },
  {
    title: 'cost',
    id: 2,
    num: 2244
},
{
  title: 'Salary',
  id: 3,
  num: 312
}
]
  

export default function Home() {
  const classes = useStyles()

  return (
    
    <Container className={classes.sideHome}>
<Grid container elevation={3}>
  {
    homes.map (home=>(
      <Grid item key = {home.id} xs={12} md={6} lg={4}>
        <NoteCard  home={home}/>
      </Grid>
    ))
  }
</Grid>
    </Container>
    
  )
}
