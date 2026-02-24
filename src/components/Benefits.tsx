import { Sparkles, Leaf, Heart, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    id: 1,
    icon: <Sparkles className="h-10 w-10 text-white" />,
    title: 'Aparência de Novo',
    description: 'Seu estofado volta a ter a cor e a vida que tinha quando saiu da loja.',
  },
  {
    id: 2,
    icon: <Leaf className="h-10 w-10 text-white" />,
    title: 'Ambiente Cheiroso',
    description: 'Removemos odores e deixamos um perfume suave e agradável no seu ambiente.',
  },
  {
    id: 3,
    icon: <Heart className="h-10 w-10 text-white" />,
    title: 'Mais Saúde',
    description: 'Eliminamos ácaros, fungos e bactérias, protegendo sua família de alergias.',
  },
  {
    id: 4,
    icon: <DollarSign className="h-10 w-10 text-white" />,
    title: 'Economia Inteligente',
    description: 'Renove seu sofá por uma fração do valor de um novo e economize dinheiro.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-12 bg-blue-600 text-white sm:py-16 lg:py-20 overflow-hidden border-t border-blue-700">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Mais que limpeza, uma renovação</h2>
          <p className="mt-4 text-lg text-blue-100">Os benefícios que você sente e vê.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-500 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-base text-blue-200">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
