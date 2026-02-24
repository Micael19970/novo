import { CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

const bonuses = [
  'Aromatização especial com fragrância de longa duração.',
  'Aplicação de produto antiácaro para proteção extra.',
  '30% de desconto na impermeabilização (contratando hoje).',
];

export default function Offer() {
  return (
    <section id="oferta" className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-base text-blue-600 font-semibold tracking-wide uppercase">ÚLTIMAS UNIDADES DA SEMANA</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Seu sofá limpo como novo e sua família protegida por um preço que parece mentira.
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Imagine seu sofá livre de ácaros, bactérias e daquela sujeira que o tempo traz. Com planos a partir de <span className="font-bold text-green-600">R$197</span>, devolvemos a vida e o cheirinho de novo ao seu estofado.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900">Mas atenção: essa oferta expira em breve. Agindo agora, você garante 3 presentes especiais:</h3>
              <ul className="mt-4 space-y-4">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700"><span className="font-bold">Bônus 1:</span> Perfume de longa duração para um ambiente sempre cheiroso.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700"><span className="font-bold">Bônus 2:</span> Blindagem antiácaro para proteger sua família.</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700"><span className="font-bold">Bônus 3 (Hoje):</span> 30% OFF na impermeabilização para proteger contra acidentes.</p>
                </motion.li>
              </ul>
            </div>
            <div className="mt-10">
              <motion.a
                href="https://wa.me/5585920045189?text=Olá!%20Quero%20garantir%20a%20oferta%20e%20os%20bônus%20para%20higienização%20do%20meu%20sofá!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg"
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
              >
                QUERO MEU SOFÁ NOVO (E OS BÔNUS!)
                <span className="ml-3"><FaWhatsapp size={24} /></span>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="mt-10 lg:mt-0 lg:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-center text-gray-900">A Decisão Inteligente para seu Bolso e sua Casa</h3>
              <div className="mt-6 flow-root">
                <div className="-my-4 divide-y divide-gray-200">
                  <div className="py-4 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Higienização Profissional</h4>
                      <p className="text-gray-600">A partir de R$197</p>
                    </div>
                  </div>
                  <div className="py-4 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-red-600">X</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Comprar Sofá Novo</h4>
                      <p className="text-gray-600">A partir de R$2.500</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-gray-600 font-semibold">A escolha é óbvia. Renove, proteja sua família e economize mais de 90%.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
