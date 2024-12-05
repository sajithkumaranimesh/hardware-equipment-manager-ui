import {Suspense} from "react";
import {Await, defer, json, Link, useLoaderData} from "react-router-dom";

function PersonRecordsContainer() {
    const data = useLoaderData();

    return (
        <>
            <Link to="registration">Registration</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={data.data}>
                    {(personList) => (
                        <div className="table-responsive">
                            <table className="table align-middle ">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                {personList.data.map((person) => (
                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.email}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.address}</td>
                                        <td>
                                            <Link to={`${person.id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export default PersonRecordsContainer;

export async function loader() {
    const response = await fetch(`http://localhost:8080/person`, {
        method: "GET",
    });
    if (!response.ok) {
        throw json({message: "Could not fetch details for person"}, {status: 500});
    }
    const data = await response.json();
    return defer({data});
}
