window.addEventListener('load', function () {
    let mainNavigation = document.getElementById('primary-navigation')
    let mainNavigationToggle = document.getElementById('primary-menu-toggle')

    if(mainNavigation && mainNavigationToggle) {
        mainNavigationToggle.addEventListener('click', function (e) {
            e.preventDefault()
            mainNavigation.classList.toggle('hidden')
        })
    }

    // Animated counter for stats
    const animateCounter = (element, target, duration = 2000, suffix = '') => {
        let startTime = null
        const startValue = 0
        
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easedProgress = easeOutQuart(progress)
            const currentValue = Math.floor(startValue + (target - startValue) * easedProgress)
            
            element.textContent = currentValue.toLocaleString() + suffix
            
            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                element.textContent = target.toLocaleString() + suffix
            }
        }
        
        requestAnimationFrame(animate)
    }

    // Set up Intersection Observer for stats section
    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
        let hasAnimated = false
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true
                    
                    const counters = statsSection.querySelectorAll('[data-counter]')
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.counter, 10)
                        const suffix = counter.dataset.suffix || ''
                        animateCounter(counter, target, 2000, suffix)
                    })
                }
            })
        }, { threshold: 0.3 })
        
        observer.observe(statsSection)
    }

    // Custom cursor dot
    const cursor = document.getElementById('cursor-dot')
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0
        const delay = 0.15 // Delay factor (lower = more delay)

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            cursor.style.opacity = '1'
        })

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0'
        })

        // Animate cursor with delay
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * delay
            cursorY += (mouseY - cursorY) * delay
            
            cursor.style.left = cursorX + 'px'
            cursor.style.top = cursorY + 'px'
            
            requestAnimationFrame(animateCursor)
        }
        animateCursor()

        // Expand cursor on hover over clickable elements
        const clickables = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"], .clickable')
        
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-expanded')
            })
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-expanded')
            })
        })
    }
})
