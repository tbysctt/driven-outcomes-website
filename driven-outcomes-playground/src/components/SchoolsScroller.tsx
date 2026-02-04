import { useRef, useEffect } from "react";

const schools: string[] = [
  "Abbotsford Primary School",
  "Aitken College",
  "Al Iman College",
  "Al Siraat College",
  "Alamanda College",
  "Alkira Secondary College",
  "Alphington Grammar School",
  "Alphington Primary School",
  "Altona College",
  "Amsleigh Park Primary School",
  "Amsleigh Park Primary School",
  "Antonio Park Primary School",
  "Armadale Primary School",
  "Armstrong Creek School",
  "Ashburton Primary School",
  "Aspendale Primary School",
  "Athol Road Primary School",
  "Auburn Primary School",
  "Auburn South Primary School",
  "Avila College",
  "Balcombe Grammar",
  "Ballarat North Primary School",
  "Balwyn High School",
  "Banyan Fields Primary School",
  "Banyule Primary School",
  "Bayswater North Primary School",
  "Bayswater Primary School",
  "Beaconhills College",
  "Beaumaris North Primary School",
  "Beaumaris Primary School",
  "Belle Vue Primary School",
  "Bentleigh Secondary College",
  "Bentleigh West Primary School",
  "Berwick Chase Primary School",
  "Berwick Lodge Primary School",
  "Berwick Primary School",
  "Bethal Primary School",
  "Beveridge Primary School",
  "Beverley Hills Primary School",
  "Billanook Primary School",
  "Bimbadeen Heights Primary School",
  "Birralee Primary School",
  "Black Rock Primary School",
  "Blackburn Lake Primary School",
  "Blackburn Primary School",
  "Boneo Primary School",
  "Boronia Heights Primary School",
  "Boroondara Park Primary School",
  "Brandon Park Primary School",
  "Braybrook College",
  "Brentwood Park Primary School",
  "Brighton Beach Primary School",
  "Brighton Primary School",
  "Broome Senior High – WA",
  "Brunswick North Primary School",
  "Brunswick South West Primary School",
  "Bundoora Primary School",
  "Bundoora Secondary College",
  "Burwood East Primary School",
  "Camberwell South Primary School",
  "Cambridge Primary School",
  "Canterbury Primary School",
  "Carey Baptist Grammar",
  "Carranballac P-9 College",
  "Carrum Downs Secondary College",
  "Carwatha College P-12 – WA",
  "Casey Fields Primary School",
  "Casey Grammar",
  "Catholic Ladies College",
  "Caulfield Grammar – Primary",
  "Caulfield Grammar – Secondary",
  "Caulfield Junior College",
  "Caulfield Primary School",
  "Caulfield South Primary School",
  "Ceres Primary School",
  "Chairo Christian School",
  "Chatham Primary School",
  "Cheltenham East Primary School",
  "Cheltenham Primary School",
  "Cheltenham Secondary College",
  "Christ Church Grammar School",
  "Christ Our Holy Redeemer School",
  "Christ the King Primary School",
  "Christ the Priest Catholic Primary School",
  "Christian Brothers College",
  "Christway College",
  "CIRE Community College",
  "Clayton North Primary School",
  "Clifton Hill Primary School",
  "Clyde Primary School",
  "Coatesville Primary School",
  "Coburg North Primary School",
  "Coburg West Primary School",
  "Corpus Christi Primary School  – Werribee",
  "Corpus Christi School",
  "Craigieburn Secondary College",
  "Craigieburn South Primary School",
  "Cranbourne Park Primary School",
  "Cranbourne Secondary College",
  "Cranbourne West Primary School",
  "Croydon Hills Primary School",
  "Darul Ulum College of Victoria",
  "Davis Creek Primary School",
  "De La Salle College",
  "Deepdene Primary School",
  "Deutsche Schule Melbourne",
  "Diamond Valley Secondary College",
  "Dingley Primary School",
  "Doherty Creek P-9 College",
  "Donburn Primary School",
  "Doncaster Gardens Primary School",
  "Donvale Christian College",
  "Donvale Primary School",
  "Drouin Secondary College",
  "East Kew Primary School",
  "East Preston Islamic College",
  "Edithvale Primary School",
  "Elisabeth Murdoch College",
  "Elsternwick Primary School",
  "Eltham High School",
  "Eltham Primary School",
  "Erasmus Primary School",
  "Essendon Keilor College",
  "Essendon Primary School",
  "Essex Heights Primary School",
  "Fairfield Primary School",
  "Fairhills Primary School",
  "Findon Primary School",
  "Fitzroy North Primary School",
  "Flemington Primary School",
  "Flinders Christian Community College",
  "Fountain Gate Primary School",
  "Galilee Regional Catholic Primary",
  "Gardenvale Primary School",
  "Genazzano FCJ College",
  "Gilson College",
  "Glen Huntly Primary School",
  "Glen Iris Primary School",
  "Glen Katherine Primary School",
  "Glen Waverley Primary School",
  "Glen Waverley South Primary School",
  "Glenferrie Primary School",
  "Glenroy Private",
  "Good News Lutheran College P-12",
  "Good Shepherd Lutheran Primary School",
  "Good Shepherd Primary School",
  "Grayling Primary School",
  "Great Ryrie Primary School",
  "Greenhills Primary School",
  "Greythorn Primary School",
  "Haileybury College – Primary",
  "Haileybury College – Secondary",
  "Haileybury Rendall School – Darwin, NT",
  "Hampton Park Primary School",
  "Harrisfield Primary School",
  "Hartwell Primary School",
  "Heathmont College",
  "Hester Hornbrook Academy",
  "Highvale Primary School",
  "Holy Cross Catholic Primary School",
  "Holy Cross Catholic Primary School – New Gisborne",
  "Holy Eucharist Primary School",
  "Holy Family School ‚Äì Mt Waverley",
  "Holy Name Primary School",
  "Holy Rosary Primary School",
  "Holy Spirit Community School – Ringwood North",
  "Holy Spirit Primary School – Manifold Heights",
  "Holy Spirit Primary School – Thornbury East",
  "Holy Trinity Primary School – Eltham",
  "Holy Trinity Primary School – Wantirna South",
  "Holy Trinity Primary School – Wantirna South",
  "Hoppers Crossing Secondary College",
  "Hughesdale Primary School",
  "Hume Anglican Grammar – Primary",
  "Hume Anglican Grammar – Secondary",
  "Hume Central Secondary College",
  "Huntingdale Primary School",
  "Huntingtower School – Primary",
  "Huntingtower School – Secondary",
  "Islamic College of Melbourne",
  "Ivanhoe East Primary School",
  "Ivanhoe Girls’ Grammar School",
  "Ivanhoe Grammar",
  "Jells Park Primary School",
  "John Henry Primary School",
  "John Paul College",
  "Kalinda Primary School",
  "Keilor Downs College",
  "Keilor Primary School",
  "Keilor Views Primary School",
  "Kerrimuir Primary School",
  "Kew East Primary School",
  "Kew High School",
  "Kew Primary School",
  "Keysborough Gardens Primary School",
  "Keysborough Primary School",
  "Kilsyth Primary School",
  "Kilvington Grammar",
  "Kingsbury Primary School",
  "Kingswood College",
  "Kingswood Primary School",
  "Knox Gardens Primary School",
  "Knox Park Primary School",
  "Koonung Secondary College",
  "Kororiot Creek Primary School",
  "Korowa Anglican Girls School",
  "Lakeview Senior College",
  "Lalor Gardens Primary School",
  "Lalor Primary School",
  "Langwarrin Park Primary School",
  "Langwarrin Primary School",
  "Laurimar Primary School",
  "Lauriston Girls’ School",
  "Laverton P-12 College",
  "Leongatha Secondary College",
  "Livingstone Primary School",
  "Llyod Street Primary School",
  "Loreto Mandeville Hall",
  "Lower Plenty Primary School",
  "Lowther Hall Anglican Grammar",
  "Loyola College",
  "Lynbrook Primary School",
  "Lysterfield Primary School",
  "Mac.Robertson Girls High School",
  "Mackellar Primary School",
  "Malvern Central Primary School",
  "Malvern Primary School",
  "Malvern Valley Primary School",
  "Manchester Primary School",
  "Manorvale Primary School",
  "Marcellin College",
  "Marian College – Ararat",
  "Marian College – Sunshine",
  "Mater Christi College",
  "Meadow Heights Primary School",
  "Melbourne Girls Grammar",
  "Melbourne Grammar",
  "Mentone Girls’ Grammar School",
  "Mentone Grammar",
  "Mentone Park Primary School",
  "Mercy College",
  "Mernda Primary School",
  "Methodist Ladies College (MLC)",
  "Middle Park Primary School",
  "Milgate Primary School",
  "Mill Park Primary School",
  "Minaret College",
  "Mont Albert Primary School",
  "Montmorency South Primary School",
  "Moorabbin Primary School",
  "Morang South Primary School",
  "Mordialloc Beach Primary School",
  "Mordialloc Secondary College",
  "Mother of God Primary School",
  "Mount Eliza North Primary School",
  "Mount Eliza Primary School",
  "Mount Evelyn Primary School",
  "Mount Martha Primary School",
  "Mount Pleasant Road Nunawading Primary School",
  "Mount View Primary School",
  "Mount Waverley Primary School",
  "Mount Waverly Heights Primary School",
  "Mount Waverly Primary School",
  "Mulgrave Primary School",
  "Mullauna Secondary College",
  "Murrumbeena Primary School",
  "Narre Warren North Primary School",
  "Newlands Primary School",
  "Newport Gardens Primary School",
  "Newport Lakes Primary School",
  "Niddrie Primary School",
  "Noble Park English Language",
  "Noble Park Primary School",
  "Noble Park Secondary College",
  "North Geelong Secondary College",
  "North Melbourne Primary School",
  "Northcote Primary School",
  "Northern School for Autism",
  "Nossal High School",
  "Nunawading Christian College",
  "Oak Park Primary School",
  "Oakleigh Grammer",
  "Oakleigh Primary School",
  "Orchard Park Primary School",
  "Ormond Primary School",
  "Our Lady of Mercy College (OLMC)",
  "Our Lady of Sion College",
  "Our Lady of the Immaculate Conception School",
  "Our Lady of the Pines School",
  "Our Lady Primary School",
  "Padua College",
  "Parade College",
  "Park Orchards Primary School",
  "Parkdale Primary School",
  "Parkdale Secondary College",
  "Parkmore Primary School",
  "Parktone Primary School",
  "Parkwood Green Primary School",
  "Pascoe Vale Primary School",
  "Pender Grove Primary School",
  "Pentland Primary School",
  "Pinewood Primary School",
  "Plenty Valley Christian College",
  "Point Cook Secondary College",
  "Port Melbourne Primary School",
  "Presbyterian Ladies College (PLC) – Primary",
  "Presbyterian Ladies College (PLC) – Secondary",
  "Princess Hill Secondary College",
  "Queen of the Peace",
  "Rangeview Primary School",
  "Regency Park Primary School",
  "Research Primary School",
  "Reservoir Primary School",
  "Reservoir West Primary School",
  "Richmond High School",
  "Richmond Primary School",
  "Riddells Creek Primary School",
  "Ringwood Heights Primary School",
  "Ringwood North Primary School",
  "Ripponlea Primary School",
  "Rosanna Golf Links Primary School",
  "Rosanna Primary School",
  "Rossbourne School",
  "Roxburgh Park Primary School",
  "Roxburgh Rise Primary School",
  "Ruskin Park Primary School",
  "Ruyton Girls’ School",
  "Sacre Coeur",
  "Sacred Heart College",
  "Sacred Heart Kew",
  "Sacred Heart Primary School – Newport",
  "Salesian College",
  "Sandringham Primary School",
  "Sandringham Secondary College",
  "Santa Maria College",
  "Scotch College",
  "Seaholme Primary School",
  "Selby Primary School",
  "Serpell Primary School",
  "Shelford Girls Grammar",
  "Siena College",
  "Solway Primary School",
  "South Gippsland Bass Coast District – 11 local Primary Schools",
  "South Melbourne Park Primary School",
  "South Melbourne Primary School",
  "South Yarra Primary School",
  "Spotswood Primary School",
  "Springside Primay School",
  "St Albans East Primary School",
  "St Albans Meadows Primary School",
  "St Ambrose Primary School Woodend",
  "St Andrew Christian College",
  "St Anne Primary School – Sunbury",
  "St Anthony Primary School",
  "St Anthony’s Primary School – Noble Park",
  "St Augustine Primary School",
  "St Bede College",
  "St Bernadette Catholic Primary School",
  "St Bernadette Primary School – Ivanhoe",
  "St Bernadette Primary School – North Sunshine",
  "St Bernard Primary School – East Coburg",
  "St Bernard School – Bacchus Marsh",
  "St Bernard’s School – Bacchus Marsh",
  "St Brigid Primary School – Officer",
  "St Brigid’s Primary School – Gisborne",
  "St Carlo Borromeo Primary School",
  "St Catherine Primary School – Lalor West",
  "St Christopher Primary School – Airport West",
  "St Christopher’s School – Glen Waverly",
  "St Clares Catholic Primary School",
  "St Columba Primary School – Ballarat",
  "St Damian’s School",
  "St Dominic Primary School – Camberwell East",
  "St Elizabeth Parish School",
  "St Fidelis Primary School",
  "St Francis de Sales Catholic Primary School – Oak Park",
  "St Francis of Assisi – Tarneit",
  "St Francis of Assisi Catholic Primary School",
  "St Francis Xavier Primary school – Montmorency",
  "St George Preca Catholic Primary School",
  "St Ignatius College – Geelong",
  "St Ita School",
  "St James the Apostles Primary School",
  "St Joachim’s Catholic Primary School",
  "St John Bosco Primary School – Niddrie",
  "St John Primary School – Frankston",
  "St John Primary School – Heidelberg",
  "St John The Apostle Primary School – Tarniet",
  "St John’s Frankston Primary School",
  "St Johns Parish Primary School – Mitcham",
  "St Joseph Priamry School – Chelsea",
  "St Joseph Primary School – Black Rock",
  "St Joseph Primary School – Collingwood",
  "St Joseph Primary School – Elsternwick",
  "St Joseph the Worker School",
  "St Joseph’s Primary School – Elsternwick",
  "St Josephs Primary School – Werribee",
  "St Josephs School – Malvern",
  "St Jude’s Parish – Scoresby",
  "St Justin Primary School",
  "St Kilda Park Primary School",
  "St Kilda Primary School",
  "St Louis de Monfort School",
  "St Luke’s Primary School",
  "St Macartan Primary School – Mornington",
  "St Margaret Mary Primary School",
  "St Mary Catholic Primary School – Mt. Evelyn",
  "St Mary College – Seymour",
  "St Mary Parish – Williamstown",
  "St Mary Primary School – Altona",
  "St Mary Primary School – Ascot Vale",
  "St Mary Primary School – Greensborough",
  "St Mary Primary School – St Kilda East",
  "St Mary’s Parish Primary School – Williamstown",
  "St Matthew Catholic Primary School",
  "St Matthew’s Primary School",
  "St Michael Primary School – Ashburton",
  "St Michael Primary School – Berwick",
  "St Michael’s Parish School Ashburton",
  "St Michaels Primary School – Berwick",
  "St Monica Parish Primary School",
  "St Monica’s Primary School – Kangaroo Flat",
  "St Oliver Plunkett’s School",
  "St Patrick Primary School – Mentone",
  "St Patrick Primary School – Murrumbeena",
  "St Patrick Primary School – Pakenham",
  "St Paul Anglican Grammar",
  "St Paul Catholic Primary School – Sunshine West",
  "St Paul Primary School – Bentleigh",
  "St Peter and Paul’s Primary School",
  "St Peter Apostle Primary School",
  "St Peter Catholic Primary School – East Bentleigh",
  "St Peter’s Catholic Primary School – Bentleigh East",
  "St Peter’s Primary School – East Keilor",
  "St Peter’s Primary School – Epping",
  "St Thomas the Apostle Catholic Primary School",
  "St Thomas the Apostle School",
  "Stella Maris Catholic Primary School",
  "Strathcona Baptist Girls’ Grammar",
  "Strathmore Primary School",
  "Sunbury Downs Secondary College",
  "Sunshine Christian School",
  "Surfside Primary School",
  "Surrey Hills Primary School",
  "Syndal South Primary School",
  "Syndham Hillside Primary School",
  "Tarneit P-9 College",
  "Tarneit Rise Primary School",
  "Taylors Hill Primary School",
  "Tecoma Primary School",
  "Templestowe Park Primary School",
  "Templestowe Valley Primary School",
  "Templeton Primary School",
  "The Geelong College",
  "The King David School",
  "Thomastown Secondary College",
  "Tintern Grammar Schools",
  "Tinternvale Primary School",
  "Toorak College",
  "Toorak Primary School",
  "Torquay Coast Primary School",
  "Traralgon College",
  "Trinity Catholic College",
  "Trinity Catholic Primary School",
  "Trinity Catholic Primary School  – Narre Warren South",
  "Truganina College",
  "Truganina South Primary School",
  "Tucker Road Bentleigh Primary School",
  "Ulverstone High School",
  "University Park Primary School",
  "Upper Yarra Valley Secondary College",
  "Upwey High School",
  "Valkstone Primary School",
  "Vermont Primary School",
  "Viewbank Primary School",
  "Wandin North Primary School",
  "Wantirna Primary School",
  "Warragul Regional College",
  "Warrandyte Primary School",
  "Warranwood Primary School",
  "Watsonia Heights Primary School",
  "Watsonia North Primary School",
  "Wattle Park Primary School",
  "Wattleview Primary School",
  "Waverley Christian College",
  "Wembley Primary School",
  "Wesley College",
  "Westbourne Grammar – Primary",
  "Westbourne Grammar – Secondary",
  "Westbourne Grammar School Truganina",
  "Westgarth Primary School",
  "Wheelers Hill Primary School",
  "Whitefriars College",
  "Whittlesea Primary School",
  "Williamstown Grammar School",
  "Williamstown North Primary School",
  "Williamstown Primary School",
  "Willmott Park Primary School",
  "Windsor Primary School",
  "Woodleigh School",
  "Wyndham Central Secondary College",
  "Wyndham Vale Primary School",
  "Yarra Valley Grammar",
  "Yarrambat Primary School",
  "Yesodei HaTorah College",
];

const ROWS = 5;
const COLUMN_WIDTH = 280;

/** Split schools into columns of ROWS (fill top-to-bottom, then new column). */
function buildColumns(schoolList: string[]): string[][] {
  const columns: string[][] = [];
  for (let i = 0; i < schoolList.length; i += ROWS) {
    columns.push(schoolList.slice(i, i + ROWS));
  }
  return columns;
}

const IDLE_MS = 0;
const AUTO_SPEED_PX_PER_SEC = 30;

/**
 * Schools scroller: auto-scrolls horizontally. User can override by dragging or
 * using the wheel. Auto-scroll resumes IDLE_MS after the last interaction
 * (release or stop wheeling), regardless of cursor position.
 */
export function SchoolsScroller() {
  const columns = buildColumns(schools);
  const duplicatedColumns = [...columns, ...columns];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const lastInteractTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastTime = performance.now();

    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const content = contentRef.current;
      if (content && content.scrollWidth > 0 && singleSetWidthRef.current === 0) {
        singleSetWidthRef.current = content.scrollWidth / 2;
      }

      const singleSet = singleSetWidthRef.current;
      if (singleSet > 0) {
        const idle = now - lastInteractTimeRef.current > IDLE_MS;
        if (idle && !isDraggingRef.current) {
          offsetRef.current += AUTO_SPEED_PX_PER_SEC * dt;
        }

        const raw = offsetRef.current;
        const displayOffset = ((raw % singleSet) + singleSet) % singleSet;
        content?.style.setProperty("transform", `translateX(-${displayOffset}px)`);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    if (e.deltaX === 0) return;
    offsetRef.current += e.deltaX;
    lastInteractTimeRef.current = performance.now();
    e.preventDefault();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    lastInteractTimeRef.current = performance.now();
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      lastInteractTimeRef.current = performance.now();
      offsetRef.current = dragStartOffsetRef.current + (dragStartXRef.current - e.clientX);
    };
    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        lastInteractTimeRef.current = performance.now();
        if (containerRef.current) containerRef.current.style.cursor = "grab";
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      lastInteractTimeRef.current = performance.now();
      if (containerRef.current) containerRef.current.style.cursor = "grab";
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-grey-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-grey-900 mb-2">
            Schools We've Worked With
          </h2>
          <p className="text-lg text-slate-grey-600">
            Hundreds of schools trust us across Australia
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-slate-grey-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-slate-grey-100 to-transparent z-10 pointer-events-none" />

          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab select-none"
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            style={{ touchAction: "none" }}
          >
            <div
              ref={contentRef}
              className="flex gap-x-10 sm:gap-x-12 will-change-transform"
              style={{ width: "max-content" }}
            >
              {duplicatedColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="flex flex-col gap-y-4 sm:gap-y-5 shrink-0"
                  style={{ width: COLUMN_WIDTH }}
                >
                  {column.map((name, rowIndex) => (
                    <div
                      key={`${colIndex}-${rowIndex}`}
                      className="text-sm sm:text-base font-medium text-slate-grey-700 whitespace-nowrap truncate pointer-events-none"
                      title={name}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
