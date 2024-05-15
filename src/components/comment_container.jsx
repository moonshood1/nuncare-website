function CommentContainer({ imgUrl, comment, name, service }) {
  return (
    <div>
      <div className="flex justify-center my-2 w-full p-2">
        <img
          src={imgUrl}
          alt="Image utilisateur"
          className="flex max-w-28 bg-slate-200 rounded-full"
        />
      </div>
      <p className="italic">"{comment}"</p>
      <h2 className="font-bold text-xl text-black mt-5">{name}</h2>
      <p className="text-sm">{service}</p>
    </div>
  );
}

export default CommentContainer;
