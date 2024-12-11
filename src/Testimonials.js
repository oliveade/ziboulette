import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './output.css';

const testimonialsData = [
    {
        id: 1,
        name: "Julie Martin",
        review: "Super expérience ! Le personnel est très professionnel et mes ongles sont magnifiques.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        date: "2023-10-01"
    },
    {
        id: 2,
        name: "Sophie Durand",
        review: "J'ai adoré l'accueil et la qualité du service. Je reviendrai sans hésitation !",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        date: "2023-09-15"
    },
    {
        id: 3,
        name: "Claire Dupont",
        review: "Très bon service, je suis ravie de mes nouveaux ongles. Merci beaucoup !",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        date: "2023-09-25"
    },
    {
        id: 4,
        name: "Amélie Blanc",
        review: "Incroyable ! Service irréprochable, je recommande.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        date: "2023-09-30"
    },
    {
        id: 5,
        name: "Marie Petit",
        review: "Ziboulette offre un service fantastique. Elle est très attentionnée.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        date: "2023-08-20"
    },
    {
        id: 6,
        name: "Camille Gauthier",
        review: "J’ai passé un moment très agréable chez Ziboulette. Mes ongles sont parfaits.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        date: "2023-07-15"
    },
    {
        id: 7,
        name: "Émilie Moreau",
        review: "Professionnel et chaleureux, je recommande Ziboulette à 100 % !",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        date: "2023-06-10"
    },
    {
        id: 8,
        name: "Charlotte Lefevre",
        review: "C'était ma première visite chez Ziboulette et sûrement pas la dernière !",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        date: "2023-05-05"
    }
];

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "Qu'est-ce que Ziboulette et que propose-t-elle ?",
            answer: "Ziboulette est un salon de beauté spécialisé dans les soins des ongles, la manucure et le bien-être. Nous offrons des prestations personnalisées pour sublimer vos ongles et répondre à toutes vos envies."
        },
        {
            question: "Pourquoi choisir Ziboulette pour vos soins des ongles ?",
            answer: "Chez Ziboulette, nous mettons un point d'honneur à offrir un service de qualité avec des produits professionnels et une attention particulière à chaque client. Nos experts sont passionnés et expérimentés."
        },
        {
            question: "Quels types de prestations sont disponibles chez Ziboulette ?",
            answer: "Nous proposons des manucures classiques, des poses d'ongles en gel, des vernis semi-permanents, et bien plus. Nous sommes également spécialisés dans les designs personnalisés pour vos occasions spéciales."
        },
        {
            question: "Comment réserver un rendez-vous chez Ziboulette ?",
            answer: "Vous pouvez réserver directement en ligne via notre site web ou nous appeler. Nous vous conseillons de réserver à l'avance pour garantir votre créneau."
        },
        {
            question: "Ziboulette propose-t-elle des offres ou des abonnements ?",
            answer: "Oui, nous offrons régulièrement des promotions et des forfaits pour nos clients fidèles. Consultez notre site pour découvrir nos offres en cours."
        },
        {
            question: "Où se situe le salon Ziboulette ?",
            answer: "Notre salon Ziboulette est situé au cœur de la ville, facile d'accès avec un parking à proximité. L'adresse exacte est indiquée dans la section 'Contact' de notre site."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 space-y-7">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">FAQ - Questions fréquentes</h2>
            <p className="text-center text-lg text-gray-600 mb-8">
                Découvrez les réponses aux questions les plus fréquentes sur Ziboulette.
            </p>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border rounded-md p-4 shadow-sm bg-white">
                        <button
                            className="w-full text-left font-semibold text-gray-800 text-lg flex justify-between items-center"
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            <span>{openQuestion === index ? '-' : '+'}</span>
                        </button>
                        {openQuestion === index && (
                            <p className="mt-3 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [sortedTestimonials, setSortedTestimonials] = useState(testimonialsData);
    const [isSortedByNewest, setIsSortedByNewest] = useState(true);

    const sortTestimonials = (byNewest) => {
        const sorted = [...testimonialsData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return byNewest ? dateB - dateA : dateA - dateB;
        });
        setSortedTestimonials(sorted);
        setIsSortedByNewest(byNewest);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 space-y-7">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Témoignages sur Ziboulette</h1>
                <p className="text-center text-lg text-gray-600 mb-8 mt-5">
                    Découvrez ce que nos clients pensent de Ziboulette, la référence en services de beauté et de bien-être.
                </p>

                <div className="flex justify-center space-x-6 pb-8">
                    <button
                        className={`px-6 py-3 border-2 pb-2 border-blue-500 rounded-md ${isSortedByNewest ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} transition-all duration-300`}
                        onClick={() => sortTestimonials(true)}
                    >
                        Voir les plus récents
                    </button>
                    <button
                        className={`px-6 py-3 pb-2 border-2 border-blue-500 rounded-md ${!isSortedByNewest ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} transition-all duration-300`}
                        onClick={() => sortTestimonials(false)}
                    >
                        Voir les plus anciens
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {sortedTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={testimonial.avatar}
                                alt={`Avatar de ${testimonial.name}`}
                                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-gray-600 mt-2 mb-4">{testimonial.review}</p>
                            <div className="flex justify-center mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, index) => (
                                    <span key={index} className="text-yellow-500">⭐</span>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">{new Date(testimonial.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
            <FAQ />
            <footer className="bg-gray-800 text-white py-4 text-center">
                &copy; 2024 Ziboulette. Tous droits réservés.
            </footer>
        </>
    );
};

export default Testimonials;
