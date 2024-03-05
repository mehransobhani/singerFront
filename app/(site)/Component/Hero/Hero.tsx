import Image from "next/image";
import Link from "next/link";
import banner from "@/public/image/banner/hero.svg"

export function Hero() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold text-black">
           خوش امدید به  <br />{" "}
            <span className="text-rose-500 font-extrabold my-3"> S E M B E A T </span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12">
            اولین و بزرگ ترین سامانه یافتن هنرمندان و خوانندگان کشور و رزرو این عزیزان برای مراسمات شما
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#services">
                <button className="bg-black   text-white   text-base rounded-full px-4 p-2 font-medium">
                 درباره ما
                </button>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/humberni/halley/blob/main/README.md" target="_blank">
                <button className="bg-rose-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  لیست هنر مندان
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src={banner}
            alt="Image hero description"
            width={1025}
            height={662}
            quality={100}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
