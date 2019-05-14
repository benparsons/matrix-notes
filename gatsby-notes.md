# Gatsby notes for matrix.org/blog

The new blog uses GatsbyJS, a React-based static-site-generator.

The repo is currently sitting at https://github.com/benparsons/matrix.org-blog, because it was felt we needed a private repo for drafts, and `matrix-org`  GH org ran out of private issues. In retrospect, a better solution would be to create https://github.com/matrix-org/matrix.org-blog, keep it public, and then use private branches for drafts. Didn't think of that before. Nad and Matthew are currently listed as collaborators on this repo.

To update the blog (matrix.org/blog):

```unix
git clone https://github.com/benparsons/matrix.org-blog.git
cd matrix.org-blog
npm install
gatsby develop
```

This will run a local server which updates nicely. Do:

```unix
gatsby clean
gatsby develop
```

if it seems to break for any reason (mostly I've noticed it caches where you would not expect, like a single component on a page will be cached and not others.)

To add a blog entry:

* make a new mdx file in `[repo-path]/blog/[date]/[filename].mdx`
* add frontmatter as reflected by the other blog files.

To add a page:

I left the sample page "Contacts" at `[repo-path]/src/pages/contact.js` - this is React on the inside and can be used as a template for new pages.

To create and deploy a new version

```unix
gatsby clean
gatsby build
cd public
scp -r blog horme.matrix.org:/sites/matrix.org/
```
