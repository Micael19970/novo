import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina',
    avatar: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2016/08/22/miriamepaollo.jpg',
    rating: 5,
    text: 'Meu sofá estava com muitas manchas dos meus filhos e do meu cachorro. Achei que não tinha mais jeito, mas a Hygienix deixou ele novo em folha! O cheiro de limpeza é maravilhoso.',
  },
  {
    id: 2,
    name: 'Joao Carlos',
    avatar: 'https://i.pinimg.com/736x/10/93/98/1093989ccd4728d23c3599ae91c83938.jpg',
    rating: 5,
    text: 'Serviço impecável e muito profissional. A Hygienix superou todas as minhas expectativas com a limpeza do meu sofá. Recomendo para todos que buscam qualidade e confiança!',
  },
  {
    id: 3,
    name: 'Alicia Cardozo',
    avatar: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/41e/c9e/398b3950dd88be3fdf5e7000da.jpg',
    rating: 5,
    text: 'A Hygienix é a minha escolha número um para manter a casa saudável. A limpeza profunda removeu toda a poeira e deixou o ambiente renovado. Simplesmente excelente!',
  },
];

export default function SocialProof() {
  return (
    <section id="prova-social" className="py-12 bg-gray-50 sm:py-16 lg:py-20 overflow-hidden border-t border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quem já renovou, amou
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Veja o que nossos clientes estão dizendo sobre a Hygienix.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, shadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} referrerPolicy='no-referrer' />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
