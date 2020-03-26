import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PromotionalStrip from '../../Components/PromotionalStrip'
import FilterSideBar from '../../Components/FilterSideBar'
import ProductsContainer from '../../Components/ProductsContainer';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Products = (props) => {

  const classes = useStyles();
const [age, setAge] = React.useState('Sort By');

const handleChange = event => {
  setAge(event.target.value);
};

  return (
    <>
    <PromotionalStrip />
    <div className="container-custom pt-3 mb-3">
    <div className="d-flex justify-content-start py-2">
    <a className="breadCrumb"> Products / Clothes / Ethnic / <strong>Women</strong></a>
    </div>
    <a className="productTitle"><strong>Women</strong></a>

    

 

<div className="d-flex">
<FilterSideBar />
<ProductsContainer />
</div>
    </div>
    </>

  )
}

export default Products;
