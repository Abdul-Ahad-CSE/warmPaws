import React from "react";
import dog from "../../assets/dog1.png"
export default function CarePet() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Winter Care Tips for Pets
        </h2>

        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Warm Shelter" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Provide a Warm Shelter</h3>
              <p className="text-gray-600">
                Keep your pet’s living space warm and cozy. Use soft bedding and ensure they stay away from cold drafts or damp areas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Hydration" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Keep Them Hydrated</h3>
              <p className="text-gray-600">
                Pets can get dehydrated in winter too. Make sure their water bowl doesn’t freeze and always has fresh water.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Proper Grooming" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Maintain Proper Grooming</h3>
              <p className="text-gray-600">
                Regular brushing keeps their coat healthy and allows natural oils to spread evenly, providing better insulation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Outdoor Time" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Limit Outdoor Time</h3>
              <p className="text-gray-600">
                Don’t keep pets outside for too long. Short walks are fine, but prolonged exposure to cold can lead to hypothermia.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Winter Clothing" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Use Winter Clothing</h3>
              <p className="text-gray-600">
                Small or short-haired pets benefit from sweaters or jackets during outdoor walks to stay warm and comfortable.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card bg-white shadow-xl border border-blue-100">
            <figure>
              <img src={dog} alt="Healthy Diet" className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-blue-700">Provide a Nutritious Diet</h3>
              <p className="text-gray-600">
                Good nutrition boosts their immune system and helps maintain body heat during the colder months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
