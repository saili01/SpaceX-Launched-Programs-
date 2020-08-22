import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from '../Api/spacexdata';
import RenderPrograms from './RenderPrograms';
import FilterComponent from './FilterComponent';



class LandingPage extends React.Component{
    state={list:[]};
    componentDidMount(){
        this.renderPosts();
   }
   renderPosts = async(term1,term2,term3) => {
       
       let res = await axios.get('/',{
        params:{
          launch_success:term1,
          land_success:term2,
          launch_year:term3,
        },
        
    });
       
       this.setState({list:res.data});
       
   }
render(){
return(
    <div>
        <Typography variant="h5" component="h2">
            SpaceX Launch Programs
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <FilterComponent onClick={this.renderPosts}/>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} >
        <RenderPrograms programs={this.state.list}/>
        </Grid>
        </Grid>
    </div>
)
}
}
export default LandingPage;