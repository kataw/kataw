# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> x => {}
> `````

> `````js
> async => {}
> `````

> `````js
> (x => {})
> `````

> `````js
> (async => {})
> `````

> `````js
> (x) => {}
> `````

> `````js
> () => {}
> `````

> `````js
> (x, y) => {}
> `````

> `````js
> async x => {}
> `````

> `````js
> async async => {}
> `````

> `````js
> async (x) => {}
> `````

> `````js
> async () => {}
> `````

> `````js
> async (x, y) => {}
> `````

> `````js
> x => ok
> `````

> `````js
> async => ok
> `````

> `````js
> (x) => ok
> `````

> `````js
> () => ok
> `````

> `````js
> (x, y) => ok
> `````

> `````js
> async x => ok
> `````

> `````js
> async async => ok
> `````

> `````js
> async (x) => ok
> `````

> `````js
> async () => ok
> `````

> `````js
> async (x, y) => ok
> `````

### Templates

#### rhs add

`````js
x + #
`````

#### rhs add asi

`````js
x
+ #
`````

#### lhs add

`````js
# + x
`````

#### plus is unary

`````js
#
+ x
`````

#### rhs mul

`````js
x * #
`````

#### rhs mul asi

`````js
x
* #
`````

#### lhs mul

`````js
# * x
`````

#### lhs mul asi

`````js
#
* x
`````

#### rhs div

`````js
x / #
`````

#### rhs div asi

`````js
x
/ #
`````

#### lhs div

`````js
# / x
`````

#### lhs div asi

`````js
#
/ x
`````

#### arrow asi regex

## FAIL

`````js
#
/x/
`````

#### lhs div div

`````js
#
/ x / g
`````

#### rhs pow

`````js
x ** #
`````

#### rhs pow asi

`````js
x
** #
`````

#### lhs pow

`````js
# ** x
`````

#### lhs pow asi

`````js
#
** x
`````

#### dot property

`````js
#.x
`````

#### dynamic property

`````js
#[foo]
`````

#### call

`````js
#()
`````

#### as tag

`````js
#`foo`
`````

#### double

`````js
# #
`````

#### group lhs

`````js
(#) * x
`````

#### group rhs

`````js
x * (#)
`````

#### group lhs asi

`````js
(#)
* x
`````

#### group rhs asi

`````js
x *
(#)
`````

#### yield arg

`````js
function *f() {
  yield #
}
`````

#### await arg

`````js
async function f() {
  await #
}
`````

#### delete arg

`````js
delete #
`````

#### delete paren arg

`````js
delete (#)
`````

#### new arg

`````js
new #
`````

#### extends arg

`````js
class A extends # {}
`````

#### comma lhs

`````js
#, a
`````

#### comma rhs

`````js
a, #
`````

#### comma double

`````js
#, #
`````

#### call arg

`````js
foo(#)
`````

#### call tail

`````js
foo(#).bar
`````

#### template

`````js
`a ${#} b`
`````

#### template tail

`````js
`a ${#} b`.length
`````

#### arr

`````js
[#]
`````

#### arr tail

`````js
[#].x
`````

#### obj

`````js
x = {arrow: #}
`````

#### obj tail

`````js
x = {arrow: #}.y
`````

#### arg default

`````js
function f(a = #) {}
`````

#### prefix update

`````js
++#
`````

#### postfix update

`````js
#++
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x + #",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "+",
                    "right": {
                        "kind": 196712,
                        "text": "#",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 5
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 5,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

