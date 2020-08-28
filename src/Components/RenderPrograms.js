import React from 'react';
import { Grid, CardHeader,CardContent,Card, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './RenderProgram.scss';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1024,
      lg: 1440,
      
    },
  },
})



const RenderPrograms=props=>{
    
 const spacexprog=props.programs.map((program)=>{
     return (
         <div>
            <ThemeProvider theme={theme}>
             <Grid item sm={4} md={2} lg={4}>
             <Card className="card-comp" variant="outlined" style={{padding:'5px'}}>
                 <CardActionArea>
                 <CardMedia image={program.links.mission_patch} style={{height:'230px',backgroundColor:'lightgray'}}/>
                 
                
                 <CardContent>
                     <p className="name">{program.mission_name} # {program.flight_number}</p>
                     <p className="id"> Mission Ids: <span>{ program.mission_id}</span></p>
                     <p className="id">Launch Year: <span>{program.launch_year}</span></p>
                     <p className="id">Successfull Launch: <span>{ String(program.launch_success) }</span></p>
                     <p className="id">Successfull Landing: <span>launch_landing</span></p>
                 </CardContent>
                 </CardActionArea>
             </Card>
             </Grid>
             </ThemeProvider>   
         </div>
     )
 })
 return(
 <div>
     <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:'14px'}}>
     {spacexprog}
     </Grid>
     </div>
 )
}
export default RenderPrograms;