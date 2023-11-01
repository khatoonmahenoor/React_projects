import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState( [] )
    useEffect(() => {
        fetch('https://apihub.com/users/khatoonmahenoor')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])


    return (
        <div className="text-center bg-gray-600 text-white">Github followers: {data.followers}

         <img src={data.avatar_url} alt="git picture" width={300} /> 
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
   const reaponse = await fetch('https://apihub.com/users/khatoonmahenoor')
 return response.json()
}