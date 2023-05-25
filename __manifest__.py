{
    'name': 'Custom_Theme',
    'description': 'Custom_Theme - Responsive Bootstrap Theme for Odoo CMS',
    'version': '1.0',
    'author': 'Aspire(Manthan)',
    'data': [
        'views/layout.xml',
        'views/snippets/snippets.xml',
        'views/snippets/digital_experience.xml',
        'views/snippets/expert.xml',
        'views/snippets/vision_mission.xml',
        'views/snippets/history.xml',
        'views/snippets/technologies.xml',
        'views/snippets/innovate.xml',
        'views/snippets/accelerate.xml',
        'views/snippets/why_aspire.xml',
        'views/snippets/testimonial.xml',
        'views/snippets/navigation.xml',
        'views/snippets/projects.xml',
    ],
    'assets': {

        'web.assets_frontend': [

            'custom_theme/static/src/css/main.css',
            'custom_theme/static/src/css/02.css',
            'custom_theme/static/src/css/09.css',

            'custom_theme/static/src/js/navbar.js',
            'custom_theme/static/src/js/main.js',

            '//unpkg.com/swiper/swiper-bundle.min.css',
            '//unpkg.com/swiper/swiper-bundle.min.js',

        ],

    },
    'license': 'LGPL-3',
    'website ': 'https://aspiresoftware.in/',
    'category': 'Theme/Creative',
    'depends': ['website'],
    'sequence': -100,
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
