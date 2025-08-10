


const LeftSection = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="p-5 text-center w-full flex justify-center items-center">
        <h3 className="text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] p-1 font-mono font-black text-[#333]">
          اهلاً وسهلاً بكم في آمكو
        </h3>
      </div>
      <div className="w-full min-h-full">
        <img
          src={"/images/saudi-man.jpg"}
          alt="hero-image"
     
          className="bg-cover"
        />
      </div>
    </div>
  );
};

export default LeftSection;
