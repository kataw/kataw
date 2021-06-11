# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
(new = x)
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
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 4,
                            "end": 4
                        },
                        "argumentList": null,
                        "flags": 96,
                        "start": 1,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(new = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 4, end: 6
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 4, end: 6

```

