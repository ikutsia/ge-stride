import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("group-tours");
  const [cartCount, setCartCount] = useState(0);
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Khevsureti Overnight Tour (Shatili and Mutso) – 2-3 Aug",
      description:
        "Join us on an off-road adventure to the historical region of Khevsureti. Let's cross the sky-reaching Datvisjvari Pass, medieval fortified villages, powerful mountain streams, and hidden valleys. The land of myths, folk tales, and centuries-long history awaits us!",
      location: "Khevsreti, Georgia",
      date: "August 2, 2025 - August 3, 2025",
      time: "8:00 am - 9:00 pm (Asia/Tbilisi)",
      venue: "Khevsreti, Georgia",
      price: 450,
      currency: "₾",
      category: "Georgia and Armenia group tours",
      images: [
        "mountain1",
        "waterfall1",
        "road1",
        "village1",
        "lake1",
        "group1",
      ],
      details: {
        dates: "Sat 2 Aug - Sun 3 Aug",
        duration: "2 days / 1 night",
        drivingDistance: "300 km",
        difficulty:
          "Easy BUT the trip includes two long off-road drives on a steep, narrow mountain road.",
        groupSize: "Min. 5 participants",
        accommodation: "shared twin/double rooms in a local guesthouse",
        hikingIncluded:
          "YES (Reaching Mutso Fortress requires a 20-30 minute-long uphill walk on a steep mountain path.)",
        pickup: "Sat, 08:00, Samaia Garden, Tbilisi",
        dropoff:
          "Sun, around 21:00, Samaia Garden, Tbilisi (The arrival time will depend on the traffic)",
        price: "450 GEL",
      },
      itinerary: {
        day1: {
          title: "Day 1",
          subtitle:
            "Tbilisi - Datvisjvari Pass - Shatili - Anatori Burial Vaults",
          description:
            "We will depart Tbilisi in the morning and head north to Khevsureti. Around noon, we will reach Datvisjvari Pass (2689 m.a.s.l.) and descend to Shatili, a historic fortified village. We will visit Anatori Burial Vaults and stay overnight in a guesthouse.",
        },
        day2: {
          title: "Day 2",
          subtitle: "Mutso - Datvisjvari Pass - Tbilisi",
          description:
            "We will explore Ardoti and head to Mutso, another fortified settlement. We will hike for 20-30 minutes (115m elevation gain) to the fortress. We will drive back to Tbilisi through picturesque landscapes. Optional rafting tour on the Aragvi river. End of the tour.",
        },
      },
      inclusions: [
        "Transfers (4WD)",
        "Sightseeing/hiking itinerary with an English-speaking guide",
        "Accommodation in shared twin/double rooms in a local guesthouse (1 night)",
        "Breakfast on Day 2",
        "Dinner on Day 1",
        "Entrance fees as per itinerary",
      ],
      exclusions: [
        "Personal travel insurance",
        "Lunch on Day 1 and Day 2",
        "Gratuities",
        "Activities mentioned in the itinerary as optional",
      ],
      preparation: {
        meeting:
          "We meet on Friday at 8:00 at Samaia Garden. Please be on time. In case of any delays, please inform your guide. Otherwise, the group will depart without you.",
        weather:
          "Georgian weather can be unpredictable. Please check the weather forecast before the tour.",
        clothing:
          "Bring layers, long sleeves, light jackets, trousers, sun cream, hats, sunglasses, walking/sports shoes, and a raincoat.",
        road: "The road to Khevsureti is difficult and long. If you are prone to motion sickness, please bring medicine. We will make stops for photos and rest.",
        food: "Bring 1.5-2 liters of water and snacks (sandwiches, dried fruit, sweets). Breakfast on Day 2 and Dinner on Day 1 are included.",
        money:
          "Bring CASH. There are no ATMs in Khevsureti, and people don't accept credit cards. Lunch usually costs 20-25 GEL per person.",
        essentials:
          "Bring a daypack to carry important items. Khevsureti is very remote, so guesthouses are conserving electric energy. You will be able to charge cameras, phones, and tablets.",
        guide:
          "We will send you guide's contact details a few days before the tour. Please make sure to check your inbox and spam.",
      },
    },
    {
      id: 2,
      title: "Gorelovka – Doukhobors Day Tour – 9 August",
      description:
        "Join our Gorelovka – Doukhobors Day Tour to enjoy the nature and cultural heritage of Samtskhe-Javakheti Doukhobors.",
      location: "Javakheti, Georgia",
      date: "August 9, 2025",
      images: ["bridge1", "stork1", "people1", "houses1", "lake2", "building1"],
    },
    {
      id: 3,
      title: "Abudelauri Lakes (Roshka) Day Hike – 10 Aug",
      description:
        "Join us on a day hike to the colorful Abudelauri Lakes near Roshka village. Our trail will take us through a peaceful mountain valley up to the southern slopes of",
      location: "Roshka, Georgia",
      date: "August 10, 2025",
      images: [
        "snow1",
        "lakes1",
        "hikers1",
        "mountain2",
        "glacier1",
        "hiking1",
      ],
    },
    {
      id: 4,
      title: "Aragats 4090 highest peak of Armenia – 15-17 Aug",
      description:
        "Join us on a trekking adventure on Mount Aragats – the highest peak in Armenia. Depending on your fitness level, you will hike either the southern (easier) summit or the",
      location: "Aragats, Armenia",
      date: "August 15, 2025 To August 17, 2025",
      images: [
        "hiking2",
        "peak1",
        "wildflowers1",
        "mountain3",
        "trek1",
        "armenia1",
      ],
    },
    {
      id: 5,
      title: "Kazbegi Day Tour – 23 Aug",
      description:
        "Join our Kazbegi Day Tour to explore Georgia's most famous travel destination. We will take you on an adventurous ride along the Georgian Military Road; visit Gudauri Panorma. hike to",
      location: "Kazbegi, Georgia",
      date: "August 23, 2025",
      images: [
        "lake3",
        "waterfall2",
        "church1",
        "mountain4",
        "kazbegi1",
        "panorama1",
      ],
    },
    {
      id: 6,
      title: "Tusheti 3 days Adventure – 29-31 Aug",
      description:
        "Join us on a tour to Tusheti – a remote paradise of untouched nature with breathtaking views that you will never forget! It's the best place for hiking, beautiful villages,",
      location: "Tusheti, Georgia",
      date: "August 29, 2025 To August 31, 2025",
      images: [
        "vehicle1",
        "mountain5",
        "village1",
        "tusheti1",
        "adventure1",
        "nature1",
      ],
    },
  ];

  const privateTours = [
    {
      id: 1,
      title: "Svaneti Mestia-Ushguli private tour for Thomas",
      description:
        "This is a private tour request for Thomas traveling in Svaneti and hiking from Mestia to Ushguli.",
      location: "Svaneti, Georgia",
      date: "July 11, 2025",
    },
    {
      id: 2,
      title: "Georgia Tour for Maryana (7 days/ 6 nights)",
      description:
        "Private tour for family including Kutaisi, Svaneti and Batumi.",
      location: "Svaneti Georgia",
      date: "July 15, 2025",
    },
    {
      id: 3,
      title: "Rkoni & Ikvi Monastery Day Hike for Tjasa",
      description:
        "Join us on a beautiful Rkoni Monastery Day Hike. Our trail will lead us through Tedzami River Valley – a scenic gorge hiding medieval ruins and spoiling visitors with scenic",
      location: "Rkoni, Georgia",
      date: "July 20, 2025",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Goodman",
      date: "2025-07-01",
      rating: 5,
      text: "Great experience! The hike outside Tbilisi was exactly what I was looking for. The guide was knowledgeable and the group was friendly. Highly recommend!",
      avatar: "?",
    },
    {
      id: 2,
      name: "Sandro Khomeriki",
      date: "2025-06-28",
      rating: 5,
      text: "ძალიან კარგი გამოცდილება იყო! გიდი პროფესიონალი იყო და ყველაფერი უკეთესად ვიდგა ვიდრე მოველოდი.",
      avatar: "S",
    },
    {
      id: 3,
      name: "Konstantin Korkelia",
      date: "2025-06-25",
      rating: 5,
      text: "Excellent tour! The guides were professional and very knowledgeable about the local history and culture. The hiking trails were beautiful and well-organized.",
      avatar: "K",
    },
  ];

  const rentalItems = [
    {
      id: 1,
      name: "Tent - Kelty Late Start (2 persons)",
      image: "tent",
      specs: [
        "Seasons: 3",
        "Easy set up",
        "Number of doors: 1",
        "Number of vestibules: 1",
        "Capacity: 2",
        "Packaged weight: 2.04 kg",
        "Number of poles: 2",
        "Pole type: Aluminum",
      ],
    },
    {
      id: 2,
      name: "Helmet - Petzl",
      image: "helmet",
      description:
        "PETZL Meteor Silver Aqua. Are you passionate about climbing, mountaineering, or ski touring? The METEOR helmet offers efficient protection for these three activities! Lightweight, compact, and with excellent ventilation, it's comfortable in any season.",
    },
    {
      id: 3,
      name: "Sleeping Bag - Kelty cosmic Dridown 20 F",
      image: "sleeping-bag",
      specs: [
        "Seasons: 3",
        "The smallest and lightest sleeping bag for this temperature",
        "Size - Regular",
        "Temp Rating: 20° / -7°C",
        "Fits to: 183 cm",
        "Total weight: 1.1 kg",
        "Best use: trekking, backpacking",
      ],
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Natia",
      phone: "+995 577 68 79 65",
      email: "weekiesgeorgia@gmail.com",
      bio: "WT Georgia founder and the main driving force behind the project. Natia has extensive hiking experience and leads intense hikes and nature adventures.",
    },
    {
      id: 2,
      name: "Karolina",
      phone: "+995 599 80 39 35",
      email: "weekiesgeorgia@gmail.com",
      bio: "Karolina moved to Georgia and met Natia, becoming an integral part of the team. She designs most of the WT's itineraries and guides relaxed social hikes and cultural tours.",
    },
    {
      id: 3,
      name: "Tornike",
      phone: "",
      email: "",
      bio: "Wine lovers here is your new best friend! Tornike brings his expertise and passion to our tours.",
    },
    {
      id: 4,
      name: "Mariam",
      phone: "",
      email: "",
      bio: "Let us introduce you to our tiniest but perhaps most energetic team member.",
    },
    {
      id: 5,
      name: "Giorgi",
      phone: "",
      email: "",
      bio: "One of the best 4x4 drivers in the country, Giorgi ensures safe and exciting off-road adventures.",
    },
  ];

  const renderContent = () => {
    // If a tour is selected, show the tour detail view
    if (selectedTour) {
      return (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-4">
            <button
              onClick={() => setSelectedTour(null)}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← Back to Tours
            </button>
          </div>

          {/* Tour Header */}
          <div className="mb-6">
            <div className="inline-block px-3 py-1 border border-pink-300 bg-white text-pink-600 text-sm rounded mb-4">
              {selectedTour.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedTour.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Info */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="grid grid-cols-3 grid-rows-2 h-64 bg-gray-200 rounded-lg mb-6 relative">
                {selectedTour.images.map((img, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 border border-gray-400"
                  ></div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-lg font-bold">
                    KHEVSURETI SHATILI-MUTSO
                  </div>
                  <div className="text-sm">WT GEORGIA</div>
                </div>
              </div>

              {/* Tour Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {selectedTour.description}
                </p>
              </div>

              {/* Tour Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tour Details
                </h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Dates:</strong> {selectedTour.details.dates}
                  </div>
                  <div>
                    <strong>Duration:</strong> {selectedTour.details.duration}
                  </div>
                  <div>
                    <strong>Driving distance:</strong>{" "}
                    {selectedTour.details.drivingDistance}
                  </div>
                  <div>
                    <strong>Trip difficulty:</strong>{" "}
                    {selectedTour.details.difficulty}
                  </div>
                  <div>
                    <strong>Group size:</strong>{" "}
                    {selectedTour.details.groupSize}
                  </div>
                  <div>
                    <strong>Accommodation:</strong>{" "}
                    {selectedTour.details.accommodation}
                  </div>
                  <div>
                    <strong>Hiking included:</strong>{" "}
                    {selectedTour.details.hikingIncluded}
                  </div>
                  <div>
                    <strong>Pick-up:</strong> {selectedTour.details.pickup}
                  </div>
                  <div>
                    <strong>Drop-off:</strong> {selectedTour.details.dropoff}
                  </div>
                  <div>
                    <strong>Price:</strong> {selectedTour.details.price}
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Itinerary:
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {selectedTour.itinerary.day1.title}
                    </h3>
                    <h4 className="text-md font-semibold text-gray-700 mb-2">
                      {selectedTour.itinerary.day1.subtitle}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTour.itinerary.day1.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {selectedTour.itinerary.day2.title}
                    </h3>
                    <h4 className="text-md font-semibold text-gray-700 mb-2">
                      {selectedTour.itinerary.day2.subtitle}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTour.itinerary.day2.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-green-700 mb-4">
                  Inclusions:
                </h2>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  {selectedTour.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              {/* Exclusions */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-red-600 mb-4">
                  Exclusions:
                </h2>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  {selectedTour.exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              {/* Note */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Note:
                </h3>
                <p className="text-gray-700">
                  Please check{" "}
                  <span className="text-pink-600 underline cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  for our cancellation and insurance policy.
                </p>
              </div>

              {/* Preparation Button */}
              <div className="mb-8">
                <button className="w-full bg-pink-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-pink-700 transition-colors">
                  💬 HOW TO PREPARE FOR THE TOUR
                </button>
              </div>

              {/* Meeting Info */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  MEETING TIME AND PLACE
                </h3>
                <p className="text-gray-700">
                  {selectedTour.preparation.meeting}
                </p>
              </div>

              {/* Preparation Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    WEATHER
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.weather}{" "}
                    <span className="text-pink-600 underline cursor-pointer">
                      Here is the weather forecast
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    WHAT TO WEAR
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.clothing}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    THE ROAD
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.road}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    FOOD & DRINKS
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.food}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    MONEY
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.money}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    OTHER ESSENTIAL ITEMS
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.essentials}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    GUIDE
                  </h3>
                  <p className="text-gray-700">
                    {selectedTour.preparation.guide}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                {/* Tour Details */}
                <div className="mb-6">
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Date:</strong> {selectedTour.date}
                    </div>
                    <div>
                      <strong>Time:</strong> {selectedTour.time}
                    </div>
                    <div>
                      <strong>Venue:</strong> {selectedTour.venue}
                    </div>
                  </div>
                </div>

                {/* Tickets */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Tickets
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-600 font-medium">
                          Adult
                        </span>
                        <span className="text-gray-500 text-sm">
                          (6 seats remaining)
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Ticket Price:</span>
                        <span className="font-bold">
                          {selectedTour.currency}
                          {selectedTour.price}.00
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                          -
                        </button>
                        <input
                          type="number"
                          value="0"
                          className="w-16 h-8 border border-gray-300 rounded text-center"
                        />
                        <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                          +
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span>Subtotal:</span>
                        <span>{selectedTour.currency}0.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                      <span>Quantity: 0</span>
                      <span>Total: {selectedTour.currency}0.00</span>
                    </div>
                  </div>
                </div>

                {/* Get Tickets Button */}
                <button className="w-full bg-gray-300 text-gray-600 py-3 px-6 rounded-lg font-bold text-lg cursor-not-allowed">
                  GET TICKETS
                </button>

                {/* Calendar Options */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Add To Calendar
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full border border-gray-300 rounded-lg py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="text-blue-600 mr-2">📅</span> Google
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="text-purple-600 mr-2">📅</span> Yahoo
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="text-red-600 mr-2">📅</span> Apple
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="text-blue-600 mr-2">📅</span> Outlook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case "group-tours":
        return (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Discover 41 Upcoming and Expire Events
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedTour(tour)}
                >
                  <div className="relative">
                    <div className="grid grid-cols-3 grid-rows-2 h-48 bg-gray-200">
                      {tour.images.map((img, index) => (
                        <div
                          key={index}
                          className="bg-gray-300 border border-gray-400"
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <div className="text-sm font-semibold">WT GEORGIA</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {tour.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <span className="text-pink-500 mr-2">📍</span>
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-blue-500 mr-2">📅</span>
                      {tour.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "private-tours":
        return (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Private Tours & Ideas
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>• You can choose any group tour as a private tour.</p>
                <p>
                  • Check{" "}
                  <span className="text-pink-600 underline cursor-pointer">
                    here
                  </span>{" "}
                  other's private tours and let us know if you'd like something
                  similar.
                </p>
                <p>
                  • Email us at{" "}
                  <span className="font-bold">weekiesgeorgia@gmail.com</span> —
                  we reply quickly!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privateTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-blue-600 opacity-90 flex items-center justify-center">
                        <span className="text-white font-bold text-center">
                          GEORGIA AND ARMENIA
                          <br />
                          PRIVATE TOURS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {tour.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <span className="text-red-500 mr-2">📍</span>
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-blue-500 mr-2">📅</span>
                      {tour.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800">
                          {review.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <span className="text-blue-500">✓</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {review.date}
                      </p>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                    <div className="text-2xl text-blue-500">G</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "rental":
        return (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                WhatsApp or E-mail us to rent our equipment
              </h2>
              <p className="text-lg font-bold text-gray-800">
                +955 577 68 79 65 or weekiesgeorgia@gmail.com
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rentalItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 relative">
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {item.name}
                    </h3>
                    {item.specs ? (
                      <ul className="space-y-1 text-sm text-gray-600">
                        {item.specs.map((spec, index) => (
                          <li key={index}>• {spec}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "team":
        return (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  {member.phone && (
                    <p className="text-gray-600 mb-1">{member.phone}</p>
                  )}
                  {member.email && (
                    <p className="text-gray-600 mb-3">{member.email}</p>
                  )}
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-1 bg-yellow-300 rounded-full flex items-center justify-center">
                  <div className="text-xs text-yellow-800 font-bold">WT</div>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-800">
                  WT GEORGIA
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">WT Georgia</h1>
                <p className="text-sm text-gray-600">
                  Group and private tours and hikes in Georgia and Armenia
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveTab("reviews")}
                className={`text-gray-600 hover:text-gray-800 transition-colors ${
                  activeTab === "reviews" ? "text-pink-600 font-medium" : ""
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("rental")}
                className={`text-gray-600 hover:text-gray-800 transition-colors ${
                  activeTab === "rental" ? "text-pink-600 font-medium" : ""
                }`}
              >
                Rental
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`text-gray-600 hover:text-gray-800 transition-colors ${
                  activeTab === "team" ? "text-pink-600 font-medium" : ""
                }`}
              >
                Our Team
              </button>
              <span className="text-gray-600">Terms & Conditions</span>
              <div className="flex items-center space-x-1 text-gray-600">
                <span>My Cart</span>
                <span className="text-lg">🛒</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("group-tours")}
              className={`px-6 py-3 font-medium transition-colors rounded-t ${
                activeTab === "group-tours"
                  ? "bg-pink-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Georgia & Armenia Group Tours
            </button>
            <button
              onClick={() => setActiveTab("private-tours")}
              className={`px-6 py-3 font-medium transition-colors rounded-t ${
                activeTab === "private-tours"
                  ? "bg-pink-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Private tours & ideas
            </button>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      {activeTab === "group-tours" && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Find your next event"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <select className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Event Location</option>
                  </select>
                  <span className="absolute left-2 top-2.5 text-gray-400">📍</span>
                </div>
                <div className="relative">
                  <select className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Event Category</option>
                  </select>
                  <span className="absolute left-2 top-2.5 text-gray-400">📄</span>
                </div>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-800">++!</button>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Search Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">{renderContent()}</main>

      {/* Floating Shopping Cart */}
      <div className="fixed bottom-6 right-6">
        <div className="relative">
          <button className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-orange-600 transition-colors">
            <span className="text-xl">🛒</span>
          </button>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
            {cartCount}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Upper Footer Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Left Content - Information Text */}
            <div className="md:col-span-1">
              <p className="text-gray-300 leading-relaxed">
                Closer to the tour departure date you will receive an email with trip updates. Meanwhile, if you have any questions feel free to E-mail or WhatApp us:
              </p>
            </div>
            
            {/* Middle Content - Contact Details */}
            <div className="md:col-span-1">
              <div className="space-y-2">
                <p className="text-gray-300">weekiesgeorgia@gmail.com</p>
                <p className="text-gray-300">+995 599 80 39 35 Karolina (English or Polish)</p>
                <p className="text-gray-300">+995 577 68 79 65 Natia (English or Georgian)</p>
              </div>
            </div>
            
            {/* Right Content - Social Media Icons */}
            <div className="md:col-span-1 flex justify-end space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <span className="text-2xl">🎵</span>
              </a>
            </div>
          </div>
          
          {/* Lower Footer Section - Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <div className="text-sm text-gray-400 space-y-1">
              <p>Copyright © 2025 WT Georgia. All rights reserved.</p>
              <p>Theme: Accelerate by ThemeGrill. Powered by WordPress.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-20">
        <button className="w-14 h-14 bg-pink-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-colors">
          <span className="text-xl">↑</span>
        </button>
      </div>
    </div>
  );
}

export default App;
