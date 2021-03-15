# Kataw parser test case

## Input

`````js
function f0() {
    var a = [1, 2, 3];
    var a1 = [...a];
    var a2 = [1, ...a];
    var a3 = [1, 2, ...a];
    var a4 = [...a, 1];
    var a5 = [...a, 1, 2];
    var a6 = [1, 2, ...a, 1, 2];
    var a7 = [1, ...a, 2, ...a];
    var a8 = [...a, ...a, ...a];
}

function f1() {
    var a = [1, 2, 3];
    var b = ["hello", ...a, true];
    var b: (string | number | boolean)[];
}

function f2() {
    var a = [...[...[...[...[...[]]]]]];
    var b = [...[...[...[...[...[5]]]]]];
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function f0() {\n    var a = [1, 2, 3];\n    var a1 = [...a];\n    var a2 = [1, ...a];\n    var a3 = [1, 2, ...a];\n    var a4 = [...a, 1];\n    var a5 = [...a, 1, 2];\n    var a6 = [1, 2, ...a, 1, 2];\n    var a7 = [1, ...a, 2, ...a];\n    var a8 = [...a, ...a, ...a];\n}\n\nfunction f1() {\n    var a = [1, 2, 3];\n    var b = [\"hello\", ...a, true];\n    var b: (string | number | boolean)[];\n}\n\nfunction f2() {\n    var a = [...[...[...[...[...[]]]]]];\n    var b = [...[...[...[...[...[5]]]]]];\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f0",
                "rawText": "f0",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 36
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 36
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 37
                                        },
                                        "flags": 23,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 37
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 37
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 38
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
                                            "text": "a1",
                                            "rawText": "a1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 46,
                                            "end": 49
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 56,
                                                            "end": 57
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 53,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 57
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 58
                                        },
                                        "flags": 46,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 58
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 58
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 59
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
                                            "text": "a2",
                                            "rawText": "a2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 67,
                                            "end": 70
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 74,
                                                        "end": 75
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 80,
                                                            "end": 81
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 76,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 81
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 82
                                        },
                                        "flags": 67,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 82
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 82
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 59,
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
                                            "kind": 131102,
                                            "text": "a3",
                                            "rawText": "a3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 91,
                                            "end": 94
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 98,
                                                        "end": 99
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 100,
                                                        "end": 102
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 107,
                                                            "end": 108
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 103,
                                                        "end": 108
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 98,
                                                "end": 108
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 96,
                                            "end": 109
                                        },
                                        "flags": 91,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 109
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 109
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 110
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
                                            "text": "a4",
                                            "rawText": "a4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 118,
                                            "end": 121
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 128,
                                                            "end": 129
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 125,
                                                        "end": 129
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 130,
                                                        "end": 132
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 125,
                                                "end": 132
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 133
                                        },
                                        "flags": 118,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 133
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 133
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 134
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
                                            "text": "a5",
                                            "rawText": "a5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 142,
                                            "end": 145
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 152,
                                                            "end": 153
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 149,
                                                        "end": 153
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 154,
                                                        "end": 156
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 157,
                                                        "end": 159
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 149,
                                                "end": 159
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 147,
                                            "end": 160
                                        },
                                        "flags": 142,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 160
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 160
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 161
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
                                            "text": "a6",
                                            "rawText": "a6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 169,
                                            "end": 172
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 176,
                                                        "end": 177
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 178,
                                                        "end": 180
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 185,
                                                            "end": 186
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 181,
                                                        "end": 186
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 187,
                                                        "end": 189
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 190,
                                                        "end": 192
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 176,
                                                "end": 192
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 174,
                                            "end": 193
                                        },
                                        "flags": 169,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 193
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 169,
                                "end": 193
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 194
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
                                            "text": "a7",
                                            "rawText": "a7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 202,
                                            "end": 205
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 209,
                                                        "end": 210
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 215,
                                                            "end": 216
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 211,
                                                        "end": 216
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 217,
                                                        "end": 219
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 224,
                                                            "end": 225
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 220,
                                                        "end": 225
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 209,
                                                "end": 225
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 226
                                        },
                                        "flags": 202,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 226
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 226
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 194,
                            "end": 227
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
                                            "text": "a8",
                                            "rawText": "a8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 235,
                                            "end": 238
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 245,
                                                            "end": 246
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 242,
                                                        "end": 246
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 251,
                                                            "end": 252
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 247,
                                                        "end": 252
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 257,
                                                            "end": 258
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 253,
                                                        "end": 258
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 242,
                                                "end": 258
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 240,
                                            "end": 259
                                        },
                                        "flags": 235,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 259
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 235,
                                "end": 259
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 260
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 260
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 262
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 262
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f1",
                "rawText": "f1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 272,
                "end": 275
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 276,
                "end": 277
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 287,
                                            "end": 289
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
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
                                                        "start": 293,
                                                        "end": 294
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 295,
                                                        "end": 297
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 298,
                                                        "end": 300
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 293,
                                                "end": 300
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 291,
                                            "end": 301
                                        },
                                        "flags": 287,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 301
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 287,
                                "end": 301
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 279,
                            "end": 302
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 310,
                                            "end": 312
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261583,
                                                        "text": "hello",
                                                        "rawText": "hello",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 316,
                                                        "end": 323
                                                    },
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 328,
                                                            "end": 329
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 324,
                                                        "end": 329
                                                    },
                                                    {
                                                        "kind": 4260391,
                                                        "text": true,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 330,
                                                        "end": 335
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 316,
                                                "end": 335
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 314,
                                            "end": 336
                                        },
                                        "flags": 310,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 336
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 336
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 302,
                            "end": 337
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 345,
                                            "end": 347
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8369,
                                                "type": {
                                                    "kind": 8432,
                                                    "types": [
                                                        {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 350,
                                                            "end": 356
                                                        },
                                                        {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 358,
                                                            "end": 365
                                                        },
                                                        {
                                                            "kind": 4268070,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 367,
                                                            "end": 375
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 356,
                                                    "end": 375
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 348,
                                                "end": 376
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 348,
                                            "end": 379
                                        },
                                        "initializer": null,
                                        "flags": 345,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 378
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 345,
                                "end": 378
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 337,
                            "end": 379
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 379
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 277,
                "end": 381
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 262,
            "end": 381
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f2",
                "rawText": "f2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 391,
                "end": 394
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 395,
                "end": 396
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 406,
                                            "end": 408
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 98822,
                                                            "elementList": {
                                                                "kind": 65605,
                                                                "elements": [
                                                                    {
                                                                        "kind": 65740,
                                                                        "argument": {
                                                                            "kind": 98822,
                                                                            "elementList": {
                                                                                "kind": 65605,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 65740,
                                                                                        "argument": {
                                                                                            "kind": 98822,
                                                                                            "elementList": {
                                                                                                "kind": 65605,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 65740,
                                                                                                        "argument": {
                                                                                                            "kind": 98822,
                                                                                                            "elementList": {
                                                                                                                "kind": 65605,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 65740,
                                                                                                                        "argument": {
                                                                                                                            "kind": 98822,
                                                                                                                            "elementList": {
                                                                                                                                "kind": 65605,
                                                                                                                                "elements": [],
                                                                                                                                "trailingComma": false,
                                                                                                                                "multiline": false,
                                                                                                                                "flags": 0,
                                                                                                                                "symbol": null,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 432,
                                                                                                                                "end": 432
                                                                                                                            },
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 431,
                                                                                                                            "end": 433
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 2,
                                                                                                                        "start": 428,
                                                                                                                        "end": 433
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 428,
                                                                                                                "end": 433
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 427,
                                                                                                            "end": 434
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 2,
                                                                                                        "start": 424,
                                                                                                        "end": 434
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 424,
                                                                                                "end": 434
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 423,
                                                                                            "end": 435
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 2,
                                                                                        "start": 420,
                                                                                        "end": 435
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 420,
                                                                                "end": 435
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 419,
                                                                            "end": 436
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2,
                                                                        "start": 416,
                                                                        "end": 436
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 416,
                                                                "end": 436
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 415,
                                                            "end": 437
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 412,
                                                        "end": 437
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 412,
                                                "end": 437
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 410,
                                            "end": 438
                                        },
                                        "flags": 406,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 438
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 406,
                                "end": 438
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 398,
                            "end": 439
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 447,
                                            "end": 449
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 65740,
                                                        "argument": {
                                                            "kind": 98822,
                                                            "elementList": {
                                                                "kind": 65605,
                                                                "elements": [
                                                                    {
                                                                        "kind": 65740,
                                                                        "argument": {
                                                                            "kind": 98822,
                                                                            "elementList": {
                                                                                "kind": 65605,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 65740,
                                                                                        "argument": {
                                                                                            "kind": 98822,
                                                                                            "elementList": {
                                                                                                "kind": 65605,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 65740,
                                                                                                        "argument": {
                                                                                                            "kind": 98822,
                                                                                                            "elementList": {
                                                                                                                "kind": 65605,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 65740,
                                                                                                                        "argument": {
                                                                                                                            "kind": 98822,
                                                                                                                            "elementList": {
                                                                                                                                "kind": 65605,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 4261540,
                                                                                                                                        "text": 5,
                                                                                                                                        "rawText": "5",
                                                                                                                                        "flags": 0,
                                                                                                                                        "symbol": null,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 473,
                                                                                                                                        "end": 474
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "multiline": false,
                                                                                                                                "flags": 0,
                                                                                                                                "symbol": null,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 473,
                                                                                                                                "end": 474
                                                                                                                            },
                                                                                                                            "flags": 0,
                                                                                                                            "symbol": null,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 472,
                                                                                                                            "end": 475
                                                                                                                        },
                                                                                                                        "flags": 0,
                                                                                                                        "symbol": null,
                                                                                                                        "transformFlags": 2,
                                                                                                                        "start": 469,
                                                                                                                        "end": 475
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "multiline": false,
                                                                                                                "flags": 0,
                                                                                                                "symbol": null,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 469,
                                                                                                                "end": 475
                                                                                                            },
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 468,
                                                                                                            "end": 476
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 2,
                                                                                                        "start": 465,
                                                                                                        "end": 476
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 465,
                                                                                                "end": 476
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 464,
                                                                                            "end": 477
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 2,
                                                                                        "start": 461,
                                                                                        "end": 477
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 461,
                                                                                "end": 477
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 460,
                                                                            "end": 478
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 2,
                                                                        "start": 457,
                                                                        "end": 478
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 457,
                                                                "end": 478
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 456,
                                                            "end": 479
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 453,
                                                        "end": 479
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 453,
                                                "end": 479
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 451,
                                            "end": 480
                                        },
                                        "flags": 447,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 480
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 447,
                                "end": 480
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 439,
                            "end": 481
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 398,
                    "end": 481
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 396,
                "end": 483
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 381,
            "end": 483
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
    "end": 484
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

