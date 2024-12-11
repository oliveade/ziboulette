import React from "react";

export default function Apropos() {
    return (
        <div className="relative w-full py-8 bg-gray-50 p-4 lg:p-0">
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Pourquoi choisir Ziboulette Nails ?</h2>
                    <div className="space-y-6 text-gray-700">
                        <div>
                            Chez <span className="font-semibold text-pink-500">Ziboulette</span>, nous croyons que chaque client mérite une attention unique.
                            Nos services personnalisés et notre expertise nous distinguent des autres salons de manucure.
                        </div>
                        <div>
                            "Ziboulette" n'est pas juste un nom, c'est un symbole : celui de l'originalité, de la qualité et de la créativité.
                            Nous utilisons les meilleurs produits pour garantir des résultats durables et magnifiques.
                        </div>
                        <div>
                            Choisir <span className="font-semibold text-pink-500">Ziboulette Nails</span>, c'est opter pour :
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Une équipe passionnée par l'art des ongles.</li>
                                <li>Des designs inspirants, créés juste pour vous.</li>
                                <li>Un service client exceptionnel dans une ambiance chaleureuse.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
