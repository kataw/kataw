# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-method
> :: test: obj-method
> :: case: var f = function { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ method() { var f = function { super(); } } })
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
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 45
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "({ method() { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

