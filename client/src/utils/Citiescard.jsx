const Citiescard = () => {
  let arr = [
    {
      city: "Paris",
      country: "France",
      review: 4.8,
      facilities: ["Eiffel Tower", "Museums", "Cafes", "Parks"],
      description:
        "Paris, the City of Light, offers an enchanting experience with its world-famous art and cultural heritage. Marvel at historic architecture, stroll through charming streets, and enjoy gourmet cuisine in cozy cafés. Must-visit attractions include the Eiffel Tower, Louvre Museum, and quaint neighborhoods like Montmartre. This romantic destination captures both history and modern elegance, making it a beloved spot for travelers worldwide.",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Tokyo",
      country: "Japan",
      review: 4.7,
      facilities: ["Temples", "Skytree", "Shopping", "Gastronomy"],
      description:
        "Tokyo blends the best of traditional and futuristic worlds. Visit ancient temples, savor diverse flavors at bustling markets, and immerse yourself in high-tech experiences. From the Tokyo Skytree's panoramic views to the serene gardens of Meiji Shrine, the city is a dynamic hub of culture and innovation. Known for its incredible culinary scene, Tokyo offers a unique journey through Japan’s rich history and vibrant modernity.",
      image:
        "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW98ZW58MHx8MHx8fDA%3D",
    },
    {
      city: "New York",
      country: "USA",
      review: 4.9,
      facilities: ["Statue of Liberty", "Broadway", "Museums", "Shopping"],
      description:
        "New York City is an energetic metropolis, known for its skyline, diverse communities, and endless entertainment. Visit iconic sites like the Statue of Liberty, Times Square, and Central Park. Enjoy Broadway shows, world-class museums, and unique neighborhoods from SoHo to Brooklyn. The city's vibrancy and cultural diversity make it a must-visit destination for those seeking excitement and inspiration.",
      image:
        "https://plus.unsplash.com/premium_photo-1663956111757-534bcb550932?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww",
    },
    {
      city: "London",
      country: "United Kingdom",
      review: 4.6,
      facilities: ["Historic Sites", "Museums", "Pubs", "Parks"],
      description:
        "London is a historic yet modern city, filled with centuries-old landmarks and contemporary attractions. From Buckingham Palace to the Tower of London, explore sites steeped in royal history. Relax in lush parks, visit renowned museums, and experience the vibrant pub culture. With its unique blend of heritage and innovation, London is a destination that captivates visitors of all interests.",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      city: "Rome",
      country: "Italy",
      review: 4.7,
      facilities: ["Colosseum", "Vatican City", "Cuisine", "Shopping"],
      description:
        "Rome, a city of ancient wonders, offers a journey through the heart of Italian history. Discover famous landmarks like the Colosseum, Roman Forum, and Vatican City, each narrating centuries of history. The city's vibrant streets, iconic architecture, and authentic Italian cuisine create an unforgettable atmosphere of culture and art.",
      image:
        "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
    },
    {
      city: "Istanbul",
      country: "Turkey",
      review: 4.5,
      facilities: ["Mosques", "Palaces", "Bazaars", "Food"],
      description:
        "Istanbul, where East meets West, offers an enchanting fusion of culture and history. Explore magnificent mosques, bustling bazaars, and opulent palaces. The city’s rich history and unique location create a cultural tapestry unlike any other, making it a fascinating destination for travelers from around the globe.",
      image:
        "https://media.istockphoto.com/id/507551802/photo/istanbul-the-capital-of-turkey.jpg?s=612x612&w=0&k=20&c=2DicSp1j3b8K1Xosz-L4XtCMQ02U0-JhyIGbcaM2te4=",
    },
    {
      city: "Barcelona",
      country: "Spain",
      review: 4.6,
      facilities: ["Beaches", "Architecture", "Museums", "Nightlife"],
      description:
        "Barcelona, with its Mediterranean charm, is known for its unique architecture, beautiful beaches, and lively atmosphere. Discover the works of Gaudí, enjoy sun-soaked beaches, and experience vibrant nightlife. The city's distinct Catalonian culture adds an extra layer of allure to its bustling streets and artistic landmarks.",
      image:
        "https://media.istockphoto.com/id/148543868/photo/park-guell-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=IYdRNJtNOxNaySqP7oKe37TR7XBQncj623Ye13qCxBs=",
    },
    {
      city: "Sydney",
      country: "Australia",
      review: 4.7,
      facilities: ["Opera House", "Beaches", "Harbor", "Zoos"],
      description:
        "Sydney, Australia’s vibrant harbor city, is famed for the Sydney Opera House, stunning beaches, and outdoor adventures. With a laid-back vibe and beautiful coastal views, the city offers something for every traveler, from Bondi Beach to Taronga Zoo. Enjoy breathtaking views and explore the unique wildlife, making Sydney an ideal destination for nature lovers.",
      image:
        "https://t4.ftcdn.net/jpg/04/12/81/69/360_F_412816969_cpRI2c2aSHobr77aOOzgO3kcW7FWCn9e.jpg",
    },
    {
      city: "Cape Town",
      country: "South Africa",
      review: 4.8,
      facilities: ["Mountains", "Beaches", "Wildlife", "Wine Tours"],
      description:
        "Cape Town, a city blessed with natural beauty, offers a gateway to South Africa’s unique landscapes. Surrounded by stunning mountains and beaches, the city provides a variety of outdoor experiences, from wildlife safaris to vineyard tours. With its rich heritage and scenic wonders, Cape Town is a top destination for adventurers and nature enthusiasts alike.",
      image:
        "https://media.istockphoto.com/id/682284814/photo/aerial-view-of-cape-town.jpg?s=612x612&w=0&k=20&c=vN-j-NbeH6yVb9wtz5FHXJBzrWjV8h3FQVtEtflpHM8=",
    },
    {
      city: "Dubai",
      country: "UAE",
      review: 4.5,
      facilities: ["Shopping", "Beaches", "Desert Safaris", "Luxury Hotels"],
      description:
        "Dubai, a city of innovation and luxury, is known for its towering skyscrapers, expansive shopping centers, and vibrant nightlife. From desert safaris to beach resorts, Dubai offers a blend of relaxation and adventure. The Burj Khalifa and luxury shopping make it a world-class destination for travelers seeking modern opulence.",
      image:
        "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=",
    },
    {
      city: "Rio de Janeiro",
      country: "Brazil",
      review: 4.6,
      facilities: ["Beaches", "Carnival", "Mountains", "Nightlife"],
      description:
        "Rio de Janeiro, known for its stunning natural beauty, is famous for lively beaches, lush mountains, and vibrant culture. Visit iconic spots like Copacabana Beach and Sugarloaf Mountain, or join in the festivities during Carnival. The city is a melting pot of rhythm, samba, and beautiful landscapes, making it a unique and colorful destination for visitors from around the world.",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      review: 4.5,
      facilities: ["Temples", "Street Food", "Shopping", "Nightlife"],
      description:
        "Bangkok, Thailand’s bustling capital, is a mix of ancient and modern. Explore its beautiful temples, such as Wat Arun and Wat Phra Kaew, while sampling famous street food. Known for its lively markets and nightlife, Bangkok is a captivating blend of vibrant culture, exotic flavors, and warm hospitality, providing an unforgettable experience for travelers.",
      image:
        "https://media.istockphoto.com/id/984661764/photo/sunrise-with-grand-palace-of-bangkok-thailand.jpg?s=612x612&w=0&k=20&c=wJb-mQcboK8nMSWqK4Kmy0g5e4Sh5bCIFBMe7MD6Izc=",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {arr.map((city) => (
        <div className="h-[320px] relative hover:shadow-lg" key={city.city}>
          <img
            className="absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-md"
            src={city.image}
            alt={city.city}
          />
          <div className="h-[60px] w-[100%]  absolute bottom-2 px-4 flex justify-center">
               <div className="h-full w-full bg-white opacity-50 rounded-2xl"></div>
          </div>

          <div className="h-[60px] w-[100%]  absolute bottom-2 px-10 py-1">
            <h2 className="text-lg font-bold text-center">{city.city}</h2>
            <div className="flex justify-between">
              <p className="font-bold">📍 {city.country}</p>
              <p className="font-bold">⭐ {city.review}</p>
            </div>
          </div>


        </div>
      ))}
    </div>
  );
};

export default Citiescard;
