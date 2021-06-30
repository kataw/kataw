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
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 67174651,
                    "text": "#",
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "x + #",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 3, end: 5
✖ Private identifiers are not allowed outside class_bodies - start: 3, end: 5

```

