// app/services/page.tsx
import { FaDumbbell, FaHeartbeat, FaRunning, FaUserAlt, FaAppleAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      name: 'Weight Training',
      description:
        'Build strength and muscle with our state-of-the-art equipment and expert guidance.',
      icon: <FaDumbbell className="text-4xl text-red-600" />,
    },
    {
      name: 'Yoga',
      description:
        'Improve flexibility, reduce stress, and find balance with our certified yoga instructors.',
      icon: <FaHeartbeat className="text-4xl text-red-600" />,
    },
    {
      name: 'Zumba',
      description:
        'Burn calories while dancing to energizing beats — fitness has never been this fun!',
      icon: <FaRunning className="text-4xl text-red-600" />,
    },
    {
      name: 'Personal Training',
      description:
        'One-on-one sessions tailored to your goals with our professional personal trainers.',
      icon: <FaUserAlt className="text-4xl text-red-600" />,
    },
    {
      name: 'Nutrition Coaching',
      description:
        'Get personalized nutrition advice and meal plans to fuel your fitness journey.',
      icon: <FaAppleAlt className="text-4xl text-red-600" />,
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-9 px-4">
      <section className="max-w-6xl mx-auto pb-28">
        <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition duration-300"
            >
              <div className="flex items-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-red-500 mb-2">{service.name}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}
