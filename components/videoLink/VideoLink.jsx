import Image from "next/image";

export default function VideoLink() {
  return (
    <>
      <div class="w-full h-screen overflow-hidden absolute">
        <video
          className="w-full h-[75%] object-cover object-center"
          autoPlay
          muted
          loop
        >
          <source src="/beach.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full container relative">
        <div class="relative z-10  h-full text-white mt-48 space-y-4">
          <h1 class="px-2 sm:px-0 text-xl sm:text-6xl font-bold w-full sm:w-[650px] font-roboto shadow-md">
            Plan tours to dream locations in just a click!
          </h1>
          <p className="px-2 sm:px-0 w-full sm:w-[550px] font-nunito font-normal text-base sm:text-lg shadow-md">
            Travel is a transformative and enriching experience that allows
            individuals to explore new destinations, cultures, and landscapes
          </p>
          <section className="pt-6 px-2 sm:px-0">
            <section className="flex items-center">
              <div className="w-[64px] h-[64px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                <Image
                  src={"/user1.jpg"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-[64px] h-[64px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                <Image
                  src={"/user2.jpg"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-[64px] h-[64px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                <Image
                  src={"/user3.jpg"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="w-[64px] h-[64px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                <Image
                  src={"/user4.jpg"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="pl-4 font-bold font-roboto text-lg">
                Happy Customer
              </div>
              <div className="text-3xl animate-wave pl-3">👋</div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
