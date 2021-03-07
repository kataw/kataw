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
    "kind": 196,
    "source": "#",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "#",
                    "rawText": "",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 1,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

```

