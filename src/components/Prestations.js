import React from "react";

export default function Prestations() {
    return (
        <div className="relative w-full py-8 bg-gray-50 p-4 lg:p-0">
            <p className="text-center text-3xl font-bold text-gray-800 mb-6">
                Nos Prestations
            </p>

            <div className="text-center max-w-2xl mx-auto text-gray-600 text-lg mb-10 px-4">
                Chez <span className="font-semibold text-pink-500">Ziboulette Nails</span>, nous proposons des prestations variées pour sublimer vos ongles : manucures classiques, nail art personnalisé, soins des mains, et bien plus encore. Voici quelques exemples de nos réalisations :
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12">

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src="https://i.pinimg.com/474x/86/10/0d/86100d150ab09b3cf203a6abb0bae556.jpg"
                        alt="Manucure élégante"
                        className="w-full h-72  object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                            Manucure Élégante
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Une touche de simplicité et d'élégance pour toutes les occasions.
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src="https://i.pinimg.com/474x/5d/da/66/5dda667225537c3df00c706a81f34e41.jpg"
                        alt="Nail Art Créatif"
                        className="w-full h-72  object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                            Nail Art Créatif
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Des designs personnalisés pour exprimer votre style unique.
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src="https://i.pinimg.com/474x/ca/27/30/ca2730c0af0e27be4a80fea97086bbc1.jpg"
                        alt="Manucure Française"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                            Manucure Française
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Le grand classique revisité avec une finition parfaite.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
