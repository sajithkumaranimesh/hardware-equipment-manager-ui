import {json} from "react-router-dom";

export function EquipmentService() {

    const persist = async (data) => {
        const response = await fetch("http://localhost:8080/equipment",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw json({message: "could not save equipment."}, {status: 404});
        }
        return await response.json();
    }

    const retrieveAll = async () => {
        const response = await fetch(`http://localhost:8080/equipment`, {
            method: "GET",
        });
        if (!response.ok) {
            throw json({message: "could not find equipments."}, {status: 404});
        }
        return await response.json();
    }

    const retrieveById = async (id) => {
        const response = await fetch(`http://localhost:8080/equipment/${id}`, {
            method: "GET",
        })
        if (!response.ok) {
            throw json({message: "could not find equipment."}, {status: 404});
        }
        return await response.json();
    }

    const updateById = async (id, data) => {
        const response = await fetch(`http://localhost:8080/equipment/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!response.ok) {
            throw json({message: "could not find equipment."}, {status: 404});
        }
        return await response.json();
    }

    return{
        persist,
        retrieveAll,
        retrieveById,
        updateById,
    }
}