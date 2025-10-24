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
    <section className="group flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-raleway text-xl font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
        {title}
      </h3>

      <p className="leading-relaxed text-gray-600">{description}</p>

      <div className="mt-auto space-y-2 border-t border-gray-100 pt-4">
        {cost.private && (
          <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: cost.private }} />
        )}
        {cost.semiPrivate && (
          <p
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{ __html: cost.semiPrivate }}
          />
        )}
        {cost.package && (
          <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: cost.package }} />
        )}
      </div>
    </section>
  );
}
