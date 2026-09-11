import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function isExternalLink(href = '') {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  );
}

function PillNav({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  useRouterLinks = false,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const timelineRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImageRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const { width, height } = pill.getBoundingClientRect();
        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(
          radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4)),
        ) + 1;
        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${diameter - delta}px`,
        });
        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: height + 12, opacity: 0 });

        timelineRefs.current[index]?.kill();
        const timeline = gsap.timeline({ paused: true });
        timeline.to(circle, { scale: 1.2, duration: 2, ease }, 0);
        if (label) timeline.to(label, { y: -(height + 8), duration: 2, ease }, 0);
        if (hoverLabel) {
          timeline.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease }, 0);
        }
        timelineRefs.current[index] = timeline;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    document.fonts?.ready.then(layout).catch(() => {});

    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { visibility: 'hidden', opacity: 0 });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
      }
      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current,
          { width: 0, overflow: 'hidden' },
          { width: 'auto', duration: 0.6, ease },
        );
      }
    }

    return () => {
      window.removeEventListener('resize', layout);
      timelineRefs.current.forEach((timeline) => timeline?.kill());
      activeTweenRefs.current.forEach((tween) => tween?.kill());
      logoTweenRef.current?.kill();
    };
  }, [ease, initialLoadAnimation, items]);

  function handleEnter(index) {
    const timeline = timelineRefs.current[index];
    if (!timeline) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(timeline.duration(), {
      duration: 0.3,
      ease,
    });
  }

  function handleLeave(index) {
    const timeline = timelineRefs.current[index];
    if (!timeline) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(0, { duration: 0.2, ease });
  }

  function handleLogoEnter() {
    if (!logoImageRef.current) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.fromTo(
      logoImageRef.current,
      { rotate: 0 },
      { rotate: 360, duration: 0.2, ease },
    );
  }

  function toggleMobileMenu() {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    const menu = mobileMenuRef.current;
    const lines = hamburgerRef.current?.querySelectorAll('.hamburger-line');

    if (lines?.length === 2) {
      gsap.to(lines[0], { rotation: nextState ? 45 : 0, y: nextState ? 3 : 0, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: nextState ? -45 : 0, y: nextState ? -3 : 0, duration: 0.3, ease });
    }

    if (menu) {
      gsap.to(menu, {
        autoAlpha: nextState ? 1 : 0,
        y: nextState ? 0 : 10,
        duration: 0.3,
        ease,
        onStart: () => nextState && gsap.set(menu, { visibility: 'visible' }),
        onComplete: () => !nextState && gsap.set(menu, { visibility: 'hidden' }),
      });
    }

    onMobileMenuClick?.();
  }

  function renderLink(item, index, mobile = false) {
    const linkClass = mobile
      ? `mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`
      : `pill${activeHref === item.href ? ' is-active' : ''}`;
    const linkProps = mobile
      ? { onClick: () => setIsMobileMenuOpen(false) }
      : { onMouseEnter: () => handleEnter(index), onMouseLeave: () => handleLeave(index) };

    const content = mobile ? (
      item.label
    ) : (
      <>
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(element) => {
            circleRefs.current[index] = element;
          }}
        />
        <span className="label-stack">
          <span className="pill-label">{item.label}</span>
          <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
        </span>
      </>
    );

    return !useRouterLinks || isExternalLink(item.href) ? (
      <a href={item.href || '#'} className={linkClass} {...linkProps}>
        {content}
      </a>
    ) : (
      <Link to={item.href || '/'} className={linkClass} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {logo && (useRouterLinks ? (
          <Link
            className="pill-logo"
            to={items[0]?.href || '/'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={logoRef}
          >
            <img src={logo} alt={logoAlt} ref={logoImageRef} />
          </Link>
        ) : (
          <a
            className="pill-logo"
            href={items[0]?.href || '/'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={logoRef}
          >
            <img src={logo} alt={logoAlt} ref={logoImageRef} />
          </a>
        ))}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.href || `item-${index}`} role="none">
                {renderLink(item, index)}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, index) => (
            <li key={item.href || `mobile-item-${index}`}>{renderLink(item, index, true)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PillNav;
