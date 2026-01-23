import { useState, useEffect, useCallback, useRef } from "react";

type Testimonial = {
  program?: string;
  title: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    program: "The Virtual Studio",
    title: "Secondary School Student",
    testimonial:
      "I really enjoyed this, I just wanted to say thank you. It has been really really miraculous.",
  },
  {
    program: "The Smoothie Bar",
    title: "Primary School Student",
    testimonial: `Today has been a great experience and opportunity to work with people I had never met before. It was also a change to push myself out of my comfort zone, especially the introduction task.`,
  },
  {
    program: "In My Community",
    title: "Primary School Teacher",
    testimonial:
      "The 'In My Community' program was well received by our students. They particularly enjoyed the 60 second pitch and the public awareness campaign where they were required to come up with a unique sharable product in a limited timeframe.",
  },
  {
    program: "The Lab",
    title: "Primary School Teacher",
    testimonial:
      "Just wanted to let you know the Year Sixes had the best time today. We had really great feedback from the kids and their reflections in their science books showed just how much they learned. Thanks heaps.\n\nHere's some student feedback also:\n\nI had so much fun learning more about reactions in science and making our own bath bombs, I can't wait to take it home to show my mum.",
  },
  {
    testimonial:
      "The reflection and sharing was really helpful for our leadership discussions we’re having at the moment. We’d definitely get you guys back.",
    title: "Primary School Teacher",
    program: "Lead It",
  },
  {
    program: "Create It",
    testimonial:
      "Thanks so much. All the kids had such a wonderful time! You were all excellent and we were super impressed with the facilitators' engagement and excitment with the kids. Feedback was excellent from all involved and there was lots of praise for the focus on teamwork and ways the kids could deal with issues they were having. Once again, thank you and I look forward to working with you again in the near future.",
    title: "Primary School Teacher",
  },
  {
    testimonial:
      "We worked with MiniBOSS to launch our Year 3 Enterprise Unit. The session proved to be the most professional and engaging incursion we had been involved in. So much so that our students continued the theme of becoming MiniBOSSes by starting up their own marketing company called ‘The Ideas Factory’. This incursion became the framework of our term and encouraged our students to think about the role enterprise plays in their lives. A group of children utilised their new skills to create a small business at their local market in order to raise money to donate to their chosen charity. We will certainly be using MiniBOSS again and can’t thank them enough for their professional and enthusiastic approach.",
    program: 'The "HOT" Chocolate Shop',
    title: "Primary School Teacher",
  },
  {
    program: "The Smoothie Bar",
    testimonial: `All reports from the class teachers (and the kids) was that the day was brilliant. I popped in a few times and the rooms were buzzing with excitement! In fact, we had a few visiting principals in on the day and they took our stock of MiniBOSS pamphlets.

Here's some student feedback also:

I absolutely LOVED The Smoothie Bar and Chocolate Shop it was such a great experience. The staff were lovely and I really liked how hands on it was. I would give both the workshops 10/10. It was really good doing surveys and budgeting. Thank you so much please come again.`,
    title: "Primary School Teacher",
  },
  {
    program: "The Newsroom",
    testimonial:
      "We had such a good time on Tuesday. The kids and teachers loved it. Your team was fantastic. We loved their energy. We will definitely be booking this program again.",
    title: "Primary School Teacher",
  },
  {
    program: "The Virtual Studio",
    title:
      "Sarah Gale - Team Leader: Year 8 | Curriculum Leader: Teachnology - Genazzano College",
    testimonial: `You guys have taken us on an incredible journey over the past two days, and really given us something to smile about during our learning at a distance program. 
Coming into this program I could feel the excitement and energy you certainly have them more captivated than I do at our year level assembly so thank you thank you so much. 
It was just wonderful to have you guys onboard, I think there is a lot to be said about having some fresh faces presenting to our girls and you certainly brought the energy! The way you juggled things and just put things together so seamlessly is really something special, we loved it.`,
  },
  {
    program: "News From Home",
    title: "Primary School Teacher",
    testimonial: `Thanks again for running such an excellent program. It was an exceptional day for the kids in a very hard time. We have had lots of positive feedback from parents which can be rare. We have all been recommending the program to our teacher friends so hopefully you get to run some more.`,
  },
  {
    title: "Jacqui, Cass, Dylan & Viv - Primary School Teachers",
    testimonial: `Thanks very much for your email and the certificate we received. It was such a well run day, we were all impressed with the way your colleagues engaged the students (even on a Friday) and the content was terrific for our current unit. Thanks again, we would highly recommend this incursion to others and would have you back in a second.`,
  },
  {
    program: "Crack It",
    title: "Emily, David, Sarah & Ilona - Primary School Teachers",
    testimonial: `We were so impressed (yet again) with the orchestration and delivery of the MiniBOSS Crack It session. We have been privileged to also have been involved with the Smoothie Bar and this was of the same high calibre! We were most impressed with the control the leaders had with the students and their engagement. They were thoroughly enjoying every aspect of the session and it was energetic and highly active for them. What a fantastic team building experience to have witnessed. Well done to you all. Can’t wait to do another one.`,
  },
  {
    program: "VCAL Programs",
    title: "Maria - Secondary School Teacher",
    testimonial: `On behalf of the VCAL students and the staff, I would like to thank you for a memorable two days. The Smoothie Bar Enterprise Program was the perfect way for our VCAL students to start the year. It was an opportunity to see these students develop their confidence, self esteem as well as meet many VCAL outcomes and competencies. 
The program went beyond my expectations. It was so lovely to witness so many students flourish in a hands-on practical program, where normally they would be just a wall flower. This program also added value to our VCAL pathway and hopefully we have now changed the mindset of so many students who devalued the VCAL program. What a wonderful way for our Year 12s to be introduced to the Year 7 students. They were ideal role models and made all the Year 7 students feel welcome during the Smoothie Tasting Market. 
The lead up activities and tasks were engaging, inclusive of everyone and pitched at the right level. The transformation of attitude and effort from Day 1 Period 1, to Day 2 Period 6 was extraordinary. Students came out of their shell, took chances and worked in a proud group environment. 
Thank you for this wonderful opportunity.`,
  },
  {
    program: "In My Community",
    title: "Ashleigh - Secondary School Teacher",
    testimonial: `Our students left the In My Community workshop feeling empowered to take action around causes they care about. The team were quickly able to build rapport with the students and guide them through the project process. Not only have the students developed their enterprise skills and thinking, but teachers have also been able to experience this style of learning in action to take back into their classrooms.`,
  },
  {
    program: "The Smoothie Bar",
    title: "Shaun - Secondary School Teacher",
    testimonial: `The Smoothie Bar program immersed students into the world of enterprise in a fun and engaging way. The presenters treated students as young professionals and gave them the opportunity to develop 21st Century skills in a practical and challenging environment. I would be happy to recommend TRIPOD to any school.`,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check if text overflows the max height
    if (textRef.current) {
      const maxHeight = 144; // 9rem = 144px
      const isOverflowing = textRef.current.scrollHeight > maxHeight;
      setShowReadMore(isOverflowing);
    }
  }, [testimonial.testimonial]);

  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-lg border border-slate-grey-100 h-full flex flex-col">
      <div className="flex-1 flex flex-col">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-pearl-aqua-300 mb-3 sm:mb-4 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
        <div className="flex-1 flex flex-col min-h-0 relative">
          <p
            ref={textRef}
            className="text-slate-grey-700 text-base sm:text-lg leading-relaxed italic"
            style={{
              maxHeight: isExpanded ? "none" : "9rem",
              overflow: isExpanded ? "visible" : "hidden",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            "{testimonial.testimonial}"
          </p>
          {!isExpanded && showReadMore && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
              aria-hidden="true"
            />
          )}
          {showReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-3 text-xs sm:text-sm font-medium text-pearl-aqua-600 hover:text-pearl-aqua-700 transition-colors self-start ${
                !isExpanded ? "relative z-10" : ""
              }`}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-grey-100 flex-shrink-0">
        <p className="font-semibold text-sm sm:text-base text-slate-grey-900">{testimonial.title}</p>
        {testimonial.program && (
          <p className="text-xs sm:text-sm text-pearl-aqua-600 font-medium mt-1">
            Program: {testimonial.program}
          </p>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Detect screen size for responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Calculate total slides: we can scroll until the last items are visible
  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (currentIndex >= totalSlides - 1) return; // Stop at the last slide

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalSlides - 1) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, totalSlides]);

  // Calculate transform values - responsive based on itemsPerView
  // On mobile (itemsPerView = 1): move by 100% + gap (1rem = gap-4)
  // On desktop (itemsPerView = 2): move by 50% + gap (0.75rem)
  const translatePercentage = currentIndex * (100 / itemsPerView);
  const translateGap = itemsPerView === 1 
    ? currentIndex * 1 // gap-4 = 1rem on mobile
    : currentIndex * 0.75; // gap-6 = 0.75rem on desktop (but we use 0.75 for calc)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-grey-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
            What are students and teachers saying?
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-600 max-w-2xl mx-auto px-2 sm:px-0">
            Hear from students and teachers about their experiences with our
            incursions and programs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-slate-grey-200 flex items-center justify-center text-slate-grey-600 hover:text-pearl-aqua-600 hover:border-pearl-aqua-300 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-slate-grey-200 flex items-center justify-center text-slate-grey-600 hover:text-pearl-aqua-600 hover:border-pearl-aqua-300 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div
              className="flex gap-4 sm:gap-5 md:gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${translatePercentage}% - ${translateGap}rem))`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-pearl-aqua-500 w-6 sm:w-8"
                    : "bg-slate-grey-300 hover:bg-slate-grey-400 w-2 sm:w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
