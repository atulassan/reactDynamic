import useGetQuery from "./Hooks/useGetQuery";

function Home() {
    const {loading, data} = useGetQuery('https://jsonplaceholder.typicode.com/posts')
    console.log(loading);
    console.log(data);
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
        </div>
    );
}

export default Home;