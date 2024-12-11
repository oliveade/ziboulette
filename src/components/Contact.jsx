import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    return (
        <section className="bg-gray-50 ">
            <div className="max-w-4xl mx-auto text-center p-4 lg:p-0 mt-5">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
                <p className="text-lg text-gray-600 mb-10 text-justify">
                    Vous avez des questions ou souhaitez prendre rendez-vous ? Nous sommes là pour vous aider !
                    Vous pouvez nous contacter par email ou via nos réseaux sociaux.
                </p>

                <div className="flex justify-center space-x-8">
                    <a
                        href="https://www.instagram.com/nails_by_gratias/profilecard/?igsh=Y2JtYWp0Z20zYzM0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 text-3xl"
                        aria-label="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                        href="https://www.tiktok.com/@nails_by_gratias?_t=8rjwFoRdlME&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800 text-3xl"
                        aria-label="TikTok"
                    >
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>

                    <a
                        href="mailto:gratias.collab@gmail.com"
                        className="text-blue-600 hover:text-blue-800 text-3xl"
                        aria-label="Email"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>

                <p className="text-gray-600 mt-6 pb-3 text-justify text-lg">
                    Nous sommes impatients de recevoir de vos nouvelles et de vous aider à créer les ongles de vos rêves ! <span role="img" aria-label="description de l'emoji">✨</span>
                </p>
            </div>
        </section>
    );
}
