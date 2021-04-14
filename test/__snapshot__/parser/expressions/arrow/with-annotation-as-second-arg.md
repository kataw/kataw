# Kataw parser test case

## Input

`````js
(x, y: string) => x
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
                    "flags": 768,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 0,
                                "start": 5,
                                "end": 13
                            },
                            "initializer": null,
                            "flags": 256,
                            "start": 0,
                            "end": 13
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
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "(x, y: string) => x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

