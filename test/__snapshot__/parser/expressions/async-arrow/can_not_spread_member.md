# Kataw parser test case

## Input

`````js
async ([...x.y]) => z
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 16,
                "end": 19
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 11
                                },
                                "argument": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 15
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "flags": 2304,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "async ([...x.y]) => z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left hand side of the arrow is not destructible  - start: 16, end: 19

```

