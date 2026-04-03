const fs = require('fs');

const en = {
  hero: {
    badge: "Built for Indian Farmers 🇮🇳",
    title1: "Smart Farming Advice on",
    title2: "Any Phone",
    subtitle: "Voice-first alerts and guidance in your local language.",
    cta: "Start Free Now",
    f1: "No App Needed",
    f2: "Works on Any Phone",
    f3: "Voice-Based",
    f4: "24/7 Monitoring"
  },
  nav: {
    brand: "GroundBit",
    home: "Home",
    how: "How it Works",
    features: "Features",
    demo: "Demo",
    join: "Join Now"
  },
  problem: {
    title: "The Farming Problem",
    c1: "Pests destroy crops.",
    c2: "Late advice means losses.",
    c3: "Weather ruins harvest."
  },
  solution: {
    title: "How It Works",
    s1_title: "24/7 Field Monitoring",
    s1_desc: "IoT device tracks soil and weather.",
    s2_title: "Simple Voice Interaction",
    s2_desc: "Use WhatsApp voice notes or missed calls.",
    s3_title: "Instant AI Reply",
    s3_desc: "Answers back in <10s in your language.",
    s4_title: "Community Risk Alerts",
    s4_desc: "Voice alerts sent to nearby farmers."
  },
  features: {
    title: "Why GroundBit?",
    f1_title: "Cross-Platform",
    f1_desc: "Works on WhatsApp and dumb phones.",
    f2_title: "Instant Voice AI",
    f2_desc: "Understands regional dialects.",
    f3_title: "Offline Fallback",
    f3_desc: "SMS works without internet.",
    f4_title: "Community Grid",
    f4_desc: "One device protects multiple farms."
  },
  demo: {
    title: "See It In Action",
    subtitle: "Uses tools farmers already have.",
    whatsapp: "WhatsApp Flow",
    vn: "Voice Note (0:04)",
    vn_text: "Cotton leaves have white spots. Help?",
    ai_resp: "AI Voice Response",
    ai_text: "White spots indicate Whitefly. Spray neem oil.",
    keypad: "Keypad Phone",
    mc: "Missed Call to",
    mc_desc: "Instant voice call back with local advice."
  },
  diff: {
    title: "How The Community Works",
    subtitle: "Turns one device into protection for the whole village.",
    s1_title: "1. Watches 24/7",
    s1_desc: "ESP32 monitors field continuously.",
    s2_title: "2. Ask Questions",
    s2_desc: "Report issues via WhatsApp or missed call.",
    s3_title: "3. AI Detects",
    s3_desc: "Spots pests via audio instantly.",
    s4_title: "4. Community Alert",
    s4_desc: "1 detection protects 50 farms.",
    adv: "The GroundBit Advantage",
    adv_desc: "Cross-platform voice reporting paired with AI sensors.",
    adv_badge: "1 detection protects 50 farms.",
    cta: "Join the Network"
  },
  testimonials: {
    title: "Farmer Approved",
    t1_text: "Saved my cotton crop from whitefly with just a voice note.",
    t1_name: "Ramesh K.",
    t1_crop: "Cotton",
    t2_text: "The missed call feature is perfect for my older keypad phone.",
    t2_name: "Suresh R.",
    t2_crop: "Tomato"
  },
  form: {
    title: "Protect Your Farm",
    subtitle: "Get 3 months free when you register your number today.",
    name: "Full Name",
    name_ph: "e.g. Ramesh Kumar",
    mobile: "Mobile Number",
    lang: "Preferred Language",
    lang_sel: "Select a language",
    btn: "Get Started Now",
    btn_loading: "Registering...",
    success: "Registration Successful!",
    success_desc: "We'll contact you to finish setup.",
    success_btn: "Register another number"
  }
};

const hi = {
  hero: {
    badge: "भारतीय किसानों के लिए निर्मित ��🇳",
    title1: "स्मार्ट खेती की सलाह",
    title2: "किसी भी फोन पर",
    subtitle: "आपकी स्थानीय भाषा में वॉइस अलर्ट और मार्गदर्शन।",
    cta: "अभी मुफ्त शुरू करें",
    f1: "कोई ऐप नहीं चाहिए",
    f2: "किसी भी फोन पर काम करता है",
    f3: "आवाज़ आधारित",
    f4: "24/7 निगरानी"
  },
  nav: {
    brand: "GroundBit",
    home: "मुख्य पृष्ठ",
    how: "कैसे काम करता है",
    features: "विशेषताएं",
    demo: "डेमो",
    join: "जुड़ें"
  },
  problem: {
    title: "खेती की समस्या",
    c1: "कीट फसल नष्ट करते हैं।",
    c2: "देर से सलाह का मतलब नुकसान।",
    c3: "मौसम फसल बर्बाद करता है।"
  },
  solution: {
    title: "यह कैसे काम करता है",
    s1_title: "24/7 खेत की निगरानी",
    s1_desc: "IoT डिवाइस मिट्टी और मौसम को ट्रैक करता है।",
    s2_title: "सरल आवाज़ संपर्क",
    s2_desc: "व्हाट्सएप वॉयस नोट्स या मिस्ड कॉल का उपयोग करें।",
    s3_title: "त्वरित AI उत्तर",
    s3_desc: "आपकी भाषा में 10 सेकंड से कम समय में उत्तर।",
    s4_title: "समुदाय जोखिम अलर्ट",
    s4_desc: "आसपास के किसानों को भेजे गए वॉइस अलर्ट।"
  },
  features: {
    title: "GroundBit क्यों?",
    f1_title: "क्रॉस-प्लेटफ़ॉर्म",
    f1_desc: "व्हाट्सएप और साधारण फोन पर काम करता है।",
    f2_title: "त्वरित वॉइस AI",
    f2_desc: "क्षेत्रीय बोलियों को समझता है।",
    f3_title: "ऑफ़लाइन विकल्प",
    f3_desc: "बिना इंटरनेट के SMS काम करता है।",
    f4_title: "समुदाय ग्रिड",
    f4_desc: "एक डिवाइस कई खेतों की रक्षा करता है।"
  },
  demo: {
    title: "इसे काम करते देखें",
    subtitle: "किसानों के पास पहले से मौजूद उपकरणों का उपयोग करता है।",
    whatsapp: "व्हाट्सएप प्रक्रिया",
    vn: "वॉयस नोट (0:04)",
    vn_text: "कपास के पत्तों पर सफेद धब्बे हैं। मदद करें?",
    ai_resp: "AI वॉइस उत्तर",
    ai_text: "सफेद धब्बे व्हाइटफ्लाई का संकेत देते हैं। नीम के तेल का छिड़काव करें।",
    keypad: "कीपैड फोन",
    mc: "मिस्ड कॉल करें",
    mc_desc: "स्थानीय सलाह के साथ त्वरित वॉयस कॉल बैक।"
  },
  diff: {
    title: "समुदाय कैसे काम करता है",
    subtitle: "एक डिवाइस को पूरे गांव की सुरक्षा में बदलता है।",
    s1_title: "1. 24/7 निगरानी",
    s1_desc: "ESP32 लगातार खेत की निगरानी करता है।",
    s2_title: "2. सवाल पूछें",
    s2_desc: "व्हाट्सएप या मिस्ड कॉल के माध्यम से समस्याएं रिपोर्ट करें।",
    s3_title: "3. AI पहचानता है",
    s3_desc: "ऑडियो के माध्यम से तुरंत कीटों का पता लगाता है।",
    s4_title: "4. समुदाय अलर्ट",
    s4_desc: "1 पहचान 50 खेतों की रक्षा करती है।",
    adv: "GroundBit का लाभ",
    adv_desc: "AI सेंसर के साथ क्रॉस-प्लेटफ़ॉर्म वॉयस रिपोर्टिंग।",
    adv_badge: "1 पहचान 50 खेतों की रक्षा करती है।",
    cta: "नेटवर्क से जुड़ें"
  },
  testimonials: {
    title: "किसानों द्वारा प्रमाणित",
    t1_text: "सिर्फ एक वॉयस नोट के साथ मेरी कपास की फसल को व्हाइटफ्लाई से बचाया।",
    t1_name: "रमेश के.",
    t1_crop: "कपास",
    t2_text: "मिस्ड कॉल सुविधा मेरे पुराने कीपैड फोन के लिए उत्तम है।",
    t2_name: "सुरेश आर.",
    t2_crop: "टमाटर"
  },
  form: {
    title: "अपने खेत की रक्षा करें",
    subtitle: "आज ही अपना नंबर पंजीकृत करने पर 3 महीने मुफ्त पाएं।",
    name: "पूरा नाम",
    name_ph: "उदा. रमेश कुमार",
    mobile: "मोबाइल नंबर",
    lang: "पसंदीदा भाषा",
    lang_sel: "एक भाषा चुनें",
    btn: "अभी शुरू करें",
    btn_loading: "पंजीकरण किया जा रहा है...",
    success: "पंजीकरण सफल!",
    success_desc: "सेटअप पूरा करने के लिए हम आपसे संपर्क करेंगे।",
    success_btn: "एक और नंबर पंजीकृत करें"
  }
};

const kn = {
  hero: {
    badge: "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ 🇮🇳",
    title1: "ಯಾವುದೇ ಫೋನ್‌ನಲ್ಲಿ",
    title2: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಲಹೆ",
    subtitle: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಯಲ್ಲಿ ಧ್ವನಿ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ.",
    cta: "ಈಗಲೇ ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ",
    f1: "ಯಾವುದೇ ಆಪ್ ಬೇಡ",
    f2: "ಯಾವುದೇ ಫೋನ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    f3: "ಧ್ವನಿ ಆಧಾರಿತ",
    f4: "24/7 ಮೇಲ್ವಿಚಾರಣೆ"
  },
  nav: {
    brand: "GroundBit",
    home: "ಮುಖಪುಟ",
    how: "ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    demo: "ಡೆಮೊ",
    join: "ಈಗ ಸೇರಿ"
  },
  problem: {
    title: "ಕೃಷಿ ಸಮಸ್ಯೆ",
    c1: "ಕೀಟಗಳು ಬೆಳೆಗಳನ್ನು ನಾಶಪಡಿಸುತ್ತವೆ.",
    c2: "ತಡವಾದ ಸಲಹೆ ಎಂದರೆ ನಷ್ಟ.",
    c3: "ಹವಾಮಾನ ಬೆಳೆಗಳನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ."
  },
  solution: {
    title: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    s1_title: "24/7 ಕ್ಷೇತ್ರ ಮೇಲ್ವಿಚಾರಣೆ",
    s1_desc: "ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನವನ್ನು IoT ಸಾಧನ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.",
    s2_title: "ಸರಳ ಧ್ವನಿ ಸಂವಹನ",
    s2_desc: "WhatsApp ಧ್ವನಿ ಟಿಪ್ಪಣಿಗಳು ಅಥವಾ ಮಿಸ್ಡ್ ಕಾಲ್ ಬಳಸಿ.",
    s3_title: "ತ್ವರಿತ AI ಉತ್ತರ",
    s3_desc: "<10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸುತ್ತದೆ.",
    s4_title: "ಸಮುದಾಯದ ಅಪಾಯದ ಎಚ್ಚರಿಕೆಗಳು",
    s4_desc: "ಹತ್ತಿರದ ರೈತರಿಗೆ ಧ್ವನಿ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
  },
  features: {
    title: "GroundBit ಏಕೆ?",
    f1_title: "ಕ್ರಾಸ್-ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
    f1_desc: "WhatsApp ಮತ್ತು ಸಾಮಾನ್ಯ ಫೋನ್‌ಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
    f2_title: "ತ್ವರಿತ ಧ್ವನಿ AI",
    f2_desc: "ಪ್ರಾದೇಶಿಕ ಉಪಭಾಷೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.",
    f3_title: "ಆಫ್‌ಲೈನ್ ಬ್ಯಾಕಪ್",
    f3_desc: "ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ SMS ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
    f4_title: "ಸಮುದಾಯದ ಗ್ರಿಡ್",
    f4_desc: "ಒಂದು ಸಾಧನವು ಹಲವು ಹೊಲಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ."
  },
  demo: {
    title: "ಕಾರ್ಯನಿರ್ವಹಣೆ ನೋಡಿ",
    subtitle: "ರೈತರು ಈಗಾಗಲೇ ಹೊಂದಿರುವ ಸಾಧನಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
    whatsapp: "WhatsApp ಪ್ರಕ್ರಿಯೆ",
    vn: "ಧ್ವನಿ ಟಿಪ್ಪಣಿ (0:04)",
    vn_text: "ಹತ್ತಿ ಎಲೆಗಳ ಮೇಲೆ ಬಿಳಿ ಚುಕ್ಕೆಗಳಿವೆ. ಸಹಾಯ ಮಾಡಿ?",
    ai_resp: "AI ಧ್ವನಿ ಪ್ರತಿಕ್ರಿಯೆ",
    ai_text: "ಬಿಳಿ ಚುಕ್ಕೆಗಳು ಬಿಳಿನೊಣವನ್ನು ಸೂಚಿಸುತ್ತವೆ. ಬೇವಿನ ಎಣ್ಣೆಯನ್ನು ಸಿಂಪಡಿಸಿ.",
    keypad: "ಕೀಪ್ಯಾಡ್ ಫೋನ್",
    mc: "ಮಿಸ್ಡ್ ಕಾಲ್ ನೀಡಿ",
    mc_desc: "ಸ್ಥಳೀಯ ಸಲಹೆಯೊಂದಿಗೆ ತ್ವರಿತ ಧ್ವನಿ ಕಾಲ್ ಬ್ಯಾಕ್."
  },
  diff: {
    title: "ಸಮುದಾಯ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    subtitle: "ಒಂದು ಸಾಧನವನ್ನು ಇಡೀ ಹಳ್ಳಿಯ ರಕ್ಷಣೆಯನ್ನಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.",
    s1_title: "1. 24/7 ವೀಕ್ಷಣೆ",
    s1_desc: "ESP32 ನಿರಂತರವಾಗಿ ಕ್ಷೇತ್ರವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತದೆ.",
    s2_title: "2. ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ",
    s2_desc: "WhatsApp ಅಥವಾ ಮಿಸ್ಡ್ ಕಾಲ್ ಮೂಲಕ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ.",
    s3_title: "3. AI ಪತ್ತೆಹಚ್ಚುತ್ತದೆ",
    s3_desc: "ಆಡಿಯೊ ಮೂಲಕ ತ್ವರಿತವಾಗಿ ಕೀಟಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
    s4_title: "4. ಸಮುದಾಯ ಎಚ್ಚರಿಕೆ",
    s4_desc: "1 ಪತ್ತೆ 50 ಹೊಲಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.",
    adv: "GroundBit ನ ಪ್ರಯೋಜನ",
    adv_desc: "AI ಸಂವೇದಕಗಳೊಂದಿಗೆ ಕ್ರಾಸ್-ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಧ್ವನಿ ವರದಿ ಮಾಡುವಿಕೆ.",
    adv_badge: "1 ಪತ್ತೆ 50 ಹೊಲಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.",
    cta: "ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೇರಿ"
  },
  testimonials: {
    title: "ರೈತರಿಂದ ಅನುಮೋದಿತ",
    t1_text: "ಕೇವಲ ಒಂದು ಧ್ವನಿ ಟಿಪ್ಪಣಿಯೊಂದಿಗೆ ನನ್ನ ಹತ್ತಿ ಬೆಳೆಯನ್ನು ಬಿಳಿನೊಣದಿಂದ ಕಾಪಾಡಿದೆ.",
    t1_name: "ರಮೇಶ್ ಕ.",
    t1_crop: "ಹತ್ತಿ",
    t2_text: "ಮಿಸ್ಡ್ ಕಾಲ್ ವೈಶಿಷ್ಟ್ಯವು ನನ್ನ ಹಳೆಯ ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ಗೆ ಸೂಕ್ತವಾಗಿದೆ.",
    t2_name: "ಸುರೇಶ್ ರ.",
    t2_crop: "ಟೊಮ್ಯಾಟೊ"
  },
  form: {
    title: "ನಿಮ್ಮ ಫಾರ್ಮ್ ಅನ್ನು ರಕ್ಷಿಸಿ",
    subtitle: "ಇಂದು ನಿಮ್ಮ ಸಂಖ್ಯೆಯನ್ನು ನೋಂದಾಯಿಸಿ 3 ತಿಂಗಳು ಉಚಿತ ಪಡೆಯಿರಿ.",
    name: "ಪೂರ್ಣ ಹೆಸರು",
    name_ph: "ಉದಾ. ರಮೇಶ್ ಕುಮಾರ್",
    mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    lang: "ಆದ್ಯತೆಯ ಭಾಷೆ",
    lang_sel: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    btn: "ಈಗಲೇ ಪ್ರಾರಂಭಿಸಿ",
    btn_loading: "ನೋಂದಾಯಿಸಲಾಗುತ್ತಿದೆ...",
    success: "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
    success_desc: "ಸೆಟಪ್ ಪೂರ್ಣಗೊಳಿಸಲು ನಾವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    success_btn: "ಮತ್ತೊಂದು ಸಂಖ್ಯೆಯನ್ನು ನೋಂದಾಯಿಸಿ"
  }
};

const te = {
  hero: {
    badge: "భారతీయ రైతుల కోసం రూపొందించబడింది 🇮🇳",
    title1: "ఏదైనా ఫోన్‌లో",
    title2: "స్మార్ట్ వ్యవసాయ సలహా",
    subtitle: "మీ స్థానిక భాషలో వాయిస్ అలర్ట్‌లు మరియు మార్గదర్శకత్వం.",
    cta: "ఇప్పుడే ఉచితంగా ప్రారంభించండి",
    f1: "యాప్ అవసరం లేదు",
    f2: "ఏ ఫోన్‌లోనైనా పనిచేస్తుంది",
    f3: "వాయిస్ ఆధారిత",
    f4: "24/7 పర్యవేక్షణ"
  },
  nav: {
    brand: "GroundBit",
    home: "హోమ్",
    how: "ఎలా పనిచేస్తుంది",
    features: "ఫీచర్లు",
    demo: "డెమో",
    join: "చేరండి"
  },
  problem: {
    title: "వ్యవసాయ సమస్య",
    c1: "తెగుళ్లు పంటలను నాశనం చేస్తాయి.",
    c2: "ఆలస్యమైన సలహా అంటే నష్టాలు.",
    c3: "వాతావరణం పంటను పాడు చేస్తుంది."
  },
  solution: {
    title: "ఇది ఎలా పనిచేస్తుంది",
    s1_title: "24/7 ఫీల్డ్ పర్యవేక్షణ",
    s1_desc: "IoT పరికరం నేల మరియు వాతావరణాన్ని ట్రాక్ చేస్తుంది.",
    s2_title: "సాధారణ వాయిస్ పరస్పర చర్య",
    s2_desc: "WhatsApp వాయిస్ నోట్స్ లేదా మిస్డ్ కాల్ ఉపయోగించండి.",
    s3_title: "తక్షణ AI ప్రత్యుత్తరం",
    s3_desc: "<10సెకన్లలో మీ భాషలో సమాధానాలు.",
    s4_title: "కమ్యూనిటీ ప్రమాద అలర్ట్‌లు",
    s4_desc: "సమీప రైతులకు వాయిస్ అలర్ట్‌లు పంపబడతాయి."
  },
  features: {
    title: "GroundBit ఎందుకు?",
    f1_title: "క్రాస్-ప్లాట్‌ఫారమ్",
    f1_desc: "WhatsApp మరియు సాధారణ ఫోన్లలో పనిచేస్తుంది.",
    f2_title: "తక్షణ వాయిస్ AI",
    f2_desc: "ప్రాంతీయ మాండలికాలను అర్థం చేసుకుంటుంది.",
    f3_title: "ఆఫ్‌లైన్ ఫాల్‌బ్యాక్",
    f3_desc: "ఇంటర్నెట్ లేకుండా SMS పనిచేస్తుంది.",
    f4_title: "కమ్యూనిటీ గ్రిడ్",
    f4_desc: "ఒక పరికరం అనేక పొలాలను రక్షిస్తుంది."
  },
  demo: {
    title: "ఇది ఎలా పనిచేస్తుందో చూడండి",
    subtitle: "రైతులు ఇప్పటికే కలిగి ఉన్న సాధనాలను ఉపయోగిస్తుంది.",
    whatsapp: "WhatsApp విధానం",
    vn: "వాయిస్ నోట్ (0:04)",
    vn_text: "పత్తి ఆకులపై తెల్లని మచ్చలు ఉన్నాయి. సహాయం చేయండి?",
    ai_resp: "AI వాయిస్ ప్రతిస్పందన",
    ai_text: "తెల్లని మచ్చలు తెల్లదోమను సూచిస్తాయి. వేప నూనె స్ప్రే చేయండి.",
    keypad: "కీప్యాడ్ ఫోన్",
    mc: "మిస్డ్ కాల్ ఇవ్వండి",
    mc_desc: "స్థానిక సలహాతో తక్షణ వాయిస్ కాల్ బ్యాక్."
  },
  diff: {
    title: "కమ్యూనిటీ ఎలా పనిచేస్తుంది",
    subtitle: "ఒక పరికరాన్ని మొత్తం గ్రామానికి రక్షణగా మారుస్తుంది.",
    s1_title: "1. 24/7 పర్యవేక్షణ",
    s1_desc: "ESP32 నిరంతరం పొలాన్ని పర్యవేక్షిస్తుంది.",
    s2_title: "2. ప్రశ్నలు అడగండి",
    s2_desc: "WhatsApp లేదా మిస్డ్ కాల్ ద్వారా సమస్యలను రిపోర్ట్ చేయండి.",
    s3_title: "3. AI గుర్తిస్తుంది",
    s3_desc: "ఆడియో ద్వారా తక్షణమే తెగుళ్లను గుర్తిస్తుంది.",
    s4_title: "4. కమ్యూనిటీ అలర్ట్",
    s4_desc: "1 గుర్తింపు 50 పొలాలను రక్షిస్తుంది.",
    adv: "GroundBit ప్రయోజనం",
    adv_desc: "AI సెన్సార్లతో క్రాస్-ప్లాట్‌ఫారమ్ వాయిస్ రిపోర్టింగ్.",
    adv_badge: "1 గుర్తింపు 50 పొలాలను రక్షిస్తుంది.",
    cta: "నెట్‌వర్క్‌లో చేరండి"
  },
  testimonials: {
    title: "రైతులచే ఆమోదించబడింది",
    t1_text: "కేవలం ఒక వాయిస్ నోట్‌తో నా పత్తి పంటను తెల్లదోమ నుండి కాపాడింది.",
    t1_name: "రమేష్ కె.",
    t1_crop: "పత్తి",
    t2_text: "మిస్డ్ కాల్ ఫీచర్ నా పాత కీప్యాడ్ ఫోన్‌కు పర్ఫెక్ట్.",
    t2_name: "సురేష్ ఆర్.",
    t2_crop: "టమోటా"
  },
  form: {
    title: "మీ ఫామ్‌ను రక్షించుకోండి",
    subtitle: "ఈ రోజు మీ నంబర్‌ను రిజిస్టర్ చేసి 3 నెలలు ఉచితంగా పొందండి.",
    name: "పూర్తి పేరు",
    name_ph: "ఉదా. రమేష్ కుమార్",
    mobile: "మొబైల్ నంబర్",
    lang: "ప్రాధాన్య భాష",
    lang_sel: "భాషను ఎంచుకోండి",
    btn: "ఇప్పుడే ప్రారంభించండి",
    btn_loading: "నమోదు అవుతోంది...",
    success: "నమోదు విజయవంతమైంది!",
    success_desc: "సెటప్ పూర్తి చేయడానికి మేము మిమ్మల్ని సంప్రదిస్తాము.",
    success_btn: "మరో నంబర్‌ను నమోదు చేయండి"
  }
};

const ta = {
  hero: {
    badge: "இந்திய விவசாயிகளுக்காக உருவாக்கப்பட்டது 🇮🇳",
    title1: "எந்த போனிலும்",
    title2: "ஸ்மார்ட் விவசாய ஆலோசனை",
    subtitle: "உங்கள் உள்ளூர் மொழியில் குரல் எச்சரிக்கைகள் மற்றும் வழிகாட்டுதல்.",
    cta: "இப்போதே இலவசமாகத் தொடங்குங்கள்",
    f1: "செயலி தேவையில்லை",
    f2: "எந்த போனிலும் வேலை செய்யும்",
    f3: "குரல் அடிப்படையிலானது",
    f4: "24/7 கண்காணிப்பு"
  },
  nav: {
    brand: "GroundBit",
    home: "முகப்பு",
    how: "எப்படி செயல்படுகிறது",
    features: "அம்சங்கள்",
    demo: "செயல்விளக்கம்",
    join: "இணையுங்கள்"
  },
  problem: {
    title: "விவசாயப் பிரச்சனை",
    c1: "பூச்சிகள் பயிர்களை அழிக்கின்றன.",
    c2: "தாமதமான ஆலோசனை நஷ்டத்தை ஏற்படுத்தும்.",
    c3: "காலநிலை அறுவடையை பாதிக்கிறது."
  },
  solution: {
    title: "இது எப்படி செயல்படுகிறது",
    s1_title: "24/7 களக் கண்காணிப்பு",
    s1_desc: "IoT சாதனம் மண் மற்றும் வானிலையை கண்காணிக்கிறது.",
    s2_title: "எளிய குரல் தொடர்பு",
    s2_desc: "WhatsApp வாய்ஸ் நோட் அல்லது மிஸ்டு காலை பயன்படுத்தவும்.",
    s3_title: "உடனடி AI பதில்",
    s3_desc: "<10 வினாடிகளில் உங்கள் மொழியில் பதிலளிக்கிறது.",
    s4_title: "சமூக ஆபத்து எச்சரிக்கைகள்",
    s4_desc: "அருகிலுள்ள விவசாயிகளுக்கு குரல் எச்சரிக்கைகள் அனுப்பப்படும்."
  },
  features: {
    title: "GroundBit ஏன்?",
    f1_title: "க்ராஸ்-பிளாட்ஃபார்ம்",
    f1_desc: "WhatsApp மற்றும் சாதாரண போன்களில் வேலை செய்யும்.",
    f2_title: "உடனடி குரல் AI",
    f2_desc: "பிராந்திய வட்டார வழக்குகளை புரிந்துகொள்கிறது.",
    f3_title: "ஆஃப்லைன் வசதி",
    f3_desc: "இணையம் இல்லாமல் SMS வேலை செய்யும்.",
    f4_title: "சமூக கட்டமைப்பு",
    f4_desc: "ஒரு சாதனம் பல விளைநிலங்களை பாதுகாக்கிறது."
  },
  demo: {
    title: "செயல்பாட்டைப் பாருங்கள்",
    subtitle: "விவசாயிகள் ஏற்கனவே வைத்துள்ள கருவிகளைப் பயன்படுத்துகிறது.",
    whatsapp: "WhatsApp முறை",
    vn: "வாய்ஸ் நோட் (0:04)",
    vn_text: "பருத்தி இலைகளில் வெள்ளை புள்ளிகள் உள்ளன. உதவுங்கள்?",
    ai_resp: "AI குரல் பதில்",
    ai_text: "வெள்ளை புள்ளிகள் வெள்ளை ஈக்களின் அறிகுறி. வேப்ப எண்ணெய் தெளிக்கவும்.",
    keypad: "கீபேட் போன்",
    mc: "மிஸ்டு கால் கொடுக்கவும்",
    mc_desc: "உள்ளூர் ஆலோசனையுடன் உடனடி குரல் அழைப்பு."
  },
  diff: {
    title: "சமூகம் எப்படி செயல்படுகிறது",
    subtitle: "ஒரு சாதனம் முழு கிராமத்திற்கும் பாதுகாப்பாக மாறுகிறது.",
    s1_title: "1. 24/7 கண்காணிப்பு",
    s1_desc: "ESP32 தொடர்ந்து களத்தை கண்காணிக்கிறது.",
    s2_title: "2. கேள்விகள் கேளுங்கள்",
    s2_desc: "WhatsApp அல்லது மிஸ்டு கால் மூலம் பிரச்சனைகளைத் தெரிவிக்கவும்.",
    s3_title: "3. AI கண்டறிகிறது",
    s3_desc: "ஆடியோ மூலம் உடனடியாக பூச்சிகளைக் கண்டறிகிறது.",
    s4_title: "4. சமூக எச்சரிக்கை",
    s4_desc: "1 கண்டறிதல் 50 விளைநிலங்களை பாதுகாக்கிறது.",
    adv: "GroundBit நன்மைகள்",
    adv_desc: "AI சென்சார்களுடன் கூடிய க்ராஸ்-பிளாட்ஃபார்ம் குரல் அறிக்கை.",
    adv_badge: "1 கண்டறிதல் 50 விளைநிலங்களை பாதுகாக்கிறது.",
    cta: "கட்டமைப்பில் இணையுங்கள்"
  },
  testimonials: {
    title: "விவசாயிகளால் அங்கீகரிக்கப்பட்டது",
    t1_text: "ஒரே ஒரு வாய்ஸ் நோட் மூலம் என் பருத்தியை வெள்ளை ஈக்களிடமிருந்து காத்தது.",
    t1_name: "ரமேஷ் கே.",
    t1_crop: "பருத்தி",
    t2_text: "மிஸ்டு கால் அம்சம் எனது பழைய கீபேட் போனுக்கு சரியாக உள்ளது.",
    t2_name: "சுரேஷ் ஆர்.",
    t2_crop: "தக்காளி"
  },
  form: {
    title: "உங்கள் பண்ணையைப் பாதுகாக்கவும்",
    subtitle: "இன்றே பதிவு செய்து 3 மாதங்கள் இலவசமாகப் பெறுங்கள்.",
    name: "முழு பெயர்",
    name_ph: "உதாரணம்: ரமேஷ் குமார்",
    mobile: "மொபைல் எண்",
    lang: "விருப்பமான மொழி",
    lang_sel: "மொழியைத் தேர்ந்தெடுக்கவும்",
    btn: "இப்போதே தொடங்குங்கள்",
    btn_loading: "பதிவு செய்யப்படுகிறது...",
    success: "பதிவு வெற்றி!",
    success_desc: "அமைப்பை முடிக்க நாங்கள் உங்களைத் தொடர்புகொள்வோம்.",
    success_btn: "மற்றொரு எண்ணைப் பதிவு செய்யவும்"
  }
};

fs.writeFileSync('src/locales/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/locales/hi.json', JSON.stringify(hi, null, 2));
fs.writeFileSync('src/locales/kn.json', JSON.stringify(kn, null, 2));
fs.writeFileSync('src/locales/te.json', JSON.stringify(te, null, 2));
fs.writeFileSync('src/locales/ta.json', JSON.stringify(ta, null, 2));

console.log('Translations generated.');
