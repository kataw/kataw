# Kataw parser test case

## Input

`````js
  var a = () { };

  var b = (): void { }

  var c = (x) { };

  var d = (x: number, y: string) { };

  var e = (x: number, y: string): void { };

  var a = () => var k = 10;};

  var b = (): void => var k = 10;}

  var c = (x) => var k = 10;};

  var d = (x: number, y: string) => var k = 10;};

  var e = (x: number, y: string): void => var k = 10;};

  var f = () => var k = 10;}

  var a = () => };

  var b = (): void => }

  var c = (x) => };

  var d = (x: number, y: string) => };

  var e = (x: number, y: string): void => };

  var f = () => }

  var a = () => { };

  var b = (): void => { }

  var c = (x) => { };

  var d = (x: number, y: string) => { };

  var e = (x: number, y: string): void => { };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "  var a = () { };\n\n  var b = (): void { }\n\n  var c = (x) { };\n\n  var d = (x: number, y: string) { };\n\n  var e = (x: number, y: string): void { };\n\n  var a = () => var k = 10;};\n\n  var b = (): void => var k = 10;}\n\n  var c = (x) => var k = 10;};\n\n  var d = (x: number, y: string) => var k = 10;};\n\n  var e = (x: number, y: string): void => var k = 10;};\n\n  var f = () => var k = 10;}\n\n  var a = () => };\n\n  var b = (): void => }\n\n  var c = (x) => };\n\n  var d = (x: number, y: string) => };\n\n  var e = (x: number, y: string): void => };\n\n  var f = () => }\n\n  var a = () => { };\n\n  var b = (): void => { }\n\n  var c = (x) => { };\n\n  var d = (x: number, y: string) => { };\n\n  var e = (x: number, y: string): void => { };",
    "filename": "",
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
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 81929,
                            "elements": [],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 5,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 12
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 12,
                            "end": 16
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 12,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 16
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 16
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
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
                            "start": 24,
                            "end": 26
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 81929,
                            "elements": [],
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 32,
                                "end": 37
                            },
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 24,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 37
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 37,
                            "end": 41
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 37,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 41
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 41
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 41
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 48,
                            "end": 50
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 55
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 56
                        },
                        "flags": 48,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 56
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 58,
                                "end": 58
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 56,
                            "end": 60
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 56,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 60
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 60
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 41,
            "end": 61
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
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 68,
                            "end": 70
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65590,
                                "expressions": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 75
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 76,
                                            "end": 83
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 72,
                                        "end": 83
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 86
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 87,
                                            "end": 94
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 83,
                                        "end": 94
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 94
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 95
                        },
                        "flags": 68,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 95
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 97,
                                "end": 97
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 95,
                            "end": 99
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 95,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 99
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 68,
                "end": 99
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 100
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
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 107,
                            "end": 109
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 81929,
                            "elements": [
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 123,
                                        "end": 125
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 126,
                                        "end": 133
                                    },
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 122,
                                    "end": 133
                                },
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 114
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 115,
                                        "end": 122
                                    },
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 111,
                                    "end": 122
                                }
                            ],
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 135,
                                "end": 140
                            },
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 133
                        },
                        "flags": 107,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 140
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 142,
                                "end": 142
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 140,
                            "end": 144
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 140,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 144
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 107,
                "end": 144
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 100,
            "end": 145
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 152,
                            "end": 154
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 156
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 162,
                                "end": 162
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 156,
                            "end": 162
                        },
                        "flags": 152,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 162
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 152,
                "end": 162
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 145,
            "end": 162
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 166,
                            "end": 168
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 170,
                            "end": 173
                        },
                        "flags": 166,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 173
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 166,
                "end": 173
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 162,
            "end": 174
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 175,
            "end": 176
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
                            "start": 183,
                            "end": 185
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 191,
                                    "end": 196
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 187
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 199
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 187,
                            "end": 199
                        },
                        "flags": 183,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 199
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 183,
                "end": 199
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 176,
            "end": 199
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 203,
                            "end": 205
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 207,
                            "end": 210
                        },
                        "flags": 203,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 210
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 203,
                "end": 210
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 199,
            "end": 211
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 219,
                            "end": 221
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 225,
                                            "end": 226
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
                                        "start": 223,
                                        "end": 227
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 227
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 230
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 223,
                            "end": 230
                        },
                        "flags": 219,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 230
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 219,
                "end": 230
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 212,
            "end": 230
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 234,
                            "end": 236
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 238,
                            "end": 241
                        },
                        "flags": 234,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 241
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 234,
                "end": 241
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 230,
            "end": 242
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 243,
            "end": 244
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
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 251,
                            "end": 253
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 267,
                                            "end": 269
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 270,
                                            "end": 277
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 266,
                                        "end": 277
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 257,
                                            "end": 258
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 259,
                                            "end": 266
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 255,
                                        "end": 266
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 277
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 281,
                                "end": 281
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 255,
                            "end": 281
                        },
                        "flags": 251,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 281
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 251,
                "end": 281
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 244,
            "end": 281
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 285,
                            "end": 287
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 289,
                            "end": 292
                        },
                        "flags": 285,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 292
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 285,
                "end": 292
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 281,
            "end": 293
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 294,
            "end": 295
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
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 302,
                            "end": 304
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 318,
                                            "end": 320
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 321,
                                            "end": 328
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 317,
                                        "end": 328
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 309
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 310,
                                            "end": 317
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 306,
                                        "end": 317
                                    }
                                ],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 330,
                                    "end": 335
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 308,
                                "end": 328
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 338,
                                "end": 338
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 306,
                            "end": 338
                        },
                        "flags": 302,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 338
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 302,
                "end": 338
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 295,
            "end": 338
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 342,
                            "end": 344
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 346,
                            "end": 349
                        },
                        "flags": 342,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 349
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 342,
                "end": 349
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 338,
            "end": 350
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 351,
            "end": 352
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 359,
                            "end": 361
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 363
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 369,
                                "end": 369
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 363,
                            "end": 369
                        },
                        "flags": 359,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 369
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 359,
                "end": 369
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 352,
            "end": 369
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 373,
                            "end": 375
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 10,
                            "rawText": "10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 377,
                            "end": 380
                        },
                        "flags": 373,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 380
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 373,
                "end": 380
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 369,
            "end": 381
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 389,
                            "end": 391
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 393,
                                "end": 393
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 399,
                                "end": 399
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 393,
                            "end": 399
                        },
                        "flags": 389,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 399
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 389,
                "end": 399
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 382,
            "end": 399
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 401,
            "end": 402
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
                            "start": 409,
                            "end": 411
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 417,
                                    "end": 422
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 413,
                                "end": 413
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 425,
                                "end": 425
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 413,
                            "end": 425
                        },
                        "flags": 409,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 425
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 409,
                "end": 425
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 402,
            "end": 425
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 434,
                            "end": 436
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 440,
                                            "end": 441
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
                                        "start": 438,
                                        "end": 442
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 438,
                                "end": 442
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 445,
                                "end": 445
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 438,
                            "end": 445
                        },
                        "flags": 434,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 445
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 434,
                "end": 445
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 427,
            "end": 445
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 447,
            "end": 448
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
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 455,
                            "end": 457
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 471,
                                            "end": 473
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 474,
                                            "end": 481
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 470,
                                        "end": 481
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 461,
                                            "end": 462
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 463,
                                            "end": 470
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 459,
                                        "end": 470
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 461,
                                "end": 481
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 485,
                                "end": 485
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 459,
                            "end": 485
                        },
                        "flags": 455,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 485
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 455,
                "end": 485
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 448,
            "end": 485
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 487,
            "end": 488
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
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 495,
                            "end": 497
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 511,
                                            "end": 513
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 514,
                                            "end": 521
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 510,
                                        "end": 521
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 501,
                                            "end": 502
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 503,
                                            "end": 510
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 499,
                                        "end": 510
                                    }
                                ],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 523,
                                    "end": 528
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 501,
                                "end": 521
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 531,
                                "end": 531
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 499,
                            "end": 531
                        },
                        "flags": 495,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 531
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 495,
                "end": 531
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 488,
            "end": 531
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 533,
            "end": 534
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 541,
                            "end": 543
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 545,
                                "end": 545
                            },
                            "contents": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 551,
                                "end": 551
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 545,
                            "end": 551
                        },
                        "flags": 541,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 551
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 541,
                "end": 551
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 534,
            "end": 551
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 560,
                            "end": 562
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 564
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 572,
                                    "end": 572
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 570,
                                "end": 574
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 564,
                            "end": 574
                        },
                        "flags": 560,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 574
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 560,
                "end": 574
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 553,
            "end": 575
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
                            "start": 582,
                            "end": 584
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 590,
                                    "end": 595
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 586,
                                "end": 586
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 600,
                                    "end": 600
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 598,
                                "end": 602
                            },
                            "flags": 1073774592,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 586,
                            "end": 602
                        },
                        "flags": 582,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 602
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 582,
                "end": 602
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 575,
            "end": 602
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 609,
                            "end": 611
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 615,
                                            "end": 616
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
                                        "start": 613,
                                        "end": 617
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 613,
                                "end": 617
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 622,
                                    "end": 622
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 620,
                                "end": 624
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 613,
                            "end": 624
                        },
                        "flags": 609,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 624
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 609,
                "end": 624
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 602,
            "end": 625
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
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 632,
                            "end": 634
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 648,
                                            "end": 650
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 651,
                                            "end": 658
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 647,
                                        "end": 658
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 638,
                                            "end": 639
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 640,
                                            "end": 647
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 636,
                                        "end": 647
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 638,
                                "end": 658
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 664,
                                    "end": 664
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 662,
                                "end": 666
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 636,
                            "end": 666
                        },
                        "flags": 632,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 666
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 632,
                "end": 666
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 625,
            "end": 667
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
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 674,
                            "end": 676
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 690,
                                            "end": 692
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 693,
                                            "end": 700
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 689,
                                        "end": 700
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 680,
                                            "end": 681
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 682,
                                            "end": 689
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 678,
                                        "end": 689
                                    }
                                ],
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 702,
                                    "end": 707
                                },
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 680,
                                "end": 700
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 712,
                                    "end": 712
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 710,
                                "end": 714
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 678,
                            "end": 714
                        },
                        "flags": 674,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 714
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 674,
                "end": 714
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 667,
            "end": 715
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
    "end": 715
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

