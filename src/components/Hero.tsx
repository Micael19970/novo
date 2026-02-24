import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Hygienix</span>
                    <img
                      alt="Hygienix Logo"
                      className="h-12 w-auto sm:h-16"
                      src="https://i.ibb.co/RkD38C4D/Chat-GPT-Image-24-de-fev-de-2026-20-07-04.png"
                      referrerPolicy='no-referrer'
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>


          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Seu sofá parece velho...</span>{' '}
                <span className="block text-blue-600 xl:inline">mas pode ficar novo hoje.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Removemos manchas, odores e ácaros em poucas horas, devolvendo a aparência e o cheiro de novo para o seu estofado.
              </p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-md shadow">
                  <a href="#antes-depois" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Ver antes e depois
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="https://wa.me/5585920045189?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20higienização." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                    <span className="mr-2 -ml-1"><FaWhatsapp size={20} /></span>
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://d24kgseos9bn1o.cloudfront.net/lojadoprofissional/imagens/Blog/loja-do-profissional-lavegem-higienizacao-sofa-limpo-evita-problemas-de-saude-doencas-acaros-poeiras-alergias-7.jpg"
          alt="Infográfico mostrando os benefícios da limpeza de sofá"
          referrerPolicy='no-referrer'
        />
      </div>
    </section>
  );
}
