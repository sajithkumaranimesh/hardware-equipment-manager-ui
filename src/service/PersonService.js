import {json} from "react-router-dom";

export function PersonService() {
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

    return{
        updateById,
    }
}