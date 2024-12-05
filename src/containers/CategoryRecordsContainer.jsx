import { Await, defer, json, Link, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { CategoryService } from "../service/CategoryService.js";

function CategoryRecordsContainer() {
    const service = new CategoryService();
    console.log(service.getCount());

    const data = useLoaderData();

    return (
        <>
            <Link to="registration">Registration</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={data.data}>
                    {(categoryList) => (
                        <div className="table-responsive">
                            <table className="table align-middle ">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Register Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                {categoryList.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>{category.registeredDate}</td>
                                        <td>
                                            <Link to={`${category.id}/update`}>Edit</Link>
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

export default CategoryRecordsContainer;

export async function loader() {
    const response = await fetch(`http://localhost:8080/category`, {
        method: "GET",
    });
    if (!response.ok) {
        throw json({ message: "Could not fetch details for category" }, { status: 500 });
    }
    const data = await response.json();

    return defer({ data: data.data });
}
