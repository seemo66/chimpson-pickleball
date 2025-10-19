import ServiceCard from './ServiceCard';

export default function Services() {
  const lessonTypes = [
    {
      title: 'Beginner Lessons',
      description:
        'One-on-one lessons tailored to beginners, focusing on foundational skills and techniques.',
      cost: {
        private: '<strong>Private:</strong> $60/hour',
        semiPrivate: '<strong>Semi-Private (2 students):</strong> $35/person/hour',
        package: '<strong>5 Lesson Package:</strong> 10% off',
      },
    },
    {
      title: 'Intermediate+ Lessons',
      description:
        'One-on-one lessons tailored to intermediate learners, focusing on more advanced techniques and strategies.',
      cost: {
        private: '<strong>Private:</strong> $60/hour',
        semiPrivate: '<strong>Semi-Private (2 students):</strong> $35/person/hour',
        package: '<strong>5 Lesson Package:</strong> 10% off',
      },
    },
    {
      title: 'Group Lessons (3 or more students)',
      description:
        'Interactive group sessions designed for beginners or intermediate learners to enhance their skills through collaboration.',
      cost: {
        private: '<strong>Private:</strong> $25/person/hour',
        package: '<strong>5 Lesson Package:</strong> 10% off',
      },
    },
  ];
  return (
    <section className="mt-18 mx-[10px] flex flex-col gap-12 md:mt-[150px]">
      <h2 className="leading-14 text-center font-raleway text-3xl font-medium text-black">
        Choose your starting point
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessonTypes.map((lesson, index) => (
          <ServiceCard key={index} service={lesson} />
        ))}
      </div>
    </section>
  );
}
