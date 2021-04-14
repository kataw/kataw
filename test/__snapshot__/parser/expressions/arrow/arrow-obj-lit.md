# Kataw parser test case

## Input

`````js
({x=y}) => z;

({x=y}: string) => z;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 5
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 30,
                    "end": 33
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 17,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "flags": 768,
                                "start": 22,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 13,
                        "end": 29
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 33,
                    "end": 35
                },
                "flags": 256,
                "start": 13,
                "end": 35
            },
            "flags": 128,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "({x=y}) => z;\n\n({x=y}: string) => z;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

