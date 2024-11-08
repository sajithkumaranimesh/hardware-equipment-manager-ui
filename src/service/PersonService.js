class PersonService {

    static baseUrl = 'http://localhost:8080';

    constructor() {}

    persist = async (person) => {
        const responsePromise = await fetch(`${(this.baseUrl)}/person`, {
            method: 'POST',
            body: JSON.stringify(person),
            headers: {"Content-Type":"application/json"}
        })
        if (!responsePromise.ok) {
            return "could not persist person";
        }
        return await responsePromise.json();
    }
}

export default PersonService;