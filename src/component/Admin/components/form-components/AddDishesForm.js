import React, {useState} from 'react';
import {TextField, Button, Container, Stack, Select, MenuItem, Box} from '@mui/material';
import { Link } from "react-router-dom"



const AddDishForm = () => {
    const [categoryName, setCategorytName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(categoryName, description, imageUrl)
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
                        onChange={e => setCategorytName(e.target.value)}
                        value={categoryName}
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
                <Container spacing={2} sx={{marginBottom: 4,paddingBottom:4}}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Container>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <Button variant="outlined" color="secondary" type="submit">Add Category</Button>
                </Stack>
            </form>

        </React.Fragment>
    )
}


export default AddDishForm;
