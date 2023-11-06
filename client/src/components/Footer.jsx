import facebookLogo from "../assets/Facebook_Logo_2023.png"
import instagramLogo from "../assets/—Pngtree—three-dimensional instagram icon_9015419.png"
import linkindLogo from "../assets/702300.png"
import githubLogo from "../assets/25231 (1).png"

export const Footer = () => {
  return (
    <footer className="border-t-2 border-black mx-[25px] md:mx-[100px] lg:mx-[200px] text-center items-center flex flex-col pt-[30px] gap-y-[30px] my-[30px]">
      <div className="flex gap-x-[25px] lg:gap-x-[50px] md:gap-x-[50px]">
        <img className="w-[40px] h-[40px]" src={facebookLogo}/>
        <img className="w-[40px] h-[40px]" src={instagramLogo}/>
        <img className="w-[40px] h-[40px]" src={linkindLogo}/>
        <img className="w-[40px] h-[40px]" src={githubLogo}/>
      </div>
      <p className=" font-jetbrainMonoBold text-[16px]">Designed and developed by Em Ormreth Rethtihpong</p>
    </footer>
  )
}