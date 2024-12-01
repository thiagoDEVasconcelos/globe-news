import PoliticaImg from "../assets/halandsiara.jpg";

const TopNew = () => {
  return (
    <div className="flex justify-center items-center h-screen my-36">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
        <a href="" className="relative w-[502px] h-[502px] text-white group">
          <img
            src={PoliticaImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-20"></span>
          <h1 className="absolute inset-0 flex flex-col justify-end text-2xl font-extrabold p-4 transition-transform duration-300 group-hover:scale-95">
            Haaland é o mais novo reforço do Ceará para 2025!
          </h1>
        </a>

        <a href="" className="relative w-[502px] h-[502px] text-white group">
          <img
            src="https://conteudo.imguol.com.br/c/esporte/00/2024/10/22/vini-jr-comemora-gol-em-real-madrid-x-borussia-dortmund-na-champions-league-1729634369290_v2_1x1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-20"></span>
          <h1 className="absolute inset-0 flex flex-col justify-end text-2xl font-extrabold p-4 transition-transform duration-300 group-hover:scale-95">
            Vini Jr Faz Hat-Trick aos 45 do segundo Tempo!
          </h1>
        </a>

        <a href="" className="relative w-[502px] h-[502px] text-white group">
          <img
            src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/05/23104409/GettyImages-2153616294.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-20"></span>
          <h1 className="absolute inset-0 flex flex-col justify-end text-2xl font-extrabold p-4 transition-transform duration-300 group-hover:scale-95">
            URGENTE! Milei fala que Messi vai pegar o beco!
          </h1>
        </a>

        <a href="" className="relative w-[502px] h-[502px] text-white group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cp9UtNUZ7OvASa_h7Pxd26LPE0Vm99gzYQ&s"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-20"></span>
          <h1 className="absolute inset-0 flex flex-col justify-end text-2xl font-extrabold p-4 transition-transform duration-300 group-hover:scale-95">
            Imagem completamente aleátória juntamente com simulação de notícia!
          </h1>
        </a>
      </div>
    </div>
  );
};

export default TopNew;
