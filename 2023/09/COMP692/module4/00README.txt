=== imac2.breyer.com === vim: ft=sec tw=78 nohls

First thing to do to create a new Node project is initialize

The init command will create a node_modules subdirectory

The -y says create default package.json.  Without which npm will prompt you
for things to fill out package.json.

    % npm -y init

Note:   Because node_modules is big, npm makes it easy to autogenerate.
        So I have .gitignore ignore the node_modules subdirectory

When creating a new instance of the project, copy everything but the
node_modules directory.  And run,

    % npm install

In order to install non-global packages

    % npm install <pkg>

Note:   If you append -g after the pkg, it will install into global space.
        This could be a good thing with Homebrew.


