# Kataw parser test case

## Input

`````js
test
  ? (x: T): U => y
  : z
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 18,
                        "end": 21
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 10,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "initializer": null,
                            "flags": 256,
                            "start": 8,
                            "end": 14
                        }
                    ],
                    "asyncToken": null,
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 768,
                                "start": 16,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 0,
                        "start": 15,
                        "end": 18
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 23
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 23,
                    "end": 27
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 27,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "test\n  ? (x: T): U => y\n  : z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

