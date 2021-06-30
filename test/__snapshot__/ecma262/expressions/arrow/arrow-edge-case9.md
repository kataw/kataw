# Kataw parser test case

## Input

`````js
a ? (b) : c => <T>(d) : e => f;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 7
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 11,
                        "end": 14
                    },
                    "contents": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": {
                            "kind": 307,
                            "declarations": {
                                "kind": 337,
                                "parameters": [
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "type": null,
                                        "assignToken": null,
                                        "defaultType": null,
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 16,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 14,
                            "end": 18
                        },
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 19,
                            "end": 25
                        },
                        "returnType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 2097152,
                            "start": 23,
                            "end": 25
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 25,
                            "end": 28
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "a ? (b) : c => <T>(d) : e => f;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

a ? (b) : c => <T>(d) => f;

```

### Diagnostics

```javascript
✔ No errors
```

