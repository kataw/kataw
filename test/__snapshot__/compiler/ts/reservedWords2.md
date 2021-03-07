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
    "kind": 196,
    "source": "var typeof = 10;\nfunction throw() {}\nvar {while, return} = { while: 1, return: 2 };\nvar {this, switch: { continue} } = { this: 1, switch: { continue: 2 }};\nvar [debugger, if] = [1, 2];\nenum void {}\n\n\n\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 2,
                "intersects": false,
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
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 2,
                        "intersects": false,
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
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
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
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 25,
                    "end": 25
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 2,
                    "intersects": false,
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
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 0,
                                "intersects": false,
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
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 16384,
                                "intersects": false,
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
                                            "kind": 243,
                                            "binding": {
                                                "kind": 33554598,
                                                "propertyList": {
                                                    "kind": 33,
                                                    "properties": [],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "transformFlags": 1025,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 42,
                                                    "end": 42
                                                },
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 40,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 16386,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 42
                            },
                            {
                                "kind": 2097399,
                                "expression": {
                                    "kind": 65590,
                                    "expressions": [
                                        {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 47
                                        },
                                        {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 48
                                },
                                "statement": {
                                    "kind": 2097346,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 55
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 55
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 55
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 56
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 16,
                "end": 56
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097399,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 66
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 6,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 66
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 66
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 66
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 66
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 58,
                "end": 66
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 69
                        },
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 70
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 70
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 67,
                "end": 70
            },
            {
                "kind": 2097346,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 77
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 70,
                "end": 77
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 2,
                    "rawText": "2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 80
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 78,
                "end": 80
            },
            {
                "kind": 6291526,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 82,
                "end": 83
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
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
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 89,
                                                "end": 93
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 89,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 89,
                                    "end": 94
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 87,
                                "end": 94
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 87,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 94
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 94
                },
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "start": 83,
                "end": 94
            },
            {
                "kind": 2097362,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 101
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 101
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 94,
                "end": 101
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097212,
                            "label": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 113
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 113
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 102,
                "end": 114
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097292,
                            "label": {
                                "kind": 4260571,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 125
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65590,
                                    "expressions": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 128
                                        },
                                        {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 129,
                                            "end": 129
                                        }
                                    ],
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 129
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 126,
                                "end": 129
                            },
                            "isWebCompat": true,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 129
                        },
                        {
                            "kind": 2097362,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 136,
                                "end": 136
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [],
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 136,
                                "end": 136
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 129,
                            "end": 136
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 136
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 118,
                "end": 136
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097212,
                            "label": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 148
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 148
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 148
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 137,
                "end": 148
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261540,
                    "text": 2,
                    "rawText": "2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 151
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 149,
                "end": 151
            },
            {
                "kind": 6291526,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 154,
                "end": 155
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 161,
                                    "end": 161
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 159,
                                "end": 161
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 159,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 161
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 161
                },
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "start": 155,
                "end": 161
            },
            {
                "kind": 6291518,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 161,
                "end": 169
            },
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 173
                },
                "consequent": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 173,
                        "end": 173
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 173
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 170,
                "end": 173
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 178,
                                "end": 179
                            },
                            {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 180,
                                "end": 182
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 178,
                        "end": 182
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 183
                },
                "flags": 0,
                "intersects": false,
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
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 189
                },
                "flags": 0,
                "intersects": false,
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
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 196,
                            "end": 196
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 194,
                        "end": 197
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 197
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 189,
                "end": 197
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 197
    },
    "jsx": false,
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
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

