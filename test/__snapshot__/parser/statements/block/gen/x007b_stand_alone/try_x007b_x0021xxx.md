# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: { stand alone
> :: case: try { !xxx
## Input

`````js
{ try { !xxx
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "flags": 16,
                                        "start": 7,
                                        "end": 12
                                    }
                                ],
                                "flags": 16,
                                "start": 7,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 5,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 12

```

