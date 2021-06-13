# Kataw parser test case

## Input

`````js
([x: string = y, z: number]) =>  {};
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
                    "flags": 64,
                    "start": 28,
                    "end": 31
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 26
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 16,
                                    "end": 26
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "flags": 2097152,
                                        "start": 3,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 27
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 35
                },
                "flags": 34,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "([x: string = y, z: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

([, ]) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

