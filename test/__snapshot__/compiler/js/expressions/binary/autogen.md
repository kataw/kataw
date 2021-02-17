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
