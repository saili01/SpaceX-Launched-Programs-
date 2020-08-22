import React from 'react';
import { Grid, CardHeader,CardContent,Card, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './RenderProgram.scss';

const useStyles = makeStyles({
    root: {
      minWidth: 230,
      marginTop:36,
    },
    media: {
        height: 230,
        backgroundColor:"lightgray",
      },
    title: {
      fontSize: 12,
    },

    
  });

const RenderPrograms=props=>{
    const classes = useStyles();
 const spacexprog=props.programs.map((program)=>{
     return (
         <div>
             <Grid item xs={12} sm={2} md={2} lg={2} >
             <Card className={classes.root} variant="outlined" style={{padding:'5px'}}>
                 <CardActionArea>
                 <CardMedia className={classes.media} image={program.links.mission_patch} />
                 
                
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
             
         </div>
     )
 })
 return(
 <div>
     <Grid container direction="row" spacing={4} justify="center" alignItems="center">
     {spacexprog}
     </Grid>
     </div>
 )
}
export default RenderPrograms;