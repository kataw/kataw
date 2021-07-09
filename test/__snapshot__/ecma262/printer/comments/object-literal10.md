# Kataw parser test case

## Input

`````js
({/*1*/})

({/*1*/}/*3*/=/*4*/c)

({async/*1*/*/*2*/x/*3*/(/*4*/){}});

({/*1*/a=/*2*/c}/*3*/=/*4*/c)

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
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 9
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 12,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 12,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 31
                    },
                    "flags": 268435489,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 32
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 41
                                        },
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 41,
                                            "end": 47
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 53
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 416,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 65
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
                                                    "start": 66,
                                                    "end": 66
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "flags": 416,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 67
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 35,
                            "end": 68
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 68
                },
                "flags": 268435489,
                "transformFlags": 1,
                "start": 0,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 80
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 87
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 87
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 87
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 73,
                        "end": 88
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 94
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 94,
                        "end": 100
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 73,
                    "end": 100
                },
                "flags": 70,
                "transformFlags": 0,
                "start": 35,
                "end": 101
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 70,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "({/*1*/})\n\n({/*1*/}/*3*/=/*4*/c)\n\n({async/*1*/*/*2*/x/*3*/(/*4*/){}});\n\n({/*1*/a=/*2*/c}/*3*/=/*4*/c)\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
({})({} = c)({ async *x() {} });
({ a = c } = c);

```

### Diagnostics

```javascript
✔ No errors
```

