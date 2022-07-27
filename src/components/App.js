// create your App component here
import React, {useState, useEffect} from "react";

function App () {

    const [data, setData] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);

    function handleData (data) {
        setData(data.message)
        setIsLoaded(true)
    }

    useEffect (() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then(data => data.json())
        .then(handleData)
    }, [])

    return (
        <>
            {isLoaded ? (
                <img src={data} alt="A Random Dog" />
            ):
            (<p> Loading... </p>)}
        </>
    )
}

export default App