# Kataw parser test case

## Input

`````js
({ '__': null });

({ '__'() {} });

({ ['__']: null });

class X { '__' = null }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ '__': null });\n\n({ '__'() {} });\n\n({ ['__']: null });\n\nclass X { '__' = null }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 4261583,
                                    "text": "__",
                                    "rawText": "__",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 16844946,
                                "name": {
                                    "kind": 4261583,
                                    "text": "__",
                                    "rawText": "__",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 26
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 28
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 31
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 31
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 34
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 65591,
                                    "expression": {
                                        "kind": 4261583,
                                        "text": "__",
                                        "rawText": "__",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 131073,
                                    "start": 39,
                                    "end": 46
                                },
                                "right": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 52
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 52
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 54
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 55
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 56
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "X",
                "rawText": "X",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 63,
                "end": 65
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 4261583,
                            "text": "__",
                            "rawText": "__",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 72
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4260512,
                            "text": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 79
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 67,
                        "end": 79
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 67,
                "end": 81
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 56,
            "end": 81
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

