export type Therapist = {
  id: string; name: string; specialty: string; languages: string[]; price: number;
  rating: number; reviews: number; location: string; image: string; bio: string;
  availability: string[]; accent: string; years: number;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const therapists: Therapist[] = [
  { id:"anita", name:"Dr. Anita Gurung", specialty:"Anxiety & stress", languages:["Nepali","English"], price:45, rating:4.9, reviews:38, location:"Finland · Online", years:8,
    image:img("photo-1559839734-2b71ea197ec2"), bio:"Culturally aware support for students and professionals navigating anxiety, transitions, confidence and life abroad.", availability:["10:00","11:30","15:00","18:00"], accent:"#d9ece5" },
  { id:"suman", name:"Suman Karki", specialty:"Relationships", languages:["Nepali","Hindi","English"], price:40, rating:4.8, reviews:27, location:"Germany · Online", years:6,
    image:img("photo-1534528741775-53994a69daeb"), bio:"A warm, practical space for communication, relationships, identity and the messy middle of life changes.", availability:["09:30","13:00","16:30"], accent:"#e8def0" },
  { id:"priya", name:"Priya Shrestha", specialty:"Student wellbeing", languages:["Nepali","English"], price:35, rating:4.9, reviews:44, location:"UK · Online", years:5,
    image:img("photo-1551836022-d5d88e9218df"), bio:"Focused on homesickness, academic pressure, confidence and building a sense of home while abroad.", availability:["08:30","12:00","17:00","19:00"], accent:"#f1dfcf" },
  { id:"bishal", name:"Bishal Thapa", specialty:"Low mood & change", languages:["Nepali","English"], price:42, rating:4.7, reviews:19, location:"Australia · Online", years:7,
    image:img("photo-1500648767791-00dcc994a43e"), bio:"Person-centred sessions for low mood, motivation, major life changes and finding your footing again.", availability:["10:30","14:00","18:30"], accent:"#d8e5ef" }
];

export const testimonials = [
  { name:"Aarav · Finland", quote:"It felt easier to explain the things I usually have to translate culturally.", image:"https://i.pravatar.cc/160?img=11" },
  { name:"Maya · UK", quote:"The experience felt calm from the first screen. No endless forms, no awkward searching.", image:"https://i.pravatar.cc/160?img=45" },
  { name:"S. · Australia", quote:"Being able to choose Nepali-speaking support made the first conversation feel less intimidating.", image:"https://i.pravatar.cc/160?img=5" }
];

export const team = [
  { name:"Ritesh Yadav", role:"Co-Founder · CTO", bio:"Platform architecture, product systems and technical strategy.", linkedin:"https://www.linkedin.com/", image:"https://i.pravatar.cc/300?img=13" },
  { name:"Pooja Pantha", role:"Co-Founder · Development", bio:"Core product implementation and development workflows.", linkedin:"https://www.linkedin.com/", image:"https://i.pravatar.cc/300?img=44" },
  { name:"Manish Sharma", role:"Co-Founder · Research", bio:"Research, market validation and therapeutic methodology.", linkedin:"https://www.linkedin.com/", image:"https://i.pravatar.cc/300?img=60" },
  { name:"Srijit Bashyal", role:"Therapist Relations", bio:"Therapist onboarding and relationship management.", linkedin:"https://www.linkedin.com/", image:"https://i.pravatar.cc/300?img=14" },
  { name:"Krishma Kunwar", role:"Marketing", bio:"Community outreach across Nepali communities abroad.", linkedin:"https://www.linkedin.com/", image:"https://i.pravatar.cc/300?img=49" }
];