import React, {useEffect, useState} from 'react';
import {TextField, Button, Container, Stack, Select, MenuItem, Box} from '@mui/material';
import { Link } from "react-router-dom"
import adminServices from "../../../../services/Admin/adminServices";



const AddDishForm = ({handleClose,getDishes}) => {
    const [dishName, setDishName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = React.useState('');
    const [ingredients, setIngredients] = useState("");
    const[categories,setCategories]=useState([])
    const [price, setPrice] = useState(0);
    useEffect(() => {
        getCategories();
    },[]);
    const getCategories =  () => {
        const data =adminServices.getCategories().then((data)=>{
            console.log(data)
            setCategories(data);
        });
    }
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const ing=ingredients.split(",");
        adminServices.addDish({"name":dishName,"description":description,"image":imageUrl,"price":price,"category_name":category,"ingredients":ing}).then(data=>{
            console.log(data)
        });

        getDishes();
        handleClose();
    }

    return (
        <React.Fragment>
            <h2>Add Dishes</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Dishes Name"
                        onChange={e => setDishName(e.target.value)}
                        value={dishName}
                        fullWidth
                        required
                    />
                </Stack>

                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    rows={4}
                    multiline
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'

                    label="Price"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Image Link"
                    onChange={e => setImageUrl(e.target.value)}
                    value={imageUrl}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Ingredients"
                    onChange={e => setIngredients(e.target.value)}
                    value={ingredients}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />

                    <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                        fullWidth
                        variant='outlined'
                        defaultValue={"Select Category"}

                        style={{color:"black"}}

                    >

                        {
                            categories.map((category)=>{
                                return <MenuItem value={category.name}>{category.name}</MenuItem>
                            })
                        }

                    </Select>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4,marginTop:4}} fullWidth>
                <Button variant="outlined" color="secondary" type="submit" fullWidth>Add Dish</Button>
                </Stack>
            </form>

        </React.Fragment>
    )
}


export default AddDishForm;
