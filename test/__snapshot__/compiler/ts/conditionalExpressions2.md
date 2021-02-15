# Kataw parser test case

## Input

`````js
var a = false ? 1 : null;
var b = false ? undefined : 0;
var c = false ? 1 : 0;
var d = false ? false : true;
var e = false ? "foo" : "bar";
var f = false ? null : undefined;
var g = true ? {g:5} : null;
var h = [{h:5}, null];
function i() { if (true) { return { x: 5 }; } else { return null; } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var a = false ? 1 : null;\nvar b = false ? undefined : 0;\nvar c = false ? 1 : 0;\nvar d = false ? false : true;\nvar e = false ? \"foo\" : \"bar\";\nvar f = false ? null : undefined;\nvar g = true ? {g:5} : null;\nvar h = [{h:5}, null];\nfunction i() { if (true) { return { x: 5 }; } else { return null; } }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 7,
                                    "end": 13
                                },
                                "consequent": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 17
                                },
                                "alternate": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 19,
                                    "end": 24
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 7,
                                "end": 24
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 24
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 24
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 25
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 29,
                                "end": 31
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 39
                                },
                                "consequent": {
                                    "kind": 196712,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 41,
                                    "end": 51
                                },
                                "alternate": {
                                    "kind": 4261540,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 53,
                                    "end": 55
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 33,
                                "end": 55
                            },
                            "flags": 29,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 55
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 29,
                    "end": 55
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 25,
                "end": 56
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 60,
                                "end": 62
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 64,
                                    "end": 70
                                },
                                "consequent": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 72,
                                    "end": 74
                                },
                                "alternate": {
                                    "kind": 4261540,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 76,
                                    "end": 78
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 64,
                                "end": 78
                            },
                            "flags": 60,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 78
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 60,
                    "end": 78
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 56,
                "end": 79
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 83,
                                "end": 85
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 87,
                                    "end": 93
                                },
                                "consequent": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 95,
                                    "end": 101
                                },
                                "alternate": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 103,
                                    "end": 108
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 87,
                                "end": 108
                            },
                            "flags": 83,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 108
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 83,
                    "end": 108
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 79,
                "end": 109
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "e",
                                "rawText": "e",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 113,
                                "end": 115
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 117,
                                    "end": 123
                                },
                                "consequent": {
                                    "kind": 67279,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 125,
                                    "end": 131
                                },
                                "alternate": {
                                    "kind": 67279,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 133,
                                    "end": 139
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 117,
                                "end": 139
                            },
                            "flags": 113,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 139
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 113,
                    "end": 139
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 109,
                "end": 140
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 144,
                                "end": 146
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 148,
                                    "end": 154
                                },
                                "consequent": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 156,
                                    "end": 161
                                },
                                "alternate": {
                                    "kind": 196712,
                                    "text": "undefined",
                                    "rawText": "undefined",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 163,
                                    "end": 173
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 148,
                                "end": 173
                            },
                            "flags": 144,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 173
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 144,
                    "end": 173
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 140,
                "end": 174
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "g",
                                "rawText": "g",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 178,
                                "end": 180
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 182,
                                    "end": 187
                                },
                                "consequent": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 191,
                                                    "end": 192
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 193,
                                                    "end": 194
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 191,
                                                "end": 194
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 191,
                                        "end": 194
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 189,
                                    "end": 195
                                },
                                "alternate": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 197,
                                    "end": 202
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 182,
                                "end": 202
                            },
                            "flags": 178,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 202
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 178,
                    "end": 202
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 174,
                "end": 203
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "h",
                                "rawText": "h",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 207,
                                "end": 209
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "h",
                                                            "rawText": "h",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 214,
                                                            "end": 215
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 5,
                                                            "rawText": "5",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 216,
                                                            "end": 217
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 214,
                                                        "end": 217
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 214,
                                                "end": 217
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 213,
                                            "end": 218
                                        },
                                        {
                                            "kind": 4260512,
                                            "text": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 219,
                                            "end": 224
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 213,
                                    "end": 224
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 211,
                                "end": 225
                            },
                            "flags": 207,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 225
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 207,
                    "end": 225
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 203,
                "end": 226
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "i",
                    "rawText": "i",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 235,
                    "end": 237
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 238,
                    "end": 239
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097257,
                                "expression": {
                                    "kind": 4260391,
                                    "text": true,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 246,
                                    "end": 250
                                },
                                "consequent": {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 67224232,
                                                    "propertyList": {
                                                        "kind": 65722,
                                                        "properties": [
                                                            {
                                                                "kind": 65721,
                                                                "left": {
                                                                    "kind": 196711,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 262,
                                                                    "end": 264
                                                                },
                                                                "right": {
                                                                    "kind": 4261540,
                                                                    "text": 5,
                                                                    "rawText": "5",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 265,
                                                                    "end": 267
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 262,
                                                                "end": 267
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 262,
                                                        "end": 267
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 260,
                                                    "end": 269
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 253,
                                                "end": 270
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 253,
                                        "end": 270
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 251,
                                    "end": 272
                                },
                                "alternate": {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4260512,
                                                    "text": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 286,
                                                    "end": 291
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 279,
                                                "end": 292
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 279,
                                        "end": 292
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 277,
                                    "end": 294
                                },
                                "isWebCompat": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 241,
                                "end": 294
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 241,
                        "end": 294
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 239,
                    "end": 296
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 226,
                "end": 296
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 296
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 296
}
```

### Printed


```javascript

var a = false ? 1 : null;

var b = false ? undefined : 0;

var c = false ? 1 : 0;

var d = false ? false : true;

var e = false ? "foo" : "bar";

var f = false ? null : undefined;

var g = true ? { g : 5 } : null;

var h = [{ h : 5 }, null];

function i() { if (true) {
    return { x : 5 };
}
else {
    return null;
} }

```

### Diagnostics


```javascript
No errors!
```

