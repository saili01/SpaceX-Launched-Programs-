import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from '../Api/spacexdata';
import RenderPrograms from './RenderPrograms';
import FilterComponent from '../Components/Filter/FilterComponent';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 1025,
        lg: 1440,
        
      },
    },
  })

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
        <ThemeProvider theme={theme}>
        <Typography variant="h5" component="h2">
            SpaceX Launch Programs
        </Typography>
        <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={4}>
          <FilterComponent onClick={this.renderPosts}/>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={8}>
        <RenderPrograms programs={this.state.list}/>
        </Grid>
        </Grid>
        <h2 style={{textAlign:"center"}}>Developed by: <span style={{fontWeight:'normal'}}>Saili Manchkar</span></h2>
        </ThemeProvider>
    </div>
)
}
}
export default LandingPage;