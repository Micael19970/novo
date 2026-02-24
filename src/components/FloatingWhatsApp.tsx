import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5585920045189?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20higienização."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
