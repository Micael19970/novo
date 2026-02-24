import { Droplets } from 'lucide-react';
import { motion } from 'motion/react';

export default function Mechanism() {
  return (
    <section id="mecanismo" className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Como a mágica funciona?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Nossa extratora profissional de alta pressão injeta uma solução de limpeza profunda e a suga imediatamente, removendo toda a sujeira, ácaros e odores de dentro do seu estofado.
            </p>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Limpeza por extração</h3>
                  <p className="mt-1 text-base text-gray-500">
                    Não é uma limpeza superficial. A sujeira é extraída da raiz da fibra do tecido, garantindo uma higienização completa e duradoura.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-10 lg:mt-0 lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="rounded-lg shadow-xl w-full h-auto"
              src="https://i.postimg.cc/FRwZqXxy/imagem-2026-02-24-194831143.png"
              alt="Demonstração da máquina extratora profissional em ação"
              referrerPolicy='no-referrer'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
