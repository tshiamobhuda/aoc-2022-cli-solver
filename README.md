oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aoc2022
$ aoc22 COMMAND
running command...
$ aoc22 (--version)
aoc2022/0.0.0 darwin-arm64 node-v14.21.1
$ aoc22 --help [COMMAND]
USAGE
  $ aoc22 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aoc22 hello PERSON`](#aoc22-hello-person)
* [`aoc22 hello world`](#aoc22-hello-world)
* [`aoc22 help [COMMANDS]`](#aoc22-help-commands)
* [`aoc22 plugins`](#aoc22-plugins)
* [`aoc22 plugins:install PLUGIN...`](#aoc22-pluginsinstall-plugin)
* [`aoc22 plugins:inspect PLUGIN...`](#aoc22-pluginsinspect-plugin)
* [`aoc22 plugins:install PLUGIN...`](#aoc22-pluginsinstall-plugin-1)
* [`aoc22 plugins:link PLUGIN`](#aoc22-pluginslink-plugin)
* [`aoc22 plugins:uninstall PLUGIN...`](#aoc22-pluginsuninstall-plugin)
* [`aoc22 plugins:uninstall PLUGIN...`](#aoc22-pluginsuninstall-plugin-1)
* [`aoc22 plugins:uninstall PLUGIN...`](#aoc22-pluginsuninstall-plugin-2)
* [`aoc22 plugins update`](#aoc22-plugins-update)

## `aoc22 hello PERSON`

Say hello

```
USAGE
  $ aoc22 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/tshiamobhuda/aoc-2022-cli-solver/blob/v0.0.0/dist/commands/hello/index.ts)_

## `aoc22 hello world`

Say hello world

```
USAGE
  $ aoc22 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ aoc22 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `aoc22 help [COMMANDS]`

Display help for aoc22.

```
USAGE
  $ aoc22 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aoc22.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `aoc22 plugins`

List installed plugins.

```
USAGE
  $ aoc22 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aoc22 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `aoc22 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aoc22 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aoc22 plugins add

EXAMPLES
  $ aoc22 plugins:install myplugin 

  $ aoc22 plugins:install https://github.com/someuser/someplugin

  $ aoc22 plugins:install someuser/someplugin
```

## `aoc22 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aoc22 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aoc22 plugins:inspect myplugin
```

## `aoc22 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aoc22 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aoc22 plugins add

EXAMPLES
  $ aoc22 plugins:install myplugin 

  $ aoc22 plugins:install https://github.com/someuser/someplugin

  $ aoc22 plugins:install someuser/someplugin
```

## `aoc22 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ aoc22 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aoc22 plugins:link myplugin
```

## `aoc22 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aoc22 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc22 plugins unlink
  $ aoc22 plugins remove
```

## `aoc22 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aoc22 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc22 plugins unlink
  $ aoc22 plugins remove
```

## `aoc22 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aoc22 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aoc22 plugins unlink
  $ aoc22 plugins remove
```

## `aoc22 plugins update`

Update installed plugins.

```
USAGE
  $ aoc22 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
