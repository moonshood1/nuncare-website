const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="font-light text-sm md:text-base md:font-normal w-full bg-white px-4 md:px-32 mt-44">
      <div className="block md:flex justify-between">
        <div className="flex space-x-3 items-center">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145096/nuncare-website/icons/address_bl_icon_mvj2y4.png"
            alt="Icone de l'adresse"
          />
          <div>
            <p className="font-bold uppercase">adresse </p>
            <p>Abidjan, Cocody Riviera M’badon</p>
          </div>
        </div>

        <div className="block md:flex md:space-x-4">
          <div className="flex space-x-3 items-center my-4 md:my-0">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145096/nuncare-website/icons/clock_bl_icon_b3p64p.png"
              alt="Icone de l'horloge"
            />

            <div>
              <p className="font-bold uppercase">heure de travail </p>
              <p>Du lundi au samedi 8h-17h</p>
            </div>
          </div>

          <div className="flex space-x-3 items-center my-4 md:my-0">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145096/nuncare-website/icons/phone_bl_icon_sc8nzv.png"
              alt="Icone du contact"
            />
            <div>
              <p className="font-bold uppercase">contacts</p>
              <p>07 07 56 09 45</p>
            </div>
          </div>

          <div className="flex space-x-3 items-center my-4 md:my-0">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145096/nuncare-website/icons/email_bl_icon_kmvodo.png"
              alt="Icone de l'email"
            />
            <div>
              <p className="font-bold uppercase">email </p>
              <p>infonuncare@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black w-full mx-auto h-4 mt-4" />
      <div className="md:flex justify-between mb-4">
        <p className="font-light my-4 md:my-0">
          {currentYear}, nuncare by Skot
        </p>
        <p className="font-light">
          Politique de confidentialité et conditions d'utilisation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
