import React from 'react';
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({

    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover' : {
            backgroundColor: 'blue'
        }
    },
    title:{
        textDecoration: 'underline',
        marginTop: 10,
        marginLeft: 80
    }
})


export default function About() {
    const classes = useStyles()
    return (
        <Container>
             <Head>
        <title>About</title>
      </Head>
      <Typography className={classes.title} variant="h6" color='textSecondary' gutterBottom>
      This is table page demo content.
      </Typography>
        
           </Container>
    );
};

