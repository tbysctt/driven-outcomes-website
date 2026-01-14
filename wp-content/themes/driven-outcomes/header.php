<?php

/**
 * Theme header template.
 *
 * @package TailPress
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-light text-slate-grey-900 antialiased'); ?>>
<?php do_action('tailpress_site_before'); ?>

<div id="page" class="min-h-screen flex flex-col">
    <?php do_action('tailpress_header'); ?>

    <header class="bg-dark text-white sticky top-0 z-50">
        <div class="container mx-auto py-4">
            <div class="md:flex md:justify-between md:items-center">
                <div class="flex justify-between items-center">
                    <div>
                        <?php if (has_custom_logo()): ?>
                            <?php the_custom_logo(); ?>
                        <?php else: ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="!no-underline uppercase font-extrabold text-xl tracking-tight text-white hover:text-secondary transition-colors">
                                <?php bloginfo('name'); ?>
                            </a>
                        <?php endif; ?>
                    </div>

                    <?php if (has_nav_menu('primary')): ?>

                        <div class="md:hidden">
                            <button type="button" aria-label="Toggle navigation" id="primary-menu-toggle" class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    <?php endif; ?>
                </div>

                <div id="primary-navigation" class="hidden md:flex md:bg-transparent gap-6 items-center border border-white/20 md:border-none rounded-xl p-4 md:p-0 mt-4 md:mt-0">
                    <nav>
                        <?php if (current_user_can('administrator') && !has_nav_menu('primary')): ?>
                            <a href="<?php echo esc_url(admin_url('nav-menus.php')); ?>" class="text-sm text-white/70 hover:text-white"><?php esc_html_e('Edit Menus', 'tailpress'); ?></a>
                        <?php else: ?>
                            <?php
                            wp_nav_menu([
                                'container_id'    => 'primary-menu',
                                'container_class' => '',
                                'menu_class'      => 'md:flex md:-mx-4 [&_a]:!no-underline [&_a]:text-white [&_a]:uppercase [&_a]:text-sm [&_a]:font-semibold [&_a]:tracking-wide [&_a:hover]:text-secondary [&_a]:transition-colors',
                                'theme_location'  => 'primary',
                                'li_class'        => 'md:mx-4',
                                'fallback_cb'     => false,
                            ]);
                            ?>
                        <?php endif; ?>
                    </nav>

                    <a href="#contact" class="inline-flex rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 !no-underline">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div id="content" class="site-content grow">
        <?php if (is_front_page()): ?>
            <!-- Hero Section -->
            <section class="relative overflow-hidden bg-gradient-to-br from-slate-grey-900 via-slate-grey-800 to-slate-grey-950 py-20 md:py-32">
                <!-- Decorative elements -->
                <div class="absolute top-0 left-0 w-96 h-96 bg-pearl-aqua-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-cool-steel-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-thistle-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                
                <div class="container mx-auto relative z-10">
                    <div class="max-w-4xl mx-auto text-center">
                        <span class="inline-block px-4 py-1 rounded-full bg-white/10 text-pearl-aqua-300 text-sm font-semibold uppercase tracking-wider mb-6">
                            Australia's Most Engaging Incursions
                        </span>
                        <h1 class="leading-tight text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance text-white uppercase mb-6">
                            Hands-On Learning for <span class="text-transparent bg-clip-text bg-gradient-to-r from-pearl-aqua-400 via-cool-steel-400 to-thistle-400">Curious Minds</span>
                        </h1>
                        <p class="my-6 text-lg md:text-xl text-slate-grey-300 leading-relaxed max-w-2xl mx-auto">
                            Prep to Year 12 programs that spark creativity, confidence and real-world skills. Our interactive, curriculum-aligned incursions empower students to lead, build, solve, design, and grow.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <a href="#programs" class="inline-flex justify-center rounded-full px-8 py-3 text-base font-bold uppercase tracking-wide transition bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 text-white hover:opacity-90 !no-underline">
                                Explore Programs
                            </a>
                            <a href="#contact" class="inline-flex justify-center rounded-full px-8 py-3 text-base font-bold uppercase tracking-wide transition bg-white/10 text-white border border-white/20 hover:bg-white/20 !no-underline">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Stats Section -->
            <section id="stats-section" class="py-16 bg-slate-grey-100">
                <div class="container mx-auto">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-4xl md:text-5xl font-extrabold text-pearl-aqua-600" data-counter="515">0</div>
                            <div class="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-grey-600">Schools</div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-extrabold text-cool-steel-600" data-counter="205" data-suffix="K+">0</div>
                            <div class="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-grey-600">Students</div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-extrabold text-thistle-600" data-counter="24" data-suffix="+">0</div>
                            <div class="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-grey-600">Programs</div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-extrabold text-slate-grey-800" data-counter="30">0</div>
                            <div class="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-grey-600">Organisations</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Our Brands Section -->
            <section id="programs" class="py-20">
                <div class="container mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">Our Programs</h2>
                        <div class="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
                        <p class="mt-6 text-lg text-slate-grey-600 max-w-2xl mx-auto">
                            Operating under Driven Outcomes, we deliver engaging incursions through two specialist divisions.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <!-- MiniBOSS -->
                        <div class="bg-gradient-to-br from-cool-steel-100 to-cool-steel-50 rounded-2xl p-8 border border-cool-steel-200 hover:shadow-xl hover:shadow-cool-steel-200/50 transition-shadow">
                            <div class="inline-block px-3 py-1 rounded-full bg-cool-steel-200 text-cool-steel-700 text-xs font-bold uppercase tracking-wider mb-4">
                                Primary School
                            </div>
                            <h3 class="text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-4">MiniBOSS Incursions</h3>
                            <p class="text-slate-grey-600 mb-6">
                                Established in 2017, MiniBOSS provides engaging, specialist incursions tailored for primary students from Foundation to Year 6. High-impact, hands-on experiences that ignite curiosity and build essential skills.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Prep - Year 2</span>
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Year 3 - 4</span>
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Year 5 - 6</span>
                            </div>
                            <a href="#" class="inline-flex items-center font-bold text-cool-steel-600 hover:text-cool-steel-800 transition-colors !no-underline">
                                Explore Primary Programs
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                        </div>

                        <!-- Tripod -->
                        <div class="bg-gradient-to-br from-pearl-aqua-100 to-pearl-aqua-50 rounded-2xl p-8 border border-pearl-aqua-200 hover:shadow-xl hover:shadow-pearl-aqua-200/50 transition-shadow">
                            <div class="inline-block px-3 py-1 rounded-full bg-pearl-aqua-200 text-pearl-aqua-700 text-xs font-bold uppercase tracking-wider mb-4">
                                Secondary School
                            </div>
                            <h3 class="text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-4">Tripod Enterprise Education</h3>
                            <p class="text-slate-grey-600 mb-6">
                                Launched in 2016, Tripod delivers dynamic programs for secondary students. Our enterprise education model connects young people with real-world experiences, building skills critical for future success.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Year 7 - 9</span>
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Year 10 - 12</span>
                                <span class="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">Enterprise</span>
                            </div>
                            <a href="#" class="inline-flex items-center font-bold text-pearl-aqua-600 hover:text-pearl-aqua-800 transition-colors !no-underline">
                                Explore Secondary Programs
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skills Section -->
            <section class="py-20 bg-slate-grey-900 text-white">
                <div class="container mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">Curriculum-Focused Learning</h2>
                        <div class="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
                        <p class="mt-6 text-lg text-slate-grey-400 max-w-2xl mx-auto">
                            Our incursions are designed to achieve critical real-world learning outcomes aligned with the Victorian Curriculum.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-pearl-aqua-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-pearl-aqua-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Critical Thinking</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-cool-steel-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-cool-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Creativity</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-thistle-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-thistle-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Teamwork</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-lavender-grey-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-lavender-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Problem Solving</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-pearl-aqua-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-pearl-aqua-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Communication</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-cool-steel-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-cool-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Presentation Skills</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-thistle-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-thistle-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Digital Literacy</h4>
                        </div>
                        <div class="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-lavender-grey-500/20 flex items-center justify-center">
                                <svg class="w-6 h-6 text-lavender-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <h4 class="font-bold uppercase text-sm">Financial Literacy</h4>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="py-20">
                <div class="container mx-auto">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <h2 class="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">About Us</h2>
                            <div class="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
                        </div>
                        <div class="prose prose-lg mx-auto text-slate-grey-600">
                            <p class="text-xl leading-relaxed">
                                Since 2016, we've been on a mission to transform learning in schools across Australia. Operating under Driven Outcomes Pty Ltd, we have two main divisions: <strong class="text-pearl-aqua-600">Tripod Enterprise Education</strong> for secondary students, and <strong class="text-cool-steel-600">MiniBOSS Incursions</strong> for primary students.
                            </p>
                            <p>
                                Based in Alphington, Melbourne, the company is proudly owned and managed by its founders and directors, <strong>Betsy Tolmer</strong> and <strong>Marita D'Amico</strong>.
                            </p>
                            <p>
                                What began as a passion for creating engaging, hands-on educational experiences has grown into partnerships with over 500 schools and organisations, impacting more than 200,000 students.
                            </p>
                            <p>
                                Our vision is simple: to inspire students to develop essential life skills while empowering educators with the tools they need to make a real difference in their classrooms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <?php do_action('tailpress_content_start'); ?>
        <main>
