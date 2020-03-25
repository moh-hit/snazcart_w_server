import React, { Fragment } from "react";
// import Chip from '@material-ui/core/Chip';
// import LocationOnIcon from '@material-ui/icons/LocationOn';



class CategoryBar extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cat: []
    }
  }
   handleClick = () => {
    console.info('You clicked the Chip.');
  };
 

  componentWillMount() {
    console.log("IN WILL MOUNT")
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
  //  .then(res => console.log(res))
    .then(res => {this.setState({ cat: res });console.log(res);})
    .catch(err => console.log(err));

}

  callBackendAPI = async () => {
    const response = await fetch('http://localhost:3005/categories')
  
    const body = await response.json();
    console.log(body)

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  render(){
    console.log("IN RENDER")
    var categ = this.state.cat;
    console.log(categ);
    var listItems = categ.map(category => (
      <li>
        <a href={category.refer}>{category.category}</a>
      </li>
    ));

  return (
      <header id="header-categories">
        <div className="container-nav d-flex">
          <nav className="nav-menu d-none d-lg-block mr-auto">
            <ul>{listItems}</ul>
          </nav>
           
          {/* <p className="nav-menu row d-none d-lg-block mt-2">    <Chip
        size="small"
      
        icon={<LocationOnIcon />}
        label="Track your orders"
        onClick={handleClick}
      /></p> */}
        </div>
      </header>
  );}
}

export default CategoryBar;