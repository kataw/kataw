# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> undefined
> `````

> `````js
> Infinity
> `````

### Templates

#### not on no args

`````js
foo(,);
`````

#### not just commas

`````js
foo(,,);
`````

#### one arg

`````js
foo(x,);
`````

#### two args

`````js
foo(x,y,);
`````

#### cannot elide

`````js
foo(a,,);
`````

#### can after spread

`````js
foo(...a,);
`````
