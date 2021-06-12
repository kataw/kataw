# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: /**/ /x do while
## Options

`````js
{}
`````
## Input

`````js
do do do /**/ /x do while while while while
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
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 43,
                "end": 43
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 43,
                    "end": 43
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 43,
                        "end": 43
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 221,
                            "text": "/x do while while while while",
                            "flags": 96,
                            "start": 8,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 43
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 43
                },
                "flags": 80,
                "start": 2,
                "end": 43
            },
            "flags": 80,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "do do do /**/ /x do while while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 8, end: 43
✖ Missing an opening parentheses - '( - start: 14, end: 43

```

