#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os, sys
import pdb
sys.path.append(os.curdir)
from pelicanconf_blue_penguin import *
print('theme: ', THEME)

# pdb.set_trace()
SITEURL = 'https://cocoaaa.github.io'
RELATIVE_URLS = False

SHOW_FEED = True
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'
FEED_USE_SUMMARY = True  # from the feed_summary plugin

DELETE_OUTPUT_DIRECTORY = True

# DISQUS_SITENAME = "pythonicperambulations"
# GOOGLE_ANALYTICS = "UA-34061646-1"
