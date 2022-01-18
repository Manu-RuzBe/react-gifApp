import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    return(
        <>
            <h2>App en REACT para ver gifs categorizados!</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <div>
                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </div>
        </>
    );
}
