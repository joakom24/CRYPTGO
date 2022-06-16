const ButtonsLeft = () => {
  return (
    <div>
      {/*Button Fold*/}
      <button className=" hover:-translate-y-1 hover:scale-110 duration-300 mr-4 text-sm bg-ultimate  shadow-3xl text-white border-2 rounded-full px-4 py-4 border-white hover:bg-secondary hover:border-2 hover:border-borders ">
        FOLD
      </button>
      {/*Button Check*/}
      <button className=" hover:-translate-y-1 hover:scale-110 duration-300 mr-4 text-sm bg-ultimate  shadow-3xl text-white border-2 rounded-full px-4 py-4 border-white hover:bg-secondary hover:border-2 hover:border-borders ">
        CHECK
      </button>
      {/*Button Raise to*/}
      <button className=" hover:-translate-y-1 hover:scale-110 duration-300 mr-4 text-sm bg-ultimate  shadow-3xl text-white border-2 rounded-full px-4 py-4 border-white hover:bg-secondary hover:border-2 hover:border-borders ">
        RAISE TO
      </button>
    </div>
  );
};
export default ButtonsLeft;
