import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import {Link, redirect, useNavigate} from "react-router-dom"
import adminServices from "../../../../services/Admin/adminServices";


const AddCategoryForm = ({handleClose,getCategories}) => {
    const [categoryName, setCategorytName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate=useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
       adminServices.addCategory({
           "name": categoryName,
              "description": description,
                "image": imageUrl
       }).then(data=>{
              console.log(data)
           getCategories();
              handleClose();
       })
    }


    return (
        <React.Fragment>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Category Name"
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

                <Button variant="outlined" color="secondary" type="submit">Add Category</Button>
            </form>

        </React.Fragment>
    )
}

export default AddCategoryForm;
