import { PageWrapper } from "../utils/page_wrapper";

function ServicePage() {
  return (
    <PageWrapper>
      <section className="px-32">
        <div className="flex mt-10 h-[19rem] overflow-clip">
          <div className="basis-2/3">
            <h1 className="font-bold text-5xl">Services Offerts par Nuncare</h1>
            <p className="mt-8 text-lg">
              Nuncare s'engage à fournir une gamme complète de services pour
              soutenir les médecins dans tous les aspects de leur pratique
              médicale. Que ce soit pour favoriser le développement
              professionnel, faciliter la gestion administrative, encourager le
              bien-être émotionnel ou promouvoir la collaboration entre pairs,
              Nuncare offre une plateforme robuste où les médecins peuvent
              trouver les ressources et le soutien dont ils ont besoin pour
              réussir.
            </p>
          </div>
          <div className="basis-1/3">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145199/nuncare-website/images/cover_3_tii2xv.png"
              alt="image communauté medecins"
              className="max-w-[20rem]"
            />
          </div>
        </div>
        <div className="shadow-sm shadow-blueNun p-4  text-lg">
          <h1 className="font-bold text-4xl">
            Réseau Professionnel et Mise en Relation :
          </h1>
          <p className="mt-8">
            L'un des services clés de Nuncare est son réseau professionnel
            dynamique. Nous offrons aux médecins la possibilité de se connecter
            et de collaborer avec d'autres professionnels de la santé, que ce
            soit au niveau local, national ou international. Notre plateforme
            facilite les mises en relation en fonction des intérêts
            professionnels, des spécialités médicales, de l'expérience et
            d'autres critères pertinents. Les médecins peuvent ainsi trouver des
            partenaires pour des projets de recherche, des opportunités de
            collaboration clinique ou académique, ou tout simplement échanger
            des idées et des meilleures pratiques.
          </p>
          <h1 className="font-bold text-4xl mt-16">
            Ressources de Développement Professionnel{" "}
          </h1>
          <p className="mt-4 text-lg">
            Nuncare fournit aux médecins un accès à une vaste bibliothèque de
            ressources de développement professionnel. Cela comprend des cours
            en ligne, des webinaires, des conférences, des publications
            académiques, des revues médicales, des guides pratiques, et bien
            plus encore. Ces ressources sont conçues pour aider les médecins à
            rester à jour avec les dernières avancées médicales, à perfectionner
            leurs compétences cliniques, à développer leur leadership et leur
            gestion, et à répondre aux exigences en constante évolution de la
            pratique médicale.
          </p>
          <h1 className="font-bold text-4xl mt-16">
            Soutien Administratif et Gestion de Pratique
          </h1>
          <p className="mt-4 text-lg">
            Enfin, Nuncare reconnaît l'importance du bien-être émotionnel des
            médecins et s'engage à fournir un soutien complet dans ce domaine.
            Nous offrons une variété de ressources et de programmes visant à
            promouvoir le bien-être mental, émotionnel et physique des médecins.
            Cela peut inclure des sessions de coaching individuel, des groupes
            de soutien, des programmes de gestion du stress, des conseils en
            matière de santé et de mode de vie, des ressources de méditation et
            de pleine conscience, et d'autres initiatives visant à prévenir
            l'épuisement professionnel et à favoriser un équilibre sain entre
            vie professionnelle et vie personnelle.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ServicePage;
