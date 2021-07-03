# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: do
## Options

`````js
{}
`````
## Input

`````js
(do = x)
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
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 1,
                "end": 3
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 3,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 7
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 7,
                "end": 7
            },
            "flags": 80,
            "start": 1,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "(do = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 3
✖ Identifier expected - start: 3, end: 5
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 3, end: 5
✖ Expected a `;` - start: 7, end: 8

```

