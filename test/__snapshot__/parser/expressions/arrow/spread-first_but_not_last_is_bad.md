# Kataw parser test case

## Input

`````js
(...x, y) => x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 9,
                    "start": 0,
                    "end": 12
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 1,
                                "start": 512,
                                "end": 4
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 4,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 1,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(...x, y) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A rest parameter must be last in a parameter list - start: 5, end: 6
✖ A rest parameter must be last in a parameter list - start: 5, end: 6

```

