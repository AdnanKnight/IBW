import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to hash if present
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // Otherwise scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.key]); // key changes on every navigation

    return null;
};

export default ScrollToTop;
