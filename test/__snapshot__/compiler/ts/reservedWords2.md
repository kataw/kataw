# Kataw parser test case

## Input

`````js
var typeof = 10;
function throw() {}
var {while, return} = { while: 1, return: 2 };
var {this, switch: { continue} } = { this: 1, switch: { continue: 2 }};
var [debugger, if] = [1, 2];
enum void {}




`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var typeof = 10;\nfunction throw() {}\nvar {while, return} = { while: 1, return: 2 };\nvar {this, switch: { continue} } = { this: 1, switch: { continue: 2 }};\nvar [debugger, if] = [1, 2];\nenum void {}\n\n\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65774,
                    "operator": "typeof",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 10
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 10,
                    "rawText": "10",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 3,
            "end": 16
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 25,
                "end": 25
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 36
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 196711,
                                                            "text": "while",
                                                            "rawText": "while",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 47
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 47,
                                                                "end": 47
                                                            },
                                                            "right": null,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 47,
                                                            "end": 47
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 42,
                                                        "end": 47
                                                    },
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 196711,
                                                            "text": "return",
                                                            "rawText": "return",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 55
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 1,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 55,
                                                                "end": 55
                                                            },
                                                            "right": null,
                                                            "flags": 1,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 55,
                                                            "end": 55
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 48,
                                                        "end": 55
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 1,
                                                "symbol": null,
                                                "start": 42,
                                                "end": 55
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 40,
                                            "end": 56
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
                                                            "text": "while",
                                                            "rawText": "while",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 66
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 67,
                                                            "end": 69
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 69
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "return",
                                                            "rawText": "return",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 70,
                                                            "end": 77
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 78,
                                                            "end": 80
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 80
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 80
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 82
                                        },
                                        "flags": 40,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 82
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 82
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 83
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 89,
                                                            "end": 93
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1024,
                                                        "start": 89,
                                                        "end": 93
                                                    },
                                                    {
                                                        "kind": 32,
                                                        "ellipsis": false,
                                                        "key": {
                                                            "kind": 196711,
                                                            "text": "switch",
                                                            "rawText": "switch",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 94,
                                                            "end": 101
                                                        },
                                                        "value": {
                                                            "kind": 16412,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 33554598,
                                                                "propertyList": {
                                                                    "kind": 33,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 32,
                                                                            "ellipsis": false,
                                                                            "key": {
                                                                                "kind": 196711,
                                                                                "text": "continue",
                                                                                "rawText": "continue",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 104,
                                                                                "end": 113
                                                                            },
                                                                            "value": {
                                                                                "kind": 16412,
                                                                                "ellipsis": false,
                                                                                "left": {
                                                                                    "kind": 131102,
                                                                                    "text": "",
                                                                                    "rawText": "",
                                                                                    "flags": 1,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 1025,
                                                                                    "start": 113,
                                                                                    "end": 113
                                                                                },
                                                                                "right": null,
                                                                                "flags": 1,
                                                                                "symbol": null,
                                                                                "transformFlags": 1,
                                                                                "start": 113,
                                                                                "end": 113
                                                                            },
                                                                            "flags": 1,
                                                                            "symbol": null,
                                                                            "transformFlags": 1025,
                                                                            "start": 104,
                                                                            "end": 113
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "trailingComma": false,
                                                                    "transformFlags": 1025,
                                                                    "flags": 1,
                                                                    "symbol": null,
                                                                    "start": 104,
                                                                    "end": 113
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 102,
                                                                "end": 114
                                                            },
                                                            "right": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 102,
                                                            "end": 114
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 94,
                                                        "end": 114
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "transformFlags": 1025,
                                                "flags": 0,
                                                "symbol": null,
                                                "start": 89,
                                                "end": 114
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 87,
                                            "end": 116
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
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 120,
                                                            "end": 125
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 126,
                                                            "end": 128
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 120,
                                                        "end": 128
                                                    },
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "switch",
                                                            "rawText": "switch",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 129,
                                                            "end": 136
                                                        },
                                                        "right": {
                                                            "kind": 98984,
                                                            "propertyList": {
                                                                "kind": 65722,
                                                                "properties": [
                                                                    {
                                                                        "kind": 65721,
                                                                        "left": {
                                                                            "kind": 196711,
                                                                            "text": "continue",
                                                                            "rawText": "continue",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 139,
                                                                            "end": 148
                                                                        },
                                                                        "right": {
                                                                            "kind": 4261540,
                                                                            "text": 2,
                                                                            "rawText": "2",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 149,
                                                                            "end": 151
                                                                        },
                                                                        "accessModifier": null,
                                                                        "decorators": null,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 139,
                                                                        "end": 151
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 139,
                                                                "end": 151
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 137,
                                                            "end": 153
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 129,
                                                        "end": 153
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 120,
                                                "end": 153
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 154
                                        },
                                        "flags": 87,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 154
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 154
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 155
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 161,
                                                "end": 161
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 159,
                                            "end": 161
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 159,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1,
                                        "end": 161
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 161
                            },
                            "flags": 32769,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 161
                        },
                        {
                            "kind": 6291518,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 169
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 169
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 169
            },
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 256,
            "start": 16,
            "end": 169
        },
        {
            "kind": 2097257,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 173,
                "end": 173
            },
            "consequent": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 173
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 173,
                "end": 173
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 170,
            "end": 173
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 178,
                            "end": 179
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 180,
                            "end": 182
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 178,
                    "end": 182
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 176,
                "end": 183
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 176,
            "end": 184
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "enum",
                "rawText": "enum",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 184,
                "end": 189
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 184,
            "end": 189
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "void",
                "operand": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 196,
                        "end": 196
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 194,
                    "end": 197
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 189,
                "end": 197
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 189,
            "end": 197
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 190,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 201
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

