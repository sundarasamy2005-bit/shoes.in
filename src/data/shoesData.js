const shoesData = [
  { 
    id: 1, 
    name: "Nike Air Max", 
    brand: "Nike", 
    price: 4999, 
    sizes: [7, 8, 9, 10, 11], // Added array of sizes
    images: ["/images/1.jpg","/images/1.3.jpg","/images/1.2.jpg","/images/1.1.jpg", "/images/1.5.jpg", "/images/1.4.jpg"] 
  },
  { 
    id: 2, 
    name: "Nike Revolution 6", 
    brand: "Nike", 
    price: 3799, 
    sizes: [8, 9, 10, 11, 12, 13], 
    images: ["/images/2.2.jpg","/images/2.1.jpg","/images/2.4.jpg","/images/2.6.jpg", "/images/2.5.jpg", "/images/2.jpg"] 
  },
  { 
    id: 3, 
    name: "Nike Downshifter", 
    brand: "Nike", 
    price: 3499, 
    sizes: [6, 7, 8, 12], 
    images: ["/images/3.2.jpg","/images/3.1.jpg","/images/3.4.jpg","/images/3.0.jpg", "/images/3.3.jpg", "/images/3.6.jpg"] 
  },
  { 
    id: 4, 
    name: "Nike Flex Runner", 
    brand: "Nike", 
    price: 4299, 
    sizes: [9, 10, 11, 13], 
    images: ["/images/4.0.jpg","/images/4.1.jpg","/images/4.2.jpg","/images/4.3.jpg", "/images/4.4.jpg", "/images/4.5.jpg"] 
  },

  { 
    id: 5, 
    name: "Adidas Ultraboost", 
    brand: "Adidas", 
    price: 4999, 
    sizes: [7, 8, 9, 11, 12], 
    images: ["/images/001.jpg","/images/002.jpg","/images/003.jpg","/images/004.jpg", "/images/006.jpg", "/images/006.jpg"] 
  },
  { 
    id: 6, 
    name: "Adidas Galaxy 6", 
    brand: "Adidas", 
    price: 3299, 
    sizes: [6, 7, 8, 9, 10], 
    images: ["/images/200.jpg","/images/201.jpg","/images/202.jpg","/images/203.jpg", "/images/204.jpg", "/images/205.jpg"] 
  },
  { 
    id: 7, 
    name: "Adidas Runfalcon", 
    brand: "Adidas", 
    price: 3599, 
    sizes: [8, 9, 10, 11, 12, 13], 
    images: ["/images/211.jpg","/images/212.jpg","/images/213.jpg","/images/214.jpg", "/images/215.jpg", "/images/216.jpg"] 
  },
  { 
    id: 8, 
    name: "Adidas Duramo", 
    brand: "Adidas", 
    price: 3999, 
    sizes: [6, 10, 11, 12, 13], 
    images: ["/images/221.jpg","/images/222.jpg","/images/223.jpg","/images/224.jpg", "/images/225.jpg", "/images/226.jpg"] 
  },

  { 
    id: 9, 
    name: "Puma Flyer Runner", 
    brand: "Puma", 
    price: 2999, 
    sizes: [7, 8, 9, 10], 
    images: ["/images/10.jpg","/images/11.jpg","/images/12.jpg","/images/14.jpg", "/images/15.jpg", "/images/16.jpg"] 
  },
  { 
    id: 10, 
    name: "Puma Smash v2", 
    brand: "Puma", 
    price: 3199, 
    sizes: [6, 7, 8, 9, 10, 11], 
    images: ["/images/17.jpg","/images/18.jpg","/images/19.jpg","/images/21.jpg", "/images/22.jpg", "/images/23.jpg"] 
  },
  { 
    id: 11, 
    name: "Puma Softride", 
    brand: "Puma", 
    price: 3499, 
    sizes: [9, 10, 11, 12, 13], 
    images: ["/images/24.jpg","/images/26.jpg","/images/25.jpg","/images/27.jpg", "/images/28.jpg", "/images/29.jpg"] 
  },
  { 
    id: 12, 
    name: "Puma Anzarun", 
    brand: "Puma", 
    price: 3799, 
    sizes: [8, 9, 10, 11], 
    images: ["/images/31.jpg","/images/32.jpg","/images/33.jpg","/images/34.jpg", "/images/35.jpg", "/images/36.jpg"] 
  },

  { 
    id: 13, 
    name: "Reebok Classic", 
    brand: "Reebok", 
    price: 2899, 
    sizes: [7, 8, 9, 10], 
    images: ["/images/01.jpg","/images/02.jpg","/images/03.jpg","/images/04.jpg", "/images/05.jpg", "/images/06.jpg"] 
  },
  { 
    id: 14, 
    name: "Reebok Energen", 
    brand: "Reebok", 
    price: 3099, 
    sizes: [8, 9, 10, 11, 12, 13], 
    images: ["/images/61.jpg","/images/62.jpg","/images/63.jpg","/images/64.jpg", "/images/65.jpg", "/images/66.jpg"] 
  },
  { 
    id: 15, 
    name: "Reebok Zig Dynamica", 
    brand: "Reebok", 
    price: 3999, 
    sizes: [9, 10, 11, 12], 
    images: ["/images/71.jpg","/images/72.jpg","/images/73.jpg","/images/74.jpg", "/images/75.jpg", "/images/76.jpg"] 
  },
  { 
    id: 16, 
    name: "Reebok Lite Plus", 
    brand: "Reebok", 
    price: 2799, 
    sizes: [6, 7, 8], 
    images: ["/images/91.jpg","/images/92.jpg","/images/93.jpg","/images/94.jpg", "/images/95.jpg", "/images/96.jpg"] 
  },

  { 
    id: 17, 
    name: "Asics Gel Contend", 
    brand: "Asics", 
    price: 4599, 
    sizes: [8, 9, 10, 11, 12], 
    images: ["/images/243.jpg","/images/242.jpg","/images/241.jpg","/images/244.jpg", "/images/245.jpg", "/images/246.jpg"] 
  },
  { 
    id: 18, 
    name: "Asics Patriot 12", 
    brand: "Asics", 
    price: 4899, 
    sizes: [9, 10, 11, 12, 13], 
    images: ["/images/251.jpg","/images/252.jpg","/images/253.jpg","/images/254.jpg", "/images/255.jpg", "/images/256.jpg"] 
  },
  { 
    id: 19, 
    name: "Asics Jolt 4", 
    brand: "Asics", 
    price: 3499, 
    sizes: [6, 7, 8, 9], 
    images: ["/images/261.jpg","/images/262.jpg","/images/263.jpg","/images/264.jpg", "/images/265.jpg", "/images/266.jpg"] 
  },
  { 
    id: 20, 
    name: "Asics Versablast", 
    brand: "Asics", 
    price: 4299, 
    sizes: [10, 11, 12, 13], 
    images: ["/images/271.jpg","/images/272.jpg","/images/273.jpg","/images/274.jpg", "/images/275.jpg", "/images/276.jpg"] 
  },

  { 
    id: 21, 
    name: "Skechers Go Run", 
    brand: "Skechers", 
    price: 4699, 
    sizes: [7, 8, 9, 10, 11], 
    images: ["/images/300.jpg","/images/301.jpg","/images/301.jpg","/images/303.jpg", "/images/304.jpg", "/images/305.jpg"] 
  },
  { 
    id: 22, 
    name: "Skechers Dynamight", 
    brand: "Skechers", 
    price: 3999, 
    sizes: [8, 9, 10, 11, 12], 
    images: ["/images/311.jpg","/images/312.jpg","/images/313.jpg","/images/314.jpg", "/images/312.jpg", "/images/311.jpg"] 
  },
  { 
    id: 23, 
    name: "Skechers Track", 
    brand: "Skechers", 
    price: 3599, 
    sizes: [6, 7, 8, 9], 
    images: ["/images/121.jpg","/images/122.jpg","/images/123.jpg","/images/124.jpg", "/images/125.jpg", "/images/126.jpg"] 
  },
  { 
    id: 24, 
    name: "Skechers Arch Fit", 
    brand: "Skechers", 
    price: 4999, 
    sizes: [9, 10, 11, 12, 13], 
    images: ["/images/131.jpg","/images/132.jpg","/images/133.jpg","/images/134.jpg", "/images/135.jpg", "/images/136.jpg"] 
  },

  { 
    id: 25, 
    name: "Campus Oxyfit", 
    brand: "Campus", 
    price: 2199, 
    sizes: [7, 8, 9, 10], 
    images: ["/images/231.jpg","/images/232.jpg","/images/233.jpg","/images/234.jpg", "/images/235.jpg", "/images/236.jpg"] 
  },
  { 
    id: 26, 
    name: "Campus North Plus", 
    brand: "Campus", 
    price: 1999, 
    sizes: [6, 7, 8, 9], 
    images: ["/images/151.jpg","/images/152.jpg","/images/153.jpg","/images/154.jpg", "/images/155.jpg", "/images/156.jpg"] 
  },
  { 
    id: 27, 
    name: "Campus Rodeo", 
    brand: "Campus", 
    price: 2499, 
    sizes: [8, 9, 10, 11], 
    images: ["/images/123.jpg","/images/121.jpg","/images/122.jpg","/images/124.jpg", "/images/125.jpg", "/images/126.jpg"] 
  },
  { 
    id: 28, 
    name: "Campus First", 
    brand: "Campus", 
    price: 2299, 
    sizes: [9, 10, 11, 12, 13], 
    images: ["/images/146.jpg","/images/141.jpg","/images/142.jpg","/images/143.jpg", "/images/144.jpg", "/images/145.jpg"] 
  },

  { 
    id: 29, 
    name: "Bata Power Run", 
    brand: "Bata", 
    price: 2799, 
    sizes: [6, 7, 8, 9], 
    images: ["/images/111.jpg","/images/112.jpg","/images/113.jpg","/images/114.jpg", "/images/115.jpg", "/images/117.jpg"] 
  },
  { 
    id: 30, 
    name: "Bata North Star", 
    brand: "Bata", 
    price: 2599, 
    sizes: [8, 9, 10, 11, 12], 
    images: ["/images/101.jpg","/images/102.jpg","/images/103.jpg","/images/104.jpg", "/images/105.jpg", "/images/106.jpg"] 
  },
];

export default shoesData;