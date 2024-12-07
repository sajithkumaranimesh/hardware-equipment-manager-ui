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

    return{
        persist,
    }
}