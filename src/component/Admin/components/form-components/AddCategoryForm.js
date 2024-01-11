import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"


const AddCategoryForm = () => {
    const [categoryName, setCategorytName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(categoryName, description, imageUrl)
    }

    return (
        <React.Fragment>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
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
