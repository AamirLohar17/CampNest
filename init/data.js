const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description:
      "Escape to a peaceful mountain cabin surrounded by pine trees and breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Manali",
    country: "India",
    category: "Mountain Cabins",
  },

  {
    title: "Forest Camping Retreat",
    description:
      "Enjoy a peaceful camping experience surrounded by forests, fresh air, and beautiful nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
  },

  {
    title: "Mountain View Cabin",
    description:
      "Wake up to stunning mountain views from this comfortable wooden cabin surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Banff",
    country: "Canada",
    category: "Mountain Cabins",
  },

  {
    title: "Pine Forest Hideaway",
    description:
      "A cozy forest retreat tucked away among tall pine trees, perfect for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Shimla",
    country: "India",
    category: "Forest",
  },

  {
    title: "Lakeside Wooden Cabin",
    description:
      "Stay beside a beautiful mountain lake in this cozy wooden cabin with peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lakeside",
  },

  {
    title: "Himalayan Adventure Camp",
    description:
      "Experience the mountains with comfortable camping, scenic trails, and unforgettable outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Kasol",
    country: "India",
    category: "Hiking",
  },

  {
    title: "Luxury Forest Glamping",
    description:
      "Enjoy the beauty of the forest with comfortable beds and the experience of sleeping close to nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Coorg",
    country: "India",
    category: "Glamping",
  },

  {
    title: "Snowy Alpine Cabin",
    description:
      "A warm and cozy cabin surrounded by snow-covered mountains, perfect for a winter escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Snow Cabins",
  },

  {
    title: "Riverside Camping Spot",
    description:
      "Set up camp beside a beautiful river and enjoy peaceful mornings surrounded by mountains and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Kasol",
    country: "India",
    category: "Riverside",
  },

  {
    title: "Rustic Log Cabin",
    description:
      "Unplug from everyday life in this rustic log cabin surrounded by the natural beauty of the mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Montana",
    country: "United States",
    category: "Mountain Cabins",
  },

  {
    title: "Mountain Camp Under the Stars",
    description:
      "Spend the night under the stars at this scenic mountain campsite surrounded by untouched nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Ladakh",
    country: "India",
    category: "Camping",
  },

  {
    title: "Himalayan Pine Cabin",
    description:
      "Relax in a charming cabin surrounded by pine forests and spectacular Himalayan scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Mussoorie",
    country: "India",
    category: "Forest",
  },

  {
    title: "Alpine Lake Cabin",
    description:
      "A peaceful cabin beside a crystal-clear mountain lake, ideal for hiking, fishing, and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "New Hampshire",
    country: "United States",
    category: "Lakeside",
  },

  {
    title: "Mountain Trekking Basecamp",
    description:
      "Stay close to scenic mountain trails at this comfortable basecamp designed for outdoor explorers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Uttarakhand",
    country: "India",
    category: "Hiking",
  },

  {
    title: "Luxury Mountain Glamping",
    description:
      "Experience nature without giving up comfort in this stylish glamping retreat with amazing mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Srinagar",
    country: "India",
    category: "Glamping",
  },

  {
    title: "Swiss Snow Chalet",
    description:
      "Enjoy a cozy winter stay in a beautiful chalet surrounded by snow-covered alpine peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Verbier",
    country: "Switzerland",
    category: "Snow Cabins",
  },

  {
    title: "Riverside Mountain Camp",
    description:
      "Camp beside a flowing river with mountain views, peaceful evenings, and plenty of outdoor activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Rishikesh",
    country: "India",
    category: "Riverside",
  },

  {
    title: "Banff Mountain Retreat",
    description:
      "Enjoy breathtaking views of the Canadian Rockies from this comfortable mountain cabin retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Banff",
    country: "Canada",
    category: "Mountain Cabins",
  },

  {
    title: "Himalayan Forest Camp",
    description:
      "Reconnect with nature at this peaceful forest campsite surrounded by beautiful Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Nainital",
    country: "India",
    category: "Camping",
  },

  {
    title: "Woodland Cabin Escape",
    description:
      "A quiet wooden cabin hidden in the forest, offering privacy, fresh air, and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Ooty",
    country: "India",
    category: "Forest",
  },

  {
    title: "Mountain Lake Retreat",
    description:
      "Relax beside a scenic alpine lake with easy access to hiking trails and outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lakeside",
  },

  {
    title: "Hiking Cabin in the Rockies",
    description:
      "A comfortable cabin located near beautiful hiking trails and spectacular Rocky Mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Colorado",
    country: "United States",
    category: "Hiking",
  },

  {
    title: "Eco Mountain Glamping",
    description:
      "Stay in a comfortable eco-friendly camp surrounded by mountains, forests, and fresh mountain air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Manali",
    country: "India",
    category: "Glamping",
  },

  {
    title: "Cozy Winter Mountain Cabin",
    description:
      "Warm up beside the fireplace after a day in the snow at this cozy mountain cabin retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Aspen",
    country: "United States",
    category: "Snow Cabins",
  },

  {
    title: "Peaceful River Camp",
    description:
      "Enjoy riverside camping with beautiful mountain surroundings and peaceful outdoor experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Rishikesh",
    country: "India",
    category: "Riverside",
  },
];

module.exports = { data: sampleListings };