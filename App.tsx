

import React, { useState, useCallback, useEffect, CSSProperties } from 'react';
import { NavLink, Service, Review, MenuItem } from './types';
import { CONTACTS, STATIC_SERVICES_DATA, GALLERY_ITEMS } from './constants';
import { translations } from './translations';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, ArrowUpIcon, PhoneIcon, HeartIcon } from './components/Icons';

// Reusable Components
const CTAButton: React.FC<{ href: string; children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' | 'rose' | 'cyan' | 'yellow'; isInternal?: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, className = '', variant = 'primary', isInternal, onClick }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-lime-400 text-gray-900 hover:bg-lime-300 focus:ring-lime-400',
    secondary: 'bg-black/20 text-white backdrop-blur-sm border border-white/30 hover:bg-black/30 focus:ring-white dark:bg-white/20 dark:hover:bg-white/30',
    rose: 'bg-rose-500 text-gray-900 hover:bg-rose-400 focus:ring-rose-500',
    cyan: 'bg-cyan-500 text-gray-900 hover:bg-cyan-400 focus:ring-cyan-500',
    yellow: 'bg-amber-400 text-gray-900 hover:bg-amber-300 focus:ring-amber-400',
  };

  const variantClasses = variantStyles[variant] || variantStyles.primary;
  const targetProps = !isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} {...targetProps} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </a>
  );
};

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string; }> = ({ id, children, className = '' }) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref]);

    return (
        <section 
            ref={setRef}
            id={id} 
            className={`py-16 sm:py-20 scroll-mt-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {children}
            </div>
        </section>
    );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
    {children}
  </h2>
);

const ThemeToggle: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full text-gray-800 dark:text-white bg-white/50 dark:bg-white/20 hover:bg-white/70 dark:hover:bg-white/30 transition-colors"
    aria-label="Toggle theme"
  >
    {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
  </button>
);

const LanguageSwitcher: React.FC<{ language: string; toggleLanguage: () => void }> = ({ language, toggleLanguage }) => (
    <button
        onClick={toggleLanguage}
        className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-gray-800 dark:text-white bg-white/50 dark:bg-white/20 hover:bg-white/70 dark:hover:bg-white/30 transition-colors"
        aria-label="Toggle language"
    >
        {language.toUpperCase()}
    </button>
);

const Header: React.FC<{ theme: string; toggleTheme: () => void; language: string; toggleLanguage: () => void; navLinks: NavLink[]; activeSection: string; }> = ({ theme, toggleTheme, language, toggleLanguage, navLinks, activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const href = event.currentTarget.getAttribute('href');
        if (!href) return;
        event.preventDefault();

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
        
        closeMobileMenu();
    };
    
    const isOpaque = isScrolled || isMobileMenuOpen;
    const headerBgClass = isOpaque
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent';
    const textClass = isOpaque
        ? 'text-gray-900 dark:text-white'
        : 'text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]';

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20 max-w-7xl">
                    <a href="#" onClick={handleLinkClick} className={`text-2xl font-bold transition-colors ${textClass}`}>
                        Banana Beach
                    </a>
                    <nav className="hidden md:flex items-center gap-4">
                        {navLinks.map(link => {
                            const isActive = `#${activeSection}` === link.href;
                            return (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    onClick={handleLinkClick} 
                                    className={`font-semibold transition-colors px-2 ${isActive ? 'text-lime-400 dark:text-lime-400' : `${textClass} hover:text-lime-500`}`}>
                                    {link.label}
                                </a>
                            );
                        })}
                        <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </nav>
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`relative z-50 transition-colors ${textClass}`} aria-label="Toggle menu">
                            {isMobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </header>
            
            <div className={`md:hidden fixed inset-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                    {navLinks.map(link => {
                        const isActive = `#${activeSection}` === link.href;
                        return (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={handleLinkClick} 
                                className={`text-3xl font-semibold transition-colors ${isActive ? 'text-lime-500' : 'text-gray-900 dark:text-white hover:text-lime-500'}`}>
                                {link.label}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

const Hero: React.FC<{ content: any; onCallClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ content, onCallClick }) => (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
        >
            <source src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/BananaBeach002.MOV" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center p-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
                {content.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
                {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="#" variant="yellow" onClick={onCallClick}>
                    <PhoneIcon className="w-6 h-6" />
                    {content.ctaCall}
                </CTAButton>
            </div>
        </div>
    </div>
);

const About: React.FC<{ content: any }> = ({ content }) => (
    <Section id="about">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 space-y-6 text-gray-800 dark:text-gray-300 transition-shadow duration-500 dark:shadow-[0_0_25px_rgba(190,242,100,0.2)]">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{content.heading}</h3>
                {content.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="text-lg leading-relaxed">{p}</p>
                ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 md:h-full transition-shadow duration-500 dark:shadow-[0_0_25px_rgba(190,242,100,0.2)]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="https://placehold.co/800x1000/f59e0b/FFFFFF?text=Banana+Beach">
                    <source src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/BananaBeach004.mov" type="video/mp4" />
                </video>
            </div>
        </div>
    </Section>
);

const ServiceCard: React.FC<{ service: Service; hexColor: string }> = ({ service, hexColor }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardStyle = { '--service-bg-color': hexColor } as CSSProperties;

    return (
        <div 
            className="group w-full h-80 [perspective:1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyPress={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
            tabIndex={0}
            role="button"
            aria-pressed={isFlipped ? 'true' : 'false'}
            style={cardStyle}
        >
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                <div className="card-face absolute w-full h-full rounded-2xl shadow-lg flex justify-center items-center p-6 bg-[var(--service-bg-color)] text-white text-center">
                    <h3 className="text-3xl font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">{service.title}</h3>
                </div>
                <div className="card-face absolute w-full h-full [transform:rotateY(180deg)] rounded-2xl shadow-lg flex flex-col justify-center p-6 bg-[var(--service-bg-color)] text-white text-center overflow-y-auto">
                    <p className="text-lg lg:text-base leading-relaxed">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

const Services: React.FC<{ content: any }> = ({ content }) => (
    <Section id="services">
      <SectionTitle>{content.title}</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((service: Service, index: number) => <ServiceCard key={index} service={service} hexColor={STATIC_SERVICES_DATA[index].hexColor} />)}
      </div>
    </Section>
);

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="group relative bg-white/60 dark:bg-gray-900/60 p-6 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer">
        <div className="flex justify-between items-start gap-4">
            <div className="flex-grow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.category}</p>
            </div>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{item.description}</p>
        <div className="absolute top-4 right-4 text-rose-500 transition-colors duration-300">
            <HeartIcon className="w-6 h-6" />
        </div>
    </div>
);

const Menu: React.FC<{ content: any; onDownloadClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ content, onDownloadClick }) => (
    <Section id="menu">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="flex flex-col items-center gap-12">
            <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 text-gray-800 dark:text-gray-300">
                <div className="space-y-4 text-lg leading-relaxed text-left">
                    {content.description.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
                
                <div className="mt-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">{content.popularDishesTitle}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {content.items.map((item: MenuItem, index: number) => (
                            <MenuItemCard key={index} item={item} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                    <CTAButton href="#" variant="primary" onClick={onDownloadClick}>
                        {content.ctaFullMenu}
                    </CTAButton>
                </div>
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px] ring-1 ring-black/5">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/BananaBeach008.MOV" type="video/mp4" />
                </video>
            </div>
        </div>
    </Section>
);

const Gallery: React.FC<{ content: any }> = ({ content }) => (
    <Section id="gallery">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] gap-4">
            {GALLERY_ITEMS.map((item, index) => {
                let itemClass = 'rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5';
                if (index === 0) itemClass += ' col-span-2 row-span-2';
                else if (index === 3) itemClass += ' md:col-span-2';
                else if (index === 7) itemClass += ' col-span-2 md:col-span-1';
                else if (index === 8) itemClass += ' col-span-2';
                else if (index === 9) itemClass += ' col-span-2';

                return (
                    <div key={index} className={itemClass}>
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={item.src} type="video/mp4" />
                        </video>
                    </div>
                );
            })}
        </div>
    </Section>
);

const Events: React.FC<{ content: any }> = ({ content }) => (
    <Section id="events">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                 <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/BananaBeach014.MP4" type="video/mp4" />
                 </video>
            </div>
            <div className="w-full space-y-6 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 text-gray-800 dark:text-gray-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{content.heading}</h3>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">{content.description}</p>
            </div>
        </div>
    </Section>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col h-full ring-1 ring-black/5 dark:ring-white/10 text-gray-800 dark:text-gray-300">
        <div className="flex items-center mb-4">
            {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
        <p className="mb-4 flex-grow">"{review.text}"</p>
        <p className="font-bold text-right">- {review.name}</p>
    </div>
);

const Reviews: React.FC<{ content: any }> = ({ content }) => (
    <Section id="reviews">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.items.map((review: Review, index: number) => <ReviewCard key={index} review={review} />)}
        </div>
    </Section>
);

const Location: React.FC<{ content: any; onCallClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ content, onCallClick }) => (
    <Section id="contact">
        <SectionTitle>{content.title}</SectionTitle>
        <div className="flex flex-col gap-12 items-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] ring-1 ring-black/5">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d316.5767703291819!2d108.22077169917571!3d10.954255257786588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317685425ae66dc5%3A0xc1d6d6901ab98e9b!2sBanana%20Beach%20Food%20and%20Drink%2C%20Tony%20ili%20Tony!5e0!3m2!1sen!2sus!4v1761466061938!5m2!1sen!2sus" 
                    width="100%" height="100%" className="border-0" allowFullScreen={true} loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" title="Banana Beach Location"
                ></iframe>
            </div>
            <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 text-gray-800 dark:text-gray-300">
                 <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <div className="text-left">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{content.heading}</h3>
                            <p className="mt-4 text-lg">{content.description}</p>
                        </div>
                        <div className="mt-8 text-left">
                             <p><strong>{content.addressLabel}</strong><br/>{CONTACTS.address}</p>
                             <p className="mt-4"><strong>{content.phoneLabel}</strong><br/>{CONTACTS.phone}</p>
                             <p className="mt-4"><strong>{content.hoursLabel}</strong><br/>{content.hours}</p>
                        </div>
                         <div className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-8">
                             <CTAButton href="#" variant="yellow" onClick={onCallClick}>
                                 {content.ctaCall}
                             </CTAButton>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-96 w-full order-first md:order-last">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/BananaBeach001.mov" type="video/mp4" />
                        </video>
                    </div>
                 </div>
            </div>
        </div>
    </Section>
);

const Footer: React.FC<{ content: any }> = ({ content }) => (
    <footer className="py-8 mt-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 text-gray-700 dark:text-gray-400">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-7xl">
            <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
            <p className="text-sm mt-2 opacity-70">
                {content.credits} <a href="https://www.facebook.com/MoiseenkoDI/" target="_blank" rel="noopener noreferrer" className="underline hover:text-lime-500 transition-colors">{content.creatorLinkText}</a>.
            </p>
        </div>
    </footer>
);

const ScrollToTopButton: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-lime-400 text-gray-900 p-4 rounded-full shadow-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400 z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [language, setLanguage] = useState('en');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuModalOpen, setMenuModalOpen] = useState(false);
    const [isCallModalOpen, setCallModalOpen] = useState(false);
    
    const content = translations[language] || translations.ru;
    
    const toggleLanguage = () => {
        const languages = ['ru', 'en', 'vn'];
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);

            const sections = content.navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);
            const scrollPosition = window.scrollY + 81; 

            let currentActiveSectionId = '';
            for (const section of sections) {
                if (scrollPosition >= section.offsetTop) {
                    currentActiveSectionId = section.id;
                }
            }
             setActiveSection(currentActiveSectionId);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [content.navLinks]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuModalOpen(false);
                setCallModalOpen(false);
            }
        };

        if (isMenuModalOpen || isCallModalOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuModalOpen, isCallModalOpen]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const handleMenuDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setMenuModalOpen(true);
    };

    const handleConfirmDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/menu2025.26.pdf';
        link.setAttribute('download', 'Banana_Beach_Menu.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setMenuModalOpen(false);
    };
    
    const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setCallModalOpen(true);
    };

    const handleConfirmCall = () => {
        window.location.href = `tel:${CONTACTS.phone.replace(/\s/g, '')}`;
        setCallModalOpen(false);
    };

    return (
        <div className="relative">
            <Header 
                theme={theme} toggleTheme={toggleTheme} 
                language={language} toggleLanguage={toggleLanguage}
                navLinks={content.navLinks}
                activeSection={activeSection} 
            />
            <main>
                <Hero content={content.hero} onCallClick={handleCallClick} />
                <About content={content.about} />
                <Menu content={content.menu} onDownloadClick={handleMenuDownloadClick} />
                <Services content={content.services} />
                <Gallery content={content.gallery} />
                <Events content={content.events} />
                <Reviews content={content.reviews} />
                <Location content={content.contact} onCallClick={handleCallClick} />
            </main>
            <Footer content={content.footer} />
            <ScrollToTopButton isVisible={showScrollTop} />

            {isMenuModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4" 
                    onClick={() => setMenuModalOpen(false)}
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="modal-title"
                >
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 id="modal-title" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{content.menuModal.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">{content.menuModal.confirmMessage}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                onClick={() => setMenuModalOpen(false)} 
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500">
                                {content.menuModal.cancelButton}
                            </button>
                            <button 
                                onClick={handleConfirmDownload} 
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-lime-400 text-gray-900 hover:bg-lime-300 focus:ring-lime-400">
                                {content.menuModal.confirmButton}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {isCallModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4" 
                    onClick={() => setCallModalOpen(false)}
                    role="dialog" 
                    aria-modal="true" 
                    aria-labelledby="call-modal-title"
                >
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 id="call-modal-title" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{content.callModal.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">{content.callModal.confirmMessage}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                onClick={() => setCallModalOpen(false)} 
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500">
                                {content.callModal.cancelButton}
                            </button>
                            <button 
                                onClick={handleConfirmCall} 
                                className="w-full sm:w-auto px-6 py-3 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-lime-400 text-gray-900 hover:bg-lime-300 focus:ring-lime-400">
                                {content.callModal.confirmButton}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}