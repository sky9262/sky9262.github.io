// Multi-language translations
const translations = {
    ja: {
        // Navigation
        'nav.work': '経歴',
        'nav.projects': 'プロジェクト',
        'nav.passions': '情熱',
        'nav.contact': 'お問い合わせ',
        
        // Hero section
        'hero.title': 'AIエンジニア & サイバーセキュリティ愛好家',
        'hero.location': '埼玉県在住',
        
        // Work section
        'work.title': '職歴',
        'work.ai_engineer.title': 'AIエンジニア',
        'work.ai_engineer.company': 'Roboken Inc. | 現在',
        'work.ai_engineer.description': 'AI駆動ソリューションとインテリジェントシステムの開発。機械学習アプリケーション向けのPythonとそのエコシステムを活用し、実世界の問題を解決するスケーラブルで効率的なAIモデルの構築に焦点を当てています。',
        
        'work.security_researcher.title': 'オープンソース貢献者 & セキュリティ研究者',
        'work.security_researcher.company': '個人 | 継続中',
        'work.security_researcher.description': 'サイバーセキュリティプロジェクトと教育ツールへの積極的な貢献者。フィッシング認識ツール、CTFライトアップ、セキュリティユーティリティを開発。詳細な技術文書と実践的なセキュリティデモンストレーションを通じて知識を共有。',
        
        'work.fullstack_developer.title': 'フルスタック開発者（フリーランス）',
        'work.fullstack_developer.company': 'フリーランス | 過去',
        'work.fullstack_developer.description': 'MERNスタック（MongoDB、Express.js、React.js、Node.js）とPython Flaskを使用したフルスタックWebアプリケーションの開発。リアルタイムマップ統合とデータ整理システムを活用し、クライアントのビジネス要件に合わせたカスタムソリューションを提供。',
        
        // Projects section
        'projects.title': '注目プロジェクト',
        
        'projects.ai_agent.description': '会議リクエストの処理を自動化し、インテリジェントなスケジューリングとプロフェッショナルな応答を提供するAI駆動のメール処理エージェント。',
        'projects.ai_agent.feature1': '自動メール監視と会議リクエスト検出',
        'projects.ai_agent.feature2': 'Zoom統合と空き状況チェック付きカレンダースケジューリング',
        'projects.ai_agent.link': 'プロジェクトを見る',
        
        'projects.aws.description': 'AWS Developer Associate認定のための包括的な学習リソースと実践プロジェクト。3つの実用的な実装を特徴：',
        'projects.aws.feature1': 'SQSアーキテクチャ：高可用性のためのAWS SQSを使用したアプリケーションの分離',
        'projects.aws.feature2': 'サーバーレスフィードバック：S3、DynamoDB、Cognitoを使用したフルスタックサーバーレスWebサイト',
        'projects.aws.feature3': 'オートスケーリング：CloudWatch監視付きEC2オートスケーリング',
        'projects.aws.link': 'プロジェクトを見る',
        
        'projects.ctf.description': '複数の国際競技会で印象的な競技成果を持つRed Knights CTFチームへの積極的な貢献者。',
        'projects.ctf.achievement1': 'トップランキング：1位/75（Squid CTF）、3位/285（Cyber Grabs CTF）',
        'projects.ctf.achievement2': 'チーム貢献者：12名の活発な貢献者、27スター、11フォーク',
        'projects.ctf.achievement3': '競技会：2020-2022年の13以上のCTFで一貫したトップランキング',
        'projects.ctf.link': 'ライトアップを見る',
        
        'projects.phish_eye.description': '攻撃メカニズムを実証するための教育目的の初心者向けフィッシングツール。カスタムテンプレート付き。',
        'projects.phish_eye.link': 'プロジェクトを見る',
        
        'projects.gce_korea.description': '韓国のGitHub Campus Expertコミュニティ向けに開発されたコミュニティWebサイト。',
        'projects.gce_korea.link': 'プロジェクトを見る',
        
        'projects.qrcan.description': 'ターミナルで直接QRコード画像をスキャンしてデコードするコマンドラインユーティリティ。',
        'projects.qrcan.link': 'プロジェクトを見る',
        
        'projects.blog.description': 'デジタルフォレンジック、Web攻撃、TryHackMeチャレンジをカバーする詳細なサイバーセキュリティライトアップ。',
        'projects.blog.link': 'ブログを見る',
        
        // Contact section
        'contact.title': 'お問い合わせ',
        'contact.description': 'AI革新とサイバーセキュリティ研究に情熱を注いでいます。セキュリティと倫理基準を維持しながら技術の境界を押し広げる意味のあるプロジェクトでのコラボレーションを常に歓迎しています。',
        
        // Passions section
        'passions.title': '情熱：コード、クラフト、意識の交差点',
        'passions.intro': '私の仕事は核となる魅力によって駆動されています：強力であるだけでなく、目的があり安全なインテリジェントシステムの構築。この追求は、高度なAI開発、堅牢なサイバーセキュリティ原則、そして日本の美学にインスパイアされたデザイン哲学の合流点に立っています。',
        
        'passions.architect.title': 'アーキテクト：AIスキルを持つ開発者',
        'passions.architect.intro': '心の底では、私は建設者です。複雑な問題をエレガントで機能的なコードに変換することに喜びを感じています。私の焦点は人工知能にあります。それは流行語としてではなく、よりスマートで直感的なユーザーエクスペリエンスを作成するための変革的なツールとしてです。',
        'passions.architect.feature1': 'インテリジェントアプリケーションデザイン：',
        'passions.architect.feature1_desc': '機械学習モデルを実世界のアプリケーションに統合することを専門としています。これは、AI駆動のインタラクティブエクスペリエンスの開発から、データの隠れたパターンを発見する予測分析ツールの構築まで多岐にわたります。',
        'passions.architect.feature2': 'ヒューマンセントリックAI：',
        'passions.architect.feature2_desc': '私の目標は、強力なアルゴリズムと人間の使いやすさの間のギャップを埋めることです。最も成功するAIは、機械のように感じられるのではなく、私たち自身の能力の自然な拡張のように感じられるものだと信じています。',
        'passions.architect.quote': 'コードの究極のエレガンスは、単なる機能性ではなく、ユーザーとシステム間のシームレスな対話です。',
        
        'passions.guardian.title': 'ガーディアン：サイバーセキュリティマインドセット',
        'passions.guardian.intro': '大きな力には、保護する深い責任が伴います。AIへの私の情熱は、サイバーセキュリティへの深い敬意と本質的に結びついています。データで構築された世界では、情報の保護は後付けではありません—それは信頼の基盤です。',
        'passions.guardian.feature1': 'プロアクティブディフェンス：',
        'passions.guardian.feature1_desc': 'セキュリティを創造的な挑戦として捉えています。それは、基盤から回復力のあるシステムを設計するために敵のように考えることです。これには、倫理的ハッキング、脅威モデリング、そして堅牢で適応可能な防御の構築が含まれます。',
        'passions.guardian.feature2': 'セキュリティにおけるAI：',
        'passions.guardian.feature2_desc': 'セキュリティを強化するためのAIの応用に特に興味があります—異常検知のための機械学習の使用、脅威の予測、そして絶えず進化するリスクの風景に先んじるための防御措置の自動化。',
        
        'passions.philosophy.title': '哲学：クラフトにおけるハーモニー',
        'passions.philosophy.intro': '日本の美学は、私の技術的な仕事に哲学的な枠組みを提供します。それは、デザイン、問題解決、職人技への私のアプローチを導く原則の源です。',
        'passions.philosophy.kanso': 'カンソー（簡素）：',
        'passions.philosophy.kanso_desc': 'シンプリシティは重要なインスピレーションです。コードでは、これはクリーンで保守可能で効率的なソリューションに変換されます。デザインでは、それは明確さと焦点を意味し、本質を明らかにするために余分なものを取り除くことです。',
        'passions.philosophy.shibumi': 'シブミ（渋味）：',
        'passions.philosophy.shibumi_desc': 'このシンプルで控えめな美しさの概念は、私の美的選択を導きます。それは、派手ではなく、エレガントで効果的なインターフェースとエクスペリエンスを作成することです。目標は、デザインにおける静かな自信です。',
        'passions.philosophy.kaizen': '継続的改善（改善）：',
        'passions.philosophy.kaizen_desc': 'この絶え間ない改良の哲学は、ソフトウェア開発と個人的な習得の両方の中心です。時間をかけた小さな増分的改善が、深遠で持続的な卓越性につながるという信念です。',
        
        'passions.conclusion': 'この役割の統合—AIアーキテクト、デジタルガーディアン、そして思慮深い職人—が私のアプローチを定義します。それは、インテリジェントで安全であるだけでなく、調和、精密さ、目的の感覚を持って作成されたシステムの構築についてです。',
        
        // Footer
        'footer.text': '© 2025 Akash Kumar (sky9262). 精密さと目的を持ってインテリジェントシステムを構築。'
    },
    
    en: {
        // Navigation
        'nav.work': 'Work',
        'nav.projects': 'Projects',
        'nav.passions': 'Passions',
        'nav.contact': 'Contact',
        
        // Hero section
        'hero.title': 'AI Engineer & Cybersecurity Enthusiast',
        'hero.location': 'Based in Saitama, Japan',
        
        // Work section
        'work.title': 'Work History',
        'work.ai_engineer.title': 'AI Engineer',
        'work.ai_engineer.company': 'Roboken Inc. | Present',
        'work.ai_engineer.description': 'Developing AI-driven solutions and intelligent systems. Leveraging Python and its ecosystem for machine learning applications, focusing on building scalable and efficient AI models that solve real-world problems.',
        
        'work.security_researcher.title': 'Open Source Contributor & Security Researcher',
        'work.security_researcher.company': 'Independent | Ongoing',
        'work.security_researcher.description': 'Active contributor to cybersecurity projects and educational tools. Developed phishing awareness tools, CTF writeups, and security utilities. Sharing knowledge through detailed technical documentation and hands-on security demonstrations.',
        
        'work.fullstack_developer.title': 'Full-stack Developer (Freelancer)',
        'work.fullstack_developer.company': 'Freelancer | Past',
        'work.fullstack_developer.description': 'Developed full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) and Python Flask. Utilized real-time map integration and data organizing systems to deliver custom solutions tailored to client business requirements.',
        
        // Projects section
        'projects.title': 'Featured Projects',
        
        'projects.ai_agent.description': 'AI-powered email processing agent that automates meeting request handling with intelligent scheduling and professional responses.',
        'projects.ai_agent.feature1': 'Automated email monitoring and meeting request detection',
        'projects.ai_agent.feature2': 'Zoom integration and calendar scheduling with availability checks',
        'projects.ai_agent.link': 'View Project',
        
        'projects.aws.description': 'Comprehensive study resources and hands-on projects for AWS Developer Associate certification, featuring three practical implementations:',
        'projects.aws.feature1': 'SQS Architecture: Decoupling applications using AWS SQS for high availability',
        'projects.aws.feature2': 'Serverless Feedback: Full-stack serverless website with S3, DynamoDB, Cognito',
        'projects.aws.feature3': 'Auto Scaling: EC2 auto-scaling with CloudWatch monitoring',
        'projects.aws.link': 'View Projects',
        
        'projects.ctf.description': 'Active contributor to Red Knights CTF team with impressive competitive achievements across multiple international competitions.',
        'projects.ctf.achievement1': 'Top Rankings: 1st/75 (Squid CTF), 3rd/285 (Cyber Grabs CTF)',
        'projects.ctf.achievement2': 'Team Contributor: 12 active contributors, 27 stars, 11 forks',
        'projects.ctf.achievement3': 'Competitions: 13+ CTFs from 2020-2022 with consistent top rankings',
        'projects.ctf.link': 'View Writeups',
        
        'projects.phish_eye.description': 'A beginner-friendly phishing tool for educational purposes to demonstrate attack mechanics, with custom templates.',
        
        'projects.gce_korea.description': 'A community website developed for the GitHub Campus Expert community in Korea.',
        
        'projects.qrcan.description': 'A command-line utility to scan and decode QR code images directly in the terminal.',
        
        'projects.blog.description': 'Detailed cybersecurity write-ups covering digital forensics, web exploitation, and TryHackMe challenges.',
        'projects.blog.link': 'Visit Blog',
        
        // Contact section
        'contact.title': 'Let\'s Connect',
        'contact.description': 'Passionate about AI innovation and cybersecurity research. Always eager to collaborate on meaningful projects that push the boundaries of technology while maintaining security and ethical standards.',
        
        // Passions section
        'passions.title': 'Passions: The Intersection of Code, Craft, and Consciousness',
        'passions.intro': 'My work is driven by a core fascination: building intelligent systems that are not only powerful but also purposeful and secure. This pursuit stands at the confluence of advanced AI development, robust cybersecurity principles, and a design philosophy inspired by Japanese aesthetics.',
        
        'passions.architect.title': 'The Architect: Developer with AI Skills',
        'passions.architect.intro': 'At heart, I am a builder. I thrive on translating complex problems into elegant, functional code. My focus is on Artificial Intelligence, not as a buzzword, but as a transformative tool for creating smarter, more intuitive user experiences.',
        'passions.architect.feature1': 'Intelligent Application Design:',
        'passions.architect.feature1_desc': 'I specialize in integrating machine learning models into real-world applications. This ranges from developing AI-driven interactive experiences to building predictive analytics tools that uncover hidden patterns in data.',
        'passions.architect.feature2': 'Human-Centric AI:',
        'passions.architect.feature2_desc': 'My goal is to bridge the gap between powerful algorithms and human usability. I believe the most successful AI is one that feels less like a machine and more like a natural extension of our own capabilities.',
        'passions.architect.quote': 'The ultimate elegance in code is not just functionality, but a seamless dialogue between the user and the system.',
        
        'passions.guardian.title': 'The Guardian: A Cybersecurity Mindset',
        'passions.guardian.intro': 'With great power comes the profound responsibility to protect. My passion for AI is intrinsically linked to a deep respect for cybersecurity. In a world built on data, safeguarding information is not an afterthought—it\'s the foundation of trust.',
        'passions.guardian.feature1': 'Proactive Defense:',
        'passions.guardian.feature1_desc': 'I approach security as a creative challenge. It\'s about thinking like an adversary to design resilient systems from the ground up. This involves ethical hacking, threat modeling, and building defenses that are both robust and adaptable.',
        'passions.guardian.feature2': 'AI in Security:',
        'passions.guardian.feature2_desc': 'I am particularly interested in the application of AI to bolster security—using machine learning for anomaly detection, predicting threats, and automating defensive measures to stay ahead of an ever-evolving landscape of risks.',
        
        'passions.philosophy.title': 'The Philosophy: Harmony in Craft',
        'passions.philosophy.intro': 'The Japanese aesthetic provides a philosophical framework for my technical work. It\'s a source of principles that guide my approach to design, problem-solving, and craftsmanship.',
        'passions.philosophy.kanso': 'Kanso (簡素):',
        'passions.philosophy.kanso_desc': 'Simplicity is a key inspiration. In code, this translates to clean, maintainable, and efficient solutions. In design, it means clarity and focus, removing the superfluous to reveal the essential.',
        'passions.philosophy.shibumi': 'Shibumi (渋味):',
        'passions.philosophy.shibumi_desc': 'This concept of simple, unobtrusive beauty guides my aesthetic choices. It\'s about creating interfaces and experiences that are elegant and effective without being ostentatious. The goal is a quiet confidence in the design.',
        'passions.philosophy.kaizen': 'Continuous Improvement (Kaizen):',
        'passions.philosophy.kaizen_desc': 'This philosophy of constant refinement is central to both software development and personal mastery. It\'s the belief that small, incremental improvements over time lead to profound and lasting excellence.',
        
        'passions.conclusion': 'This synthesis of roles—the AI architect, the digital guardian, and the mindful craftsman—defines my approach. It\'s about building systems that are not only intelligent and secure but are also created with a sense of harmony, precision, and purpose.',
        
        // Footer
        'footer.text': '© 2025 Akash Kumar (sky9262). Building intelligent systems with precision and purpose.'
    }
};

// Language switching functionality
function switchLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update Passions section content
    loadPassionsContent();
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    const jaSpan = langToggle.querySelector('.lang-ja');
    const enSpan = langToggle.querySelector('.lang-en');
    
    if (lang === 'ja') {
        jaSpan.classList.remove('hidden');
        enSpan.classList.add('hidden');
    } else {
        jaSpan.classList.add('hidden');
        enSpan.classList.remove('hidden');
    }
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Function to load Passions content based on current language
function loadPassionsContent() {
    const container = document.getElementById('passions-content');
    if (!container) return;
    
    const currentLang = document.body.getAttribute('data-lang') || 'ja';
    const t = translations[currentLang];
    
    if (!t) {
        container.innerHTML = '<p class="text-red-500">Translation not found.</p>';
        return;
    }
    
    const content = `
        <h3 class="text-2xl font-bold mb-4">${t['passions.title']}</h3>
        <p class="mb-6">${t['passions.intro']}</p>
        
        <hr class="my-6 border-gray-300">
        
        <h4 class="text-xl font-semibold mb-3">${t['passions.architect.title']}</h4>
        <p class="mb-4">${t['passions.architect.intro']}</p>
        
        <ul class="mb-4 space-y-3">
            <li><strong>${t['passions.architect.feature1']}</strong> ${t['passions.architect.feature1_desc']}</li>
            <li><strong>${t['passions.architect.feature2']}</strong> ${t['passions.architect.feature2_desc']}</li>
        </ul>
        
        <blockquote class="italic border-l-4 border-orange-500 pl-4 my-6">
            "${t['passions.architect.quote']}"
        </blockquote>
        
        <hr class="my-6 border-gray-300">
        
        <h4 class="text-xl font-semibold mb-3">${t['passions.guardian.title']}</h4>
        <p class="mb-4">${t['passions.guardian.intro']}</p>
        
        <ul class="mb-4 space-y-3">
            <li><strong>${t['passions.guardian.feature1']}</strong> ${t['passions.guardian.feature1_desc']}</li>
            <li><strong>${t['passions.guardian.feature2']}</strong> ${t['passions.guardian.feature2_desc']}</li>
        </ul>
        
        <hr class="my-6 border-gray-300">
        
        <h4 class="text-xl font-semibold mb-3">${t['passions.philosophy.title']}</h4>
        <p class="mb-4">${t['passions.philosophy.intro']}</p>
        
        <ul class="mb-4 space-y-3">
            <li><strong>${t['passions.philosophy.kanso']}</strong> ${t['passions.philosophy.kanso_desc']}</li>
            <li><strong>${t['passions.philosophy.shibumi']}</strong> ${t['passions.philosophy.shibumi_desc']}</li>
            <li><strong>${t['passions.philosophy.kaizen']}</strong> ${t['passions.philosophy.kaizen_desc']}</li>
        </ul>
        
        <p class="mt-6">${t['passions.conclusion']}</p>
    `;
    
    container.innerHTML = content;
}

// Initialize language on page load
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'ja';
    switchLanguage(savedLang);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, switchLanguage, initializeLanguage };
}
