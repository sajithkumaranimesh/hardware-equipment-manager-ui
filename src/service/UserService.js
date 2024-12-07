import {json} from "react-router-dom";

export function UserService() {
    const persist = async (data) => {
        const response = await fetch("http://localhost:8080/person",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw json({message: "could not save person."}, {status: 404});
        }
        return await response.json();
    }

    const retrieveAll = async () => {
        const response = await fetch(`http://localhost:8080/person`, {
            method: "GET",
        })
        if (!response.ok) {
            throw json({message: "could not find persons."}, {status: 404});
        }
        return await response.json();
    }

    const retrieveById = async (id) => {
        const response = await fetch(`http://localhost:8080/person/${id}`, {
            method: "GET"
        })
        if (!response.ok) {
            throw json({message: "could not find person."}, {status: 404});
        }
        return await response.json();
    }

    const updateById = async (id, data) => {
        const response = await fetch(`http://localhost:8080/person/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw json({message: "could not find person."}, {status: 404});
        }
        return await response.json();
    }

    const deleteById = async (id) => {
        const response = await fetch(`http://localhost:8080/person/${id}`, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw json({message: "could not find person."}, {status: 404});
        }
        return await response.json();
    }

    return{
        persist,
        retrieveAll,
        retrieveById,
        deleteById,
        updateById,
    }
}