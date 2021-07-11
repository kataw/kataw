# Kataw parser test case

## Input

`````js
a ? (b) : c => d : (e) : f => g;
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
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 5,
                                "end": 6
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 5,
                        "end": 11
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 2097152,
                        "start": 9,
                        "end": 11
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 11,
                        "end": 14
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 3,
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
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 20,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 20,
                        "end": 26
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 26
                    },
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
                    "start": 18,
                    "end": 31
                },
                "flags": 96,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "a ? (b) : c => d : (e) : f => g;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

a ? ( b ) => d : ( e ) => g;

```

### Diagnostics

```javascript
✔ No errors
```

