import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { lightGreen} from '@material-ui/core/colors';
import './filter.scss';
import SelectInput from '@material-ui/core/Select/SelectInput';




  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(lightGreen[500]),
      backgroundColor: lightGreen[300],
      '&:hover': {
        backgroundColor: lightGreen[700],
      },
    },
  }))(Button);

class FilterComponent extends React.Component{
   
    constructor(){
        super();
        this.state={
            term1:'',
            term2:'',
            term3:''
        }
    }
    OnButton1Click= () =>{
        this.setState({term1:'true',term2:'',term3:''});
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        },2000);
        
        
    }
    OnButton2Click= () =>{
        this.setState({term1:'true',term2:'true',term3:''});
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        },2000);
        
       
        
    }
    OnButton3Click= () =>{
        this.setState({term1:'true',term2:'true',term3:'2014'});
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        })
        
       
        
    }
   render(){
        
    return(
        
        <Card variant="outlined" style={{minWidth:'200px',marginTop:'20px'}}>
          <CardHeader title="Filters"/>
          <CardContent>
          <Typography variant="body1" color="textSecondary" component="p" align="center">
            Launch Year
            <hr style={{width:'100px'}}/>
            
          </Typography>
           <Grid container direction="row" justify="center" spacing={3} className="grid-bottom">
           
               <Grid item xs={6} sm={6} md={6} lg={6} alignItems="center">
               <ColorButton variant="contained" color="primary" >2006</ColorButton>
               </Grid>
             
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2007</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2008</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2009</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2010</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2011</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2012</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2013</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" onClick={this.OnButton3Click}>2014</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2015</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2016</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <ColorButton variant="contained">2017</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <ColorButton variant="contained">2018</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2019</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained">2020</ColorButton>
               </Grid>
            
            </Grid>
          <Typography variant="body1" color="textSecondary" component="p" align="center" >
            Successful Launch
            <hr style={{width:'150px'}}/>
          <ColorButton variant="contained" style={{marginRight:'20px'}} onClick={this.OnButton1Click}>True</ColorButton>
          
          <ColorButton variant="contained">False</ColorButton>
          </Typography>
        
          <Typography variant="body1" color="textSecondary" component="p" align="center" className="grid-bottom">
            Successful Landing
            <hr style={{width:'150px'}}/>
            <ColorButton variant="contained" style={{marginRight:'20px'}} onClick={this.OnButton2Click} >True</ColorButton>
          <ColorButton variant="contained">False</ColorButton>
          </Typography>
          </CardContent>
        </Card>
    )
}

}

export default FilterComponent;