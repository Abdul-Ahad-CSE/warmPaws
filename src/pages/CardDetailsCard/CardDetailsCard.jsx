import React, { useState } from "react";

export default function CardDetailsCard({ service }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email) {
      window.alert("Please fill in all fields!");
      return;
    }

    
    window.toast &&
      window.toast("Booking Successful!", { type: "success" });

    
    if (!window.toast) {
      const toast = document.createElement("div");
      toast.className =
        "fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in";
      toast.innerText = "Booking Successful!";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    }

   
    setFormData({ name: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        {service.serviceName}
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-lg text-gray-700">{service.description}</p>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {service.category}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Provider:</span>{" "}
              {service.providerName}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {service.providerEmail}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Price:</span> $
              {service.price}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Available Slots:</span>{" "}
              {service.slotsAvailable}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Rating:</span> ⭐{" "}
              {service.rating}
            </p>
          </div>

         
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary w-full mt-6"
          >
            {showForm ? "Close Form" : "Book Service"}
          </button>

          {/* Booking Form */}
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-6 bg-base-200 p-5 rounded-xl shadow-sm space-y-4 animate-fade-in"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Book This Service
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-full">
                Book Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
