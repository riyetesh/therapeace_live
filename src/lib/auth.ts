export const USER_KEY = "therapeace_user";
export const NAME_KEY = "therapeace_name";
export const BOOKING_KEY = "therapeace_booking";

export type Booking = { therapist:string; date:string; time:string; price:number };

export function getUser() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USER_KEY);
}