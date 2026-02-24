import React, { useState } from 'react';
import { ShieldCheck, Clock, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

const faqs = [
  {
    question: 'Quanto tempo leva para secar?',
    answer: 'O tempo de secagem varia de 4 a 8 horas, dependendo do tecido e da ventilação do ambiente. Nós damos todas as orientações para acelerar o processo.',
  },
  {
    question: 'Manchas antigas saem?',
    answer: 'Removemos a grande maioria das manchas, mesmo as mais antigas. Algumas manchas específicas podem ter danificado a fibra do tecido, mas garantimos o melhor resultado possível.',
  },
  {
    question: 'Qual o valor da higienização?',
    answer: 'O valor varia de acordo com o tamanho e tipo do estofado. Nosso orçamento é rápido e sem compromisso. Clique em qualquer botão de WhatsApp para falar conosco!',
  },
  {
    question: 'O processo é seguro para pets e crianças?',
    answer: 'Sim! Utilizamos apenas produtos biodegradáveis, atóxicos e seguros para toda a família, incluindo seus pets.',
  },
  {
    question: 'A máquina faz muito barulho?',
    answer: 'Nossa extratora profissional tem um ruído semelhante a um aspirador de pó potente. É um barulho moderado e por um curto período de tempo.',
  },
];

interface FaqItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="pt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <dt className="text-lg">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-left w-full flex justify-between items-center text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <span className="font-medium text-gray-900">{faq.question}</span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronDown 
              className={`transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </dt>
      <motion.dd 
        className="mt-2 pr-12 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="text-base text-gray-500 py-4">{faq.answer}</p>
      </motion.dd>
    </motion.div>
  );
};

export default function Guarantee() {
  return (
    <section id="garantia-faq" className="py-12 bg-gray-50 sm:py-16 lg:py-20 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <ShieldCheck className="h-20 w-20 text-green-500" />
            </motion.div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Satisfação 100% Garantida</h3>
            <p className="mt-2 text-lg text-gray-600">Se você não ficar totalmente satisfeito com o resultado, nós refazemos o serviço sem custo adicional. Nosso compromisso é com a sua felicidade.</p>
            
            <div className="mt-10 w-full p-6 bg-white rounded-lg shadow-lg border border-red-200">
              <div className="flex items-center justify-center">
                <Clock className="h-8 w-8 text-red-600 mr-3" />
                <h4 className="text-xl font-bold text-red-600">Vagas limitadas para esta semana!</h4>
              </div>
              <p className="mt-3 text-gray-700">Devido à alta demanda, nossa agenda está quase lotada. Garanta seu horário antes que acabe!</p>
              <a href="https://wa.me/5585920045189?text=Olá!%20Quero%20garantir%20meu%20horário%20para%20a%20higienização!" target="_blank" rel="noopener noreferrer" className="mt-6 w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-lg">
                <span className="mr-3"><FaWhatsapp size={22} /></span>
                Agendar minha limpeza
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Dúvidas Frequentes</h2>
            <dl className="mt-6 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} index={index} />
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
