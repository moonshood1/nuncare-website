const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full bg-white px-32 mt-44">
      <div className="flex justify-between">
        <div className="flex space-x-3 items-center">
          <img
            src="src/assets/icons/address_bl_icon.png"
            alt="Icone de l'adress"
          />
          <div>
            <p className="font-bold uppercase">addresse </p>
            <p>Abidjan, Cocody Riviera M’badon</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-3 items-center">
            <img
              src="src/assets/icons/clock_bl_icon.png"
              alt="Icone de l'horloge"
            />

            <div>
              <p className="font-bold uppercase">heure de travail </p>
              <p>Du lundi au samedi 8h-17h</p>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <img
              src="src/assets/icons/phone_bl_icon.png"
              alt="Icone du contact"
            />
            <div>
              <p className="font-bold uppercase">contacts</p>
              <p>07 07 56 09 45</p>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <img
              src="src/assets/icons/email_bl_icon.png"
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
      <div className="flex justify-between mb-4">
        <p className="font-light">{currentYear}, nuncare by Skot</p>
        <p className="font-light">
          Politique de confidentialité et conditions d'utilisation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
