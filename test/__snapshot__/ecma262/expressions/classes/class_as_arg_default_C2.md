# Kataw parser test case

## Input

`````js
f = ([xCls2 = class { static name() {} }]) => {}
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
                    "text": "f",
                    "rawText": "f",
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
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "xCls2",
                                                "rawText": "xCls2",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 11
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 189,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 19
                                                },
                                                "name": null,
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [
                                                            {
                                                                "kind": 278,
                                                                "declareToken": null,
                                                                "decorators": null,
                                                                "staticKeyword": {
                                                                    "kind": 8388716,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 21,
                                                                    "end": 28
                                                                },
                                                                "asyncKeyword": null,
                                                                "setKeyword": null,
                                                                "getKeyword": null,
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "name",
                                                                        "rawText": "name",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 28,
                                                                        "end": 33
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 35
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 37,
                                                                            "end": 37
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 35,
                                                                        "end": 38
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 38
                                                                },
                                                                "flags": 0,
                                                                "transformFlags": 0,
                                                                "start": 28,
                                                                "end": 38
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 38
                                                    },
                                                    "flags": 19,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 40
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 6,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 40
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 42
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 45
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 47
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 48
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 48
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "f = ([xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 42, end: 45

```

