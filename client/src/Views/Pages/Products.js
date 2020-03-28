import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PromotionalStrip from "../../Components/PromotionalStrip";
import FilterSideBar from "../../Components/FilterSideBar";
import ProductsContainer from "../../Components/ProductsContainer";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: 20
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Products = props => {
  const classes = useStyles();
  const [age, setAge] = React.useState("Sort By");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <>
      <PromotionalStrip />
      <div className="container-custom pt-3 mb-3">
        <div className="d-flex justify-content-between py-2">
          <a className="breadCrumb">
            {" "}
            Products / Clothes / Ethnic / <strong>Women</strong>
          </a>
          <FormControl variant="filled" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="Sort By">
                <em>Sort By</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <a className="productTitle">
          <strong>Women</strong>
        </a>

        <div className="d-flex">
          <FilterSideBar />
          <ProductsContainer />
        </div>
      </div>
    </>
  );
};

export default Products;
