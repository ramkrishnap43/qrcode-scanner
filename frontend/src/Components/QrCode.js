import React, { useState } from 'react';
import {Container , Card,CardContent,Grid,TextField, makeStyles, Button} from "@material-ui/core";
import axios from "axios"


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
  const [url, setUrl] = useState('');
  const [qrImage, setQrImage] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/scanQrcode", {url:url})
    .then((res)=> {
      console.log(res)
      setQrImage(res.data)
    })
  }


  return (
    <div>
        <Container className={classes.container}>
          <Card>
            <h2 className={classes.title}>Generate,download and Scan QR code</h2>
          </Card>
          <CardContent>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label='Enter Text Here' value={url} onChange={(e) => setUrl(e.target.value)} />
              <Button variant='contained' color='primary' onClick={handleClick} className={classes.btn} >Generate QR Code</Button>
            <br />
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>

              {
                url.length > 0 && qrImage ? 

                <>
                <a href={qrImage} download><img className={classes.image} src={qrImage} alt='qrImage' /></a>
                <p>Scan The QR Code to access tha data</p>
                </>
                : null
              }
            </Grid>


          </CardContent>
        </Container>
    </div>
  )
}

export default QrCode