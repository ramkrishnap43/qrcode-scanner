import React, { useState } from 'react';
import {Container , Card,CardContent,Grid,TextField, makeStyles, Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  title: {
    display: "flex",
    padding: 20,
    background: '#00897b',
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  btn : {
    marginTop : 10,
    marginBottom : 20,
  }
}))


const QrCode = () => {

  const classes = useStyles()
  const [url, setUrl] = useState('')


  return (
    <div>
        <Container className={classes.container}>
          <Card>
            <h2 className={classes.title}>Generate and download QR code</h2>
          </Card>
          <CardContent>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label='Enter Text Here' value={url} onChange={(e) => setUrl(e.target.value)} />
              <Button variant='contained' className={classes.btn} >Generate QR Code</Button>
            </Grid>
          </CardContent>
        </Container>
    </div>
  )
}

export default QrCode