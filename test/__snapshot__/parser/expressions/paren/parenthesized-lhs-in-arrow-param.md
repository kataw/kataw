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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 34,
                    "end": 37
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 2,
                            "end": 4
                        },
                        "right": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 4,
                                "end": 13
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 15,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 13,
                                "end": 17
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
                                                                    "start": 22,
                                                                    "end": 23
                                                                },
                                                                "flags": 32,
                                                                "start": 21,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 21,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "start": 19,
                                                    "end": 25
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
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
                                                                "start": 29,
                                                                "end": 30
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 19,
                                                "end": 31
                                            },
                                            "flags": 16,
                                            "start": 19,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 19,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 33
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 4,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 33
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 40
                },
                "flags": 34,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "(a = function (a) { [(a)] = [0] }) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

(a = function (a) {
  [(a)] = [0];
}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

