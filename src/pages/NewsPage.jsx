import { PageWrapper } from "../utils/page_wrapper";

function NewsPage() {
  return (
    <PageWrapper>
      <section className="px-32 my-10">
        <div>
          <h1 className="font-bold text-5xl">Nos Actualités et évènement</h1>
          <p className="mt-8 text-lg">
            La section Actualités et Événements de Nuncare est une vitrine
            dynamique des dernières informations, annonces et activités
            pertinentes pour les professionnels de la santé. Cette section
            fournit aux membres de la communauté médicale des mises à jour
            régulières sur les événements à venir, les nouvelles collaborations,
            les avancées médicales, et d'autres sujets d'intérêt professionnel.
          </p>
        </div>

        <div className="shadow-sm shadow-blueNun p-4 text-lg my-8">
          <h1 className="font-bold text-4xl">Événements à Venir</h1>
          <p className="mt-8">Aucun évenement pour l'instant</p>
        </div>
        <div className="shadow-sm shadow-blueNun p-4 text-lg my-8">
          <h1 className="font-bold text-4xl">Résumés d'Événements Passés</h1>
          <p className="mt-8">Aucun évenement pour l'instant</p>
        </div>
        <div className="shadow-sm shadow-blueNun p-4 text-lg my-8">
          <h1 className="font-bold text-4xl">Opportunités de Participation</h1>
          <p className="mt-8">Aucun élément pour l'instant</p>
        </div>
      </section>
    </PageWrapper>
  );
}

export default NewsPage;
