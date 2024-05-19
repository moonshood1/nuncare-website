import { PageWrapper } from "../utils/page_wrapper";

function NetworkingPage() {
  return (
    <PageWrapper>
      <section className="lg:px-32 px-4">
        <div className="flex mt-10 md:h-[19rem] overflow-clip">
          <div className="md:basis-2/3">
            <h1 className="font-bold text-4xl md:text-5xl">
              Réseau de Médecins de Nuncare
            </h1>
            <p className="mt-8 md:text-lg">
              Le réseau de médecins de Nuncare est bien plus qu'une simple liste
              d'annuaire en ligne. Il s'agit d'une communauté dynamique et
              interconnectée de professionnels de la santé, un espace où les
              médecins peuvent se connecter, collaborer et s'entraider pour
              offrir les meilleurs soins possibles à leurs patients.
            </p>
          </div>
          <div className="hidden md:basis-1/3">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145199/nuncare-website/images/cover_3_tii2xv.png"
              alt="image communauté medecins"
              className="max-w-[20rem]"
            />
          </div>
        </div>
        <div className="shadow-sm shadow-blueNun p-4 mt-4 md:mt-0 md:text-lg">
          <h1 className="font-bold text-2xl md:text-4xl">
            Mise en Relation Facilitée
          </h1>
          <p className="mt-8">
            Le réseau de médecins de Nuncare offre aux professionnels de la
            santé la possibilité de se connecter avec d'autres membres de la
            communauté, que ce soit dans leur spécialité médicale, leur domaine
            d'intérêt particulier, ou leur région géographique. Grâce à des
            outils de recherche avancés et à des filtres personnalisables, les
            médecins peuvent trouver des collègues qui partagent leurs intérêts
            professionnels et leurs objectifs.
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-16">
            Collaboration Clinique et Académique
          </h1>
          <p className="mt-4 md:text-lg">
            Le réseau de médecins de Nuncare encourage la collaboration entre
            pairs pour favoriser l'échange d'idées, la résolution de problèmes
            et le développement de nouvelles approches dans la pratique
            médicale. Les médecins peuvent partager des cas cliniques, discuter
            des dernières avancées médicales, participer à des projets de
            recherche collaboratifs, et même trouver des mentors ou des
            partenaires pour des initiatives professionnelles.
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-16">
            Partage de Ressources et de Bonnes Pratiques
          </h1>
          <p className="mt-4 md:text-lg">
            Au sein du réseau de médecins de Nuncare, les membres ont accès à
            une multitude de ressources et de bonnes pratiques partagées par
            leurs pairs. Cela peut inclure des guides cliniques, des protocoles
            de traitement, des outils diagnostiques, des documents de formation,
            des vidéos éducatives, et bien plus encore. Les médecins peuvent
            bénéficier de l'expérience et de l'expertise collective de la
            communauté pour améliorer leurs compétences et leur pratique
            médicale.
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-16">
            Soutien et Entraide
          </h1>
          <p className="mt-4 md:text-lg">
            Enfin, le réseau de médecins de Nuncare offre un espace où les
            professionnels de la santé peuvent trouver du soutien, des conseils
            et de l'entraide. Que ce soit pour obtenir des conseils sur la
            gestion de cas complexes, des recommandations pour des ressources
            spécifiques, ou simplement pour partager des expériences et des
            défis avec des collègues qui comprennent, le réseau de médecins de
            Nuncare est là pour soutenir ses membres à chaque étape de leur
            carrière.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default NetworkingPage;
