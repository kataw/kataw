# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do do do false while while while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 14
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 64,
                        "start": 14,
                        "end": 20
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 20
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 64,
                    "start": 20,
                    "end": 26
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 26,
                    "end": 26
                },
                "flags": 80,
                "start": 2,
                "end": 26
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 26,
                "end": 32
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 32,
                "end": 32
            },
            "flags": 80,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do do do false while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 14, end: 20
✖ Missing an opening parentheses - '( - start: 21, end: 26
✖ Missing an opening parentheses - '( - start: 27, end: 32

```

