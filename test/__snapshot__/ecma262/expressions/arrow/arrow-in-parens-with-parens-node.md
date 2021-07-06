# Kataw parser test case

## Input

`````js
var asserted1 = <any>((n) => { return n; });
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
                "transformFlags": 0,
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
                            "text": "asserted1",
                            "rawText": "asserted1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 15
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "any",
                                    "rawText": "any",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 21
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 24
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 37
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "n",
                                                        "rawText": "n",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 39
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 30,
                                                    "end": 40
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 42
                                },
                                "flags": 21,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 43
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var asserted1 = <any>((n) => { return n; });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 17

```

