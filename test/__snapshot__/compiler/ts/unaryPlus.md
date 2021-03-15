# Kataw parser test case

## Input

`````js
var a = +1;
enum E { some, thing };
var c = +E.some;
var x = +"3";
var y = -"3";
var z = ~"3";
var b = +(<any>"");
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var a = +1;\nenum E { some, thing };\nvar c = +E.some;\nvar x = +\"3\";\nvar y = -\"3\";\nvar z = ~\"3\";\nvar b = +(<any>\"\");",
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
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "+",
                            "operand": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 10
                        },
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "some",
                            "rawText": "some",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 25
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 20,
                        "end": 25
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "thing",
                            "rawText": "thing",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 32
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 26,
                        "end": 32
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 20,
                "end": 32
            },
            "isConst": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 11,
            "end": 34
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 34,
            "end": 35
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
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 39,
                            "end": 41
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "+",
                            "operand": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 46
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "some",
                                    "rawText": "some",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 51
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 51,
                                "period": {
                                    "kind": 255,
                                    "pos": 46,
                                    "end": 47
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 51
                        },
                        "flags": 39,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 51
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 39,
                "end": 51
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 35,
            "end": 52
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 56,
                            "end": 58
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "+",
                            "operand": {
                                "kind": 4261583,
                                "text": "3",
                                "rawText": "3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 65
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 65
                        },
                        "flags": 56,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 65
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 56,
                "end": 65
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 52,
            "end": 66
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 70,
                            "end": 72
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "-",
                            "operand": {
                                "kind": 4261583,
                                "text": "3",
                                "rawText": "3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 79
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 79
                        },
                        "flags": 70,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 79
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 70,
                "end": 79
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 66,
            "end": 80
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
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 84,
                            "end": 86
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "~",
                            "operand": {
                                "kind": 4261583,
                                "text": "3",
                                "rawText": "3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 93
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 93
                        },
                        "flags": 84,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 93
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 84,
                "end": 93
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 80,
            "end": 94
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
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 98,
                            "end": 100
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65774,
                            "operator": "+",
                            "operand": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 134291684,
                                    "type": {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 106,
                                        "end": 109
                                    },
                                    "expression": {
                                        "kind": 4261583,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 110,
                                        "end": 112
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 105,
                                    "end": 112
                                },
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
                            "end": 113
                        },
                        "flags": 98,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 113
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 98,
                "end": 113
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 94,
            "end": 114
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 114
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

