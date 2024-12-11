import React from "react";

export default function Blog() {
    return (
        <div className="relative w-full mb-0">
            <article className="py-10 p-4 lg:p-0 lg:justify-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-center">5 conseils pour des ongles parfaits avec Ziboulette</h3>
                    <p className="text-gray-600 mb-4">
                        Chez Ziboulette Nails, nous croyons que prendre soin de ses ongles est essentiel pour révéler sa personnalité. Voici nos conseils :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Hydratez vos mains quotidiennement : une bonne hydratation est la base de tout.</li>
                        <li>Essayez nos soins signés <span className="font-semibold">Ziboulette</span> pour renforcer vos ongles.</li>
                        <li>Appliquez une base avant tout vernis : c'est une règle d'or chez Ziboulette.</li>
                        <li>Explorez nos designs <span className="font-semibold">Ziboulette</span> pour trouver celui qui correspond à votre style.</li>
                        <li>Ne sous-estimez jamais le pouvoir d'une finition parfaite !</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        Avec ces astuces, vous êtes assuré(e) de profiter pleinement de l'effet <span className="font-semibold">Ziboulette</span> !
                    </p>
                </div>
            </article>

        </div>
    );
}
