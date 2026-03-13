import React, { useEffect, useState } from "react";


 function usePhotos() {
    const [photos, setphotos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchphotos() {
            try {
                let res = await fetch("https://picsum.photos/v2/list?limit=30")
                let jsondata = await res.json();
                setTimeout(() => {
                    setLoading(false) // use is due to too small load time
                }, 1000);
                setphotos(jsondata)
            } catch (error) {
                console.log("not able to load data", error)
                setLoading(false)
            }

        }
        fetchphotos()
    }, [])

    return {photos, loading}
}


export default usePhotos;