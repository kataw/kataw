# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let  =
## Input

`````js
{[ let  =
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 768,
                                            "start": 2,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 9
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "{[ let  =",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 9,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 9,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 9
        }
    ],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let  =
## Input

`````js
{[ let  =
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let  =
## Input

`````js
{[ let  =
`````
```

