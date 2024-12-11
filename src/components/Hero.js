import React from "react";

export default function Hero({onPrestationClick, onContactClick}) {
    return (
        <div className="relative w-full h-screen">
            <img
                src="https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg"
                alt="Manucure élégante"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                <div className="bg-black bg-opacity-50 p-4 rounded-md mb-6">
                    <h1 className="text-4xl font-bold mb-2">Ziboulette Nails</h1>
                    <p className="text-lg">Des ongles uniques, une touche de magie</p>
                </div>
                <div className="flex space-x-4">
                    <button onClick={onPrestationClick} className="bg-pink-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-pink-600 transition">
                        Découvrez nos prestations
                    </button>
                    <button onClick={onContactClick} className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition">
                        Réservez dès maintenant
                    </button>
                </div>
            </div>
        </div>
    );
}
