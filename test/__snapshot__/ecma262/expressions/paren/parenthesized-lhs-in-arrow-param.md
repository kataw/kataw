# Kataw parser test case

## Input

`````js
(a = function (a) { [(a)] = [0] }) => {}
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 13
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 23
                                                                    },
                                                                    "flags": 21,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 24
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 24
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "right": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 30
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 30
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 27,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 19,
                                                    "end": 31
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 19,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 33
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 33
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 0,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 34
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 40
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "(a = function (a) { [(a)] = [0] }) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
(a = function (a) {
  [(a)] = [0];
}) => {};
```

### Diagnostics

```javascript
✔ No errors
```

