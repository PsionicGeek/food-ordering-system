


const dishes=[
    {
        "_id": "659e3cbee6e1f882725d06c9",
        "name": "Shahi Paneer",
        "description": "Tasty Gravy items",
        "image": "",
        "price": 400,
        "deleted_at": null,
        "category": {
            "_id": "659e3a0428256b7b6f6da3e8",
            "name": "Main Course",
            "description": "Gravy items",
            "image": "c://path",
            "deleted_at": null,
            "created_at": "2024-01-10T06:32:36.107Z",
            "updated_at": "2024-01-10T06:32:36.107Z",
            "__v": 0
        },
        "in_stock": true,
        "ingredients": [],
        "created_at": "2024-01-10T06:44:14.696Z",
        "updated_at": "2024-01-10T06:44:14.696Z",
        "__v": 0
    },
    {
        "_id": "659e3cbee6e1f882725d06",
        "name": "Shahi Paneer",
        "description": "Tasty Gravy items",
        "image": "c://path",
        "price": 400,
        "deleted_at": null,
        "category": {
            "_id": "659e3a0428256b7b6f6da3e8",
            "name": "Main Course",
            "description": "Gravy items",
            "image": "c://path",
            "deleted_at": null,
            "created_at": "2024-01-10T06:32:36.107Z",
            "updated_at": "2024-01-10T06:32:36.107Z",
            "__v": 0
        },
        "in_stock": true,
        "ingredients": [],
        "created_at": "2024-01-10T06:44:14.696Z",
        "updated_at": "2024-01-10T06:44:14.696Z",
        "__v": 0
    }
]

function getDishes(){
    return dishes;
}

const customerController = {getDishes};

export default customerController;
