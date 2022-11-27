 // search bar in navbar
 import { useEffect ,useState } from "react";
 import { makeStyles  , InputBase, List, ListItem  } from "@material-ui/core";
 import SearchIcon from '@material-ui/icons/Search';
 import { useSelector, useDispatch  } from 'react-redux'; // hooks
import { getProducts as listProducts } from "../../redux/actions/productAction.js"
import { Link } from "react-router-dom";

 const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
      position: 'absolute',
      color: '#000',
      background: '#FFFFFF',
      marginTop: 36
    }
}))


 const Search = ()=>{
     const classes = useStyle();
     const getProducts = useSelector(state => state.getProducts);
     const { products } = getProducts;
     const [open, setOpen ] = useState(true);

     const [text , setText ] = useState();
 
     const dispatch = useDispatch();
 
     useEffect(() => {
         dispatch(listProducts())
     }, [dispatch])

     const getText = (text) => {
      setText(text);
      setOpen(false);
      
  }
     return(
        <div className={classes.search}>
        
        <InputBase
          placeholder=" Search your items here "
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) =>getText(e.target.value )}
        />
        <div className={classes.searchIcon}>
          < SearchIcon />
        </div>
        {
          text && 
          <List className={classes.list} hidden={open} >
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link  to={`/product/${product.id}`} 
                  style={{ textDecoration:'none', color:'inherit'}} 
                  onClick={() => setOpen(true)} 
                  >

                  {product.title.longTitle }
                  </Link>
                    
                </ListItem>
      ) )
            }

          </List>
        }
      </div>
     )
 }
 export default Search;