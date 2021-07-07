# Kataw parser test case

## Input

`````js
// no-confusing-arrow
var x = a => 1 ? 2 : 3;
var x = a <= 1 ? 2 : 3;

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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            },
                            "contents": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "consequent": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "alternate": {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 34,
                                "end": 44
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 44
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 25,
                        "end": 44
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 45,
                "end": 49
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 51
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "operatorToken": {
                                    "kind": 34880,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 58
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 60
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 53,
                                "end": 60
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 64
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 66
                            },
                            "alternate": {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 68
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 53,
                            "end": 68
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 49,
                        "end": 68
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 49,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 45,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "// no-confusing-arrow\nvar x = a => 1 ? 2 : 3;\nvar x = a <= 1 ? 2 : 3;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
var x = a => 1 ? 2 : 3;
var x = a <= 1 ? 2 : 3;

```

### Diagnostics

```javascript
✔ No errors
```

