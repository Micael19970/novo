import { ShieldCheck, Wind, Bug } from 'lucide-react';
import { motion } from 'motion/react';

const problems = [
  {
    id: 1,
    icon: <Bug className="h-10 w-10 text-red-500" />,
    title: 'Ácaros e Alergias',
    description: 'Milhões de ácaros podem estar vivendo no seu sofá, causando alergias e problemas respiratórios.',
  },
  {
    id: 2,
    icon: <Wind className="h-10 w-10 text-blue-500" />,
    title: 'Odores Desagradáveis',
    description: 'Odores de pets, comida e suor impregnam no tecido, deixando um cheiro constante no ambiente.',
  },
  {
    id: 3,
    icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />,
    title: 'Manchas e Aparência de Velho',
    description: 'Manchas de líquidos e sujeira do dia a dia deixam seu estofado com uma aparência envelhecida e suja.',
  },
];

export default function CustomerPain() {
  return (
    <section id="dor-cliente" className="py-12 bg-gray-900 text-white sm:py-16 lg:py-20 overflow-hidden border-t border-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Não é sujeira superficial. É sujeira acumulada.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Seu estofado pode parecer limpo, mas a sujeira profunda está lá.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.id} 
              className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#1f2937' }}
            >
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-gray-700 rounded-full">
                {problem.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{problem.title}</h3>
              <p className="mt-2 text-base text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
