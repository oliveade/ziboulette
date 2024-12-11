import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onContactClick, onAboutClick }) {
    return (
        <div className="w-full bg-gray-100 px-4 py-2 shadow-md overflow-x-hidden">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <img src="./logo_black.svg" alt="Logo" className="w-24 h-12" />
                </div>

                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <button  onClick={onAboutClick}>À propos</button>
                        </li>
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <Link to="/testimonials">Témoignages</Link>
                        </li>
                    </ul>
                </nav>

                <button onClick={onContactClick} className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition">
                    Contactez-Nous
                </button>
            </div>
        </div>
    );
}
