import { ArrowRight, Heart, Zap, Clock } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="py-20 bg-gray-50 sm:py-24 lg:py-28 overflow-hidden border-t border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Veja a mágica acontecer
          </h2>

        </div>

<div className="mt-12 max-w-2xl mx-auto aspect-[1/1] overflow-hidden rounded-lg shadow-xl border-4 border-white">
  <iframe
    className="w-full h-full block"
    src="https://player.vimeo.com/video/1168091158?h=170455a9aa&autoplay=1&loop=1&muted=1&background=1"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 md:grid-cols-3 md:max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <Heart className="h-10 w-10 text-red-500" />
            <p className="mt-2 font-semibold text-gray-700">Produtos seguros para crianças e pets</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="h-10 w-10 text-yellow-500" />
            <p className="mt-2 font-semibold text-gray-700">Mais saúde e bem-estar para sua família</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-10 w-10 text-blue-500" />
            <p className="mt-2 font-semibold text-gray-700">Atendimento rápido e na sua casa</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-800">Gostou do resultado? Não espere mais!</p>
          <p className="text-sm text-gray-500">Nossa agenda para esta semana está quase lotada.</p>
          <a
            href="https://wa.me/5585920045189?text=Olá!%20Quero%20esse%20resultado%20no%20meu%20estofado!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Agendar minha limpeza
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <p className="mt-4 text-xs text-gray-400">Satisfação 100% garantida ou seu dinheiro de volta.</p>
        </div>
      </motion.div>
    </section>
  );
}
