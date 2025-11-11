import React from "react";
import happyPet from "../../assets/happyPet.png"
export default function Story() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-amber-700 mb-3">
            Happy Pet Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nothing makes us happier than seeing our furry friends healthy and
            loved. Here are a few heartwarming stories from our amazing pet
            families.
          </p>
        </div>

        {/* Story 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <img
              src={happyPet}
              alt="Happy Dog Story"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-amber-700 mb-2">
              Bella’s Winter Transformation
            </h3>
            <p className="text-gray-600 mb-3">
              Bella used to hate winter walks. After our vet recommended a warm
              coat and proper diet, she’s now full of energy even in the
              coldest days! Her owner couldn’t be happier seeing her tail wag
              every morning.
            </p>
            <p className="italic text-gray-500">— Rima Akter & Bella 🐶</p>
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-amber-700 mb-2">
              Milo’s Healing Journey
            </h3>
            <p className="text-gray-600 mb-3">
              After a leg injury, Milo received expert orthopedic care from our
              team. Within weeks, he was back to chasing balls and playing with
              his favorite toys again!
            </p>
            <p className="italic text-gray-500">— Imran & Milo 🐕</p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={happyPet}
              alt="Recovery Story"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Story 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src={happyPet}
              alt="Cat Story"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-amber-700 mb-2">
              Coco’s Cozy New Life
            </h3>
            <p className="text-gray-600 mb-3">
              Coco was a rescued cat who struggled to adjust to her new home.
              Thanks to our behavioral specialist, she’s now relaxed, playful,
              and loves her new family!
            </p>
            <p className="italic text-gray-500">— Tanvir & Coco 🐱</p>
          </div>
        </div>
      </div>
    </section>
  );
}
