export const DUMMY_POSTERS = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1928&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop"
];

export const DUMMY_HEROES = [
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
];

export const getRandomPoster = () => DUMMY_POSTERS[Math.floor(Math.random() * DUMMY_POSTERS.length)];
export const getRandomHero = () => DUMMY_HEROES[Math.floor(Math.random() * DUMMY_HEROES.length)];

// Cinematic Universes specific backgrounds
export const UNIVERSE_BGS = {
  marvel: "https://images.unsplash.com/photo-1561149877-84d25721cdb9?q=80&w=2070&auto=format&fit=crop",
  dc: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
  starwars: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=1974&auto=format&fit=crop",
  harrypotter: "https://images.unsplash.com/photo-1618944847023-38aa001235f0?q=80&w=2069&auto=format&fit=crop"
};
