import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const FilterSideBar = props => {
  const [value, setValue] = React.useState("100");

  const handleChangeRadio = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    red: true,
    green: false,
    blue: false
  });

  const handleChangeCheckBox = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { red, blue, green } = state;


  return (
    <div className="filterSidebar">
      <div class="vertical-filters-filters header-container">
        <span class="header-title">FILTERS</span>
      </div>
      {/* <div className="genderFilter">
<FormControl component="fieldset">
  <FormLabel component="legend">Filter By Gender</FormLabel>

      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
        <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
        <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
        <FormControlLabel value="boy" control={<Radio size="small" />} label="Boy" />
        <FormControlLabel value="girl" control={<Radio size="small" />} label="Girl" />

      </RadioGroup>
</FormControl>
</div> */}
      <div className={classes.root} id="colorFilter">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Filter By Color</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={red}
                  onChange={handleChangeCheckBox}
                  name="red"
                />
              }
              label="Red"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={blue}
                  onChange={handleChangeCheckBox}
                  name="blue"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={green}
                  onChange={handleChangeCheckBox}
                  name="green"
                />
              }
              label="Green"
            />
              <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={red}
                  onChange={handleChangeCheckBox}
                  name="red"
                />
              }
              label="Red"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={blue}
                  onChange={handleChangeCheckBox}
                  name="blue"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={green}
                  onChange={handleChangeCheckBox}
                  name="green"
                />
              }
              label="Green"
            />
              <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={red}
                  onChange={handleChangeCheckBox}
                  name="red"
                />
              }
              label="Red"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={blue}
                  onChange={handleChangeCheckBox}
                  name="blue"
                />
              }
              label="Blue"
            />
          
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.root} id="priceFilter">
      <FormControl component="fieldset">
  <FormLabel component="legend">Filter By Gender</FormLabel>

      <RadioGroup aria-label="price" name="price" value={value} onChange={handleChangeRadio}>
        <FormControlLabel value="100" control={<Radio size="small" />} label="100-500" />
        <FormControlLabel value="501" control={<Radio size="small" />} label="501-1000" />
        <FormControlLabel value="1001" control={<Radio size="small" />} label="1001-2000" />
        <FormControlLabel value="2001" control={<Radio size="small" />} label="2001+" />

      </RadioGroup>
</FormControl>
      </div>
    </div>
  );
};

export default FilterSideBar;
