// app/trainers/page.tsx
import Footer from '@/components/Footer';

export default function TrainersPage() {
    const trainers = [
        {
            name: 'Rohan Deshmukh',
            image: '/trainers/bodybuilder-posing.jpg',
            bio: 'Rohan is a strength-focused trainer with a background in competitive bodybuilding and powerlifting. He thrives on intensity and results.',
            specialties: ['Weight Training', 'Muscle Building', 'Powerlifting'],
        },
        {
            name: 'Markus Reed',
            image: '/trainers/strong-bodybuilder.jpg',
            bio: 'Markus specializes in strength coaching and functional fitness. He tailors programs for both beginners and pros.',
            specialties: ['Strength Training', 'Hypertrophy Coaching', 'Conditioning'],
        },
        {
            name: 'Anush Mehta',
            image: '/trainers/anush.jpg',
            bio: 'Anush blends discipline and form to perfect your workout technique. He focuses on compound movements and full-body routines.',
            specialties: ['Form Correction', 'Full-Body Workouts', 'Personal Training'],
        },
        {
            name: 'Karan Sinha',
            image: '/trainers/karan.jpg',
            bio: 'Karan is a dynamic trainer passionate about helping clients transform both physically and mentally through consistent routines.',
            specialties: ['Mind-Muscle Connection', 'Body Recomposition', 'Motivational Coaching'],
        },
    ];

    return (
        <main className="bg-black text-white min-h-screen pt-24 px-4">
            <section className="max-w-7xl mx-auto pb-28">
                <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Meet Our Trainers</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trainers.map((trainer, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600 transition duration-300"
                        >
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-72 object-cover object-center"
                            />
                            <div className="p-6 space-y-3">
                                <h2 className="text-2xl font-bold text-red-500">{trainer.name}</h2>
                                <p className="text-gray-300 text-sm">{trainer.bio}</p>
                                <div>
                                    <h3 className="text-sm text-gray-400 font-semibold">Specialties:</h3>
                                    <ul className="list-disc list-inside text-gray-200 text-sm">
                                        {trainer.specialties.map((spec, i) => (
                                            <li key={i}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
