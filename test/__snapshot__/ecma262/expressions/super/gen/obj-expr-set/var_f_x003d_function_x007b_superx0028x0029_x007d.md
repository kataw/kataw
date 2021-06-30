# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-set
> :: test: obj-expr-set
> :: case: var f = function { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ set x(_) { var f = function { super(); } } })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 45
                },
                "flags": 32,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "({ set x(_) { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 31, end: 32
✖ Object property expected - start: 38, end: 39
✖ ',' expected - start: 38, end: 39
✖ Expected a ')' to match the '(' token here - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 48

```

