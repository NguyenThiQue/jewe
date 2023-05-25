# -*- coding: utf-8 -*-
{
    'name': "test",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Test',
    'version': '16.0.0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website'],

    # always loaded
    'data': [
        'security/tutorial_security.xml',
        'security/ir.model.access.csv',
        #'views/views.xml',
        'views/menu_views.xml',
        "views/snippets/snippets.xml",
        "views/snippets/trung_block.xml",
        "views/snippets/snippets_user.xml",
        "views/snippets/header_user.xml",
        "views/header.xml",
        "views/footer.xml",
        "views/homepage.xml",

    ],
    'application':True,
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'assets':{
        'web.assets_frontend': [
            'test/static/src/scss/styles.scss',
            'test/static/src/js/js.js',
        ],
        # 'web._assets_primary_variables': [
        #     "theme_yourhome/static/src/scss/primary_variables.scss",
        # ]
    }
    
}
