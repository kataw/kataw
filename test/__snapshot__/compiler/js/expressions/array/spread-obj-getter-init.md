# Kataw parser test case

## Input

`````js
let o = {a: 2, b: 3};
let executedGetter = false;


var callCount = 0;

(function(obj) {
}.apply(null, [{...o, get c() {}}]));
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let o = {a: 2, b: 3};\nlet executedGetter = false;\n\n\nvar callCount = 0;\n\n(function(obj) {\n}.apply(null, [{...o, get c() {}}]));",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "o",
                            "rawText": "o",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 13
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 20
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 20
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 21
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "executedGetter",
                            "rawText": "executedGetter",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 25,
                            "end": 40
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4260391,
                            "text": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 48
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 48
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 48
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 21,
            "end": 49
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "callCount",
                            "rawText": "callCount",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 55,
                            "end": 65
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 55,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 69
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 69
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 49,
            "end": 70
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 82,
                                            "end": 85
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 82,
                                        "end": 85
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 86
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 88
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 90
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 90
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 96
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 90,
                        "end": 96,
                        "period": {
                            "kind": 255,
                            "pos": 90,
                            "end": 91
                        }
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 101
                            },
                            {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 98984,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65741,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 108,
                                                            "end": 109
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 4104,
                                                        "start": 108,
                                                        "end": 109
                                                    },
                                                    {
                                                        "kind": 16844946,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 114,
                                                            "end": 116
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 117,
                                                            "end": 118
                                                        },
                                                        "isSetter": false,
                                                        "isGetter": true,
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 120,
                                                                "end": 120
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 118,
                                                            "end": 121
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 116,
                                                        "end": 121
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 105,
                                                "end": 121
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 104,
                                            "end": 122
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 104,
                                    "end": 122
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 123
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 101,
                        "end": 124
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 124
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 70,
                "end": 125
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 70,
            "end": 126
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
    "end": 126
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

