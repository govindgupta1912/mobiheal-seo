const ClientsBanner = () => {
  const clients = [
    { id: 1, name: "Indian Navy" },
    { id: 2, name: "Indian Air Force" },
    { id: 3, name: "Ekal Sansthan" },
    { id: 4, name: "Ek Kadam Air" },
    { id: 5, name: "Saksham" },
    { id: 6, name: "Saktek" },
    { id: 7, name: "Tabschool" },
    { id: 8, name: "CHMES" },
    { id: 9, name: "NCAHT" },
    { id: 10, name: "IKALL" },
  ];

  return (
    <section className="py-8 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-500 mb-6 text-sm font-medium">
          TRUSTED BY LEADING COMPANIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {clients.map((client) => (
            <div
              key={client.id}
              className="h-8 md:h-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="40"
                viewBox="0 0 120 40"
                fill="none"
                className="text-neutral-400"
              >
                <rect
                  width="120"
                  height="40"
                  rx="4"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <text
                  x="60"
                  y="24"
                  fontFamily="Arial"
                  fontSize="12"
                  fill="currentColor"
                  textAnchor="middle"
                >
                  {client.name}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsBanner;
