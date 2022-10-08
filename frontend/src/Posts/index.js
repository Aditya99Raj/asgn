// import { Button,  CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import axios from 'axios'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



/**
 * The below components shows the working example of axios for API calls.
 * Also Material UI is integrated for design.
 * 
 * 
 */

import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
//  import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function TestingAPI() {
    const [searchField, setSearchField] = React.useState("");
    const [data, setData] = React.useState([]);
    const [post, setPost] = React.useState({
        title: "",
        desc: "",
        image: "",

    });

    React.useEffect(() => {
        getData()
        // postData()
    }, [])
    const payload = {
        title: post.title,
        desc: post.desc,
        image: post.image
    }

    const handleSubmit = (e) => {

        console.log("e", e.target)
        e.preventDefault();
        postData()
        setPost({
            name: "",
            desc: "",
            image: "",

        })

    }
    const getData = () => {
        axios.get('http://localhost:8000/users').then((res) => {
            const response = res.data
            console.log(response)
            setData(response)
        })
    }

    // const FindUsers = () => {
    //     axios.find('http://localhost:8000/users',)
    // }

    const postData = () => {
        axios.post('http://localhost:8000/add', payload).then((res) => {
            // console.log(res)
            // console.log(res.data);
            // setData(res.data)
        })
    }

    const handleChange = (e) => {

        const { name, value } = e.target
        console.log("e", e.target)
        console.log( value)

        setPost({ ...post, [name]: value })

    }
    const filteredPersons = data.filter(
        data => {
          return (
            data
            .title
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );

        }
      );
      console.log( filteredPersons)
    
      const handleSearch = e => {
        setSearchField(e.target.value);
        console.log(e.target.value);
      };
      console.log(searchField)
    

    return (
        <>
            {/* <Grid container>
        <Grid item>
            <Button>
            +
            </Button>
            <Typography>
                GALLERY
            </Typography>
            
        </Grid>
       </Grid> */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                            <Button style={{ color: 'white' }}>ADD ITEMS</Button>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            GALLERY
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                        <Search >
                            <SearchIconWrapper>
                                {/* <SearchIcon onChange={()=>handleSearch} /> */}
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleSearch}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>




            </Box>
            {filteredPersons?(<><Typography>{filteredPersons.title}</Typography></>) : (<></>)}
            {/* {data.map((el) => {
                return (
                    
                    <Grid container sm={12} md={12} lg={12} style={{display: 'flex' ,justifyContent: 'center'}}>
                        <Grid item md={4} lg={4} style={{display: 'flex'}}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardHeader

                                title={el.title}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={el.image}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                    {el.desc}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>

                            </CardActions>

                        </Card>

                        </Grid>

                    </Grid>
                    
                )
            })} */}

            <Grid style={{height: '40px'}}>
                <form onSubmit={handleSubmit} style={{height: '40px'}}>
                    <input type="text" name="title" value={post.title} onChange={handleChange} />
                    <input type="text" name="desc" value={post.desc} onChange={handleChange} />
                    <input type="url" name="image" value={post.image} onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </Grid>

        </>


    )
}

export default function Posts() {
    // You can delete testingAPI component and start your assignment.    
    return <TestingAPI />
}
