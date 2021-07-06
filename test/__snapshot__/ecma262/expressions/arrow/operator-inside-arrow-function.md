# Kataw parser test case

## Input

`````js
0 ? v => (sum += v) : v => 0;
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
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "v",
                        "rawText": "v",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "sum",
                                "rawText": "sum",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 4130,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 8,
                            "end": 18
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 19
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "v",
                        "rawText": "v",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 26
                    },
                    "contents": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "0 ? v => (sum += v) : v => 0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
0 ? v => (sum += v) : v => 0;
```

### Diagnostics

```javascript
✔ No errors
```

