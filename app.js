// ===== i18n TRANSLATIONS =====
const translations = {
    en: {
        heroTitle: 'AI Clinical Documentation Assistant',
        heroSubtitle: 'Transform consultation recordings into structured SOAP clinical notes with AI-powered documentation.',
        heroFeature1: 'HIPAA Compliant',
        heroFeature2: 'Save 60% Time',
        heroFeature3: 'Structured SOAP Notes',
        welcomeBack: 'Welcome Back',
        signInSubtitle: 'Sign in to access your clinical documentation workspace',
        fullName: 'Full Name',
        fullNamePlaceholder: 'Dr. Jane Smith',
        emailAddress: 'Email Address',
        hospitalClinic: 'Hospital / Clinic',
        hospitalPlaceholder: 'City General Hospital',
        signIn: 'Sign In',
        loginFooter: 'By signing in, you agree to our Terms of Service and Privacy Policy',
        navDashboard: 'Dashboard',
        navNewConsultation: 'New Consultation',
        navRecords: 'Records',
        dashboardSubtitle: 'Manage your consultations and clinical documentation',
        startNewConsultation: 'Start New Consultation',
        totalNotes: 'Total Notes',
        today: 'Today',
        avgGeneration: 'Avg. Generation',
        consentRate: 'Consent Rate',
        recentClinicalNotes: 'Recent Clinical Notes',
        viewAll: 'View All',
        noNotesYet: 'No clinical notes yet',
        noNotesHint: 'Start a new consultation to generate your first SOAP note',
        newConsultation: 'New Consultation',
        newConsultationSub: 'Upload or record a consultation to generate structured clinical notes',
        patientConsent: 'Patient Consent',
        consentSubtitle: 'Ensure patient has provided informed consent before recording',
        consentStrong: 'Patient has given informed consent',
        consentRest: 'for audio recording of this consultation for the purpose of clinical documentation.',
        consultationAudio: 'Consultation Audio',
        audioSubtitle: 'Upload an existing recording or record a new consultation',
        dragDrop: 'Drag & drop audio file or',
        browse: 'browse',
        uploadHint: 'Supports MP3, WAV, M4A, OGG (Max 50MB)',
        or: 'OR',
        startRecording: 'Start Recording',
        stop: 'Stop',
        patientDetails: 'Patient Details',
        optional: 'Optional',
        detailsSubtitle: 'Provide additional context for more accurate documentation',
        patientName: 'Patient Name',
        patientNamePlaceholder: 'e.g., Rajesh Kumar',
        age: 'Age',
        gender: 'Gender',
        genderSelect: 'Select',
        male: 'Male',
        female: 'Female',
        other_gender: 'Other',
        generateNotes: 'Generate Clinical Notes',
        analyzingConsultation: 'Analyzing Consultation',
        generatingDocs: 'Generating structured clinical documentation…',
        step1: 'Transcribing audio recording',
        step2: 'Identifying clinical entities',
        step3: 'Structuring SOAP notes',
        step4: 'Finalizing documentation',
        notesGenerated: 'Clinical Notes Generated Successfully',
        subjective: 'Subjective',
        objective: 'Objective',
        assessment: 'Assessment',
        plan: 'Plan',
        downloadPDF: 'Download as PDF',
        saveToRecords: 'Save to Records',
        clinicalRecords: 'Clinical Records',
        recordsSubtitle: 'View all previously generated clinical documentation',
        noRecords: 'No records yet',
        noRecordsHint: 'Generated clinical notes will appear here',
        clinicalNote: 'Clinical Note',
        greeting_morning: 'Good morning',
        greeting_afternoon: 'Good afternoon',
        greeting_evening: 'Good evening',
        toastConsentRequired: '⚠️ Please confirm patient consent before proceeding',
        toastAudioRequired: '⚠️ Please upload or record consultation audio',
        toastSaved: '✓ Saved to clinical records',
        toastAlreadySaved: 'Already saved to records',
        toastPDFReady: '✓ PDF ready — use Print dialog to save',
        soapNote: 'SOAP Note',
    },
    hi: {
        heroTitle: 'AI क्लिनिकल डॉक्यूमेंटेशन असिस्टेंट',
        heroSubtitle: 'AI-संचालित डॉक्यूमेंटेशन के साथ परामर्श रिकॉर्डिंग को संरचित SOAP क्लिनिकल नोट्स में बदलें।',
        heroFeature1: 'HIPAA अनुपालन',
        heroFeature2: '60% समय बचाएं',
        heroFeature3: 'संरचित SOAP नोट्स',
        welcomeBack: 'वापस स्वागत है',
        signInSubtitle: 'अपने क्लिनिकल डॉक्यूमेंटेशन कार्यक्षेत्र तक पहुँचने के लिए साइन इन करें',
        fullName: 'पूरा नाम',
        fullNamePlaceholder: 'डॉ. जेन स्मिथ',
        emailAddress: 'ईमेल पता',
        hospitalClinic: 'अस्पताल / क्लिनिक',
        hospitalPlaceholder: 'सिटी जनरल अस्पताल',
        signIn: 'साइन इन करें',
        loginFooter: 'साइन इन करके, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं',
        navDashboard: 'डैशबोर्ड',
        navNewConsultation: 'नया परामर्श',
        navRecords: 'रिकॉर्ड्स',
        dashboardSubtitle: 'अपने परामर्श और क्लिनिकल डॉक्यूमेंटेशन प्रबंधित करें',
        startNewConsultation: 'नया परामर्श शुरू करें',
        totalNotes: 'कुल नोट्स',
        today: 'आज',
        avgGeneration: 'औसत जनरेशन',
        consentRate: 'सहमति दर',
        recentClinicalNotes: 'हालिया क्लिनिकल नोट्स',
        viewAll: 'सभी देखें',
        noNotesYet: 'अभी तक कोई क्लिनिकल नोट्स नहीं',
        noNotesHint: 'अपना पहला SOAP नोट जेनरेट करने के लिए नया परामर्श शुरू करें',
        newConsultation: 'नया परामर्श',
        newConsultationSub: 'संरचित क्लिनिकल नोट्स जेनरेट करने के लिए ऑडियो अपलोड या रिकॉर्ड करें',
        patientConsent: 'रोगी की सहमति',
        consentSubtitle: 'रिकॉर्डिंग से पहले सुनिश्चित करें कि रोगी ने सूचित सहमति दी है',
        consentStrong: 'रोगी ने सूचित सहमति दी है',
        consentRest: 'क्लिनिकल डॉक्यूमेंटेशन के उद्देश्य से इस परामर्श की ऑडियो रिकॉर्डिंग के लिए।',
        consultationAudio: 'परामर्श ऑडियो',
        audioSubtitle: 'मौजूदा रिकॉर्डिंग अपलोड करें या नया परामर्श रिकॉर्ड करें',
        dragDrop: 'ऑडियो फ़ाइल ड्रैग & ड्रॉप करें या',
        browse: 'ब्राउज़ करें',
        uploadHint: 'MP3, WAV, M4A, OGG समर्थित (अधिकतम 50MB)',
        or: 'या',
        startRecording: 'रिकॉर्डिंग शुरू करें',
        stop: 'रोकें',
        patientDetails: 'रोगी विवरण',
        optional: 'वैकल्पिक',
        detailsSubtitle: 'अधिक सटीक डॉक्यूमेंटेशन के लिए अतिरिक्त संदर्भ प्रदान करें',
        patientName: 'रोगी का नाम',
        patientNamePlaceholder: 'उदा., राजेश कुमार',
        age: 'आयु',
        gender: 'लिंग',
        genderSelect: 'चुनें',
        male: 'पुरुष',
        female: 'महिला',
        other_gender: 'अन्य',
        generateNotes: 'क्लिनिकल नोट्स जेनरेट करें',
        analyzingConsultation: 'परामर्श का विश्लेषण',
        generatingDocs: 'संरचित क्लिनिकल डॉक्यूमेंटेशन जेनरेट हो रहा है…',
        step1: 'ऑडियो रिकॉर्डिंग ट्रांसक्राइब हो रही है',
        step2: 'क्लिनिकल एंटिटी की पहचान हो रही है',
        step3: 'SOAP नोट्स संरचित हो रहे हैं',
        step4: 'डॉक्यूमेंटेशन अंतिम रूप दिया जा रहा है',
        notesGenerated: 'क्लिनिकल नोट्स सफलतापूर्वक जेनरेट हुए',
        subjective: 'सब्जेक्टिव',
        objective: 'ऑब्जेक्टिव',
        assessment: 'आकलन',
        plan: 'योजना',
        downloadPDF: 'PDF डाउनलोड करें',
        saveToRecords: 'रिकॉर्ड्स में सेव करें',
        clinicalRecords: 'क्लिनिकल रिकॉर्ड्स',
        recordsSubtitle: 'पहले जेनरेट किए गए सभी क्लिनिकल डॉक्यूमेंटेशन देखें',
        noRecords: 'अभी तक कोई रिकॉर्ड नहीं',
        noRecordsHint: 'जेनरेट किए गए क्लिनिकल नोट्स यहाँ दिखाई देंगे',
        clinicalNote: 'क्लिनिकल नोट',
        greeting_morning: 'सुप्रभात',
        greeting_afternoon: 'नमस्कार',
        greeting_evening: 'शुभ संध्या',
        toastConsentRequired: '⚠️ कृपया आगे बढ़ने से पहले रोगी की सहमति की पुष्टि करें',
        toastAudioRequired: '⚠️ कृपया परामर्श ऑडियो अपलोड या रिकॉर्ड करें',
        toastSaved: '✓ क्लिनिकल रिकॉर्ड्स में सेव किया गया',
        toastAlreadySaved: 'पहले से रिकॉर्ड्स में सेव है',
        toastPDFReady: '✓ PDF तैयार — सेव करने के लिए प्रिंट डायलॉग का उपयोग करें',
        soapNote: 'SOAP नोट',
    },
    ta: {
        heroTitle: 'AI மருத்துவ ஆவண உதவியாளர்',
        heroSubtitle: 'AI-செயல்படுத்தப்பட்ட ஆவணத்துடன் ஆலோசனை பதிவுகளை கட்டமைக்கப்பட்ட SOAP மருத்துவ குறிப்புகளாக மாற்றுங்கள்.',
        heroFeature1: 'HIPAA இணக்கமானது',
        heroFeature2: '60% நேரம் சேமிக்கவும்',
        heroFeature3: 'கட்டமைக்கப்பட்ட SOAP குறிப்புகள்',
        welcomeBack: 'மீண்டும் வரவேற்கிறோம்',
        signInSubtitle: 'உங்கள் மருத்துவ ஆவண பணியிடத்தை அணுக உள்நுழையவும்',
        fullName: 'முழு பெயர்',
        fullNamePlaceholder: 'டாக்டர் ஜேன் ஸ்மித்',
        emailAddress: 'மின்னஞ்சல் முகவரி',
        hospitalClinic: 'மருத்துவமனை / மருத்துவ நிலையம்',
        hospitalPlaceholder: 'நகர பொது மருத்துவமனை',
        signIn: 'உள்நுழையவும்',
        loginFooter: 'உள்நுழைவதன் மூலம், எங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறீர்கள்',
        navDashboard: 'டாஷ்போர்டு',
        navNewConsultation: 'புதிய ஆலோசனை',
        navRecords: 'பதிவுகள்',
        dashboardSubtitle: 'உங்கள் ஆலோசனைகள் மற்றும் மருத்துவ ஆவணங்களை நிர்வகிக்கவும்',
        startNewConsultation: 'புதிய ஆலோசனையைத் தொடங்குங்கள்',
        totalNotes: 'மொத்த குறிப்புகள்',
        today: 'இன்று',
        avgGeneration: 'சராசரி உருவாக்கம்',
        consentRate: 'ஒப்புதல் விகிதம்',
        recentClinicalNotes: 'சமீபத்திய மருத்துவ குறிப்புகள்',
        viewAll: 'அனைத்தையும் காண்',
        noNotesYet: 'இன்னும் மருத்துவ குறிப்புகள் இல்லை',
        noNotesHint: 'உங்கள் முதல் SOAP குறிப்பை உருவாக்க புதிய ஆலோசனையைத் தொடங்குங்கள்',
        newConsultation: 'புதிய ஆலோசனை',
        newConsultationSub: 'கட்டமைக்கப்பட்ட மருத்துவ குறிப்புகளை உருவாக்க ஒலியை பதிவேற்றவும் அல்லது பதிவு செய்யவும்',
        patientConsent: 'நோயாளி ஒப்புதல்',
        consentSubtitle: 'பதிவுக்கு முன் நோயாளி தகவலறிந்த ஒப்புதல் அளித்துள்ளார் என்பதை உறுதிப்படுத்தவும்',
        consentStrong: 'நோயாளி தகவலறிந்த ஒப்புதல் அளித்துள்ளார்',
        consentRest: 'மருத்துவ ஆவணத்தின் நோக்கத்திற்காக இந்த ஆலோசனையின் ஒலிப்பதிவுக்கு.',
        consultationAudio: 'ஆலோசனை ஒலி',
        audioSubtitle: 'ஏற்கனவே உள்ள பதிவை பதிவேற்றவும் அல்லது புதிய ஆலோசனையை பதிவு செய்யவும்',
        dragDrop: 'ஒலி கோப்பை இழுத்து விடவும் அல்லது',
        browse: 'உலாவவும்',
        uploadHint: 'MP3, WAV, M4A, OGG ஆதரிக்கப்படுகிறது (அதிகபட்சம் 50MB)',
        or: 'அல்லது',
        startRecording: 'பதிவைத் தொடங்குங்கள்',
        stop: 'நிறுத்துங்கள்',
        patientDetails: 'நோயாளி விவரங்கள்',
        optional: 'விருப்பமானது',
        detailsSubtitle: 'மிகவும் துல்லியமான ஆவணத்திற்கு கூடுதல் சூழலை வழங்கவும்',
        patientName: 'நோயாளி பெயர்',
        patientNamePlaceholder: 'எ.கா., ராஜேஷ் குமார்',
        age: 'வயது',
        gender: 'பாலினம்',
        genderSelect: 'தேர்ந்தெடு',
        male: 'ஆண்',
        female: 'பெண்',
        other_gender: 'மற்றவை',
        generateNotes: 'மருத்துவ குறிப்புகளை உருவாக்குங்கள்',
        analyzingConsultation: 'ஆலோசனை பகுப்பாய்வு',
        generatingDocs: 'கட்டமைக்கப்பட்ட மருத்துவ ஆவணம் உருவாக்கப்படுகிறது…',
        step1: 'ஒலிப்பதிவு எழுத்தாக்கம் செய்யப்படுகிறது',
        step2: 'மருத்துவ நிறுவனங்கள் அடையாளம் காணப்படுகின்றன',
        step3: 'SOAP குறிப்புகள் கட்டமைக்கப்படுகின்றன',
        step4: 'ஆவணம் இறுதி செய்யப்படுகிறது',
        notesGenerated: 'மருத்துவ குறிப்புகள் வெற்றிகரமாக உருவாக்கப்பட்டன',
        subjective: 'அகநிலை',
        objective: 'புறநிலை',
        assessment: 'மதிப்பீடு',
        plan: 'திட்டம்',
        downloadPDF: 'PDF பதிவிறக்கம்',
        saveToRecords: 'பதிவுகளில் சேமிக்கவும்',
        clinicalRecords: 'மருத்துவ பதிவுகள்',
        recordsSubtitle: 'முன்னர் உருவாக்கப்பட்ட அனைத்து மருத்துவ ஆவணங்களையும் பார்க்கவும்',
        noRecords: 'இன்னும் பதிவுகள் இல்லை',
        noRecordsHint: 'உருவாக்கப்பட்ட மருத்துவ குறிப்புகள் இங்கே தோன்றும்',
        clinicalNote: 'மருத்துவ குறிப்பு',
        greeting_morning: 'காலை வணக்கம்',
        greeting_afternoon: 'மதிய வணக்கம்',
        greeting_evening: 'மாலை வணக்கம்',
        toastConsentRequired: '⚠️ தயவுசெய்து நோயாளி ஒப்புதலை உறுதிப்படுத்தவும்',
        toastAudioRequired: '⚠️ தயவுசெய்து ஆலோசனை ஒலியை பதிவேற்றவும்',
        toastSaved: '✓ மருத்துவ பதிவுகளில் சேமிக்கப்பட்டது',
        toastAlreadySaved: 'ஏற்கனவே பதிவுகளில் சேமிக்கப்பட்டுள்ளது',
        toastPDFReady: '✓ PDF தயார்',
        soapNote: 'SOAP குறிப்பு',
    },
    te: {
        heroTitle: 'AI క్లినికల్ డాక్యుమెంటేషన్ అసిస్టెంట్',
        heroSubtitle: 'AI-ఆధారిత డాక్యుమెంటేషన్‌తో సంప్రదింపు రికార్డింగ్‌లను నిర్మాణాత్మక SOAP క్లినికల్ నోట్స్‌గా మార్చండి.',
        heroFeature1: 'HIPAA అనుకూలం',
        heroFeature2: '60% సమయం ఆదా',
        heroFeature3: 'నిర్మాణాత్మక SOAP నోట్స్',
        welcomeBack: 'తిరిగి స్వాగతం',
        signInSubtitle: 'మీ క్లినికల్ డాక్యుమెంటేషన్ వర్క్‌స్పేస్‌ను యాక్సెస్ చేయడానికి సైన్ ఇన్ చేయండి',
        fullName: 'పూర్తి పేరు',
        fullNamePlaceholder: 'డా. జేన్ స్మిత్',
        emailAddress: 'ఇమెయిల్ చిరునామా',
        hospitalClinic: 'ఆసుపత్రి / క్లినిక్',
        hospitalPlaceholder: 'సిటీ జనరల్ ఆసుపత్రి',
        signIn: 'సైన్ ఇన్',
        loginFooter: 'సైన్ ఇన్ చేయడం ద్వారా, మీరు మా సేవా నిబంధనలు మరియు గోప్యతా విధానాన్ని అంగీకరిస్తున్నారు',
        navDashboard: 'డాష్‌బోర్డ్',
        navNewConsultation: 'కొత్త సంప్రదింపు',
        navRecords: 'రికార్డులు',
        dashboardSubtitle: 'మీ సంప్రదింపులు మరియు క్లినికల్ డాక్యుమెంటేషన్‌ను నిర్వహించండి',
        startNewConsultation: 'కొత్త సంప్రదింపు ప్రారంభించండి',
        totalNotes: 'మొత్తం నోట్స్',
        today: 'ఈరోజు',
        avgGeneration: 'సగటు జనరేషన్',
        consentRate: 'అంగీకార రేటు',
        recentClinicalNotes: 'ఇటీవలి క్లినికల్ నోట్స్',
        viewAll: 'అన్నీ చూడండి',
        noNotesYet: 'ఇంకా క్లినికల్ నోట్స్ లేవు',
        noNotesHint: 'మీ మొదటి SOAP నోట్ జనరేట్ చేయడానికి కొత్త సంప్రదింపు ప్రారంభించండి',
        newConsultation: 'కొత్త సంప్రదింపు',
        newConsultationSub: 'నిర్మాణాత్మక క్లినికల్ నోట్స్ జనరేట్ చేయడానికి ఆడియో అప్‌లోడ్ లేదా రికార్డ్ చేయండి',
        patientConsent: 'రోగి అంగీకారం',
        consentSubtitle: 'రికార్డింగ్ ముందు రోగి సమాచార అంగీకారం ఇచ్చారని నిర్ధారించుకోండి',
        consentStrong: 'రోగి సమాచార అంగీకారం ఇచ్చారు',
        consentRest: 'క్లినికల్ డాక్యుమెంటేషన్ ప్రయోజనం కోసం ఈ సంప్రదింపు ఆడియో రికార్డింగ్ కోసం.',
        consultationAudio: 'సంప్రదింపు ఆడియో',
        audioSubtitle: 'ఇప్పటికే ఉన్న రికార్డింగ్ అప్‌లోడ్ చేయండి లేదా కొత్తది రికార్డ్ చేయండి',
        dragDrop: 'ఆడియో ఫైల్‌ను డ్రాగ్ & డ్రాప్ చేయండి లేదా',
        browse: 'బ్రౌజ్ చేయండి',
        uploadHint: 'MP3, WAV, M4A, OGG సపోర్ట్ (గరిష్ఠంగా 50MB)',
        or: 'లేదా',
        startRecording: 'రికార్డింగ్ ప్రారంభించండి',
        stop: 'ఆపండి',
        patientDetails: 'రోగి వివరాలు',
        optional: 'ఐచ్ఛికం',
        detailsSubtitle: 'మరింత ఖచ్చితమైన డాక్యుమెంటేషన్ కోసం అదనపు సందర్భాన్ని అందించండి',
        patientName: 'రోగి పేరు',
        patientNamePlaceholder: 'ఉదా., రాజేష్ కుమార్',
        age: 'వయసు',
        gender: 'లింగం',
        genderSelect: 'ఎంచుకోండి',
        male: 'పురుషుడు',
        female: 'స్త్రీ',
        other_gender: 'ఇతరం',
        generateNotes: 'క్లినికల్ నోట్స్ జనరేట్ చేయండి',
        analyzingConsultation: 'సంప్రదింపు విశ్లేషణ',
        generatingDocs: 'నిర్మాణాత్మక క్లినికల్ డాక్యుమెంటేషన్ జనరేట్ అవుతోంది…',
        step1: 'ఆడియో రికార్డింగ్ ట్రాన్స్‌క్రైబ్ అవుతోంది',
        step2: 'క్లినికల్ ఎంటిటీలు గుర్తించబడుతున్నాయి',
        step3: 'SOAP నోట్స్ నిర్మాణం చేయబడుతున్నాయి',
        step4: 'డాక్యుమెంటేషన్ ఫైనలైజ్ అవుతోంది',
        notesGenerated: 'క్లినికల్ నోట్స్ విజయవంతంగా జనరేట్ అయ్యాయి',
        subjective: 'సబ్జెక్టివ్',
        objective: 'ఆబ్జెక్టివ్',
        assessment: 'అంచనా',
        plan: 'ప్రణాళిక',
        downloadPDF: 'PDF డౌన్‌లోడ్',
        saveToRecords: 'రికార్డులలో సేవ్ చేయండి',
        clinicalRecords: 'క్లినికల్ రికార్డులు',
        recordsSubtitle: 'ముందుగా జనరేట్ చేసిన అన్ని క్లినికల్ డాక్యుమెంటేషన్ చూడండి',
        noRecords: 'ఇంకా రికార్డులు లేవు',
        noRecordsHint: 'జనరేట్ చేసిన క్లినికల్ నోట్స్ ఇక్కడ కనిపిస్తాయి',
        clinicalNote: 'క్లినికల్ నోట్',
        greeting_morning: 'శుభోదయం',
        greeting_afternoon: 'శుభ మధ్యాహ్నం',
        greeting_evening: 'శుభ సాయంత్రం',
        toastConsentRequired: '⚠️ దయచేసి రోగి అంగీకారాన్ని నిర్ధారించండి',
        toastAudioRequired: '⚠️ దయచేసి సంప్రదింపు ఆడియో అప్‌లోడ్ చేయండి',
        toastSaved: '✓ క్లినికల్ రికార్డులలో సేవ్ చేయబడింది',
        toastAlreadySaved: 'ఇప్పటికే రికార్డులలో సేవ్ చేయబడింది',
        toastPDFReady: '✓ PDF సిద్ధంగా ఉంది',
        soapNote: 'SOAP నోట్',
    },
    bn: {
        heroTitle: 'AI ক্লিনিক্যাল ডকুমেন্টেশন সহকারী',
        heroSubtitle: 'AI-চালিত ডকুমেন্টেশনের সাথে পরামর্শ রেকর্ডিংকে কাঠামোবদ্ধ SOAP ক্লিনিক্যাল নোটে রূপান্তর করুন।',
        heroFeature1: 'HIPAA অনুগত',
        heroFeature2: '60% সময় বাঁচান',
        heroFeature3: 'কাঠামোবদ্ধ SOAP নোটস',
        welcomeBack: 'পুনরায় স্বাগতম',
        signInSubtitle: 'আপনার ক্লিনিক্যাল ডকুমেন্টেশন কর্মক্ষেত্রে প্রবেশ করতে সাইন ইন করুন',
        fullName: 'পুরো নাম',
        fullNamePlaceholder: 'ডা. জেন স্মিথ',
        emailAddress: 'ইমেইল ঠিকানা',
        hospitalClinic: 'হাসপাতাল / ক্লিনিক',
        hospitalPlaceholder: 'সিটি জেনারেল হাসপাতাল',
        signIn: 'সাইন ইন',
        loginFooter: 'সাইন ইন করে, আপনি আমাদের সেবার শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হচ্ছেন',
        navDashboard: 'ড্যাশবোর্ড',
        navNewConsultation: 'নতুন পরামর্শ',
        navRecords: 'রেকর্ডস',
        dashboardSubtitle: 'আপনার পরামর্শ এবং ক্লিনিক্যাল ডকুমেন্টেশন পরিচালনা করুন',
        startNewConsultation: 'নতুন পরামর্শ শুরু করুন',
        totalNotes: 'মোট নোটস',
        today: 'আজ',
        avgGeneration: 'গড় জেনারেশন',
        consentRate: 'সম্মতি হার',
        recentClinicalNotes: 'সাম্প্রতিক ক্লিনিক্যাল নোটস',
        viewAll: 'সব দেখুন',
        noNotesYet: 'এখনও কোনো ক্লিনিক্যাল নোট নেই',
        noNotesHint: 'আপনার প্রথম SOAP নোট তৈরি করতে নতুন পরামর্শ শুরু করুন',
        newConsultation: 'নতুন পরামর্শ',
        newConsultationSub: 'কাঠামোবদ্ধ ক্লিনিক্যাল নোট তৈরি করতে অডিও আপলোড বা রেকর্ড করুন',
        patientConsent: 'রোগীর সম্মতি',
        consentSubtitle: 'রেকর্ডিংয়ের আগে রোগী সচেতন সম্মতি দিয়েছেন তা নিশ্চিত করুন',
        consentStrong: 'রোগী সচেতন সম্মতি দিয়েছেন',
        consentRest: 'ক্লিনিক্যাল ডকুমেন্টেশনের উদ্দেশ্যে এই পরামর্শের অডিও রেকর্ডিংয়ের জন্য।',
        consultationAudio: 'পরামর্শ অডিও',
        audioSubtitle: 'বিদ্যমান রেকর্ডিং আপলোড করুন বা নতুন পরামর্শ রেকর্ড করুন',
        dragDrop: 'অডিও ফাইল টেনে আনুন বা',
        browse: 'ব্রাউজ করুন',
        uploadHint: 'MP3, WAV, M4A, OGG সমর্থিত (সর্বোচ্চ 50MB)',
        or: 'অথবা',
        startRecording: 'রেকর্ডিং শুরু করুন',
        stop: 'থামুন',
        patientDetails: 'রোগীর বিবরণ',
        optional: 'ঐচ্ছিক',
        detailsSubtitle: 'আরও সঠিক ডকুমেন্টেশনের জন্য অতিরিক্ত প্রসঙ্গ প্রদান করুন',
        patientName: 'রোগীর নাম',
        patientNamePlaceholder: 'যেমন, রাজেশ কুমার',
        age: 'বয়স',
        gender: 'লিঙ্গ',
        genderSelect: 'নির্বাচন করুন',
        male: 'পুরুষ',
        female: 'মহিলা',
        other_gender: 'অন্যান্য',
        generateNotes: 'ক্লিনিক্যাল নোটস তৈরি করুন',
        analyzingConsultation: 'পরামর্শ বিশ্লেষণ',
        generatingDocs: 'কাঠামোবদ্ধ ক্লিনিক্যাল ডকুমেন্টেশন তৈরি হচ্ছে…',
        step1: 'অডিও রেকর্ডিং ট্রান্সক্রাইব হচ্ছে',
        step2: 'ক্লিনিক্যাল এন্টিটি চিহ্নিত হচ্ছে',
        step3: 'SOAP নোটস গঠন করা হচ্ছে',
        step4: 'ডকুমেন্টেশন চূড়ান্ত করা হচ্ছে',
        notesGenerated: 'ক্লিনিক্যাল নোটস সফলভাবে তৈরি হয়েছে',
        subjective: 'সাবজেক্টিভ',
        objective: 'অবজেক্টিভ',
        assessment: 'মূল্যায়ন',
        plan: 'পরিকল্পনা',
        downloadPDF: 'PDF ডাউনলোড',
        saveToRecords: 'রেকর্ডসে সংরক্ষণ করুন',
        clinicalRecords: 'ক্লিনিক্যাল রেকর্ডস',
        recordsSubtitle: 'পূর্বে তৈরি সমস্ত ক্লিনিক্যাল ডকুমেন্টেশন দেখুন',
        noRecords: 'এখনও কোনো রেকর্ড নেই',
        noRecordsHint: 'তৈরি করা ক্লিনিক্যাল নোটস এখানে দেখা যাবে',
        clinicalNote: 'ক্লিনিক্যাল নোট',
        greeting_morning: 'সুপ্রভাত',
        greeting_afternoon: 'শুভ অপরাহ্ন',
        greeting_evening: 'শুভ সন্ধ্যা',
        toastConsentRequired: '⚠️ অনুগ্রহ করে রোগীর সম্মতি নিশ্চিত করুন',
        toastAudioRequired: '⚠️ অনুগ্রহ করে পরামর্শ অডিও আপলোড করুন',
        toastSaved: '✓ ক্লিনিক্যাল রেকর্ডসে সংরক্ষিত',
        toastAlreadySaved: 'ইতিমধ্যে রেকর্ডসে সংরক্ষিত',
        toastPDFReady: '✓ PDF প্রস্তুত',
        soapNote: 'SOAP নোট',
    },
    mr: {
        heroTitle: 'AI क्लिनिकल डॉक्युमेंटेशन सहाय्यक',
        heroSubtitle: 'AI-संचालित डॉक्युमेंटेशनसह सल्लामसलत रेकॉर्डिंगचे संरचित SOAP क्लिनिकल नोट्समध्ये रूपांतर करा.',
        heroFeature1: 'HIPAA अनुपालन',
        heroFeature2: '60% वेळ वाचवा',
        heroFeature3: 'संरचित SOAP नोट्स',
        welcomeBack: 'पुन्हा स्वागत आहे',
        signInSubtitle: 'तुमच्या क्लिनिकल डॉक्युमेंटेशन कार्यक्षेत्रात प्रवेश करण्यासाठी साइन इन करा',
        fullName: 'पूर्ण नाव',
        fullNamePlaceholder: 'डॉ. जेन स्मिथ',
        emailAddress: 'ईमेल पत्ता',
        hospitalClinic: 'रुग्णालय / क्लिनिक',
        hospitalPlaceholder: 'सिटी जनरल रुग्णालय',
        signIn: 'साइन इन करा',
        loginFooter: 'साइन इन करून, तुम्ही आमच्या सेवा अटी आणि गोपनीयता धोरणाशी सहमत आहात',
        navDashboard: 'डॅशबोर्ड',
        navNewConsultation: 'नवीन सल्लामसलत',
        navRecords: 'रेकॉर्ड्स',
        dashboardSubtitle: 'तुमच्या सल्लामसलत आणि क्लिनिकल डॉक्युमेंटेशन व्यवस्थापित करा',
        startNewConsultation: 'नवीन सल्लामसलत सुरू करा',
        totalNotes: 'एकूण नोट्स',
        today: 'आज',
        avgGeneration: 'सरासरी जनरेशन',
        consentRate: 'संमती दर',
        recentClinicalNotes: 'अलीकडील क्लिनिकल नोट्स',
        viewAll: 'सर्व पहा',
        noNotesYet: 'अजून कोणत्याही क्लिनिकल नोट्स नाहीत',
        noNotesHint: 'तुमचा पहिला SOAP नोट तयार करण्यासाठी नवीन सल्लामसलत सुरू करा',
        newConsultation: 'नवीन सल्लामसलत',
        newConsultationSub: 'संरचित क्लिनिकल नोट्स तयार करण्यासाठी ऑडिओ अपलोड किंवा रेकॉर्ड करा',
        patientConsent: 'रुग्णाची संमती',
        consentSubtitle: 'रेकॉर्डिंगपूर्वी रुग्णाने माहितीपूर्ण संमती दिली आहे याची खात्री करा',
        consentStrong: 'रुग्णाने माहितीपूर्ण संमती दिली आहे',
        consentRest: 'क्लिनिकल डॉक्युमेंटेशनसाठी या सल्लामसलतीच्या ऑडिओ रेकॉर्डिंगसाठी.',
        consultationAudio: 'सल्लामसलत ऑडिओ',
        audioSubtitle: 'विद्यमान रेकॉर्डिंग अपलोड करा किंवा नवीन सल्लामसलत रेकॉर्ड करा',
        dragDrop: 'ऑडिओ फाइल ड्रॅग & ड्रॉप करा किंवा',
        browse: 'ब्राउज करा',
        uploadHint: 'MP3, WAV, M4A, OGG समर्थित (कमाल 50MB)',
        or: 'किंवा',
        startRecording: 'रेकॉर्डिंग सुरू करा',
        stop: 'थांबा',
        patientDetails: 'रुग्ण तपशील',
        optional: 'पर्यायी',
        detailsSubtitle: 'अधिक अचूक डॉक्युमेंटेशनसाठी अतिरिक्त संदर्भ प्रदान करा',
        patientName: 'रुग्णाचे नाव',
        patientNamePlaceholder: 'उदा., राजेश कुमार',
        age: 'वय',
        gender: 'लिंग',
        genderSelect: 'निवडा',
        male: 'पुरुष',
        female: 'महिला',
        other_gender: 'इतर',
        generateNotes: 'क्लिनिकल नोट्स तयार करा',
        analyzingConsultation: 'सल्लामसलत विश्लेषण',
        generatingDocs: 'संरचित क्लिनिकल डॉक्युमेंटेशन तयार होत आहे…',
        step1: 'ऑडिओ रेकॉर्डिंग ट्रान्सक्राइब होत आहे',
        step2: 'क्लिनिकल एंटिटी ओळखल्या जात आहेत',
        step3: 'SOAP नोट्स संरचित होत आहेत',
        step4: 'डॉक्युमेंटेशन अंतिम स्वरूप दिले जात आहे',
        notesGenerated: 'क्लिनिकल नोट्स यशस्वीरित्या तयार झाल्या',
        subjective: 'सब्जेक्टिव्ह',
        objective: 'ऑब्जेक्टिव्ह',
        assessment: 'मूल्यांकन',
        plan: 'योजना',
        downloadPDF: 'PDF डाउनलोड करा',
        saveToRecords: 'रेकॉर्ड्समध्ये सेव्ह करा',
        clinicalRecords: 'क्लिनिकल रेकॉर्ड्स',
        recordsSubtitle: 'पूर्वी तयार केलेले सर्व क्लिनिकल डॉक्युमेंटेशन पहा',
        noRecords: 'अजून कोणतेही रेकॉर्ड नाहीत',
        noRecordsHint: 'तयार केलेले क्लिनिकल नोट्स येथे दिसतील',
        clinicalNote: 'क्लिनिकल नोट',
        greeting_morning: 'सुप्रभात',
        greeting_afternoon: 'नमस्कार',
        greeting_evening: 'शुभ संध्याकाळ',
        toastConsentRequired: '⚠️ कृपया रुग्णाच्या संमतीची पुष्टी करा',
        toastAudioRequired: '⚠️ कृपया सल्लामसलत ऑडिओ अपलोड करा',
        toastSaved: '✓ क्लिनिकल रेकॉर्ड्समध्ये सेव्ह केले',
        toastAlreadySaved: 'आधीच रेकॉर्ड्समध्ये सेव्ह आहे',
        toastPDFReady: '✓ PDF तयार आहे',
        soapNote: 'SOAP नोट',
    }
};

const langLabelsShort = { en: 'EN', hi: 'HI', ta: 'TA', te: 'TE', bn: 'BN', mr: 'MR' };
const langLabelsFull = { en: 'English', hi: 'हिन्दी', ta: 'தமிழ்', te: 'తెలుగు', bn: 'বাংলা', mr: 'मराठी' };

// ===== i18n ENGINE =====
let currentLang = localStorage.getItem('appLang') || 'en';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = t(key);
        if (val) el.placeholder = val;
    });
    // Update language menu active states
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    // Update lang button labels
    const loginLabel = document.getElementById('login-lang-label');
    const navLabel = document.getElementById('nav-lang-label');
    if (loginLabel) loginLabel.textContent = langLabelsFull[currentLang];
    if (navLabel) navLabel.textContent = langLabelsShort[currentLang];

    // Re-render welcome message if logged in
    if (state.doctor) {
        const drPrefix = state.doctor.name.toLowerCase().startsWith('dr') ? '' : 'Dr. ';
        document.getElementById('welcome-msg').textContent = `${t('greeting_' + getGreetingKey())}, ${drPrefix}${state.doctor.name}`;
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    applyTranslations();
    // Re-render dynamic content
    if (state.doctor) {
        renderRecentNotes();
        renderRecords();
    }
}

// ===== LANGUAGE DROPDOWN LOGIC =====
function setupLangDropdown(btnId, menuId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other menus
        document.querySelectorAll('.lang-menu.open').forEach(m => {
            if (m !== menu) m.classList.remove('open');
        });
        menu.classList.toggle('open');
    });

    menu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
            menu.classList.remove('open');
        });
    });
}

document.addEventListener('click', () => {
    document.querySelectorAll('.lang-menu.open').forEach(m => m.classList.remove('open'));
});

setupLangDropdown('login-lang-btn', 'login-lang-menu');
setupLangDropdown('nav-lang-btn', 'nav-lang-menu');

// ===== STATE =====
const state = {
    doctor: null,
    records: JSON.parse(localStorage.getItem('clinicalRecords') || '[]'),
    currentNote: null,
    audioFile: null,
    isRecording: false,
    recordingTimer: null,
    recordingSeconds: 0,
};

// ===== MOCK SOAP DATA =====
const mockCases = [
    {
        subjective: `Patient is a 45-year-old male presenting with a 3-day history of persistent cough with yellowish sputum production. Reports associated mild-grade fever (self-measured 100.2°F) and general malaise. Denies hemoptysis, chest pain, or shortness of breath at rest. Reports mild exertional dyspnea when climbing stairs. No recent travel history. No known sick contacts. Non-smoker. No known drug allergies.\n\nPast Medical History: Hypertension (on Amlodipine 5mg daily). No history of asthma or COPD.`,
        objective: `Vitals:\n• Temperature: 100.4°F (38°C)\n• Blood Pressure: 132/84 mmHg\n• Heart Rate: 88 bpm\n• Respiratory Rate: 20 breaths/min\n• SpO2: 96% on room air\n\nGeneral: Alert, oriented, appears mildly fatigued. No acute distress.\n\nENT: Mild pharyngeal erythema. No tonsillar exudate or cervical lymphadenopathy.\n\nChest: Bilateral air entry present. Scattered rhonchi heard over right lower zone. No wheezing or crackles. No dullness to percussion.\n\nCVS: S1, S2 normal. No murmurs.\n\nAbdomen: Soft, non-tender, no organomegaly.`,
        assessment: `1. Acute bronchitis — likely viral etiology with secondary bacterial superinfection suggested by purulent sputum and low-grade fever.\n2. Hypertension — controlled on current medication.\n\nDifferential Diagnoses:\n• Community-acquired pneumonia (less likely given normal SpO2 and no focal consolidation)\n• Post-nasal drip syndrome\n• Early COVID-19 / Influenza (to be ruled out)`,
        plan: `Investigations:\n• Complete Blood Count (CBC) with differential\n• Chest X-ray PA view\n• COVID-19 Rapid Antigen Test\n• CRP (C-Reactive Protein)\n\nMedications:\n• Tab. Amoxicillin-Clavulanate 625mg — 1 tablet TID × 5 days\n• Tab. Paracetamol 650mg — SOS for fever (max 3 times/day)\n• Syp. Ambrodil-S — 10ml TID × 5 days (for cough)\n• Continue Amlodipine 5mg OD\n\nAdvice:\n• Adequate hydration (2-3 liters/day)\n• Steam inhalation twice daily\n• Rest for 2-3 days\n• Follow-up in 5 days or sooner if symptoms worsen\n• Return immediately if high fever (>102°F), breathlessness, or hemoptysis`
    },
    {
        subjective: `Patient is a 32-year-old female presenting with recurrent episodes of headache over the past 2 weeks. Describes the pain as throbbing, predominantly right-sided, moderate to severe intensity (7/10 on pain scale). Episodes last 4-6 hours. Associated with photophobia, phonophobia, and occasional nausea. No vomiting. Reports increased stress at work and irregular sleep schedule. No visual aura or focal neurological symptoms. No recent head trauma.\n\nPast Medical History: No significant past medical history. Not on any regular medications. LMP: 10 days ago (regular cycles).`,
        objective: `Vitals:\n• Temperature: 98.4°F (36.9°C)\n• Blood Pressure: 118/76 mmHg\n• Heart Rate: 74 bpm\n• Respiratory Rate: 16 breaths/min\n\nGeneral: Well-appearing, no acute distress. Appears mildly anxious.\n\nNeuro Exam:\n• Cranial nerves II-XII intact\n• Pupils equal, round, reactive to light\n• No papilledema on fundoscopy\n• Motor strength 5/5 in all extremities\n• Deep tendon reflexes 2+ bilaterally\n• No neck stiffness or Kernig's sign\n• Gait normal\n\nENT: No sinus tenderness. TM normal bilaterally.`,
        assessment: `1. Migraine without aura — episodic, meeting ICHD-3 diagnostic criteria.\n2. Stress-related trigger — occupational stress, sleep deprivation identified as contributing factors.\n\nDifferential Diagnoses:\n• Tension-type headache (less likely given unilateral, throbbing nature)\n• Sinusitis (no sinus tenderness or nasal symptoms)\n• Intracranial pathology (unlikely given normal neurological exam)`,
        plan: `Investigations:\n• No imaging indicated at this time (normal neurological exam, classical migraine features)\n• Headache diary to be maintained for 4 weeks\n\nMedications:\n• Acute: Tab. Sumatriptan 50mg — at onset of headache (may repeat once after 2 hours, max 200mg/day)\n• Tab. Domperidone 10mg — for nausea (as needed)\n• Preventive (if >4 episodes/month): to be reassessed at follow-up\n\nAdvice:\n• Sleep hygiene: maintain regular sleep schedule (7-8 hours)\n• Stress management: consider relaxation techniques, yoga, or meditation\n• Avoid known triggers: bright lights, loud noise, skipped meals\n• Limit screen time, especially before sleep\n• Maintain headache diary (frequency, duration, triggers, medications used)\n• Follow-up in 4 weeks with headache diary\n• Return sooner if headache changes in character, sudden severe "thunderclap" headache, or any neurological symptoms`
    },
    {
        subjective: `Patient is a 58-year-old male presenting with complaints of increased thirst (polydipsia) and frequent urination (polyuria) for the past 4 weeks. Reports increased appetite but unintentional weight loss of approximately 4 kg over the past month. Also complains of tingling sensation in both feet for the past 2 weeks. Denies any visual changes or wounds. Family history significant for Type 2 Diabetes Mellitus (mother and elder brother).\n\nPast Medical History: Dyslipidemia (diagnosed 2 years ago, not on medication). BMI: 28.5 (overweight).`,
        objective: `Vitals:\n• Temperature: 98.2°F (36.8°C)\n• Blood Pressure: 140/88 mmHg\n• Heart Rate: 80 bpm\n• Respiratory Rate: 16 breaths/min\n• Weight: 82 kg, Height: 170 cm, BMI: 28.4\n\nGeneral: Overweight male, well-oriented, no acute distress.\n\nPoint-of-Care Testing:\n• Random Blood Glucose: 286 mg/dL\n\nExamination:\n• Eyes: No diabetic retinopathy changes on direct ophthalmoscopy\n• CVS: S1, S2 normal, no murmurs\n• Chest: Clear, bilateral air entry\n• Abdomen: Soft, no organomegaly\n• Feet: Sensation mildly reduced to monofilament testing bilaterally in stocking distribution. Pedal pulses palpable. No ulcers or calluses. Skin intact.`,
        assessment: `1. New-onset Type 2 Diabetes Mellitus — presenting with classic triad (polydipsia, polyuria, weight loss) and random blood glucose >200 mg/dL.\n2. Early diabetic peripheral neuropathy — tingling and reduced monofilament sensation.\n3. Hypertension — Stage 1 (newly detected)\n4. Dyslipidemia — previously known, untreated.\n5. Overweight (BMI 28.4)`,
        plan: `Investigations:\n• Fasting Blood Glucose + Post-Prandial Blood Glucose\n• HbA1c (Glycated Hemoglobin)\n• Fasting Lipid Profile\n• Serum Creatinine + eGFR\n• Urine Routine + Microalbuminuria\n• Liver Function Tests\n• Thyroid Profile (TSH)\n• ECG\n• Dilated fundoscopy by ophthalmologist\n\nMedications:\n• Tab. Metformin 500mg — 1 tablet BD with meals (to be titrated)\n• Tab. Telmisartan 40mg — 1 tablet OD for hypertension\n• Tab. Methylcobalamin 1500mcg — 1 tablet OD for neuropathy\n• Tab. Atorvastatin 10mg — 1 tablet HS for dyslipidemia\n\nAdvice:\n• Diabetic diet counseling (low glycemic index foods, reduce refined carbohydrates)\n• Regular exercise: 30 minutes brisk walking, at least 5 days/week\n• Weight reduction target: 5-7% over 6 months\n• Self-monitoring of blood glucose as directed\n• Foot care education: daily foot inspection, proper footwear, avoid walking barefoot\n• Avoid smoking and excessive alcohol\n• Follow-up in 2 weeks with investigation reports\n• Diabetes educator session scheduled\n• Ophthalmology referral for dilated fundus examination`
    },
    {
        subjective: `Patient is a 28-year-old female presenting with complaints of pain and burning during urination (dysuria) for the past 2 days. Reports increased frequency of urination with urgency. Noticed mild lower abdominal discomfort. Denies fever, flank pain, vaginal discharge, or hematuria. Sexually active (single partner). Last menstrual period was 2 weeks ago (regular). No history of recurrent UTIs.\n\nPast Medical History: No significant past illness. No known drug allergies.`,
        objective: `Vitals:\n• Temperature: 98.8°F (37.1°C)\n• Blood Pressure: 116/72 mmHg\n• Heart Rate: 76 bpm\n\nGeneral: Comfortable, no acute distress.\n\nAbdomen: Soft, mild suprapubic tenderness on palpation. No rebound or guarding. No costovertebral angle tenderness bilaterally.\n\nPoint-of-Care Testing:\n• Urine dipstick: Nitrites (+), Leukocyte esterase (++), Blood (trace), Protein (−), Glucose (−)`,
        assessment: `1. Uncomplicated lower urinary tract infection (acute cystitis) — supported by dysuria, frequency, urgency, positive urine dipstick (nitrites, leukocyte esterase), and absence of systemic symptoms.\n\nDifferential Diagnoses:\n• Vaginitis (no discharge, less likely)\n• STI-related urethritis (to consider if symptoms persist)\n• Interstitial cystitis (unlikely given acute onset)`,
        plan: `Investigations:\n• Urine Culture and Sensitivity (mid-stream clean-catch sample — collected before starting antibiotics)\n\nMedications:\n• Tab. Nitrofurantoin 100mg — 1 tablet BD × 5 days (with food)\n• Tab. Paracetamol 500mg — SOS for discomfort\n\nAdvice:\n• Increase oral fluid intake (2.5-3 liters/day)\n• Urinate frequently, do not hold urine\n• Void after sexual intercourse\n• Wipe front to back after toileting\n• Avoid irritants (caffeine, alcohol, spicy food) during treatment\n• Complete full course of antibiotics even if symptoms improve\n• Follow-up if symptoms persist after 48 hours or worsen\n• Return immediately if fever, flank pain, or vomiting develop`
    },
    {
        subjective: `Patient is a 7-year-old male brought by mother with complaints of sore throat and difficulty swallowing for the past 2 days. Mother reports the child has had a fever up to 102°F since yesterday. Child is refusing to eat solid food, preferring liquids only. Reports mild abdominal pain (likely related to nausea). No cough, runny nose, or rash. One classmate was recently diagnosed with strep throat.\n\nPast Medical History: No significant past medical history. Immunizations up-to-date. No known drug allergies.`,
        objective: `Vitals:\n• Temperature: 101.8°F (38.8°C)\n• Heart Rate: 108 bpm (appropriate for fever)\n• Respiratory Rate: 22 breaths/min\n• Weight: 24 kg\n\nGeneral: Child appears mildly ill but alert and interactive. Mild dehydration (slightly dry lips).\n\nENT:\n• Throat: Tonsillar erythema bilaterally with white-yellowish exudate on both tonsils\n• Petechiae on soft palate noted\n• Bilateral anterior cervical lymphadenopathy (tender, ~1.5 cm)\n\nChest: Clear, no adventitious sounds.\nAbdomen: Soft, mild periumbilical tenderness, no organomegaly.\nSkin: No rash.`,
        assessment: `1. Acute tonsillopharyngitis — likely Group A Streptococcal (GAS) infection given exudative tonsillitis, fever, anterior lymphadenopathy, palatal petechiae, absence of cough (Centor score modified for age: 5/5).\n\nDifferential Diagnoses:\n• Viral pharyngitis (less likely given absence of coryza and presence of exudate)\n• Infectious mononucleosis (possible, but acute presentation favors GAS)\n• Peritonsillar abscess (no trismus or uvular deviation)`,
        plan: `Investigations:\n• Rapid Antigen Detection Test (RADT) for Group A Streptococcus\n• Throat culture (if RADT negative)\n\nMedications:\n• Syp. Amoxicillin 250mg/5ml — 7.5ml (375mg) BD × 10 days\n• Syp. Ibuprofen 100mg/5ml — 5ml (200mg) TID for fever and pain × 3 days\n• Betadine gargle (diluted) — TID × 5 days\n\nAdvice:\n• Soft, cool foods (yogurt, ice cream, mashed foods)\n• Adequate fluid intake — encourage water, ORS, cold liquids\n• Rest at home, avoid school for at least 24 hours after starting antibiotics\n• Complete full 10-day course of antibiotics (critical for preventing rheumatic fever)\n• Paracetamol may be alternated with Ibuprofen if fever is persistent\n• Follow-up in 3 days or sooner if symptoms worsen\n• Return immediately if drooling, inability to swallow, difficulty breathing, or neck stiffness`
    }
];

const patientNames = [
    'Rajesh Kumar', 'Anita Sharma', 'Mohammed Ali', 'Priya Patel',
    'Suresh Reddy', 'Fatima Begum', 'Arjun Singh', 'Kavita Nair',
    'Arun Mehta', 'Sneha Gupta', 'Deepak Verma', 'Lakshmi Iyer'
];

// ===== DOM REFERENCES =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== NAVIGATION =====
function showPage(pageId) {
    $$('.page').forEach(p => p.classList.remove('active'));
    $(`#${pageId}`).classList.add('active');
}

function showView(viewId) {
    $$('.view').forEach(v => v.classList.remove('active'));
    $(`#view-${viewId}`).classList.add('active');
    $$('.nav-link').forEach(l => l.classList.remove('active'));
    const navBtn = $(`[data-nav="${viewId}"]`);
    if (navBtn) navBtn.classList.add('active');
}

function showToast(msg) {
    $('#toast-msg').textContent = msg;
    $('#toast').classList.add('show');
    setTimeout(() => $('#toast').classList.remove('show'), 3000);
}

// ===== GREETING =====
function getGreetingKey() {
    const h = new Date().getHours();
    if (h < 12) return 'morning';
    if (h < 17) return 'afternoon';
    return 'evening';
}

// ===== LOGIN =====
$('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#doctor-name').value.trim();
    const email = $('#doctor-email').value.trim();
    const hospital = $('#hospital-name').value.trim();
    if (!name || !email || !hospital) return;

    state.doctor = { name, email, hospital };
    localStorage.setItem('doctorInfo', JSON.stringify(state.doctor));
    initApp();
});

function initApp() {
    const d = state.doctor;
    const initials = d.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    $('#nav-avatar').textContent = initials;
    $('#nav-user-name').textContent = d.name;
    $('#nav-user-hospital').textContent = d.hospital;

    const drPrefix = d.name.toLowerCase().startsWith('dr') ? '' : 'Dr. ';
    $('#welcome-msg').textContent = `${t('greeting_' + getGreetingKey())}, ${drPrefix}${d.name}`;

    updateDashboardStats();
    renderRecentNotes();
    renderRecords();
    applyTranslations();

    showPage('app-shell');
    showView('dashboard');
}

// ===== LOGOUT =====
$('#logout-btn').addEventListener('click', () => {
    state.doctor = null;
    localStorage.removeItem('doctorInfo');
    showPage('page-login');
    $('#login-form').reset();
});

// ===== DASHBOARD =====
function updateDashboardStats() {
    const total = state.records.length;
    const today = state.records.filter(r => new Date(r.date).toDateString() === new Date().toDateString()).length;
    $('#stat-total').textContent = total;
    $('#stat-today').textContent = today;
}

function renderRecentNotes() {
    const container = $('#recent-notes-list');
    if (state.records.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon-wrap"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                <p>${t('noNotesYet')}</p>
                <span>${t('noNotesHint')}</span>
            </div>`;
        return;
    }
    container.innerHTML = state.records.slice(-5).reverse().map(r => noteItemHTML(r)).join('');
}

function renderRecords() {
    const container = $('#records-list');
    if (state.records.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon-wrap"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg></div>
                <p>${t('noRecords')}</p>
                <span>${t('noRecordsHint')}</span>
            </div>`;
        return;
    }
    container.innerHTML = [...state.records].reverse().map(r => noteItemHTML(r)).join('');
}

function noteItemHTML(record) {
    const d = new Date(record.date);
    const dateStr = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    return `
        <div class="note-item" onclick="viewNote('${record.id}')">
            <div class="note-item-left">
                <div class="note-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                </div>
                <div class="note-details">
                    <div class="note-title">${t('soapNote')} — ${record.patientName || 'Patient'}</div>
                    <div class="note-meta">${dateStr} at ${timeStr}${record.patientAge ? ' • Age: ' + record.patientAge : ''}</div>
                </div>
            </div>
            <div class="note-actions">
                <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); downloadNotePDF('${record.id}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    PDF
                </button>
            </div>
        </div>`;
}

// ===== VIEW NOTE MODAL =====
window.viewNote = function(id) {
    const record = state.records.find(r => r.id === id);
    if (!record) return;
    state.currentModalNote = record;
    const d = new Date(record.date);
    const dateStr = d.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });

    $('#modal-body').innerHTML = `
        <div style="margin-bottom:16px;">
            <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:4px;">${dateStr} • ${record.patientName || 'Patient'}${record.patientAge ? ' • Age ' + record.patientAge : ''}${record.patientGender ? ' • ' + record.patientGender : ''}</div>
        </div>
        <div class="soap-container">
            <div class="soap-section soap-subjective"><div class="soap-label">S</div><div class="soap-content"><h3>${t('subjective')}</h3><p>${record.soap.subjective}</p></div></div>
            <div class="soap-section soap-objective"><div class="soap-label">O</div><div class="soap-content"><h3>${t('objective')}</h3><p>${record.soap.objective}</p></div></div>
            <div class="soap-section soap-assessment"><div class="soap-label">A</div><div class="soap-content"><h3>${t('assessment')}</h3><p>${record.soap.assessment}</p></div></div>
            <div class="soap-section soap-plan"><div class="soap-label">P</div><div class="soap-content"><h3>${t('plan')}</h3><p>${record.soap.plan}</p></div></div>
        </div>`;
    $('#modal-overlay').classList.add('open');
};

$('#modal-close').addEventListener('click', () => $('#modal-overlay').classList.remove('open'));
$('#modal-overlay').addEventListener('click', (e) => { if (e.target === $('#modal-overlay')) $('#modal-overlay').classList.remove('open'); });
$('#modal-download-pdf').addEventListener('click', () => { if (state.currentModalNote) downloadNotePDF(state.currentModalNote.id); });

// ===== NAVIGATION BUTTONS =====
$('#btn-new-consultation').addEventListener('click', () => { resetConsultationForm(); showView('new-consultation'); });
$('#btn-view-all-records').addEventListener('click', () => showView('records'));

$$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const view = link.dataset.nav;
        if (view === 'new-consultation') resetConsultationForm();
        showView(view);
    });
});

// ===== CONSULTATION FORM =====
function resetConsultationForm() {
    $('#consent-checkbox').checked = false;
    $('#audio-file-input').value = '';
    $('#file-selected').style.display = 'none';
    $('#upload-zone').style.display = '';
    $('#patient-name').value = '';
    $('#patient-age').value = '';
    $('#patient-gender').value = '';
    state.audioFile = null;
    stopRecording();
}

// Upload zone
const uploadZone = $('#upload-zone');
uploadZone.addEventListener('click', () => $('#audio-file-input').click());
uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('dragover'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
uploadZone.addEventListener('drop', (e) => {
    e.preventDefault(); uploadZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio')) handleAudioFile(file);
});

$('#audio-file-input').addEventListener('change', (e) => { if (e.target.files[0]) handleAudioFile(e.target.files[0]); });

function handleAudioFile(file) {
    state.audioFile = file;
    $('#file-name').textContent = file.name;
    $('#file-selected').style.display = 'flex';
    uploadZone.style.display = 'none';
}

$('#btn-remove-file').addEventListener('click', () => {
    state.audioFile = null;
    $('#audio-file-input').value = '';
    $('#file-selected').style.display = 'none';
    uploadZone.style.display = '';
});

// Recording
$('#btn-record').addEventListener('click', startRecording);
$('#btn-stop-record').addEventListener('click', stopRecording);

function startRecording() {
    state.isRecording = true;
    state.recordingSeconds = 0;
    $('#btn-record').style.display = 'none';
    $('#recording-indicator').style.display = 'flex';
    state.recordingTimer = setInterval(() => {
        state.recordingSeconds++;
        const mins = String(Math.floor(state.recordingSeconds / 60)).padStart(2, '0');
        const secs = String(state.recordingSeconds % 60).padStart(2, '0');
        $('#recording-time').textContent = `${mins}:${secs}`;
    }, 1000);
}

function stopRecording() {
    if (!state.isRecording) return;
    state.isRecording = false;
    clearInterval(state.recordingTimer);
    $('#btn-record').style.display = '';
    $('#recording-indicator').style.display = 'none';
    if (state.recordingSeconds > 0) {
        state.audioFile = { name: `recording_${Date.now()}.wav`, size: state.recordingSeconds * 16000, type: 'audio/wav', simulated: true };
        $('#file-name').textContent = state.audioFile.name;
        $('#file-selected').style.display = 'flex';
        uploadZone.style.display = 'none';
    }
    state.recordingSeconds = 0;
    $('#recording-time').textContent = '00:00';
}

// Generate
$('#btn-generate').addEventListener('click', () => {
    if (!$('#consent-checkbox').checked) {
        showToast(t('toastConsentRequired'));
        $('#consent-card').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    if (!state.audioFile) {
        showToast(t('toastAudioRequired'));
        $('#audio-card').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    startProcessing();
});

// ===== PROCESSING =====
function startProcessing() {
    showView('processing');
    $$('.processing-step').forEach(s => { s.classList.remove('active', 'done'); });
    $('#progress-bar').style.width = '0%';

    const steps = ['pstep-1', 'pstep-2', 'pstep-3', 'pstep-4'];
    let current = 0;

    function advanceStep() {
        if (current > 0) {
            $(`#${steps[current - 1]}`).classList.remove('active');
            $(`#${steps[current - 1]}`).classList.add('done');
        }
        if (current < steps.length) {
            $(`#${steps[current]}`).classList.add('active');
            $('#progress-bar').style.width = `${((current + 1) / steps.length) * 100}%`;
            current++;
            setTimeout(advanceStep, 1200 + Math.random() * 800);
        } else {
            $('#progress-bar').style.width = '100%';
            setTimeout(showResults, 600);
        }
    }
    setTimeout(advanceStep, 500);
}

// ===== RESULTS =====
function showResults() {
    const mockCase = mockCases[Math.floor(Math.random() * mockCases.length)];
    const patientName = $('#patient-name').value.trim() || patientNames[Math.floor(Math.random() * patientNames.length)];
    const patientAge = $('#patient-age').value.trim() || String(Math.floor(Math.random() * 50) + 15);
    const patientGender = $('#patient-gender').value || ['male', 'female'][Math.floor(Math.random() * 2)];

    const note = {
        id: 'note_' + Date.now(),
        date: new Date().toISOString(),
        patientName, patientAge, patientGender,
        soap: { ...mockCase }
    };
    state.currentNote = note;

    const d = new Date(note.date);
    $('#results-date').textContent = d.toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    $('#results-patient').textContent = `${patientName}${patientAge ? ', Age ' + patientAge : ''}${patientGender ? ' (' + patientGender.charAt(0).toUpperCase() + patientGender.slice(1) + ')' : ''}`;

    $('#soap-subjective').textContent = note.soap.subjective;
    $('#soap-objective').textContent = note.soap.objective;
    $('#soap-assessment').textContent = note.soap.assessment;
    $('#soap-plan').textContent = note.soap.plan;

    showView('results');
}

// ===== RESULT ACTIONS =====
$('#btn-download-pdf').addEventListener('click', () => { if (state.currentNote) generatePDF(state.currentNote); });

$('#btn-save-records').addEventListener('click', () => {
    if (!state.currentNote) return;
    if (state.records.find(r => r.id === state.currentNote.id)) { showToast(t('toastAlreadySaved')); return; }
    state.records.push(state.currentNote);
    localStorage.setItem('clinicalRecords', JSON.stringify(state.records));
    updateDashboardStats();
    renderRecentNotes();
    renderRecords();
    showToast(t('toastSaved'));
});

$('#btn-new-after-result').addEventListener('click', () => { resetConsultationForm(); showView('new-consultation'); });

// ===== PDF GENERATION =====
function generatePDF(note) {
    const d = new Date(note.date);
    const dateStr = d.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    const content = `<!DOCTYPE html><html><head><style>
body{font-family:'Segoe UI',Arial,sans-serif;padding:40px;color:#1e293b;line-height:1.6;max-width:800px;margin:0 auto}
.header{border-bottom:3px solid #0066FF;padding-bottom:16px;margin-bottom:24px}
.header h1{color:#0066FF;font-size:22px;margin:0 0 4px}
.header p{color:#64748b;font-size:13px;margin:0}
.meta{background:#f8fafc;border-radius:8px;padding:14px 18px;margin-bottom:24px;font-size:13px;color:#475569}
.meta strong{color:#1e293b}
.section{margin-bottom:20px}
.section-title{font-size:15px;font-weight:700;padding:8px 14px;border-radius:6px;margin-bottom:10px;display:inline-block}
.s-title{background:#eff6ff;color:#3b82f6}.o-title{background:#ecfdf5;color:#10b981}
.a-title{background:#fef3c7;color:#d97706}.p-title{background:#f3e8ff;color:#8b5cf6}
.section-body{font-size:14px;color:#334155;white-space:pre-line;padding-left:4px}
.footer{margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center}
@media print{body{padding:20px}}
</style></head><body>
<div class="header"><h1>Clinical Documentation — SOAP Note</h1>
<p>Generated by AI Clinical Documentation Assistant${state.doctor ? ' • ' + state.doctor.hospital : ''}</p></div>
<div class="meta"><strong>Patient:</strong> ${note.patientName || 'N/A'} | <strong>Age:</strong> ${note.patientAge || 'N/A'} | <strong>Gender:</strong> ${note.patientGender ? note.patientGender.charAt(0).toUpperCase() + note.patientGender.slice(1) : 'N/A'} | <strong>Date:</strong> ${dateStr} at ${timeStr}
${state.doctor ? '<br><strong>Clinician:</strong> ' + state.doctor.name + ' | <strong>Facility:</strong> ' + state.doctor.hospital : ''}</div>
<div class="section"><div class="section-title s-title">S — ${t('subjective')}</div><div class="section-body">${note.soap.subjective}</div></div>
<div class="section"><div class="section-title o-title">O — ${t('objective')}</div><div class="section-body">${note.soap.objective}</div></div>
<div class="section"><div class="section-title a-title">A — ${t('assessment')}</div><div class="section-body">${note.soap.assessment}</div></div>
<div class="section"><div class="section-title p-title">P — ${t('plan')}</div><div class="section-body">${note.soap.plan}</div></div>
<div class="footer">This document was generated using AI Clinical Documentation Assistant.<br>All clinical notes should be reviewed and verified by the attending physician before use.</div>
</body></html>`;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) { win.onload = () => setTimeout(() => win.print(), 300); }
    showToast(t('toastPDFReady'));
}

window.downloadNotePDF = function(id) {
    const record = state.records.find(r => r.id === id);
    if (record) generatePDF(record);
};

// ===== AUTO-LOGIN CHECK & INIT =====
(function init() {
    const saved = localStorage.getItem('doctorInfo');
    if (saved) {
        state.doctor = JSON.parse(saved);
        initApp();
    } else {
        showPage('page-login');
    }
    applyTranslations();
})();
