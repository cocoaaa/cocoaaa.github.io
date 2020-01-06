#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals


################################################################################
# Basic settings
################################################################################
AUTHOR = 'Hayley Song'
SITENAME = 'Small Simplicity'
SITESUBTITLE = u'Understanding Intelligence from Computational Perspective'
SITEURL = ''
TIMEZONE = 'America/Los_Angeles'
DEFAULT_LANG = 'en'

# Set cache to False
LOAD_CONTENT_CACHE = False
DELETE_OUTPUT_DIRECTORY = True
# Don't delete git data when cleaning up the output folder
OUTPUT_RETENTION = ['.git']
DEFAULT_PAGINATION = 10


################################################################################
# Content paths
# - Read paths, relative to $PATH
# - Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
################################################################################
PATH = 'content'
# ARTICLE_PATHS = ['articles', 'articles/*']
ARTICLE_EXCLUDES = ['downloads', 'figures', 'images', 'videos']
PAGE_PATHS = ['pages']


################################################################################
# Default Meta Data
################################################################################
# Set the default date metadata from the filesystem timestamp if not provided
DEFAULT_DATE = 'fs' # Default to filesystem's mtime if no date in the metadata
DEFAULT_DATE_FORMAT = '%m-%d-%Y'
DEFAULT_CATEGORY = 'Unorganized'
USE_FOLDER_AS_CATEGORY = True  # default


################################################################################
# Set the URL and SAVE_AS formats
# Official full list: https://is.gd/39dNhV
#                   : https://is.gd/9Gf8Mk
################################################################################
# SLUGIFY_SOURCE = 'title' # 'title' to use `Title` metadata tag or
# 'basename' to use the filename
# AUTHOR_URL = 'author.html'
# AUTHOR_SAVE_AS = 'about.html'
AUTHORS_SAVE_AS = '' # Empty string to prevent this html page from being generated

ARTICLE_URL = 'articles/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
# ARTICLE_SAVE_AS = 'articles/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
ARTICLE_SAVE_AS = 'articles/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'

PAGE_URL = 'pages/{slug}.html'
PAGE_SAVE_AS = 'pages/{slug}.html'

CATEGORY_URL = 'category/{slug}.html'
CATEGORY_SAVE_AS = 'category/{slug}.html'

MONTH_ARCHIVE_SAVE_AS = 'articles/{date:%Y}/{date:%m}/index.html'

INDEX_SAVE_AS = '/index.html'
TAGS_URL           = 'tags'
TAGS_SAVE_AS       = 'tags/index.html'
CATEGORIES_URL     = 'categories'
CATEGORIES_SAVE_AS = 'categories/index.html'
ARCHIVES_URL       = 'archives'
ARCHIVES_SAVE_AS   = 'archives/index.html'


################################################################################
# Direct templates
# Refer to `pelican.generator.generate_direct_templates` method
################################################################################
# DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'authors', 'archives']


################################################################################
# List of menu pages to show on the menu bar
################################################################################
# Note: these two values do not take effect in the current theme
# Instead, the menu bar items are manually set in `theme/templates/base.html`
# DISPLAY_PAGES_ON_MENU = True
# DISPLAY_CATEGORIES_ON_MENU = True
# The following variable names must match the names used as varnames in the navbar
# class of `theme/templates/base.html`
ABOUT_PAGE = '/pages/about-me.html'
PROJECTS_PAGE = '/pages/projects.html'
PUBS_PAGE = '/pages/publications.html'

try:
    ARTICLES_PAGE = INDEX_SAVE_AS  # must match, List of blog posts
except NameError as e:
    print(e); print("Setting articles_page as /index.html")
    ARTICLES_PAGE = 'index.html'

TUTORIALS_PAGE = '/pages/tutorials.html'
# NOTES_PAGE = '/pages/notes.html'
# # PHOTOS_PAGE='#'

try:
    CATEGORIES_PAGE = CATEGORIES_SAVE_AS  # must match {{CATEGORIES_SAVE_AS }}
except NameError as e:
    print(e); print("Setting categories_page as /categories.html")
    CATEGORIES_PAGE = '/categories.html'

try:
    ARCHIVE_PAGE = ARCHIVES_SAVE_AS  # must match {{CATEGORIES_SAVE_AS }}
except NameError as e:
    print(e); print("Setting archive_page as /archives.html")
    ARCHIVE_PAGE = '/archives.html'


################################################################################
# Blue Penguine theme specific configs
# use those if you want pelican standard pages to appear in your menu
################################################################################
# PROJECTS_URL = 'projects'
# ABOUT_URL = 'about'
# PUBS_URL = 'pubs'
# INDEX_URL = '/'
#
#
#
# MENU_INTERNAL_PAGES = (
#     # ('Tags', TAGS_URL, TAGS_SAVE_AS),
#     # ('Authors', AUTHORS_URL, AUTHORS_SAVE_AS),
#     ('About', ABOUT_URL, ABOUT_PAGE),
#     ('Projects', PROJECTS_URL, PROJECTS_PAGE),
#     ('Blog', INDEX_URL, INDEX_SAVE_AS),
#     ('Categories', CATEGORIES_URL, CATEGORIES_SAVE_AS),
#     ('Archives', ARCHIVES_URL, ARCHIVES_SAVE_AS),
#
# )
# additional menu items
# MENUITEMS = (
#     ('GitHub', 'https://github.com/'),
#     ('Linux Kernel', 'https://www.kernel.org/'),
# )


################################################################################
# Plugins
# pelican-ipynb: https://github.com/danielfrg/pelican-ipynb
################################################################################
PLUGIN_PATHS = ['./plugins', './plugins/pelican-plugins']
PLUGINS = [
    'summary',       # auto-summarizing articles
    'feed_summary',  # use summaries for RSS, not full articles
    'ipynb.liquid',  # for embedding notebooks
    'liquid_tags.img',  # embedding images
    'liquid_tags.video',  # embedding videos
    'liquid_tags.youtube', # linking youtube videos
    'liquid_tags.include_code',  # including code blocks
    'liquid_tags.literal',
    'category_meta', # enables to add category descriptions in each category page
    'neighbors', # (none default) category page navigations
    'ipynb.markup'   # adds a new markup language to recognize ipynb as a valid
                    # filetype for an article
]

# pelican-ipynb setup
# MARKUP = ['md']
MARKUP = ('md', 'ipynb')
IGNORE_FILES = ['.ipynb_checkpoints']

# for liquid tags
CODE_DIR = 'downloads/code'
NOTEBOOK_DIR = 'downloads/notebooks'


################################################################################
# THEME SETTINGS
################################################################################
THEME = './pelican-themes/blue-penguin'


################################################################################
# About page
## Below must match with templates/about.html
################################################################################
GITHUB_USERNAME = 'cocoaaa'
# AUTHOR_WEBSITE = 'http://vanderplas.com'
AUTHOR_BLOG = 'http://cocoaaa.github.io'
AUTHOR_CV = '/docs/hjsong_cv.pdf'
#AUTHOR_CV = "http://staff.washington.edu/jakevdp/media/pdfs/CV.pdf"
SHOW_ARCHIVES = True
SHOW_FEED = False  # Need to address large feeds
ENABLE_MATHJAX = True


################################################################################
################################################################################
# TEMPLATE_PAGES =
STATIC_PATHS = ['images', 'figures', 'videos', 'downloads', 'favicon.ico']


################################################################################
# Footer info
################################################################################
#LICENSE_URL = "https://github.com/jakevdp/jakevdp.github.io-source/blob/master/LICENSE"
LICENSE_NAME = "MIT"


################################################################################
# Feed generation is usually not desired when developing
################################################################################
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


################################################################################
# Development settings
################################################################################
