import { useState, useEffect } from 'react';
import logo from "/logo.png"
import { Menu } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT US', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'BLOG', href: '#blog' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <header 
            className={`flex items-center w-full max-w-7xl justify-between gap-12 z-50 mx-auto bg-background-header`}
        >
            <span className=' text-white flex items-center gap-6 text-4xl font-bold'>
                <img src={logo} alt="Logo" className='w-20 h-20' />

                ADHI
            </span>

            <div className='flex items-center gap-6'>

                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className='nav-link-transition font-[Poppins,sans-serif] text-sm font-medium tracking-[1px] leading-[12px] text-start no-underline decoration-white decoration-solid decoration-auto uppercase text-white hover:text-highlight transition-colors duration-300'
                    >
                        {link.name}
                    </a>
                ))}
            </div>


            <span className='inline-flex w-20 h-20 bg-highlight items-center justify-center'>
                <Menu  className='bg-highlight h-9 w-9'  />
            </span>
        </header>
    );
}