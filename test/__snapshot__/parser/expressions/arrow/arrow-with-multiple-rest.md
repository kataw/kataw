# Kataw parser test case

## Input

`````js
(...a, ...b) => 0
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
                    "flags": 12,
                    "start": 0,
                    "end": 15
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
                                "text": "a",
                                "rawText": "a",
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
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 6,
                                "start": 512,
                                "end": 10
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 10,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 6,
                            "end": 11
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "(...a, ...b) => 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

