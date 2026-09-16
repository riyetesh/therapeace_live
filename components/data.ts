import type { Therapist } from "@/components/TherapistCard";

export const therapists: Therapist[] = [
  { id: "maya-sharma", name: "Maya Sharma", title: "Licensed Clinical Psychologist", location: "Finland", country: "Finland", specialties: ["Anxiety", "Stress", "Life transitions"], languages: ["English", "Hindi", "Nepali"], rating: 4.9, reviews: 48, price: 65, availability: "Available this week", image: "/therapists/portrait-a.png" },
  { id: "aarav-mehta", name: "Aarav Mehta", title: "Psychotherapist", location: "Finland", country: "Finland", specialties: ["Relationships", "Anxiety", "Self-esteem"], languages: ["English", "Hindi"], rating: 4.8, reviews: 36, price: 60, availability: "Available tomorrow", image: "/therapists/portrait-b.png" },
  { id: "anisha-gurung", name: "Anisha Gurung", title: "Counselling Psychologist", location: "Sweden", country: "Sweden", specialties: ["Depression", "Adjustment", "Anxiety"], languages: ["English", "Nepali"], rating: 5, reviews: 29, price: 55, availability: "Available this week", image: "/therapists/portrait-c.png" },
  { id: "daniel-wilson", name: "Daniel Wilson", title: "Clinical Psychologist", location: "Finland", country: "Finland", specialties: ["Stress", "Burnout", "Depression"], languages: ["English"], rating: 4.9, reviews: 61, price: 70, availability: "Available today", image: "/therapists/portrait-b.png" },
  { id: "priya-kapoor", name: "Priya Kapoor", title: "Mental Health Counsellor", location: "Germany", country: "Germany", specialties: ["Anxiety", "Relationships", "Family"], languages: ["English", "Hindi", "Punjabi"], rating: 4.8, reviews: 42, price: 58, availability: "Available this week", image: "/therapists/portrait-a.png" },
  { id: "rohan-thapa", name: "Rohan Thapa", title: "Psychotherapist", location: "Netherlands", country: "Netherlands", specialties: ["Life transitions", "Stress", "Identity"], languages: ["English", "Nepali"], rating: 4.9, reviews: 34, price: 62, availability: "Available tomorrow", image: "/therapists/portrait-b.png" },
  { id: "sara-ahmed", name: "Sara Ahmed", title: "Counselling Psychologist", location: "Finland", country: "Finland", specialties: ["Trauma", "Anxiety", "Depression"], languages: ["English", "Arabic"], rating: 4.9, reviews: 53, price: 68, availability: "Available this week", image: "/therapists/portrait-c.png" },
  { id: "ethan-miller", name: "Ethan Miller", title: "Clinical Counsellor", location: "Finland", country: "Finland", specialties: ["Burnout", "Work stress", "Anxiety"], languages: ["English"], rating: 4.7, reviews: 31, price: 57, availability: "Available today", image: "/therapists/portrait-b.png" },
  { id: "neha-joshi", name: "Neha Joshi", title: "Licensed Therapist", location: "Denmark", country: "Denmark", specialties: ["Relationships", "Self-esteem", "Anxiety"], languages: ["English", "Hindi"], rating: 4.9, reviews: 47, price: 63, availability: "Available this week", image: "/therapists/portrait-a.png" },
];

export const specialties = [...new Set(therapists.flatMap((therapist) => therapist.specialties))].sort();
export const languages = [...new Set(therapists.flatMap((therapist) => therapist.languages))].sort();
export const countries = [...new Set(therapists.map((therapist) => therapist.country))].sort();
