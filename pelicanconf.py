#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Hayley Song'
SITENAME = 'Small Simplicity'
SITESUBTITLE = u'Human intelligence through computational perspectives'
SITEURL = ''
TIMEZONE = 'America/Los_Angeles'
DEFAULT_LANG = 'en'

# Set cache to False
LOAD_CONTENT_CACHE = False

# Read paths
## relative to $PATH
PATH = 'content'
ARTICLE_PATHS = ['articles']
PAGE_PATHS = ['pages']

# DISPLAY_PAGES_ON_MENU = True

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Set the default date metadata from the filesystem timestamp if not provided
DEFAULT_DATE = 'fs'
DEFAULT_CATEGORY = 'Unorganized'

# Set the article URL
ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
PAGE_SAVE_AS = 'pages/{slug}.html'
DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#MARKUP = ('md', 'ipynb')
#PLUGINS = ['ipynb.markup']

MARKUP = ['md']
PLUGIN_PATHS = ['./plugins', './plugins/pelican-plugins']
PLUGINS = [
    'summary',       # auto-summarizing articles
    'feed_summary',  # use summaries for RSS, not full articles
    'ipynb.liquid',  # for embedding notebooks
    'liquid_tags.img',  # embedding images
    'liquid_tags.video',  # embedding videos
    'liquid_tags.include_code',  # including code blocks
    'liquid_tags.literal'
]
IGNORE_FILES = ['.ipynb_checkpoints']

# for liquid tags
CODE_DIR = 'downloads/code'
NOTEBOOK_DIR = 'downloads/notebooks'

# THEME SETTINGS
THEME = './theme/'

# List of menu pages to show on the menu bar
ABOUT_PAGE = '/pages/about-me.html'
PROJECTS_PAGE = '/pages/projects.html'
PUBS_PAGE = '/pages/publications.html'
TUTORIALS_PAGE = '/pages/tutorials.html'
NOTES_PAGE = '/pages/notes.html'

# About page
#TWITTER_USERNAME = 'jakevdp'
GITHUB_USERNAME = 'cocoaaa'
#STACKOVERFLOW_ADDRESS = 'http://stackoverflow.com/users/2937831/jakevdp'
# AUTHOR_WEBSITE = 'http://vanderplas.com'
AUTHOR_BLOG = 'http://cocoaaa.github.io'
#AUTHOR_CV = "http://staff.washington.edu/jakevdp/media/pdfs/CV.pdf"

SHOW_ARCHIVES = True
SHOW_FEED = False  # Need to address large feeds
ENABLE_MATHJAX = True

STATIC_PATHS = ['images', 'figures', 'videos', 'downloads', 'favicon.ico']

# Footer info
#LICENSE_URL = "https://github.com/jakevdp/jakevdp.github.io-source/blob/master/LICENSE"
LICENSE = "MIT"
