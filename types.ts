
export interface Service {
  title: string;
  description: string;
  // imageUrl and hexColor are now managed with static data in constants
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface MenuItem {
  name: string;
  description: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}
