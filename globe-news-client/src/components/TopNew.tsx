import PoliticaImg from "../assets/halandsiara.jpg";

const TopNew = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-28">
  <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
    <img 
      src={PoliticaImg} 
      alt="" 
      className="w-[502px] h-[502px] object-cover"
    />
    <img 
      src="https://conteudo.imguol.com.br/c/esporte/00/2024/10/22/vini-jr-comemora-gol-em-real-madrid-x-borussia-dortmund-na-champions-league-1729634369290_v2_1x1.jpg" 
      alt="" 
      className="w-[502px] h-[502px] object-cover"
    />
    <img 
      src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/05/23104409/GettyImages-2153616294.jpg" 
      alt="" 
      className="w-[502px] h-[502px] object-cover"
    />
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cp9UtNUZ7OvASa_h7Pxd26LPE0Vm99gzYQ&s" 
      alt="" 
      className="w-[502px] h-[502px] object-cover"
    />
  </div>
</div>


  );
};

export default TopNew;
