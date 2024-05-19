import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommentContainer from "../components/comment_container";
import { PageWrapper } from "../utils/page_wrapper";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function HomePage() {
  const { ref: myRef, inView: isVisible } = useInView({
    threshold: 0,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isVisible]);

  return (
    <PageWrapper>
      <section>
        {imageWithText()}
        {aboutUs()}
        {sendMessageBox()}
        {commentBox()}
        {appPresentationBox()}
      </section>
    </PageWrapper>
  );
}

const imageWithText = () => {
  return (
    <div className="relative">
      <img
        className="block w-full object-cover object-top h-[600px] filter brightness-50"
        src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145202/nuncare-website/images/cover_main_q76xk2.jpg"
        alt="Image d'accueil"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
        <h1 className="text-2xl font-bold">
          Ressentez la différence avec nous
        </h1>
        <h1 className="text-6xl my-2 leading-[5rem]">
          La <span className=" font-bold">plateforme</span> <br /> qui rassemble
          tous les <span className="font-bold">Médecins</span>
        </h1>
        <hr className="border-white w-1/2 mx-auto h-10 mt-10" />
        <ul className="flex justify-center space-x-10 text-xl">
          <li className="cursor-pointer">Formation</li>
          <li className="cursor-pointer">Rencontres</li>
          <li className="cursor-pointer">Réseautage</li>
        </ul>

        <motion.button
          className="text-lg bg-redNun text-white p-2 rounded-md mt-10"
          whileHover={{ scale: 1.1 }}
        >
          Téléchargez l'application
        </motion.button>
      </div>
    </div>
  );
};

const aboutUs = () => {
  return (
    <div className="my-10 lg:px-32 bg-white ">
      <h1 className="text-5xl uppercase font-bold text-black">
        QUI SOMMES-NOUS ?
      </h1>
      <div className="rounded-md p-4 shadow-md mt-10">
        <p>
          Nuncare est bien plus qu'une simple plateforme en ligne. Nous sommes
          une communauté dédiée à soutenir et à renforcer la profession
          médicale. Notre mission est de créer un espace où les médecins peuvent
          se connecter, collaborer et s'épanouir ensemble.
        </p>

        <br />

        <p>
          À Nuncare, nous comprenons les défis uniques auxquels sont confrontés
          les professionnels de la santé. C'est pourquoi nous avons créé une
          plateforme qui offre bien plus que des services administratifs. Nous
          sommes là pour offrir un soutien émotionnel, intellectuel et
          professionnel à chaque étape de votre parcours médical.
        </p>

        <br />

        <p>
          Que vous soyez un médecin établi cherchant à élargir votre réseau
          professionnel ou un nouveau praticien à la recherche de conseils et de
          mentorat, Nuncare est là pour vous. Rejoignez notre communauté
          aujourd'hui et découvrez comment ensemble, nous pouvons changer la
          donne pour la santé et le bien-être de nos patients.
        </p>
      </div>

      <motion.button
        className="text-lg bg-redNun text-white p-2 rounded-md mt-10"
        whileHover={{ scale: 1.1 }}
      >
        Téléchargez l'application
      </motion.button>
    </div>
  );
};

const sendMessageBox = () => {
  return (
    <div className="block bg-greyNun px-32 py-10">
      <div className=" flex flex-row justify-between pt-10 ">
        <div className="basis-2/3">
          <h1 className="text-5xl text-black font-bold">
            Le meilleur pour la santé
          </h1>
          <div className="flex justify-center items-center space-x-4 my-4">
            <div>
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145194/nuncare-website/images/icon_equipe_medical_a1hniq.png"
                alt="Icone animation de medecins"
                className="w-56"
              />
            </div>
            <div className="block">
              <h2 className="text-black font-bold text-2xl my-2">
                Réseau professionnel et mise en relation
              </h2>
              <p>
                Nuncare offre un réseau professionnel robuste où les médecins
                peuvent se connecter avec d'autres professionnels de la santé.
                Que ce soit pour trouver des collaborateurs pour des projets de
                recherche, des opportunités de travail, ou simplement pour
                échanger des idées et des conseils, notre plateforme facilite
                les rencontres et les mises en relation entre médecins.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 my-4">
            <div>
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145194/nuncare-website/images/icon_profil_pro_qf0fvs.png"
                alt="Icone animation de medecins"
                className="w-56"
              />
            </div>
            <div className="block">
              <h2 className="text-black font-bold text-2xl my-2">
                Ressources de développement professionnel
              </h2>
              <p>
                Nuncare fournit aux médecins un accès à une variété de
                ressources de développement professionnel. Cela peut inclure des
                cours en ligne, des webinaires, des publications académiques,
                des guides pratiques, et bien plus encore. Ces ressources sont
                conçues pour aider les médecins à rester à jour avec les
                dernières avancées médicales et à développer leurs compétences
                professionnelles.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <img
            src="src/assets/images/cover_2.png"
            alt="Image docteur avec gants"
          />
        </div>
      </div>

      <div className="bg-blueNun h-[32rem] w-full p-10">
        <h1 className="text-center text-3xl text-white font-bold">
          Prenez rendez-vous ou posez une question
        </h1>
        <div className="flex space-x-4 my-4">
          <input
            type="text"
            placeholder="Nom"
            className="h-10 p-2 w-full text-lg border-b-2 border-white bg-inherit placeholder-white text-white outline-none"
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="h-10 p-2 w-full text-lg  border-b-2 border-white bg-inherit placeholder-white text-white outline-none"
          />
          <input
            type="text"
            placeholder="Contact"
            className="h-10 p-2 w-full text-lg border-b-2 border-white bg-inherit placeholder-white text-white outline-none"
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Entrez votre message"
          className="w-full h-44 border-2 border-blueNun mt-10 p-10 rounded outline-none"
        ></textarea>
        <div className="flex justify-center mt-10">
          <motion.button
            className="text-lg bg-redNun text-white p-2 rounded-md"
            whileHover={{ scale: 1.1 }}
          >
            Envoyer votre message
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const commentBox = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-5xl font-bold my-10">Les professionnels</h1>
      <OwlCarousel
        items={1}
        loop={true}
        responsiveClass
        autoPlay={true}
        autoplayTimeout={1000}
      >
        <CommentContainer
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1716145200/nuncare-website/images/cover_2_lmjlhv.png"
          }
          comment={
            "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
          }
          name={" Docteur Aka"}
          service={"En service au CHU de Yopougon"}
        />

        <CommentContainer
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1716145200/nuncare-website/images/cover_2_lmjlhv.png"
          }
          comment={
            "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
          }
          name={" Docteur Aka"}
          service={"En service au CHU de Yopougon"}
        />
        <CommentContainer
          imgUrl={
            "https://res.cloudinary.com/dhc0siki5/image/upload/v1716145200/nuncare-website/images/cover_2_lmjlhv.png"
          }
          comment={
            "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
          }
          name={" Docteur Aka"}
          service={"En service au CHU de Yopougon"}
        />
      </OwlCarousel>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <CommentContainer
            imgUrl={"src/assets/images/cover_2.png"}
            comment={
              "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
            }
            name={" Docteur Aka"}
            service={"En service au CHU de Yopougon"}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CommentContainer
            imgUrl={"src/assets/images/cover_2.png"}
            comment={
              "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
            }
            name={" Docteur Aka"}
            service={"En service au CHU de Yopougon"}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CommentContainer
            imgUrl={"src/assets/images/cover_2.png"}
            comment={
              "Cette plateforme m'a permis de trouver rapidement un médecin compétent grâce à sa diversité et sa fonctionnalité pratique"
            }
            name={" Docteur Aka"}
            service={"En service au CHU de Yopougon"}
          />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

const appPresentationBox = () => {
  return (
    <div className="my-10 text-center shadow-lg mx-32 py-10 bg-gradient-to-b from-white from-40% to-blueNun to-90% rounded-2xl overflow-clip h-[44rem]">
      <h1 className="text-5xl font-bold">
        Une application dédiée au corps médicale
      </h1>
      <p className="my-8">
        Bénéficiez d'un accès simplifié aux médecins proches de vous grâce à
        notre application intuitive.
      </p>

      <motion.button
        className="text-lg bg-redNun text-white p-2 rounded-md"
        whileHover={{ scale: 1.1 }}
      >
        Téléchargez l'application
      </motion.button>

      <div className="flex justify-center my-10">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145196/nuncare-website/images/phone_background_f59jkc.png"
          alt="Telephone montrant l'application"
          className="max-w-[44rem]"
        />
      </div>
    </div>
  );
};

export default HomePage;
