# Kataw parser test case

## Input

`````js
(a: string) => x;

(x, y: string) => z;

([a]: string) => x;

({a}: string) => x;


`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

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
                    "flags": 0,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 3,
                                "end": 10
                            },
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 10
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 33,
                    "end": 36
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 32
                                },
                                "flags": 0,
                                "start": 24,
                                "end": 32
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 17,
                            "end": 32
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "flags": 32,
                "start": 17,
                "end": 38
            },
            "flags": 16,
            "start": 17,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 54,
                    "end": 57
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 43,
                                        "end": 44
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 42,
                            "end": 45
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 46,
                                "end": 53
                            },
                            "flags": 0,
                            "start": 45,
                            "end": 53
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 39,
                        "end": 53
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 57,
                    "end": 59
                },
                "flags": 34,
                "start": 39,
                "end": 59
            },
            "flags": 16,
            "start": 39,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 75,
                    "end": 78
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 64,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 64,
                                "end": 65
                            },
                            "flags": 32,
                            "start": 63,
                            "end": 66
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 67,
                                "end": 74
                            },
                            "flags": 0,
                            "start": 66,
                            "end": 74
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 60,
                        "end": 74
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 78,
                    "end": 80
                },
                "flags": 34,
                "start": 60,
                "end": 80
            },
            "flags": 16,
            "start": 60,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "(a: string) => x;\n\n(x, y: string) => z;\n\n([a]: string) => x;\n\n({a}: string) => x;\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
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

