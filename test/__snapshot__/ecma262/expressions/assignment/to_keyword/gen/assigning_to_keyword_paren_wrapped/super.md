# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
(super = x)
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
                    "kind": 125,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 4259935,
                            "flags": 96,
                            "start": 1,
                            "end": 6
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 0,
                "start": 32,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(super = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 1, end: 8
✖ Dot property must be an identifier - start: 6, end: 8
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 6, end: 8

```

