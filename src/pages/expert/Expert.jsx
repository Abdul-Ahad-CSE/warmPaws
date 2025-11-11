import React from "react";
import vet from "../../assets/vet.png"
export default function Expert() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-3">
            Meet Our Expert Vets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our veterinary professionals are dedicated to keeping your pets
            healthy and happy. With years of experience and a passion for
            animal care, they’re here to support you every step of the way.
          </p>
        </div>

        {/* Vets Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Vet 1 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. Sarah Johnson"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-500 text-sm mb-2">Veterinary Surgeon</p>
              <p className="text-gray-600 text-sm">
                Expert in small animal surgery and preventive medicine, with 8+
                years of clinical experience.
              </p>
            </div>
          </div>

          {/* Vet 2 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. Mark Anderson"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. Mark Anderson
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Animal Nutrition Specialist
              </p>
              <p className="text-gray-600 text-sm">
                Focused on diet, wellness, and nutrition for dogs, cats, and
                exotic pets.
              </p>
            </div>
          </div>

          {/* Vet 3 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. Emily Carter"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. Emily Carter
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Veterinary Dermatologist
              </p>
              <p className="text-gray-600 text-sm">
                Specialist in skin and coat health, allergy management, and pet
                comfort care.
              </p>
            </div>
          </div>

          {/* Vet 4 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. James Lee"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. James Lee
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Orthopedic Specialist
              </p>
              <p className="text-gray-600 text-sm">
                Experienced in orthopedic treatments and post-surgery recovery
                for all pets.
              </p>
            </div>
          </div>

          {/* Vet 5 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. Olivia Martin"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. Olivia Martin
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Emergency Care Veterinarian
              </p>
              <p className="text-gray-600 text-sm">
                Passionate about saving lives with quick diagnosis and expert
                emergency response.
              </p>
            </div>
          </div>

          {/* Vet 6 */}
          <div className="card bg-emerald-50 shadow-md hover:shadow-xl transition-all border border-emerald-100 text-center p-6 rounded-2xl">
            <figure className="flex justify-center">
              <img
                src={vet}
                alt="Dr. Daniel Walker"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-emerald-700 mt-4">
                Dr. Daniel Walker
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Exotic Animal Specialist
              </p>
              <p className="text-gray-600 text-sm">
                Treats birds, reptiles, and small mammals with care and
                specialized medical expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
