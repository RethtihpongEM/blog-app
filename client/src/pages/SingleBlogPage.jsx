import { NavLink } from "react-router-dom";
import flowerVase from "../assets/small-plant-white-pot-is-sitting-white-surface_655090-81701-PhotoRoom.png-PhotoRoom.png";
export const SingleBlogPage = () => {
  return (
    <div className="min-h-[300px] px-[25px] lg:px-[200px] md:px-[50px] mt-[25px] flex flex-col">
      <div className="flex md:gap-x-[50px] w-full mb-[50px] flex-col items-center md:flex-row lg:flex-row lg:items-start">
        <img className="w-[500px] md:w-[300px]" src={flowerVase} alt="flower" />
        <div className="ml-[25px] lg:mt-0 lg:ml-0 md:ml-0 sm:ml-0 mt-[25px]">
          <p className="text-[48px] font-jetbrainMonoBold">Title</p>
          <p className="text-[18px] font-jetbrainMonoRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo
            lectus, bibendum in ullamcorper eget, vestibulum ac justo. Nulla
            facilisi.
          </p>
          <div className="mt-[25px]">
            <p className="text-[16px] font-jetbrainMonoRegular text-[#9D9D9D]">
              Rethtihpong Em
            </p>
            <p className="text-[16px] font-jetbrainMonoRegular text-[#9D9D9D]">
              September 5th, 2023
            </p>
            <div className="flex gap-x-[15px] mt-[15px]">
              <NavLink
              to={"/blogs/update/1"}
                className="px-6 py-2 bg-[#3DAAF9] font-jetbrainMonoRegular text-white rounded-[5px] transform  
    hover:-translate-y-1 hover:scale-[105%] transition duration-100 ease-in cursor-pointer"
              >
                Update
              </NavLink>
              <button
                className="px-6 py-2 bg-[#F93D3D] font-jetbrainMonoRegular text-white rounded-[5px] transform  
    hover:-translate-y-1 hover:scale-[105%] transition duration-100 ease-in cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className=" font-jetbrainMonoRegular text-[16px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar
        cursus maximus. Nunc laoreet aliquet nisl, et auctor eros pharetra ac.
        Maecenas non interdum augue. Praesent bibendum tempor purus. Curabitur
        lobortis, lacus mattis ullamcorper suscipit, ligula lacus commodo diam,
        sed feugiat massa nulla vel metus. Mauris non quam nisl. Vestibulum
        mollis leo risus, sit amet commodo mi molestie et. Phasellus dui eros,
        rutrum in fermentum id, eleifend id lacus. Nullam molestie eget sapien
        vitae lacinia. Nam mattis urna sit amet orci aliquet, at pellentesque
        sem auctor. Etiam et massa ex. Phasellus non est dui. Curabitur mauris
        massa, condimentum in cursus aliquet, pretium sed dui. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec nec tortor sapien. Nunc eleifend hendrerit nisi non
        tristique. Etiam tempor nunc in posuere pharetra. Pellentesque consequat
        orci feugiat massa bibendum, ac vestibulum ex vestibulum. Curabitur
        tellus est, accumsan eu tempor vel, tempor sit amet felis. Maecenas
        molestie, justo ut accumsan ullamcorper, lorem ipsum dictum dolor, nec
        varius massa augue in est. Etiam scelerisque lacus quis risus tincidunt,
        non tincidunt odio mollis. Quisque tellus lectus, vulputate eget
        fermentum ut, lacinia sed risus. Nunc fringilla feugiat nunc, quis
        consequat purus ultricies in. Etiam rhoncus lacus quis rutrum ultricies.
        Nulla facilisi. Etiam a lacus in quam pellentesque consequat. Donec
        maximus elit eu turpis pretium varius. Donec id ornare mi. Cras at velit
        interdum, tempor nibh non, eleifend enim. In ut magna eget augue
        lobortis condimentum. Aenean neque diam, interdum in metus quis, semper
        elementum orci. Proin libero diam, bibendum sit amet congue ultricies,
        maximus eu urna. Vestibulum sodales interdum lobortis. In sed felis
        augue. Integer iaculis accumsan velit a scelerisque. Morbi dapibus
        consequat magna eget accumsan. Vestibulum arcu risus, euismod ut
        venenatis at, porta in nisi. Aenean sodales iaculis risus. Nullam
        vestibulum vel diam eget hendrerit. Integer sapien tortor, hendrerit ut
        nisi a, ornare faucibus felis. Nunc fringilla sapien a lorem euismod,
        tempor scelerisque turpis scelerisque. Sed vel diam egestas, lobortis
        ipsum in, dignissim tellus. Praesent malesuada tempor est, nec facilisis
        orci dictum in. Curabitur id neque turpis. Suspendisse fringilla sodales
        erat, ut dictum tortor consequat sit amet. Integer a scelerisque diam.
        Ut sit amet sollicitudin lorem. Sed interdum dolor cursus, auctor est
        ac, ultricies felis. Morbi sed elit lectus. Sed dignissim ipsum quis
        erat varius vehicula. Cras rutrum convallis ligula ac suscipit.
        Pellentesque a sapien ligula. Vivamus egestas consequat interdum.
        Suspendisse consequat ultricies ultrices. Ut dapibus convallis leo nec
        volutpat. Pellentesque ut finibus elit. Integer iaculis lacus sit amet
        turpis ultricies fringilla.
      </p>
    </div>
  );
};
