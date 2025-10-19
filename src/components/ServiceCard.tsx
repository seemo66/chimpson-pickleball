type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    cost: {
      private?: string;
      semiPrivate?: string;
      package?: string;
    };
  };
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, cost } = service;

  return (
    <section className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-md">
      <h3 className="font-raleway text-lg font-bold">{title}</h3>
      <div>
        <p className="mb-5">{description}</p>
        <p dangerouslySetInnerHTML={{ __html: cost.private ?? '' }} />
        <p dangerouslySetInnerHTML={{ __html: cost.semiPrivate ?? '' }} />
        <p dangerouslySetInnerHTML={{ __html: cost.package ?? '' }} />
      </div>
    </section>
  );
}
