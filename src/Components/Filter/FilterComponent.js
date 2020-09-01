import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent,Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import './filter.scss';


   
class FilterComponent extends React.Component{
  
    constructor(){
        super();
        this.state={
            term1:'',
            term2:'',
            term3:'' 
        }
        
    }
    componentDidMount(){
      $("Button").click(function() {
        $("Button").removeClass("active");
        $(this).addClass("active");
     });
    }
    OnButton1Click= (e) =>{
        this.setState({term1:e.currentTarget.value,term2:'',term3:''});
               
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        },2000);
        
        
    }
    OnButton2Click= (e) =>{
        this.setState({term1:'',term2:e.currentTarget.value,term3:''});
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        },2000);
        
       
        
    }
    handleInput= (e) =>{
      e.preventDefault();
     
        this.setState({term1:'',term2:'',term3:e.currentTarget.value});
        
        setTimeout(()=>{
            this.props.onClick(this.state.term1,this.state.term2,this.state.term3);
        })
       
       
        
    }
    
   render(){
    
    return(
        
        <Card variant="outlined" style={{minWidth:'200px',marginTop:'20px'}}>
          <h2 style={{marginLeft:'15px'}}>Filters</h2> 
          <CardContent>
          <Typography variant="body1" color="textSecondary" component="p" align="center">
            Launch Year
            <hr style={{width:'100px'}}/>
            
          </Typography>
           <Grid container direction="row" spacing={3} className="grid-bottom" >
           
               <Grid item xs={6} sm={6} md={6} lg={6} alignItems="center">
               <Button className="btn" variant="contained"  value="2006"  onClick={this.handleInput} data-testid="year_button" >2006</Button>
               </Grid>
             
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn" variant="contained" value="2007" onClick={this.handleInput}>2007</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn "  variant="contained" value="2008" onClick={this.handleInput}>2008</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2009" onClick={this.handleInput}>2009</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2010" onClick={this.handleInput}>2010</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2011" onClick={this.handleInput}>2011</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2012" onClick={this.handleInput}>2012</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2013" onClick={this.handleInput}>2013</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2014" onClick={this.handleInput} >2014</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2015" onClick={this.handleInput}>2015</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2016" onClick={this.handleInput}>2016</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <Button className="btn " variant="contained" value="2017" onClick={this.handleInput}>2017</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6}>
               <Button className="btn " variant="contained" value="2018" onClick={this.handleInput}>2018</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2019" onClick={this.handleInput}>2019</Button>
               </Grid>
               <Grid item xs={6} sm={6} md={6} lg={6} >
               <Button className="btn " variant="contained" value="2020" onClick={this.handleInput}>2020</Button>
               </Grid>
            
            </Grid>
            <Typography variant="body1" color="textSecondary" component="p" align="center" className="grid-bottom">
            Successful Launch
            <hr style={{width:'150px'}}/>
          <Button className="btn " variant="contained" style={{marginRight:'20px'}} value="true" onClick={this.OnButton1Click}>True</Button>
          
          <Button className="btn " variant="contained" value="false" onClick={this.OnButton1Click}>False</Button>
          </Typography>
        
          <Typography variant="body1" color="textSecondary" component="p" align="center" className="grid-bottom">
            Successful Landing
            <hr style={{width:'150px'}}/>
            <Button className="btn " variant="contained" style={{marginRight:'20px'}} value="true"  onClick={this.OnButton2Click} >True</Button>
          <Button className="btn " variant="contained" value="false"  onClick={this.OnButton2Click}>False</Button>
          </Typography>
          </CardContent>
        </Card>
    )
}

}

export default FilterComponent;