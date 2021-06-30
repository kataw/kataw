# Kataw parser test case

## Input

`````js
var a = b ? (c + e) : d => c+e;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 9,
                                "end": 11
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 19
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 19,
                                "end": 21
                            },
                            "alternate": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 26
                                },
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var a = b ? (c + e) : d => c+e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

var a = b ? (c + e) : d => c + e;

```

### Diagnostics

```javascript
✔ No errors
```

