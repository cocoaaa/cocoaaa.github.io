Title: Let's blog with Pelican
Date: 2020-01-10
Modified: 2020-01-11

## Makefile
1. `make html`: generates output html files from files in `content` folder using
development config file
    - `make regenerate`: do `make html` with "listening" to new changes
    - vs. `make publish`: similar to `make html` except it uses settings in `pulishconf.py`
 
2. `make devserver`: (re)starts a http server in the `output` folder. Default port is 8000
3. Go to `localhost:<PORT>` to see the output website
4. `ghp-import -b <local-gh-branch> <outputdir>`: imports content in <output> to 
the local branch `local-gh-branch`

## Workflow
Key: Do every work in `dev` branch. Do not touch `blog-build` or `master`. 
`blog-build` will be indirectly modified by `ghp-import` (or `make publish-to-github`)
and `master` is the branch that Github will access to show my website. 
So, manage the source (and outputs) only in `dev` branch.

- Local dev
```bash
conda activate pelican-blog
cd ~/Workspace/Blog

# Make sure you are on `dev` branch
git checkout dev

# Add new files  under `content`
git add my-article.md

# Generate the content with pelican
make html # or, make regenerate 

# Start a local server 
make devserver

# Open a browser and go to localhost:8000
```

- Global dev  
    1. Use `make publish` instead of `make html`
    2. Update the `blog-build` branch with contents in `output` folder
    3. Push the `blog-build` branch's content to `origin/master`
    
    These three steps can be done in one line: 
```bash
make publish-to-github
```
   
- Version control the source  
  Important: Write new contents only on the `dev` branch
```bash
git add <files> # make sure not to push the output folder
git cm "<commit message>"
git push origin dev #origin/dev is the remote branch that keeps track of blog sources
```


