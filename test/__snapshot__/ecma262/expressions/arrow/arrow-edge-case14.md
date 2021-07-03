# Kataw parser test case

## Input

`````js
a ? b ? (c => d) : e => (f => g) : h => i;
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
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 5,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 9,
                                "end": 10
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 16
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 16,
                        "end": 18
                    },
                    "alternate": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 20,
                            "end": 23
                        },
                        "contents": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 25,
                                "end": 36
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "h",
                                        "rawText": "h",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 34,
                                    "end": 36
                                },
                                "flags": 2097152,
                                "start": 34,
                                "end": 36
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 36,
                                "end": 39
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 39,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 41
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 41
                    },
                    "flags": 96,
                    "start": 3,
                    "end": 41
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 41,
                    "end": 41
                },
                "flags": 96,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "a ? b ? (c => d) : e => (f => g) : h => i;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 32, end: 34
✖ The left hand side of the arrow is not destructible  - start: 32, end: 34
✖ Identifier expected - start: 41, end: 42

```

