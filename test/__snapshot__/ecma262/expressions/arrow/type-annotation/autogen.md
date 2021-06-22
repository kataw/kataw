# Kataw parser test case

> Auto-generated tests to test type annotation in arrows
>

### Cases

> `````js
> ([...x: string]) =>  {};
> `````

> `````js
> ([x: string]: string) =>  {};
> `````

> `````js
> (x: string, [x: string]: string) =>  {};
> `````

> `````js
> (x: string, [y: string]: string) =>  {};
> `````

> `````js
> (x: string, ...[y: string]: string) =>  {};
> `````

> `````js
> (x: string, ...[y: string]: string):number =>  {};
> `````

> `````js
> (x: string, {}: object, ...[y: string]: string):number =>  {};
> `````

> `````js
> (a?: string):number =>  {};
> `````

> `````js
> (a?):number =>  {};
> `````

> `````js
> (a: string):number =>  {};
> `````

> `````js
> ([a]?: string):number =>  {};
> `````

> `````js
> ({a}?: string):number =>  {};
> `````

> `````js
> (...{a}?: string):number =>  {};
> `````

> `````js
> (...[a]?: string):number =>  {};
> `````

> `````js
> (x: string) => ok
> `````

> `````js
> (): number => 1
> `````

> `````js
> (x: string = y, z) => ok
> `````

> `````js
> ([x]: string = y, z) => ok
> `````

> `````js
> ({x}: string = y, z) => ok
> `````

> `````js
> ([x]: string = y, z = y) => ok
> `````

> `````js
> ({x}: string = y, z?) => ok
> `````

> `````js
> ({x: [y: string]}: string = y, z?) => ok
> `````

> `````js
> ([{x: [y: string]}]: string = y, z?) => ok
> `````

### Templates

#### stand alone

`````js
#
`````

#### strict directive

`````js
"use strict"; #
`````
