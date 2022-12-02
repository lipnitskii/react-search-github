import React from "react";
import { Link } from "react-router-dom";

export function Navigations() {
    return (
        <nav className="flex justify-between px-3 py-3 items-center h-[50px] shadow-md bg-gray-500 text-white"> 
           <h3>GitHub Search</h3>
           <span>
           <Link to="/" className="mr-2">Home</Link>
           <Link to="/favourites">Favourites</Link>
           </span>
        </nav>
    )
}