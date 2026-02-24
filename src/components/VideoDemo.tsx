import { motion } from 'motion/react';

const videos = [
  {
    id: 1,
    imgSrc: 'https://i.ibb.co/tnb3hpk/imagem-2026-02-24-193135254.png',
    title: 'Extração profunda da sujeira',
  },
  {
    id: 2,
    imgSrc: 'https://i.postimg.cc/mkVvCD4t/imagem-2026-02-24-194205715.png',
    title: 'Água escura saindo, prova da limpeza',
  },
  {
    id: 3,
    imgSrc: 'https://i.postimg.cc/bJrkpVJc/imagem-2026-02-24-194656664.png',
    title: 'Resultado final: estofado renovado',
  },
];

export default function VideoDemo() {
  return (
    <section id="video-demo" className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden border-t border-gray-100">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosso processo em ação
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Veja como removemos a sujeira que você nem sabia que existia.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <motion.div 
              key={video.id} 
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-56 object-cover"
                src={video.imgSrc}
                alt={video.title}
                referrerPolicy='no-referrer'
              />
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-900 text-center">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
