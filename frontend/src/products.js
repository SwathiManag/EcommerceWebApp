const products = [
  {
    '_id': '1',
    'name': 'Airpods Wireless Bluetooth Headphones',
    'image': '/images/airpods.jpg',
    'description':
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    'brand': 'Apple',
    'category': 'Electronics',
    'price': 89.99,
    'countInStock': 10,
    'rating': 4.5,
    'numReviews': 12,
  },
  {
    '_id': '2',
    'name': 'iPhone 11 Pro 256GB Memory',
    'image': '/images/phone.jpg',
    'description':
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    'brand': 'Apple',
    'category': 'Electronics',
    'price': 599.99,
    'countInStock': 7,
    'rating': 4.0,
    'numReviews': 8,
  },
  {
    '_id': '3',
    'name': 'Cannon EOS 80D DSLR Camera',
    'image': '/images/camera.jpg',
    'description':
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    'brand': 'Cannon',
    'category': 'Electronics',
    'price': 929.99,
    'countInStock': 5,
    'rating': 3,
    'numReviews': 12,
  },
  {
    '_id': '4',
    'name': 'Sony Playstation 4 Pro White Version',
    'image': '/images/playstation.jpg',
    'description':
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    'brand': 'Sony',
    'category': 'Electronics',
    'price': 399.99,
    'countInStock': 11,
    'rating': 5,
    'numReviews': 12,
  },
  {
    '_id': '5',
    'name': 'Logitech G-Series Gaming Mouse',
    'image': '/images/mouse.jpg',
    'description':
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    'brand': 'Logitech',
    'category': 'Electronics',
    'price': 49.99,
    'countInStock': 7,
    'rating': 3.5,
    'numReviews': 10,
  },
  {
    '_id': '6',
    'name': 'Amazon Echo Dot 3rd Generation',
    'image': '/images/alexa.jpg',
    'description':
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    'brand': 'Amazon',
    'category': 'Electronics',
    'price': 29.99,
    'countInStock': 0,
    'rating': 4,
    'numReviews': 12,
  },
  {
    '_id': '7',
    'name': 'Ring Video Doorbell Satin Nickel',
    'image': '/images/doorbell.jpg',
    'description':
      'Meet smart doorbell that can be used with Alexa voice commands and other smart devices. The doorbell button is surrounded by an LED ring that flashes blue when the button is pressed.',
    'brand': 'Ring',
    'category': 'Electronics',
    'price': 99.99,
    'countInStock': 3,
    'rating': 4.7,
    'numReviews': 22,
  },
  {
    '_id': '8',
    'name': 'Google Nest Thermostat - Cotton Snow',
    'image': '/images/thermostat.jpg',
    'description':
      'Meet the Nest Thermostat, the helpful thermostat with a cozy price. It can turn itself down to save energy when you leave the house. You can control it from anywhere with the Google Home app - whether you\'re on an errand or in bed. And it\'s easy to install yourself.',
    'brand': 'Google',
    'category': 'Electronics',
    'price': 129.99,
    'countInStock': 6,
    'rating': 4,
    'numReviews': 52,
  },
  {
    '_id': '9',
    'name': 'Amazon Echo Dot (5th Gen 2022) - Smart Speaker with Alexa',
    'image': '/images/echo.jpg',
    'description':
      'Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room. Your favorite music and content – Play music, audiobooks, and podcasts from Amazon Music, Apple Music, Spotify and others or via Bluetooth throughout your home.',
    'brand': 'Amazon',
    'category': 'Electronics',
    'price': 49.99,
    'countInStock': 2,
    'rating': 5,
    'numReviews': 26,
  },
  {
    '_id': '10',
    'name': 'SimpliSafe - Keypad - White',
    'image': '/images/keypad.jpg',
    'description':
      'The SimpliSafe Extra Keypad is the perfect addition for your home security system. Place the Extra Keypad by your back door, garage entrance, or in the upper levels of your home for convenient one-touch arm and disarm wherever you enter or exit your home. Easy to use and install with no tools or wiring required (batteries included).',
    'brand': 'SimpliSafe',
    'category': 'Electronics',
    'price': 69.99,
    'countInStock': 2,
    'rating': 5,
    'numReviews': 28,
  },
  {
    '_id': '11',
    'name': 'Ring - Floodlight Cam Wired Pro Outdoor Wi-Fi 1080p Surveillance Camera - Black',
    'image': '/images/floodlight.jpg',
    'description':
      'The Ring Floodlight Cam Wired Pro is a home security camera that has two 1000-lumen spotlights that can be set to turn on when motion is detected. The camera has a 140-degree horizontal field of view and can record in 1080p resolution. It also has a 110dB siren and two-way talk features.',
    'brand': 'Ring',
    'category': 'Electronics',
    'price': 249.99,
    'countInStock': 3,
    'rating': 4.7,
    'numReviews': 228,
  },
  {
    '_id': '12',
    'name': 'Google - Nest Cam Indoor/Outdoor Wire Free Security Camera - Snow',
    'image': '/images/nestcam.jpg',
    'description':
      'The Nest Cam security camera is wire-free and weather resistant, so it goes almost anywhere you need it, outside or in. Know when something important happens at home with intelligent alerts and take action right from the Google Home app.[1] Because it’s a wireless security camera, it’s easy to install yourself – no outlet required. View live HD video, replay video recordings, talk to visitors, and more – all from the Google Home app. This home security camera requires a free Google Account and is not compatible with the Nest app. [1]Some features, including mobile notifications, remote control, video streaming, and video recording, require working internet and Wi-Fi. [2]Up to 3 hours recording. Learn more at g.co/nest/3hours. [3]Nest Aware and Nest Aware Plus subscription sold separately. [4]Learn more at g.co/nest/cam-mem.',
    'brand': 'Google',
    'category': 'Electronics',
    'price': 179.99,
    'countInStock': 3,
    'rating': 3.9,
    'numReviews': 78,
  },
  {
    '_id': '13',
    'name': 'Honeywell Lyric T5 Wi-Fi Smart Thermostat',
    'image': '/images/honeywell.jpg',
    'description':
      'The Honeywell Lyric T5 Wi-Fi Smart Thermostat is a smart thermostat that can be controlled remotely via a smartphone or tablet. It has a touchscreen interface and is compatible with Google Assistant, Amazon Alexa, and Siri. The Lyric T5 also features geofencing technology, which uses your smartphone\'s location to know when you\'re away and when you return.',
    'brand': 'Honeywell',
    'category': 'Electronics',
    'price': 59.99,
    'countInStock': 7,
    'rating': 4,
    'numReviews': 44,
  },
]


export default products
