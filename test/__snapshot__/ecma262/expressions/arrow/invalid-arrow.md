# Kataw parser test case

## Input

`````js
x = (a)?c:d=>{}=>{}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 3,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 7
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 8
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 10
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
                            "transformFlags": 0,
                            "start": 10,
                            "end": 11
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 35,
                    "transformFlags": 4096,
                    "start": 3,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "x = (a)?c:d=>{}=>{}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 15, end: 17

```

