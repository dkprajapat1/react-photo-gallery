import React, { useEffect, useState, useMemo, useReducer } from 'react'
import usePhotos from '../hooks/fetchdata'


const Gallery = ({ search }) => {
    const { photos, loading } = usePhotos()

    function favouriteReducer(state, action) {    //set favourit
        switch (action.type) {
            case "TOGGLE":
                if (state.includes(action.payload)) {
                    return state.filter(id => id !== action.payload)
                }
                return [...state, action.payload]
            default:
                return state
        }

    }
    const [favourites, dispatch] = useReducer(favouriteReducer, JSON.parse(localStorage.getItem("favourites")) || [])

    const filteredPhotos = useMemo(() => {   //filter photos for search
        return photos.filter(photo =>
            photo.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, photos]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center mt-[40vh] gap-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-green-500 border-r-green-500 rounded-full animate-spin"></div>
                <p className="font-bold text-lg">Loading...</p>

            </div>
        );
    }



    return (
        <div>
            {
                filteredPhotos.length === 0 ?
                    <div className="font-bold text-lg text-center border gird-none">No photos</div>
                    :
                     // comtaimer
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2'> 
                        {filteredPhotos.map(photo => {
                            //card
                            return <div key={photo.id} className='rounded-2xl p-4 bg-blue-200'>
                                <img src={photo.download_url} alt={photo.author} />
                                <div className='flex justify-between'>
                                    <div>Auther : {photo.author}</div>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            dispatch({
                                                type: "TOGGLE",
                                                payload: photo.id
                                            })
                                        }
                                    >
                                        {favourites.includes(photo.id) ? "❤️" : "🤍"}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
            }
        </div>
    )
}

export default Gallery
