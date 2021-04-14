# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: import(x,import(y))
## Input

`````js
import(x,import(y))
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 768,
                                "start": 9,
                                "end": 15
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 16,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 15,
                            "end": 18
                        },
                        "flags": 128,
                        "start": 15,
                        "end": 18
                    }
                ],
                "flags": 256,
                "start": 6,
                "end": 18
            },
            "flags": 128,
            "start": 6,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "import(x,import(y))",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
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
- Path: l
> :: test: lexical
> :: case: import(x,import(y))
## Input

`````js
import(x,import(y))
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: import(x,import(y))
## Input

`````js
import(x,import(y))
`````
```

