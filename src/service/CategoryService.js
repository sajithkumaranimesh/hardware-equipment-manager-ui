import {json} from "react-router-dom";

export function CategoryService() {

    const getCount = async () => {
        const response = await fetch('http://localhost:8080/category/count');
        if (!response.ok) {
            throw json({message: "could not find category count"},{status: 404});
        }
        return response.json();
    };

    const persist = async (data) => {
        const response = await fetch('http://localhost:8080/category', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!response.ok) {
            throw json({message: "could not save category."}, {status: 404});
        }
        return response.json();
    }

    const retrieveAll = async () => {
        const response = await fetch(`http://localhost:8080/category/`, {
            method: "GET",
        });
        if(!response.ok) {
            throw json({message: "could not find category."}, {status: 404});
        }
        return response.json();
    }

    const retrieveById = async (id) => {
        const response = await fetch(`http://localhost:8080/category/${id}`, {
            method: "GET"
        })
        if (!response.ok) {
            throw json({message: "could not find category."}, {status: 404});
        }
        return response.json();
    }

    const updateById = async (id, data) => {
        const response = await fetch(`http://localhost:8080/category/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!response.ok) {
            throw json({message: "could not find category."}, {status: 404});
        }
        return response.json();
    }

    const deleteById = async (id) => {
        const response = await fetch(`http://localhost:8080/category/${id}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            throw json({message: "could not find category."}, {status: 404});
        }
        return response.json();
    }

    return{
        getCount,
        persist,
        retrieveAll,
        retrieveById,
        updateById,
        deleteById
    }
}
