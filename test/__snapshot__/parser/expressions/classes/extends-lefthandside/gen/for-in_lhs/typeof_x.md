# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: typeof x
## Options

`````js
{}
`````
## Input

`````js
for (typeof x in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 64,
                    "start": 5,
                    "end": 11
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 5,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 21
            },
            "flags": 80,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for (typeof x in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 16, end: 18

```

