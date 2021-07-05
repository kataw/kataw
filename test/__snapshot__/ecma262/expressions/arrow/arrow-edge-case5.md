# Kataw parser test case

## Input

`````js
a ? (b = (c) => d) : e => f : g;
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
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 6
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 5,
                        "end": 22
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
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 2097152,
                        "start": 20,
                        "end": 22
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 22,
                        "end": 25
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 34,
                    "start": 3,
                    "end": 27
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 27,
                    "end": 29
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 29,
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
    "source": "a ? (b = (c) => d) : e => f : g;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

a ? (b = (c) =>  d) =>  f : g;
```

### Diagnostics

```javascript
✔ No errors
```

