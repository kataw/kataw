# Kataw parser test case

## Input

`````js
({ x : y } = z = {});
({ x : foo()[y] } = z = {});
({ x : { foo: foo().y } });
[...{a}] = [{}];
({x:z = 1, x1:y = 20} = {});
(q, { x = 10 } = {});
({ x } = { x: 3 });
({ x = 10 } = {});

({1: x});
({1: x}=1);
({1: x}=null);
({1: x});
({1: x}=1);
({1: x}=null);
({a: b}=null);
({[x]: 1});
({a}=1)();
({a:a}=1)();

({x: {x: y}.length} = x);
({x: false});
({x: function(){}});
({x: typeof x});
({x: void x});
({x: x + y});
({x: new x});
({x: delete x.y});

({..."x"[x]} = x);
({...[][x]} = x);
({...[][x]} = x = y);
({...[][x]} = x = (y));
({...[][x]} = (x) = (y));
({...{}[x]} = x);
({...{}[x = (y)[z]]} = x);

({ async x() {} });
({ async x() {} });
({ async [foo]() {} });
({ get 500() {} });
({ set 500(b) {} });
({ set [foo](d) {} });

({...{b: 0}[x]} = {});
({...{b: 0}.x} = {});
([target()[targetKey()]] = x);
({...x.x, y});
({...x.x = y, y});
({...x = y, y});

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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 12,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 19
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 24,
                                            "end": 34
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 24,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 37
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 23,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 43
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 45
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 45,
                            "end": 48
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 41,
                        "end": 48
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 23,
                    "end": 48
                },
                "flags": 21,
                "transformFlags": 0,
                "start": 35,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 63
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 64,
                                                            "end": 68
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 69,
                                                            "end": 69
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1,
                                                        "start": 59,
                                                        "end": 70
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 59,
                                                    "end": 72
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 59,
                                                "end": 72
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 72
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 57,
                                    "end": 74
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 53,
                                "end": 74
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 74
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 52,
                    "end": 76
                },
                "flags": 50,
                "transformFlags": 0,
                "start": 35,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 50,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 80,
                                    "end": 83
                                },
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 85
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 83,
                                    "end": 86
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 80,
                        "end": 86
                    },
                    "flags": 33,
                    "transformFlags": 8,
                    "start": 78,
                    "end": 87
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 89
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 92,
                                    "end": 92
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 91,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 91,
                        "end": 93
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 89,
                    "end": 94
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 78,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 78,
            "end": 95
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 99
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 101,
                                            "end": 103
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 103,
                                            "end": 105
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 98,
                                        "end": 105
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 98,
                                    "end": 105
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x1",
                                        "rawText": "x1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 106,
                                        "end": 109
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 111,
                                            "end": 113
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 20,
                                            "rawText": "20",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 116
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 106,
                                        "end": 116
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 106,
                                    "end": 116
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 98,
                            "end": 116
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 97,
                        "end": 117
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 117,
                        "end": 119
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 121
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 119,
                        "end": 122
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 97,
                    "end": 122
                },
                "flags": 95,
                "transformFlags": 0,
                "start": 35,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 95,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 127
                        },
                        {
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 130,
                                                "end": 132
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 10,
                                                "rawText": "10",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 134,
                                                "end": 137
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 130,
                                            "end": 137
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 130,
                                    "end": 137
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 128,
                                "end": 139
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 139,
                                "end": 141
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 143
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 141,
                                "end": 144
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 128,
                            "end": 144
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 124,
                    "end": 145
                },
                "flags": 124,
                "transformFlags": 0,
                "start": 35,
                "end": 145
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 124,
            "end": 146
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 149,
                                    "end": 151
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 149,
                            "end": 151
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 148,
                        "end": 153
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 153,
                        "end": 155
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 160,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 157,
                                    "end": 162
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 162
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 155,
                        "end": 164
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 148,
                    "end": 164
                },
                "flags": 146,
                "transformFlags": 0,
                "start": 35,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 146,
            "end": 166
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 169,
                                        "end": 171
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 176
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 169,
                                    "end": 176
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 176
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 168,
                        "end": 178
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 178,
                        "end": 180
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 182,
                            "end": 182
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 180,
                        "end": 183
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 168,
                    "end": 183
                },
                "flags": 166,
                "transformFlags": 0,
                "start": 35,
                "end": 184
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 166,
            "end": 185
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 189,
                                    "end": 190
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 191,
                                    "end": 193
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 189,
                                "end": 193
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 189,
                        "end": 193
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 188,
                    "end": 194
                },
                "flags": 185,
                "transformFlags": 0,
                "start": 35,
                "end": 195
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 185,
            "end": 196
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 200
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 201,
                                        "end": 203
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 199,
                                    "end": 203
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 203
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 198,
                        "end": 204
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 204,
                        "end": 205
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 205,
                        "end": 206
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 198,
                    "end": 206
                },
                "flags": 196,
                "transformFlags": 0,
                "start": 35,
                "end": 207
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 196,
            "end": 208
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 211,
                                        "end": 212
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 213,
                                        "end": 215
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 211,
                                    "end": 215
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 211,
                            "end": 215
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 210,
                        "end": 216
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 216,
                        "end": 217
                    },
                    "right": {
                        "kind": 138477575,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 217,
                        "end": 221
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 210,
                    "end": 221
                },
                "flags": 208,
                "transformFlags": 0,
                "start": 35,
                "end": 222
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 208,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 227
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 228,
                                    "end": 230
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 226,
                                "end": 230
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 226,
                        "end": 230
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 225,
                    "end": 231
                },
                "flags": 223,
                "transformFlags": 0,
                "start": 35,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 223,
            "end": 233
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 236,
                                        "end": 237
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 236,
                                    "end": 240
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 236,
                            "end": 240
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 235,
                        "end": 241
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 242
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 242,
                        "end": 243
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 235,
                    "end": 243
                },
                "flags": 233,
                "transformFlags": 0,
                "start": 35,
                "end": 244
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 233,
            "end": 245
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 248,
                                        "end": 249
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 250,
                                        "end": 252
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 248,
                                    "end": 252
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 252
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 247,
                        "end": 253
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 253,
                        "end": 254
                    },
                    "right": {
                        "kind": 138477575,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 254,
                        "end": 258
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 247,
                    "end": 258
                },
                "flags": 245,
                "transformFlags": 0,
                "start": 35,
                "end": 259
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 245,
            "end": 260
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 263,
                                        "end": 264
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 265,
                                        "end": 267
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 263,
                                    "end": 267
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 263,
                            "end": 267
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 262,
                        "end": 268
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 268,
                        "end": 269
                    },
                    "right": {
                        "kind": 138477575,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 269,
                        "end": 273
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 262,
                    "end": 273
                },
                "flags": 260,
                "transformFlags": 0,
                "start": 35,
                "end": 274
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 260,
            "end": 275
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 279,
                                        "end": 280
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 281
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 282,
                                    "end": 284
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 278,
                                "end": 284
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 278,
                        "end": 284
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 277,
                    "end": 285
                },
                "flags": 275,
                "transformFlags": 0,
                "start": 35,
                "end": 286
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 275,
            "end": 287
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 290,
                                        "end": 291
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 290,
                                "end": 291
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 289,
                            "end": 292
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 292,
                            "end": 293
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 293,
                            "end": 294
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 289,
                        "end": 294
                    },
                    "flags": 287,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 295
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 296,
                    "end": 296
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 287,
                "end": 297
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 287,
            "end": 298
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
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
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 302
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 303,
                                            "end": 304
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 301,
                                        "end": 304
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 301,
                                "end": 304
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 300,
                            "end": 305
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 305,
                            "end": 306
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 306,
                            "end": 307
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 300,
                        "end": 307
                    },
                    "flags": 298,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 308
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 309,
                    "end": 309
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 298,
                "end": 310
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 298,
            "end": 311
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 315,
                                        "end": 316
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 319,
                                                            "end": 320
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 321,
                                                            "end": 323
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 319,
                                                        "end": 323
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 319,
                                                "end": 323
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 317,
                                            "end": 324
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "length",
                                            "rawText": "length",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 325,
                                            "end": 331
                                        },
                                        "flags": 48,
                                        "transformFlags": 2,
                                        "start": 315,
                                        "end": 331
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 315,
                                    "end": 331
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 315,
                            "end": 331
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 314,
                        "end": 332
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 332,
                        "end": 334
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 334,
                        "end": 336
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 314,
                    "end": 336
                },
                "flags": 311,
                "transformFlags": 0,
                "start": 35,
                "end": 337
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 311,
            "end": 338
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 341,
                                    "end": 342
                                },
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 343,
                                    "end": 349
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 341,
                                "end": 349
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 341,
                        "end": 349
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 340,
                    "end": 350
                },
                "flags": 338,
                "transformFlags": 0,
                "start": 35,
                "end": 351
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 338,
            "end": 352
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 355,
                                    "end": 356
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 357,
                                        "end": 366
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 367,
                                        "end": 367
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 369,
                                            "end": 369
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 368,
                                        "end": 370
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 357,
                                    "end": 370
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 355,
                                "end": 370
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 355,
                        "end": 370
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 354,
                    "end": 371
                },
                "flags": 352,
                "transformFlags": 0,
                "start": 35,
                "end": 372
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 352,
            "end": 373
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 376,
                                    "end": 377
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 378,
                                        "end": 385
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 385,
                                        "end": 387
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 378,
                                    "end": 387
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 376,
                                "end": 387
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 376,
                        "end": 387
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 375,
                    "end": 388
                },
                "flags": 373,
                "transformFlags": 0,
                "start": 35,
                "end": 389
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 373,
            "end": 390
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 393,
                                    "end": 394
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 395,
                                        "end": 400
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 400,
                                        "end": 402
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 395,
                                    "end": 402
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 393,
                                "end": 402
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 393,
                        "end": 402
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 392,
                    "end": 403
                },
                "flags": 390,
                "transformFlags": 0,
                "start": 35,
                "end": 404
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 390,
            "end": 405
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 408,
                                    "end": 409
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 410,
                                        "end": 412
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 412,
                                        "end": 414
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 414,
                                        "end": 416
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 408,
                                    "end": 416
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 408,
                                "end": 416
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 408,
                        "end": 416
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 407,
                    "end": 417
                },
                "flags": 405,
                "transformFlags": 0,
                "start": 35,
                "end": 418
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 405,
            "end": 419
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 422,
                                    "end": 423
                                },
                                "right": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 424,
                                        "end": 428
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 428,
                                        "end": 430
                                    },
                                    "argumentList": null,
                                    "flags": 96,
                                    "transformFlags": 2048,
                                    "start": 424,
                                    "end": 430
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 422,
                                "end": 430
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 422,
                        "end": 430
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 421,
                    "end": 431
                },
                "flags": 419,
                "transformFlags": 0,
                "start": 35,
                "end": 432
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 419,
            "end": 433
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 436,
                                    "end": 437
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259886,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 438,
                                        "end": 445
                                    },
                                    "operand": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 445,
                                            "end": 447
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 448,
                                            "end": 449
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 445,
                                        "end": 449
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 438,
                                    "end": 449
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 436,
                                "end": 449
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 436,
                        "end": 449
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 435,
                    "end": 450
                },
                "flags": 433,
                "transformFlags": 0,
                "start": 35,
                "end": 451
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 433,
            "end": 452
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 456,
                                        "end": 459
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "\"x\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 459,
                                            "end": 462
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 463,
                                            "end": 464
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 459,
                                        "end": 465
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 456,
                                    "end": 465
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 456,
                            "end": 465
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 455,
                        "end": 466
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 466,
                        "end": 468
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 468,
                        "end": 470
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 455,
                    "end": 470
                },
                "flags": 452,
                "transformFlags": 0,
                "start": 35,
                "end": 471
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 452,
            "end": 472
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 475,
                                        "end": 478
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 479,
                                                "end": 479
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 478,
                                            "end": 480
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 481,
                                            "end": 482
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 478,
                                        "end": 483
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 475,
                                    "end": 483
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 475,
                            "end": 483
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 474,
                        "end": 484
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 484,
                        "end": 486
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 486,
                        "end": 488
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 474,
                    "end": 488
                },
                "flags": 472,
                "transformFlags": 0,
                "start": 35,
                "end": 489
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 472,
            "end": 490
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 493,
                                        "end": 496
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 497,
                                                "end": 497
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 496,
                                            "end": 498
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 499,
                                            "end": 500
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 496,
                                        "end": 501
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 493,
                                    "end": 501
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 493,
                            "end": 501
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 492,
                        "end": 502
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 502,
                        "end": 504
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 504,
                            "end": 506
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 506,
                            "end": 508
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 508,
                            "end": 510
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 504,
                        "end": 510
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 492,
                    "end": 510
                },
                "flags": 490,
                "transformFlags": 0,
                "start": 35,
                "end": 511
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 490,
            "end": 512
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 515,
                                        "end": 518
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 519,
                                                "end": 519
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 518,
                                            "end": 520
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 521,
                                            "end": 522
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 518,
                                        "end": 523
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 515,
                                    "end": 523
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 515,
                            "end": 523
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 514,
                        "end": 524
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 524,
                        "end": 526
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 526,
                            "end": 528
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 528,
                            "end": 530
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 532,
                                "end": 533
                            },
                            "flags": 530,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 534
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 526,
                        "end": 534
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 514,
                    "end": 534
                },
                "flags": 512,
                "transformFlags": 0,
                "start": 35,
                "end": 535
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 512,
            "end": 536
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 539,
                                        "end": 542
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 543,
                                                "end": 543
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 542,
                                            "end": 544
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 545,
                                            "end": 546
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 542,
                                        "end": 547
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 539,
                                    "end": 547
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 539,
                            "end": 547
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 538,
                        "end": 548
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 548,
                        "end": 550
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 553
                            },
                            "flags": 550,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 554
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 554,
                            "end": 556
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 558,
                                "end": 559
                            },
                            "flags": 556,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 560
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 550,
                        "end": 560
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 538,
                    "end": 560
                },
                "flags": 536,
                "transformFlags": 0,
                "start": 35,
                "end": 561
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 536,
            "end": 562
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 565,
                                        "end": 568
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 569,
                                                "end": 569
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 568,
                                            "end": 570
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 571,
                                            "end": 572
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 568,
                                        "end": 573
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 565,
                                    "end": 573
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 565,
                            "end": 573
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 564,
                        "end": 574
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 574,
                        "end": 576
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 576,
                        "end": 578
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 564,
                    "end": 578
                },
                "flags": 562,
                "transformFlags": 0,
                "start": 35,
                "end": 579
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 562,
            "end": 580
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 583,
                                        "end": 586
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 587,
                                                "end": 587
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 586,
                                            "end": 588
                                        },
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 589,
                                                "end": 590
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 590,
                                                "end": 592
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 594,
                                                        "end": 595
                                                    },
                                                    "flags": 592,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 596
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 597,
                                                    "end": 598
                                                },
                                                "flags": 32,
                                                "transformFlags": 4,
                                                "start": 592,
                                                "end": 599
                                            },
                                            "flags": 0,
                                            "transformFlags": 128,
                                            "start": 589,
                                            "end": 599
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 586,
                                        "end": 600
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 583,
                                    "end": 600
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 583,
                            "end": 600
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 582,
                        "end": 601
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 601,
                        "end": 603
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 603,
                        "end": 605
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 582,
                    "end": 605
                },
                "flags": 580,
                "transformFlags": 0,
                "start": 35,
                "end": 606
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 580,
            "end": 607
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                    "start": 611,
                                    "end": 617
                                },
                                "asteriskToken": null,
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
                                        "start": 617,
                                        "end": 619
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 620,
                                        "end": 621
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
                                            "start": 623,
                                            "end": 623
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 621,
                                        "end": 624
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 619,
                                    "end": 624
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 611,
                                "end": 624
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 611,
                        "end": 624
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 610,
                    "end": 626
                },
                "flags": 607,
                "transformFlags": 0,
                "start": 35,
                "end": 627
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 607,
            "end": 628
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                    "start": 631,
                                    "end": 637
                                },
                                "asteriskToken": null,
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
                                        "start": 637,
                                        "end": 639
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 640,
                                        "end": 641
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
                                            "start": 643,
                                            "end": 643
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 641,
                                        "end": 644
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 639,
                                    "end": 644
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 631,
                                "end": 644
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 631,
                        "end": 644
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 630,
                    "end": 646
                },
                "flags": 628,
                "transformFlags": 0,
                "start": 35,
                "end": 647
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 628,
            "end": 648
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
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
                                    "start": 651,
                                    "end": 657
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 659,
                                            "end": 662
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 657,
                                        "end": 663
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 664,
                                        "end": 665
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
                                            "start": 667,
                                            "end": 667
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 665,
                                        "end": 668
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 663,
                                    "end": 668
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 651,
                                "end": 668
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 651,
                        "end": 668
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 650,
                    "end": 670
                },
                "flags": 648,
                "transformFlags": 0,
                "start": 35,
                "end": 671
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 648,
            "end": 672
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 675,
                                    "end": 679
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 500,
                                        "rawText": "500",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 679,
                                        "end": 683
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 684,
                                        "end": 685
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
                                            "start": 687,
                                            "end": 687
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 685,
                                        "end": 688
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 683,
                                    "end": 688
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 675,
                                "end": 688
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 675,
                        "end": 688
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 674,
                    "end": 690
                },
                "flags": 672,
                "transformFlags": 0,
                "start": 35,
                "end": 691
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 672,
            "end": 692
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 695,
                                    "end": 699
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 500,
                                        "rawText": "500",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 699,
                                        "end": 703
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 704,
                                                "end": 705
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 704,
                                        "end": 706
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
                                            "start": 708,
                                            "end": 708
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 706,
                                        "end": 709
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 703,
                                    "end": 709
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 695,
                                "end": 709
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 695,
                        "end": 709
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 694,
                    "end": 711
                },
                "flags": 692,
                "transformFlags": 0,
                "start": 35,
                "end": 712
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 692,
            "end": 713
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 716,
                                    "end": 720
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 722,
                                            "end": 725
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 720,
                                        "end": 726
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 727,
                                                "end": 728
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 727,
                                        "end": 729
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
                                            "start": 731,
                                            "end": 731
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 729,
                                        "end": 732
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 726,
                                    "end": 732
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 716,
                                "end": 732
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 716,
                        "end": 732
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 715,
                    "end": 734
                },
                "flags": 713,
                "transformFlags": 0,
                "start": 35,
                "end": 735
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 713,
            "end": 736
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 740,
                                        "end": 743
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 744,
                                                            "end": 745
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 746,
                                                            "end": 748
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 744,
                                                        "end": 748
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 744,
                                                "end": 748
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 743,
                                            "end": 749
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 750,
                                            "end": 751
                                        },
                                        "flags": 32,
                                        "transformFlags": 4,
                                        "start": 743,
                                        "end": 752
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 740,
                                    "end": 752
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 740,
                            "end": 752
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 739,
                        "end": 753
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 753,
                        "end": 755
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 757,
                            "end": 757
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 755,
                        "end": 758
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 739,
                    "end": 758
                },
                "flags": 736,
                "transformFlags": 0,
                "start": 35,
                "end": 759
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 736,
            "end": 760
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 763,
                                        "end": 766
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 767,
                                                            "end": 768
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 769,
                                                            "end": 771
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 767,
                                                        "end": 771
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 767,
                                                "end": 771
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 766,
                                            "end": 772
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 773,
                                            "end": 774
                                        },
                                        "flags": 48,
                                        "transformFlags": 2,
                                        "start": 766,
                                        "end": 774
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 763,
                                    "end": 774
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 763,
                            "end": 774
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 762,
                        "end": 775
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 775,
                        "end": 777
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 779,
                            "end": 779
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 777,
                        "end": 780
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 762,
                    "end": 780
                },
                "flags": 760,
                "transformFlags": 0,
                "start": 35,
                "end": 781
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 760,
            "end": 782
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 130,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 785,
                                            "end": 791
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 792,
                                            "end": 792
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 785,
                                        "end": 793
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "targetKey",
                                            "rawText": "targetKey",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 794,
                                            "end": 803
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 804,
                                            "end": 804
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 794,
                                        "end": 805
                                    },
                                    "flags": 32,
                                    "transformFlags": 4,
                                    "start": 785,
                                    "end": 806
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 785,
                            "end": 806
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 784,
                        "end": 807
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 807,
                        "end": 809
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 809,
                        "end": 811
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 784,
                    "end": 811
                },
                "flags": 782,
                "transformFlags": 0,
                "start": 35,
                "end": 812
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 782,
            "end": 813
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 816,
                                    "end": 819
                                },
                                "argument": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 819,
                                        "end": 820
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 821,
                                        "end": 822
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 819,
                                    "end": 822
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 816,
                                "end": 822
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 823,
                                "end": 825
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 816,
                        "end": 825
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 815,
                    "end": 826
                },
                "flags": 813,
                "transformFlags": 0,
                "start": 35,
                "end": 827
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 813,
            "end": 828
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 831,
                                    "end": 834
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 834,
                                            "end": 835
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 836,
                                            "end": 837
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 834,
                                        "end": 837
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 837,
                                        "end": 839
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 839,
                                        "end": 841
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 834,
                                    "end": 841
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 831,
                                "end": 841
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 842,
                                "end": 844
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 831,
                        "end": 844
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 830,
                    "end": 845
                },
                "flags": 828,
                "transformFlags": 0,
                "start": 35,
                "end": 846
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 828,
            "end": 847
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 850,
                                    "end": 853
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 853,
                                        "end": 854
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 854,
                                        "end": 856
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 856,
                                        "end": 858
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 853,
                                    "end": 858
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 850,
                                "end": 858
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 859,
                                "end": 861
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 850,
                        "end": 861
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 849,
                    "end": 862
                },
                "flags": 847,
                "transformFlags": 0,
                "start": 35,
                "end": 863
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 847,
            "end": 864
        }
    ],
    "isModule": false,
    "source": "({ x : y } = z = {});\n({ x : foo()[y] } = z = {});\n({ x : { foo: foo().y } });\n[...{a}] = [{}];\n({x:z = 1, x1:y = 20} = {});\n(q, { x = 10 } = {});\n({ x } = { x: 3 });\n({ x = 10 } = {});\n\n({1: x});\n({1: x}=1);\n({1: x}=null);\n({1: x});\n({1: x}=1);\n({1: x}=null);\n({a: b}=null);\n({[x]: 1});\n({a}=1)();\n({a:a}=1)();\n\n({x: {x: y}.length} = x);\n({x: false});\n({x: function(){}});\n({x: typeof x});\n({x: void x});\n({x: x + y});\n({x: new x});\n({x: delete x.y});\n\n({...\"x\"[x]} = x);\n({...[][x]} = x);\n({...[][x]} = x = y);\n({...[][x]} = x = (y));\n({...[][x]} = (x) = (y));\n({...{}[x]} = x);\n({...{}[x = (y)[z]]} = x);\n\n({ async x() {} });\n({ async x() {} });\n({ async [foo]() {} });\n({ get 500() {} });\n({ set 500(b) {} });\n({ set [foo](d) {} });\n\n({...{b: 0}[x]} = {});\n({...{b: 0}.x} = {});\n([target()[targetKey()]] = x);\n({...x.x, y});\n({...x.x = y, y});\n({...x = y, y});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 865
}
```

### Printed

```javascript
({ x: y } = z = {});
({ x: foo()[y] } = z = {});

({ x: { foo: foo().y } });

[...{ a }] = [{}];

({ x: z = 1, x1: y = 20 } = {});

(q, { x = 10 } = {});

({ x } = { x: 3 });

({ x = 10 } = {});

({ 1: x });

({ 1: x } = 1);

({ 1: x } = null);

({ 1: x });

({ 1: x } = 1);

({ 1: x } = null);

({ a: b } = null);

({ [x]: 1 });

({ a } = 1)();

({ a: a } = 1)();

({ x: { x: y }.length } = x);

({ x: false });

({ x: function () {} });

({ x: typeof x });

({ x: void x });

({ x: x + y });

({ x: new x });

({ x: delete x.y });

({ ..."\"x\""[x] } = x);

({ ...[][x] } = x);

({ ...[][x] } = x = y);

({ ...[][x] } = x = (y));

({ ...[][x] } = (x) = (y));

({ ...{}[x] } = x);

({ ...{}[x = (y)[z]] } = x);

({ async x() {} });

({ async x() {} });

({ async [foo]() {} });

({ get 500() {} });

({ set 500(b) {} });

({ set [foo](d) {} });

({ ...{ b: 0 }[x] } = {});

({ ...{ b: 0 }.x } = {});

([target()[targetKey()]] = x);

({ ...x.x, y });

({ ...x.x = y, y });

({ ...x = y, y });

```

### Diagnostics

```javascript
✔ No errors
```

