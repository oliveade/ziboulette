import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onContactClick, onAboutClick }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full bg-gray-100 px-4 py-2 shadow-md overflow-x-hidden">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <img src="./logo_black.svg" alt="Logo" className="w-24 h-12" />
                </div>
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>

                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <button onClick={onAboutClick}>À propos</button>
                        </li>
                        <li className="text-gray-800 font-medium hover:text-gray-500 transition">
                            <Link to="/testimonials">Témoignages</Link>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={onContactClick}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition hidden md:block"
                >
                    Contactez-Nous
                </button>
            </div>
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } md:hidden bg-gray-100 w-full px-4 py-2 shadow-md`}
            >
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className="block text-gray-800 font-medium hover:text-gray-500 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                onAboutClick();
                                setIsMobileMenuOpen(false);
                            }}
                            className="block text-gray-800 font-medium hover:text-gray-500 transition"
                        >
                            À propos
                        </button>
                    </li>
                    <li>
                        <Link
                            to="/testimonials"
                            className="block text-gray-800 font-medium hover:text-gray-500 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Témoignages
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
