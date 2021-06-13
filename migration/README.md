# CMS Migration

1. Markdown conversions (Really html)

   - Rename from mdtext to md
   - Use // hrefs instead of http or https

   See [changes.txt](changes.txt)

2. Theme Template

   CMS templates were converted into `base.html`

3. Configuration

   See [pelicanconf.py](../pelicanconf.py)

4. Pelican ASF plugin configuration

   [asfgenid.py](../theme/plugins/asfgenid.py)

   - 'unsafe_tags': True  # allow style, script, and iframe tags
   - 'metadata': False    # no metadata replacement in markdown files
   - 'elements': False    # CMS didn't use mdx_elementid featuresz
   - 'headings': False    # Do not fix up headings w/ permalinks
   - 'headings_re': r'^h[1-4]'
   - 'permalinks': False,
   - 'toc': False         # does not use [TOC]
   - 'toc_headers': r"h[1-4]",
   - 'tables': False      # Do not fix up for markdown table class
