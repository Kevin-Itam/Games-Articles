import React from 'react';

const RecentNews = () => {
  // Dados para os itens (você pode substituir por dados dinâmicos ou API)
  const newsItems = [
    {
      id: 1,
      title: "Título da Notícia 1",
      date: "30 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-1",
    },
    {
      id: 2,
      title: "Título da Notícia 2",
      date: "29 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-2",
    },
    {
      id: 3,
      title: "Título da Notícia 3",
      date: "28 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-3",
    },
    {
      id: 4,
      title: "Título da Notícia 4",
      date: "30 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-4",
    },
    {
      id: 5,
      title: "Título da Notícia 5",
      date: "29 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-5",
    },
    {
      id: 6,
      title: "Título da Notícia 6",
      date: "28 de Novembro de 2024",
      image: "https://via.placeholder.com/150",
      link: "/noticia-6",
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className="px-8 lg:px-48 py-12">
      <h2 className="text-4xl py-6 font-bold text-white">Últimas Notícias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Imagem */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />
            {/* Conteúdo */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{item.date}</p>
              <a
                href={item.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Leia mais &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
