const ButtonsLeft = () => {
  return (
    <div>
      {/*Button Fold*/}
      <button className="mr-4 bg-ultimate  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white hover:bg-secondary hover:border-2 hover:border-borders ">
        FOLD
      </button>
      {/*Button Check*/}
      <button className="mr-4 bg-ultimate hover:bg-secondary hover:border-2 hover:border-borders  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
        CHECK
      </button>
      {/*Button Raise to*/}
      <button className="hover:bg-secondary bg-ultimate hover:border-2 hover:border-borders  shadow-3xl text-white border-2 rounded-full px-5 py-7 border-white">
        RAISE TO
      </button>
    </div>
  );
};
export default ButtonsLeft;
