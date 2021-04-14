# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: /false//a
## Input

`````js
do( /false//a while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 19,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 221,
                            "text": "/false/",
                            "flags": 768,
                            "start": 3,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "right": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 13
                },
                "flags": 128,
                "start": 2,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "do( /false//a while",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 19,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 19
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: /false//a
## Input

`````js
do( /false//a while
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: /false//a
## Input

`````js
do( /false//a while
`````
```

