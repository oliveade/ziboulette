import React from "react";

export default function Galerie() {
    const galleryItems = [
        {
            before: "https://i.pinimg.com/474x/8e/6d/73/8e6d7358598389bf35f095eb2d9cfa14.jpg",
            after: "https://i.pinimg.com/474x/32/d9/4b/32d94b88389a6f9a74afcefbf7df33a0.jpg",
            legend: "Design naturel avec une touche Ziboulette.",
        },
        {
            before: "https://i.pinimg.com/474x/20/bc/66/20bc662649bbe047dbc39bc79cf6810c.jpg",
            after: "https://i.pinimg.com/474x/94/2f/2b/942f2b2b856ca8841ced2e0915df6fc6.jpg",
            legend: "Un nail art élégant pour toutes les occasions.",
        },
        {
            before: "https://i.pinimg.com/474x/8e/6d/73/8e6d7358598389bf35f095eb2d9cfa14.jpg",
            after: "https://i.pinimg.com/474x/00/b5/3b/00b53b0789c8765e4c224d862fdf8d1d.jpg",
            legend: "L’effet Ziboulette : audace et créativité.",
        },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Découvrez l’effet Ziboulette !
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Transformez vos ongles avec notre expertise. Découvrez quelques-uns de nos designs avant et après.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
                {galleryItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={item.before}
                                alt="Avant"
                                className="w-full h-72 object-cover opacity-70"
                            />
                            <img
                                src={item.after}
                                alt="Après"
                                className="absolute inset-0 w-full h-72 object-cover opacity-100 hover:opacity-0 transition-opacity duration-300"
                            />
                        </div>

                        <div className="p-4">
                            <p className="text-gray-800 font-medium text-center">{item.legend}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
