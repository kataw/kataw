# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(x,y(
## Input

`````js
import(x,y(
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
                        "kind": 131,
                        "expression": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 11,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 256,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "import(x,y(",
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
            "start": 11,
            "end": 11
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(x,y(
## Input

`````js
import(x,y(
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(x,y(
## Input

`````js
import(x,y(
`````
```

