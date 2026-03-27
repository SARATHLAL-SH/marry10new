// app/stars/page.js
'use client';

import React, { useState } from 'react';

// Mapping of star names (English) to translations in various Indian languages
const starData = {
  // English names (used as keys)
  names: [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
    "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
    "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ],
  // Translations: key = language code, value = array of star names in that language (same order as above)
  translations: {
    hi: [ // Hindi
      "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा",
      "आर्द्रा", "पुनर्वसु", "पुष्य", "आश्लेषा", "मघा",
      "पूर्व फाल्गुनी", "उत्तर फाल्गुनी", "हस्त", "चित्रा", "स्वाती",
      "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढ़ा",
      "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा",
      "पूर्व भाद्रपद", "उत्तर भाद्रपद", "रेवती"
    ],
    ta: [ // Tamil
      "அஸ்வினி", "பரணி", "கார்த்திகை", "ரோகிணி", "மிருகசீரிஷம்",
      "திருவாதிரை", "புனர்பூசம்", "பூசம்", "ஆயில்யம்", "மகம்",
      "பூரம்", "உத்திரம்", "அஸ்தம்", "சித்திரை", "சுவாதி",
      "விசாகம்", "அனுஷம்", "கேட்டை", "மூலம்", "பூராடம்",
      "உத்திராடம்", "திருவோணம்", "அவிட்டம்", "சதயம்",
      "பூரட்டாதி", "உத்திரட்டாதி", "ரேவதி"
    ],
    te: [ // Telugu
      "అశ్వని", "భరణి", "కృత్తిక", "రోహిణి", "మృగశిర",
      "ఆర్ద్ర", "పునర్వసు", "పుష్యమి", "ఆశ్లేష", "మఘ",
      "పూర్వ ఫల్గుణి", "ఉత్తర ఫల్గుణి", "హస్త", "చిత్త", "స్వాతి",
      "విశాఖ", "అనూరాధ", "జ్యేష్ఠ", "మూల", "పూర్వాషాఢ",
      "ఉత్తరాషాఢ", "శ్రవణ", "ధనిష్ఠ", "శతభిష",
      "పూర్వాభాద్ర", "ఉత్తరాభాద్ర", "రేవతి"
    ],
    ml: [ // Malayalam
      "അശ്വതി", "ഭരണി", "കാർത്തിക", "രോഹിണി", "മകയിരം",
      "തിരുവാതിര", "പുണർതം", "പൂയം", "ആയില്യം", "മകം",
      "പൂരം", "ഉത്രം", "അത്തം", "ചിത്തിര", "ചോതി",
      "വിശാഖം", "അനിഴം", "തൃക്കേട്ട", "മൂലം", "പൂരാടം",
      "ഉത്രാടം", "തിരുവോണം", "അവിട്ടം", "ചതയം",
      "പൂരുരുട്ടാതി", "ഉത്രട്ടാതി", "രേവതി"
    ],
    kn: [ // Kannada
      "ಅಶ್ವಿನಿ", "ಭರಣಿ", "ಕೃತ್ತಿಕಾ", "ರೋಹಿಣಿ", "ಮೃಗಶಿರ",
      "ಆರ್ದ್ರಾ", "ಪುನರ್ವಸು", "ಪುಷ್ಯ", "ಆಶ್ಲೇಷಾ", "ಮಘಾ",
      "ಪೂರ್ವ ಫಲ್ಗುನಿ", "ಉತ್ತರ ಫಲ್ಗುನಿ", "ಹಸ್ತ", "ಚಿತ್ರಾ", "ಸ್ವಾತಿ",
      "ವಿಶಾಖಾ", "ಅನುರಾಧಾ", "ಜ್ಯೇಷ್ಠಾ", "ಮೂಲ", "ಪೂರ್ವಾಷಾಢ",
      "ಉತ್ತರಾಷಾಢ", "ಶ್ರವಣ", "ಧನಿಷ್ಠಾ", "ಶತಭಿಷಾ",
      "ಪೂರ್ವಾ ಭಾದ್ರಪದ", "ಉತ್ತರಾ ಭಾದ್ರಪದ", "ರೇವತಿ"
    ],
    bn: [ // Bengali
      "অশ্বিনী", "ভরণী", "কৃত্তিকা", "রোহিণী", "মৃগশিরা",
      "আর্দ্রা", "পুনর্বসু", "পুষ্যা", "আশ্লেষা", "মঘা",
      "পূর্ব ফল্গুনী", "উত্তর ফল্গুনী", "হস্তা", "চিত্রা", "স্বাতী",
      "বিশাখা", "অনুরাধা", "জ্যেষ্ঠা", "মূলা", "পূর্বাষাঢ়া",
      "উত্তরাষাঢ়া", "শ্রবণা", "ধনিষ্ঠা", "শতভিষা",
      "পূর্ব ভাদ্রপদ", "উত্তর ভাদ্রপদ", "রেবতী"
    ],
  }
};

const languageNames = {
  hi: "हिंदी (Hindi)",
  ta: "தமிழ் (Tamil)",
  te: "తెలుగు (Telugu)",
  ml: "മലയാളം (Malayalam)",
  kn: "ಕನ್ನಡ (Kannada)",
  bn: "বাংলা (Bengali)"
};

export default function StarsPage() {
  const [language, setLanguage] = useState("hi"); // default Hindi
  const [selectedStar, setSelectedStar] = useState(null);

  const stars = starData.names;
  const currentStarNames = starData.translations[language] || starData.translations.hi;

  const handleStarClick = (starName, index) => {
    setSelectedStar({ english: starName, local: currentStarNames[index], index });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Select Your Star (Nakshatra)
          </h1>
          <p className="text-gray-600">
            Choose the language that you're comfortable with, then pick your birth star.
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                language === code
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Star Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {stars.map((star, idx) => (
            <div
              key={idx}
              onClick={() => handleStarClick(star, idx)}
              className={`cursor-pointer rounded-xl p-4 text-center transition-all ${
                selectedStar?.index === idx
                  ? "bg-rose-100 border-2 border-rose-500 shadow-md"
                  : "bg-white border border-gray-200 hover:shadow-md hover:border-rose-300"
              }`}
            >
              <div className="font-medium text-gray-800">{currentStarNames[idx]}</div>
              <div className="text-md text-red-900 mt-1">{star}</div>
            </div>
          ))}
        </div>

        {/* Selection Display */}
        {selectedStar && (
          <div className="mt-6 p-5 bg-rose-50 rounded-xl border border-rose-200 text-center">
            <p className="text-gray-700">
              You have selected: <strong>{selectedStar.local}</strong> ({selectedStar.english})
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This star will be saved to your profile. (You can integrate this with your backend later.)
            </p>
          </div>
        )}

        {/* Help text */}
        <div className="text-center text-sm text-gray-400 mt-8">
          Don't see your language? More coming soon.
        </div>
      </div>
    </div>
  );
}