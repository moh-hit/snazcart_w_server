import React, { lazy, Suspense } from "react";
// import MainProductsCard from "../Components/mainProductCard";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SkeletonCard from '../Components/SkeletonCard'
import InputLabel from '@material-ui/core/InputLabel';
import FilterDropdown from '../Components/FilterDropdown'

const MainProductsCard = lazy(() => import("../Components/mainProductCard"));


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function TrendingProductsCard(props) {
        var trending_products = [
            {
              image:
                "https://i.etsystatic.com/6032137/r/il/9e75e6/1941982764/il_1588xN.1941982764_ajr8.jpg",
              price: "524",
              name: "Men Navy Blue  Shirt"
            },
            {
              image:
                "https://i.etsystatic.com/22328170/d/il/4bc910/2209267278/il_340x270.2209267278_4pp4.jpg",
              price: "559",
              name: "Women Navy Blue  Kurta"
            },
            {
              image:
                "https://i.etsystatic.com/6110380/d/il/3afe83/1903103544/il_340x270.1903103544_fau2.jpg",
              price: "764",
              name: "Women Yellow Jumpsuit"
            },
            {
              image:
                "https://i.etsystatic.com/13759830/d/il/32b2df/1241278520/il_340x270.1241278520_836q.jpg",
              price: "699",
              name: "Men Grey Sweatshirt"
            },
            {
              image:
                "https://i.etsystatic.com/8774067/c/943/749/0/97/il/65a93d/1304249684/il_340x270.1304249684_9d3i.jpg",
              price: "26499",
              name: "Unisex Silver-Toned Series "
            },
            {
              image:
                "https://i.etsystatic.com/7371176/r/il/47f375/1400337873/il_794xN.1400337873_b22x.jpg",
              price: "1574",
              name: "Men Gray Sneakers"
            },
            {
                image:
                  "https://i.etsystatic.com/6032137/r/il/9e75e6/1941982764/il_1588xN.1941982764_ajr8.jpg",
                price: "524",
                name: "Men Navy Blue  Shirt"
              },
              {
                image:
                  "https://i.etsystatic.com/22328170/d/il/4bc910/2209267278/il_340x270.2209267278_4pp4.jpg",
                price: "559",
                name: "Women Navy Blue  Kurta"
              },
              {
                image:
                  "https://i.etsystatic.com/6110380/d/il/3afe83/1903103544/il_340x270.1903103544_fau2.jpg",
                price: "764",
                name: "Women Yellow Jumpsuit"
              },
              {
                image:
                  "https://i.etsystatic.com/13759830/d/il/32b2df/1241278520/il_340x270.1241278520_836q.jpg",
                price: "699",
                name: "Men Grey Sweatshirt"
              },
              {
                image:
                  "https://i.etsystatic.com/8774067/c/943/749/0/97/il/65a93d/1304249684/il_340x270.1304249684_9d3i.jpg",
                price: "26499",
                name: "Unisex Silver-Toned Series "
              },
              {
                image:
                  "https://i.etsystatic.com/7371176/r/il/47f375/1400337873/il_794xN.1400337873_b22x.jpg",
                price: "1574",
                name: "Men Gray Sneakers"
              },
              {
                image:
                  "https://i.etsystatic.com/6032137/r/il/9e75e6/1941982764/il_1588xN.1941982764_ajr8.jpg",
                price: "524",
                name: "Men Navy Blue  Shirt"
              },
              {
                image:
                  "https://i.etsystatic.com/22328170/d/il/4bc910/2209267278/il_340x270.2209267278_4pp4.jpg",
                price: "559",
                name: "Women Navy Blue  Kurta"
              },
              {
                image:
                  "https://i.etsystatic.com/6110380/d/il/3afe83/1903103544/il_340x270.1903103544_fau2.jpg",
                price: "764",
                name: "Women Yellow Jumpsuit"
              },
              {
                image:
                  "https://i.etsystatic.com/13759830/d/il/32b2df/1241278520/il_340x270.1241278520_836q.jpg",
                price: "699",
                name: "Men Grey Sweatshirt"
              },
              {
                image:
                  "https://i.etsystatic.com/8774067/c/943/749/0/97/il/65a93d/1304249684/il_340x270.1304249684_9d3i.jpg",
                price: "26499",
                name: "Unisex Silver-Toned Series "
              },
              {
                image:
                  "https://i.etsystatic.com/7371176/r/il/47f375/1400337873/il_794xN.1400337873_b22x.jpg",
                price: "1574",
                name: "Men Gray Sneakers"
              }
      
          ];
        var all_trending = trending_products.map(products => {
            return (
                <Suspense fallback={<SkeletonCard />}>

              <MainProductsCard
                source={products.image}
                price={products.price}
                name={products.name}
              />
                  </Suspense>

            );
          });

          const classes = useStyles();
          const [age, setAge] = React.useState('Sort By');

          const handleChange = event => {
            setAge(event.target.value);
          };


          const [pFilter, setPFilter] = React.useState('');

          const handleChangeFilter = event => {
            setPFilter(event.target.value);
          };
        
        return (
            <div className="productsContainer">
                      <div className="py-1 d-flex justify-content-start filterSortArea">
   
   <div className="ml-3">
            <FilterDropdown />
   </div>
  
</div>
        <div className="row justify-content-start allProducts">{all_trending}</div>
            </div>
        )
}
