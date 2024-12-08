import Design from "../Assets/services/flooring/one.png";
import Epoxy from "../Assets/services/flooring/two.png";
import Vinyl from "../Assets/services/flooring/three.png";
import Parquet from "../Assets/services/flooring/four.png";
import LuxuryVinyl from "../Assets/services/flooring/five.png";
import interior from "../Assets/services/painting/interior.png";
import texture from "../Assets/services/painting/texture.png";
import threed from "../Assets/services/painting/3d.png";
import indoor from "../Assets/services/waterproof/indoor.png";
import facade from "../Assets/services/waterproof/facade.png";
import tank from "../Assets/services/plumbing/tank.png";
import pressure from "../Assets/services/plumbing/pressure.png";
import plumbing from "../Assets/services/plumbing/plumbing.png";
import drainage from "../Assets/services/plumbing/drainage.png";
import pool from "../Assets/services/plumbing/pool.png";
import fireproof from "../Assets/services/safety/fireproof.png";
import firealarm from "../Assets/services/safety/alarm.png";
import smarthome from "../Assets/services/auto/smarthome.png";
import door from "../Assets/services/auto/door.png";
import renovation from "../Assets/services/reno/renovation.png";
import tilingreno from "../Assets/services/reno/tilingreno.png";
import gypsum from "../Assets/services/carpentry/carpen.png";
import alumin from "../Assets/services/carpentry/alumin.png";
import fahu from "../Assets/services/hvac/fahu.png";
import acvent from "../Assets/services/hvac/acvent.png";
import pest from "../Assets/services/additional/pest.png";
import Nameboard from "../Assets/services/additional/nameboard.png";
import child from "../Assets/services/additional/child.png";
import wall from "../Assets/services/additional/wall.png";
import decor from "../Assets/services/additional/decor.png";

export const allServices = [
  {
    serviceName: "Flooring Solutions",
    id: 1,
    items: [
      {
        services: "Design Flooring",
        serviceId: 1,
        image: Design,
        desc: "Unique and stylish custom flooring solutions"
      },
      {
        services: "Epoxy Flooring ",
        serviceId: 2,
        image: Epoxy,
        desc: "Seamless, durable, and glossy floor finishes."
      },
      {
        services: "Vinyl, Laminate, & SPC Flooring ",
        serviceId: 3,
        image: Vinyl,
        desc: "Affordable and versatile flooring options."
      },
      {
        services: "Parquet Flooring (Wood & PVC)  ",
        serviceId: 4,
        image: Parquet,
        desc: "Classic and elegant flooring solutions"
      },
      {
        services: "Luxury Vinyl Flooring ",
        serviceId: 5,
        image: LuxuryVinyl,
        desc: "Premium designs for a high-end look"
      }
    ]
  },
  {
    serviceName: "Painting & Decorative Works",
    id: 2,
    items: [
      {
        services: "Interior & Exterior Painting  ",
        serviceId: 6,
        image: interior,
        desc: "Expert painting services for long-lasting results"
      },
      {
        services: "3D Wall Painting & Wallpaper",
        serviceId: 7,
        image: threed,
        desc: "Artistic designs to transform your walls"
      },
      {
        services: "Texture Works ",
        serviceId: 8,
        image: texture,
        desc: "Indoor and outdoor textured finishes for unique aesthetics"
      }
    ]
  },
  {
    serviceName: "Water Proofing Solutions",
    id: 3,
    items: [
      {
        services: "Indoor & Outdoor Waterproofing",
        serviceId: 9,
        image: indoor,
        desc: "Protect your property from water damage"
      },
      {
        services: "Facade Cleaning & Maintenance ",
        serviceId: 10,
        image: facade,
        desc: "Keep building exteriors clean and secure"
      }
    ]
  },
  {
    serviceName: "Plumbing & Water Systems",
    id: 4,
    items: [
      {
        services: "Water Pressure System Installation",
        serviceId: 11,
        image: pressure,
        desc: "Stable water flow systems for all buildings"
      },
      {
        services: "Drain System Servicing",
        serviceId: 12,
        image: drainage,
        desc: "Complete solutions for efficient wastewater management"
      },
      {
        services: "Water Line Rectification",
        serviceId: 13,
        image: plumbing,
        desc: "Repair and maintenance for building risers"
      },
      {
        services: "Swimming Pool Heating & Cooling",
        serviceId: 14,
        image: pool,
        desc: "Year-round comfort for your pool"
      },
      {
        services: "Water Tank Installation & Treatment ",
        serviceId: 15,
        image: tank,
        desc: "Installation and water treatment services for various tank types (Portable, Plastic, GRP)"
      }
    ]
  },
  {
    serviceName: "Safety & Fire Protection",
    id: 5,
    items: [
      {
        services: "Fire Alarm & Fire Fighting Systems",
        serviceId: 16,
        image: firealarm,
        desc: "Stay compliant with reliable fire protection systems"
      },
      {
        services: "Decorative Fireproof Partitions",
        serviceId: 17,
        image: fireproof,
        desc: "Stylish and safe partitions for walls and ceilings"
      }
    ]
  },
  {
    serviceName: "Automation & Smart Solutions",
    id: 6,
    items: [
      {
        services: "Smart Home Automation",
        serviceId: 18,
        image: smarthome,
        desc: "Integrating technology into traditional electrical systems"
      },
      {
        services: "Access Door Control Systems",
        serviceId: 19,
        image: door,
        desc: "Advanced solutions for secure door access"
      }
    ]
  },
  {
    serviceName: "Renovation & Fit-Out Services",
    id: 7,
    items: [
      {
        services: "Smart Renovation & Fit-Outs",
        serviceId: 20,
        image: renovation,
        desc: "Modernize your space with innovative designs"
      },
      {
        services: "Floor & Wall Tiling",
        serviceId: 21,
        image: tilingreno,
        desc: "– High-quality finishes for walls and floors."
      }
    ]
  },
  {
    serviceName: "Carpentry & Fabrication",
    id: 8,
    items: [
      {
        services: "Aluminum Fabrication & Glass Fixing",
        serviceId: 22,
        image: alumin,
        desc: "Durable and stylish aluminum and glass work"
      },
      {
        services: "Custom Gypsum Works",
        serviceId: 23,
        image: gypsum,
        desc: "Functional gypsum partitions and ceilings for any space"
      }
    ]
  },
  {
    serviceName: "Additional Services",
    id: 9,
    items: [
      {
        services: "Pest Control",
        serviceId: 24,
        image: pest,
        desc: " Keep your spaces pest-free with effective treatments."
      },
      {
        services: " Nameboard & Art Frame Fixing",
        serviceId: 25,
        image: Nameboard,
        desc: "Professional installation for decorative elements."
      },
      {
        services: " Advanced Water Pump Systems",
        serviceId: 26,
        image: pressure,
        desc: "Automatic solutions for efficient water management"
      },
      {
        services: "  Child Water Heat Exchanger Maintenance ",
        serviceId: 27,
        image: child,
        desc: "Comprehensive servicing, including AMC."
      },
      {
        services: "  Texture Wall Finishing",
        serviceId: 28,
        image: wall,
        desc: "Unique finishes for modern or classic aesthetics"
      },

      {
        services: "  Decorative Partition Solutions",
        serviceId: 29,
        image: decor,
        desc: "Fireproof, waterproof, and soundproof options"
      }
    ]
  },
  {
    serviceName: "HVAC Systems",
    id: 10,
    items: [
      {
        services: "Air Conditioning & Ventilation ",
        serviceId: 31,
        image: acvent,
        desc: "Stable water flow systems for all buildings"
      },
      {
        services: "FAHU Maintenance ",
        serviceId: 32,
        image: fahu,
        desc: "Keeping your Fresh Air Handling Units in top condition"
      }
    ]
  },
  {
    serviceName: "Electrical & Electromechanical Services",
    id: 11,
    items: [
      {
        services: "Water Pressure System Installation",
        serviceId: 33,
        image: pressure,
        desc: "Stable water flow systems for all buildings"
      }
    ]
  }
];
