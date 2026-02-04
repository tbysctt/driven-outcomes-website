import AitkenCollege from "../assets/organisation-logos/aitken-secondary-logo-with-tagline.png";
import AlImanCollege from "../assets/organisation-logos/al-iman-college.png";
import AlamandaCollege from "../assets/organisation-logos/alamanda-college.svg"
import AlphingtonPrimary from "../assets/organisation-logos/alphington-primary-school.png";
import AmsleighParkPrimary from "../assets/organisation-logos/amsleigh-park-primary-school.png";

const logos = [
  { src: AitkenCollege, alt: "Aitken College" },
  { src: AlImanCollege, alt: "Al Iman College" },
  { src: AlamandaCollege, alt: "Alamanda College"},
  { src: AlphingtonPrimary, alt: "Alphington Primary School" },
  { src: AmsleighParkPrimary, alt: "Amsleigh Park Primary School" },
];

export function LogoScroller() {
  // Duplicate logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
            OUR PARTNERS
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-medium">
            Schools and Organisations We Work With
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos Wrapper */}
          <div className="overflow-hidden">
            <div className="flex gap-12 items-center partners-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: "200px", height: "120px" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
