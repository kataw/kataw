# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch try {}
## Input

`````js
{[ catch try {}
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
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 2
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 2
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 8,
                    "end": 8
                },
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 12,
                "end": 15
            },
            "flags": 128,
            "start": 2,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "{[ catch try {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 12
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch try {}
## Input

`````js
{[ catch try {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: catch try {}
## Input

`````js
{[ catch try {}
`````
```

