import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>
      <div className=" grid grid-cols-6 gap-6 mt-6">
        <a href="">
          <img src="/image 1.png" alt="" />
        </a>
        <a href="">
          <img src="/image 2.png" alt="" />
        </a>
        <a href="">
          <img src="/image 3.png" alt="" />
        </a>
        <a href="">
          <img src="/image 5.png" alt="" />
        </a>
        <a href="">
          <img src="/image 6.png" alt="" />
        </a>
        <a href="">
          <img src="/image 7.png" alt="" />
        </a>
      </div>

    </div>
  
    )
}

export default App
