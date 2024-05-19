import { PageWrapper } from "../utils/page_wrapper";

function AboutPage() {
  return (
    <PageWrapper>
      <section className="lg:px-32 px-4">
        <div className="flex mt-10 md:h-[19rem] overflow-clip">
          <div className="md:basis-2/3">
            <h1 className="font-bold text-4xl md:text-5xl">
              A propos de Nuncare
            </h1>
            <p className="mt-8 md:text-lg">
              Nuncare est bien plus qu'une simple plateforme en ligne. Nous
              sommes une communauté dédiée à soutenir et à renforcer la
              profession médicale dans son ensemble. Fondée sur des valeurs de
              collaboration, d'innovation et de compassion, Nuncare s'engage à
              fournir un soutien complet aux médecins à toutes les étapes de
              leur carrière.
            </p>
          </div>
          <div className="hidden md:basis-1/3">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1716145199/nuncare-website/images/cover_3_tii2xv.png"
              alt="image communauté medecins"
              className="md:max-w-[20rem]"
            />
          </div>
        </div>
        <div className="shadow-sm shadow-blueNun p-4 mt-4 md:mt-0 md:text-lg">
          <h1 className="font-bold text-2xl md:text-4xl">Notre Mission</h1>
          <p className="mt-8">
            Notre mission chez Nuncare est de créer un espace où les médecins
            peuvent se connecter, collaborer et s'épanouir ensemble. Nous
            croyons fermement que le pouvoir de la communauté médicale réside
            dans l'union de ses membres, et c'est pourquoi nous mettons tout en
            œuvre pour faciliter les interactions et les échanges entre les
            professionnels de la santé.
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-8">Nos Valeurs</h1>
          <p className="mt-4">
            Au cœur de Nuncare se trouvent des valeurs fondamentales qui guident
            chacune de nos actions et décisions. Nous croyons en :
            <ul className="list-disc mx-8 mt-4">
              <li className="my-4">
                L'empathie : Nous comprenons les défis uniques auxquels sont
                confrontés les médecins et nous nous engageons à offrir un
                soutien empreint d'empathie et de compassion
              </li>
              <li className="my-4">
                La collaboration : Nous croyons au pouvoir de la collaboration
                et nous encourageons les médecins à travailler ensemble pour
                atteindre des objectifs communs et améliorer les soins de santé
                pour tous
              </li>
              <li className="my-4">
                L'innovation : Nous sommes déterminés à repousser les limites de
                ce qui est possible en matière de soutien aux médecins, en
                adoptant constamment de nouvelles technologies et de nouvelles
                approches pour répondre à leurs besoins changeants.
              </li>
              <li className="my-4">
                L'intégrité : Nous sommes guidés par des principes d'intégrité,
                d'éthique et de transparence dans toutes nos interactions avec
                les médecins et les autres parties prenantes.
              </li>
            </ul>
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-8">Nos Services</h1>
          <p className="mt-4">
            Chez Nuncare, nous offrons une gamme de services conçus pour
            répondre aux besoins variés des médecins, y compris :
            <ul className="list-disc mx-8 mt-4">
              <li className="my-4">
                Réseau professionnel et mise en relation : Nous offrons un
                réseau professionnel robuste où les médecins peuvent se
                connecter avec d'autres professionnels de la santé pour échanger
                des idées, trouver des opportunités de collaboration et
                construire des relations durables.
              </li>
              <li className="my-4">
                Ressources de développement professionnel : Nous fournissons aux
                médecins un accès à une variété de ressources de développement
                professionnel, telles que des cours en ligne, des webinaires et
                des publications académiques, pour les aider à rester à jour
                avec les dernières avancées médicales et à développer leurs
                compétences professionnelles.
              </li>
              <li className="my-4">
                Soutien administratif et gestion de pratique : Nous offrons des
                services de soutien administratif pour aider les médecins à
                gérer efficacement leur pratique médicale, y compris la gestion
                des rendez-vous, des dossiers médicaux électroniques et des
                tâches administratives.
              </li>
              <li className="my-4">
                Soutien émotionnel et bien-être : Nous proposons des ressources
                et des initiatives pour soutenir le bien-être émotionnel des
                médecins, y compris des groupes de soutien, des sessions de
                coaching et des programmes de méditation.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default AboutPage;
