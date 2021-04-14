# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * \n { yield: 12 }
## Input

`````js
yield * \n { yield: 12 }
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
                    "kind": 81921,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 7,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 9,
                "end": 10
            },
            "flags": 128,
            "start": 9,
            "end": 10
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 12,
                            "end": 18
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 18
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 12,
                "end": 18
            },
            "flags": 128,
            "start": 10,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 19,
                "end": 22
            },
            "flags": 128,
            "start": 19,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 7,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22,
            "end": 24
        }
    ],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * \n { yield: 12 }
## Input

`````js
yield * \n { yield: 12 }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield * \n { yield: 12 }
## Input

`````js
yield * \n { yield: 12 }
`````
```

