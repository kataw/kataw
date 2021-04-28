# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a + b / c
> `````

> `````js
> a / b + c
> `````

> `````js
> a instanceof b > c
> `````

> `````js
> a instanceof b + c
> `````

> `````js
> a + b instanceof c
> `````

> `````js
> a > b instanceof c
> `````

> `````js
> a + b ** c
> `````

> `````js
> a ** b + c
> `````

### Templates

#### toplevel

`````js
#
`````

#### in array

`````js
[ # ]
`````


#### in object

`````js
x = { a: # }
`````

#### in computed key

`````js
x = {[ # ]: y}
`````

#### if header

`````js
if ( # ) ;
`````

#### for header

`````js
for ( # ;;);
`````

#### do

`````js
do # while (x);
`````

#### call

`````js
foo( # )
`````

#### group

`````js
( # )
`````

#### typeof arg

`````js
typeof #
`````

#### comma

`````js
x, #
`````

#### dynamic property

`````js
foo[ # ]
`````

#### assignment

`````js
x = #
`````

#### yield

`````js
function *f() {
  yield #
}
`````

#### spread

`````js
[ ... # ]
`````

#### rest assignment destructuring

`````js
[ ... # ] = x
`````

#### rest param destructuring

`````js
([ ... # ]) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "text": "#",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid character - start: 0, end: 1
@{x2716}@ Private identifiers are not allowed outside class_bodies - start: 0, end: 1

```

