import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent,Typography } from '@material-ui/core';
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
    handleInput= (e) =>{
      e.preventDefault();
     
        this.setState({term1:'true',term2:'true',term3:e.currentTarget.value});
        
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
           <Grid container direction="row" justify="center" spacing={3} className="grid-bottom" >
           
               <Grid item xs={6} sm={6} md={6} lg={6} alignItems="center">
               <ColorButton variant="contained" color="primary" value="2006" onClick={this.handleInput} data-testid="year_button">2006</ColorButton>
               </Grid>
             
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2007" onClick={this.handleInput}>2007</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2008" onClick={this.handleInput}>2008</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2009" onClick={this.handleInput}>2009</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2010" onClick={this.handleInput}>2010</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2011" onClick={this.handleInput}>2011</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2012" onClick={this.handleInput}>2012</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2013" onClick={this.handleInput}>2013</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2014" onClick={this.handleInput} >2014</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2015" onClick={this.handleInput}>2015</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2016" onClick={this.handleInput}>2016</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <ColorButton variant="contained" value="2017" onClick={this.handleInput}>2017</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <ColorButton variant="contained" value="2018" onClick={this.handleInput}>2018</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2019" onClick={this.handleInput}>2019</ColorButton>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <ColorButton variant="contained" value="2020" onClick={this.handleInput}>2020</ColorButton>
               </Grid>
            
            </Grid>
            <Typography variant="body1" color="textSecondary" component="p" align="center" className="grid-bottom">
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