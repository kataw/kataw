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

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 34
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 35,
                                            "end": 36
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 24,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 24,
                            "end": 37
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 41,
                            "end": 43
                        },
                        "operatorToken": {
                            "kind": 268501004,
                            "autofix": 0,
                            "flags": 0,
                            "start": 41,
                            "end": 45
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 45,
                            "end": 48
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 41,
                        "end": 48
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 49
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "foo",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 64,
                                                            "end": 68
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 69,
                                                            "end": 69
                                                        },
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 70
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 59,
                                                    "end": 72
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 59,
                                                    "end": 63
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 59,
                                                "end": 72
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 59,
                                        "end": 72
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 57,
                                    "end": 74
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 53,
                                    "end": 55
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 53,
                                "end": 74
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 53,
                        "end": 74
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 52,
                    "end": 76
                },
                "autofix": 0,
                "flags": 256,
                "start": 50,
                "end": 77
            },
            "autofix": 0,
            "flags": 128,
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
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 84,
                                                "end": 85
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 83,
                                    "end": 86
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 80,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 80,
                        "end": 86
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 78,
                    "end": 87
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
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
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 92,
                                    "end": 92
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 91,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 91,
                        "end": 93
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 89,
                    "end": 94
                },
                "autofix": 0,
                "flags": 256,
                "start": 78,
                "end": 94
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 98,
                                            "end": 103
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 103,
                                            "end": 105
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 98,
                                        "end": 105
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 98,
                                        "end": 99
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 98,
                                    "end": 105
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 106,
                                            "end": 113
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 20,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 113,
                                            "end": 116
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 106,
                                        "end": 116
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x1",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 106,
                                        "end": 109
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 106,
                                    "end": 116
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 98,
                            "end": 116
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 97,
                        "end": 117
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 117,
                        "end": 119
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 121,
                            "end": 121
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 119,
                        "end": 122
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 97,
                    "end": 122
                },
                "autofix": 0,
                "flags": 256,
                "start": 95,
                "end": 123
            },
            "autofix": 0,
            "flags": 128,
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
                            "kind": 81921,
                            "value": "q",
                            "autofix": 0,
                            "flags": 768,
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
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 130,
                                                "end": 132
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 10,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 134,
                                                "end": 137
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 130,
                                            "end": 137
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 130,
                                    "end": 137
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 128,
                                "end": 139
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 139,
                                "end": 141
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 143,
                                    "end": 143
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 141,
                                "end": 144
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 128,
                            "end": 144
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 124,
                    "end": 145
                },
                "autofix": 0,
                "flags": 256,
                "start": 124,
                "end": 145
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 149,
                                    "end": 151
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 149,
                            "end": 151
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 148,
                        "end": 153
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": 3,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 160,
                                        "end": 162
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 157,
                                    "end": 162
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 157,
                            "end": 162
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 155,
                        "end": 164
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 148,
                    "end": 164
                },
                "autofix": 0,
                "flags": 256,
                "start": 146,
                "end": 165
            },
            "autofix": 0,
            "flags": 128,
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 169,
                                        "end": 171
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 10,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 173,
                                        "end": 176
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 169,
                                    "end": 176
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 169,
                            "end": 176
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 168,
                        "end": 178
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 178,
                        "end": 180
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 182,
                            "end": 182
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 180,
                        "end": 183
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 168,
                    "end": 183
                },
                "autofix": 0,
                "flags": 256,
                "start": 166,
                "end": 184
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 191,
                                    "end": 193
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 189,
                                    "end": 190
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 189,
                                "end": 193
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 189,
                        "end": 193
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 188,
                    "end": 194
                },
                "autofix": 0,
                "flags": 256,
                "start": 185,
                "end": 195
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 201,
                                        "end": 203
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 199,
                                        "end": 200
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 199,
                                    "end": 203
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 199,
                            "end": 203
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 198,
                        "end": 204
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 204,
                        "end": 205
                    },
                    "right": {
                        "kind": 81921,
                        "value": 1,
                        "autofix": 0,
                        "flags": 768,
                        "start": 205,
                        "end": 206
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 198,
                    "end": 206
                },
                "autofix": 0,
                "flags": 256,
                "start": 196,
                "end": 207
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 213,
                                        "end": 215
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 211,
                                        "end": 212
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 211,
                                    "end": 215
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 211,
                            "end": 215
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 210,
                        "end": 216
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 216,
                        "end": 217
                    },
                    "right": {
                        "kind": 269,
                        "value": null,
                        "autofix": 0,
                        "flags": 768,
                        "start": 217,
                        "end": 221
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 210,
                    "end": 221
                },
                "autofix": 0,
                "flags": 256,
                "start": 208,
                "end": 222
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 228,
                                    "end": 230
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 226,
                                    "end": 227
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 226,
                                "end": 230
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 226,
                        "end": 230
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 225,
                    "end": 231
                },
                "autofix": 0,
                "flags": 256,
                "start": 223,
                "end": 232
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 236,
                                        "end": 237
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 236,
                                    "end": 240
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 236,
                            "end": 240
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 235,
                        "end": 241
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 241,
                        "end": 242
                    },
                    "right": {
                        "kind": 81921,
                        "value": 1,
                        "autofix": 0,
                        "flags": 768,
                        "start": 242,
                        "end": 243
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 235,
                    "end": 243
                },
                "autofix": 0,
                "flags": 256,
                "start": 233,
                "end": 244
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 250,
                                        "end": 252
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 248,
                                        "end": 249
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 248,
                                    "end": 252
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 248,
                            "end": 252
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 247,
                        "end": 253
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 253,
                        "end": 254
                    },
                    "right": {
                        "kind": 269,
                        "value": null,
                        "autofix": 0,
                        "flags": 768,
                        "start": 254,
                        "end": 258
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 247,
                    "end": 258
                },
                "autofix": 0,
                "flags": 256,
                "start": 245,
                "end": 259
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 265,
                                        "end": 267
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 263,
                                        "end": 264
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 263,
                                    "end": 267
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 263,
                            "end": 267
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 262,
                        "end": 268
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 268,
                        "end": 269
                    },
                    "right": {
                        "kind": 269,
                        "value": null,
                        "autofix": 0,
                        "flags": 768,
                        "start": 269,
                        "end": 273
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 262,
                    "end": 273
                },
                "autofix": 0,
                "flags": 256,
                "start": 260,
                "end": 274
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 282,
                                    "end": 284
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 279,
                                        "end": 280
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 278,
                                    "end": 281
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 278,
                                "end": 284
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 278,
                        "end": 284
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 277,
                    "end": 285
                },
                "autofix": 0,
                "flags": 256,
                "start": 275,
                "end": 286
            },
            "autofix": 0,
            "flags": 128,
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
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 290,
                                        "end": 291
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 290,
                                "end": 291
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 289,
                            "end": 292
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 292,
                            "end": 293
                        },
                        "right": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 293,
                            "end": 294
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 289,
                        "end": 294
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 287,
                    "end": 295
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 296,
                    "end": 296
                },
                "flags": 256,
                "start": 287,
                "end": 297
            },
            "autofix": 0,
            "flags": 128,
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
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 303,
                                            "end": 304
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 301,
                                            "end": 302
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 301,
                                        "end": 304
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 301,
                                "end": 304
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 300,
                            "end": 305
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 305,
                            "end": 306
                        },
                        "right": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 306,
                            "end": 307
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 300,
                        "end": 307
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 298,
                    "end": 308
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 309,
                    "end": 309
                },
                "flags": 256,
                "start": 298,
                "end": 310
            },
            "autofix": 0,
            "flags": 128,
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
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 321,
                                                            "end": 323
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "x",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 319,
                                                            "end": 320
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 319,
                                                        "end": 323
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 319,
                                                "end": 323
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 317,
                                            "end": 324
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "length",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 325,
                                            "end": 331
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 315,
                                        "end": 331
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 315,
                                        "end": 316
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 315,
                                    "end": 331
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 315,
                            "end": 331
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 314,
                        "end": 332
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 332,
                        "end": 334
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 334,
                        "end": 336
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 314,
                    "end": 336
                },
                "autofix": 0,
                "flags": 256,
                "start": 311,
                "end": 337
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 134,
                                    "value": false,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 343,
                                    "end": 349
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 341,
                                    "end": 342
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 341,
                                "end": 349
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 341,
                        "end": 349
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 340,
                    "end": 350
                },
                "autofix": 0,
                "flags": 256,
                "start": 338,
                "end": 351
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 177,
                                    "asyncToken": null,
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 367,
                                        "end": 368
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 369,
                                            "end": 369
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 368,
                                        "end": 370
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 357,
                                    "end": 370
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 355,
                                    "end": 356
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 355,
                                "end": 370
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 355,
                        "end": 370
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 354,
                    "end": 371
                },
                "autofix": 0,
                "flags": 256,
                "start": 352,
                "end": 372
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259885,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 378,
                                        "end": 385
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 385,
                                        "end": 387
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 378,
                                    "end": 387
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 376,
                                    "end": 377
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 376,
                                "end": 387
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 376,
                        "end": 387
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 375,
                    "end": 388
                },
                "autofix": 0,
                "flags": 256,
                "start": 373,
                "end": 389
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259887,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 395,
                                        "end": 400
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 400,
                                        "end": 402
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 395,
                                    "end": 402
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 393,
                                    "end": 394
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 393,
                                "end": 402
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 393,
                        "end": 402
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 392,
                    "end": 403
                },
                "autofix": 0,
                "flags": 256,
                "start": 390,
                "end": 404
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 410,
                                        "end": 412
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 412,
                                        "end": 414
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 414,
                                        "end": 416
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 408,
                                    "end": 416
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 408,
                                    "end": 409
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 408,
                                "end": 416
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 408,
                        "end": 416
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 407,
                    "end": 417
                },
                "autofix": 0,
                "flags": 256,
                "start": 405,
                "end": 418
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 210,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 428,
                                        "end": 430
                                    },
                                    "argumentList": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 424,
                                    "end": 430
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 422,
                                    "end": 423
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 422,
                                "end": 430
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 422,
                        "end": 430
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 421,
                    "end": 431
                },
                "autofix": 0,
                "flags": 256,
                "start": 419,
                "end": 432
            },
            "autofix": 0,
            "flags": 128,
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
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259886,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 438,
                                        "end": 445
                                    },
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 445,
                                            "end": 447
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 448,
                                            "end": 449
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 445,
                                        "end": 449
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 438,
                                    "end": 449
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 436,
                                    "end": 437
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 436,
                                "end": 449
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 436,
                        "end": 449
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 435,
                    "end": 450
                },
                "autofix": 0,
                "flags": 256,
                "start": 433,
                "end": 451
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 67174403,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 459,
                                            "end": 462
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 463,
                                            "end": 464
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 459,
                                        "end": 465
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 456,
                                    "end": 465
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 456,
                            "end": 465
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 455,
                        "end": 466
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 466,
                        "end": 468
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 468,
                        "end": 470
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 455,
                    "end": 470
                },
                "autofix": 0,
                "flags": 256,
                "start": 452,
                "end": 471
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 479,
                                                "end": 479
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 478,
                                            "end": 480
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 481,
                                            "end": 482
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 478,
                                        "end": 483
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 475,
                                    "end": 483
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 475,
                            "end": 483
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 474,
                        "end": 484
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 484,
                        "end": 486
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 486,
                        "end": 488
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 474,
                    "end": 488
                },
                "autofix": 0,
                "flags": 256,
                "start": 472,
                "end": 489
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 497,
                                                "end": 497
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 496,
                                            "end": 498
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 499,
                                            "end": 500
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 496,
                                        "end": 501
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 493,
                                    "end": 501
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 493,
                            "end": 501
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 492,
                        "end": 502
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 502,
                        "end": 504
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 504,
                            "end": 506
                        },
                        "operatorToken": {
                            "kind": 81921,
                            "autofix": 0,
                            "flags": 0,
                            "start": 504,
                            "end": 508
                        },
                        "right": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 508,
                            "end": 510
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 504,
                        "end": 510
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 492,
                    "end": 510
                },
                "autofix": 0,
                "flags": 256,
                "start": 490,
                "end": 511
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 519,
                                                "end": 519
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 518,
                                            "end": 520
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 521,
                                            "end": 522
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 518,
                                        "end": 523
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 515,
                                    "end": 523
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 515,
                            "end": 523
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 514,
                        "end": 524
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 524,
                        "end": 526
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 526,
                            "end": 528
                        },
                        "operatorToken": {
                            "kind": 537067531,
                            "autofix": 0,
                            "flags": 0,
                            "start": 526,
                            "end": 530
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 532,
                                "end": 533
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 530,
                            "end": 534
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 526,
                        "end": 534
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 514,
                    "end": 534
                },
                "autofix": 0,
                "flags": 256,
                "start": 512,
                "end": 535
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 543,
                                                "end": 543
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 542,
                                            "end": 544
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 545,
                                            "end": 546
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 542,
                                        "end": 547
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 539,
                                    "end": 547
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 539,
                            "end": 547
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 538,
                        "end": 548
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 548,
                        "end": 550
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 552,
                                "end": 553
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 550,
                            "end": 554
                        },
                        "operatorToken": {
                            "kind": 537067531,
                            "autofix": 0,
                            "flags": 0,
                            "start": 550,
                            "end": 556
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 558,
                                "end": 559
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 556,
                            "end": 560
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 550,
                        "end": 560
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 538,
                    "end": 560
                },
                "autofix": 0,
                "flags": 256,
                "start": 536,
                "end": 561
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 569,
                                                "end": 569
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 568,
                                            "end": 570
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 571,
                                            "end": 572
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 568,
                                        "end": 573
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 565,
                                    "end": 573
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 565,
                            "end": 573
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 564,
                        "end": 574
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 574,
                        "end": 576
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 576,
                        "end": 578
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 564,
                    "end": 578
                },
                "autofix": 0,
                "flags": 256,
                "start": 562,
                "end": 579
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 587,
                                                "end": 587
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 586,
                                            "end": 588
                                        },
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 589,
                                                "end": 590
                                            },
                                            "operatorToken": {
                                                "kind": 537067531,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 589,
                                                "end": 592
                                            },
                                            "right": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 594,
                                                        "end": 595
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 592,
                                                    "end": 596
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "z",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 597,
                                                    "end": 598
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 592,
                                                "end": 599
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 589,
                                            "end": 599
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 586,
                                        "end": 600
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 583,
                                    "end": 600
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 583,
                            "end": 600
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 582,
                        "end": 601
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 601,
                        "end": 603
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 603,
                        "end": 605
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 582,
                    "end": 605
                },
                "autofix": 0,
                "flags": 256,
                "start": 580,
                "end": 606
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 617,
                                    "end": 619
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 620,
                                    "end": 621
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 623,
                                        "end": 623
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 621,
                                    "end": 624
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 619,
                                "end": 624
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 611,
                        "end": 624
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 610,
                    "end": 626
                },
                "autofix": 0,
                "flags": 256,
                "start": 607,
                "end": 627
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 637,
                                    "end": 639
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 640,
                                    "end": 641
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 643,
                                        "end": 643
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 641,
                                    "end": 644
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 639,
                                "end": 644
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 631,
                        "end": 644
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 630,
                    "end": 646
                },
                "autofix": 0,
                "flags": 256,
                "start": 628,
                "end": 647
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 659,
                                        "end": 662
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 657,
                                    "end": 663
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 664,
                                    "end": 665
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 667,
                                        "end": 667
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 665,
                                    "end": 668
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 663,
                                "end": 668
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 651,
                        "end": 668
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 650,
                    "end": 670
                },
                "autofix": 0,
                "flags": 256,
                "start": 648,
                "end": 671
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": 500,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 679,
                                    "end": 683
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 684,
                                    "end": 685
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 687,
                                        "end": 687
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 685,
                                    "end": 688
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 683,
                                "end": 688
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 675,
                        "end": 688
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 674,
                    "end": 690
                },
                "autofix": 0,
                "flags": 256,
                "start": 672,
                "end": 691
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": 500,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 699,
                                    "end": 703
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 704,
                                                "end": 705
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 704,
                                            "end": 705
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 704,
                                    "end": 706
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 708,
                                        "end": 708
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 706,
                                    "end": 709
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 703,
                                "end": 709
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 695,
                        "end": 709
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 694,
                    "end": 711
                },
                "autofix": 0,
                "flags": 256,
                "start": 692,
                "end": 712
            },
            "autofix": 0,
            "flags": 128,
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
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 722,
                                        "end": 725
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 720,
                                    "end": 726
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 727,
                                                "end": 728
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 727,
                                            "end": 728
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 727,
                                    "end": 729
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 731,
                                        "end": 731
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 729,
                                    "end": 732
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 726,
                                "end": 732
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 716,
                        "end": 732
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 715,
                    "end": 734
                },
                "autofix": 0,
                "flags": 256,
                "start": 713,
                "end": 735
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": 0,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 746,
                                                            "end": 748
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 744,
                                                            "end": 745
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 744,
                                                        "end": 748
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 744,
                                                "end": 748
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 743,
                                            "end": 749
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 750,
                                            "end": 751
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 743,
                                        "end": 752
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 740,
                                    "end": 752
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 740,
                            "end": 752
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 739,
                        "end": 753
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 753,
                        "end": 755
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 757,
                            "end": 757
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 755,
                        "end": 758
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 739,
                    "end": 758
                },
                "autofix": 0,
                "flags": 256,
                "start": 736,
                "end": 759
            },
            "autofix": 0,
            "flags": 128,
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
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": 0,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 769,
                                                            "end": 771
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 767,
                                                            "end": 768
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 767,
                                                        "end": 771
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 767,
                                                "end": 771
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 766,
                                            "end": 772
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 773,
                                            "end": 774
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 766,
                                        "end": 774
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 763,
                                    "end": 774
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 763,
                            "end": 774
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 762,
                        "end": 775
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 775,
                        "end": 777
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 779,
                            "end": 779
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 777,
                        "end": 780
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 762,
                    "end": 780
                },
                "autofix": 0,
                "flags": 256,
                "start": 760,
                "end": 781
            },
            "autofix": 0,
            "flags": 128,
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
                                            "kind": 81921,
                                            "value": "target",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 785,
                                            "end": 791
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 792,
                                            "end": 792
                                        },
                                        "flags": 256,
                                        "start": 785,
                                        "end": 793
                                    },
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "targetKey",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 794,
                                            "end": 803
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 804,
                                            "end": 804
                                        },
                                        "flags": 256,
                                        "start": 794,
                                        "end": 805
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 785,
                                    "end": 806
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 785,
                            "end": 806
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 784,
                        "end": 807
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 807,
                        "end": 809
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 809,
                        "end": 811
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 784,
                    "end": 811
                },
                "autofix": 0,
                "flags": 256,
                "start": 782,
                "end": 812
            },
            "autofix": 0,
            "flags": 128,
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
                                "argument": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 819,
                                        "end": 820
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 821,
                                        "end": 822
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 819,
                                    "end": 822
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 816,
                                "end": 822
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 823,
                                "end": 825
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 816,
                        "end": 825
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 815,
                    "end": 826
                },
                "autofix": 0,
                "flags": 256,
                "start": 813,
                "end": 827
            },
            "autofix": 0,
            "flags": 128,
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
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 834,
                                            "end": 835
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 836,
                                            "end": 837
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 834,
                                        "end": 837
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 834,
                                        "end": 839
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 839,
                                        "end": 841
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 834,
                                    "end": 841
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 831,
                                "end": 841
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 842,
                                "end": 844
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 831,
                        "end": 844
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 830,
                    "end": 845
                },
                "autofix": 0,
                "flags": 256,
                "start": 828,
                "end": 846
            },
            "autofix": 0,
            "flags": 128,
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
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 853,
                                        "end": 854
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 853,
                                        "end": 856
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 856,
                                        "end": 858
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 853,
                                    "end": 858
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 850,
                                "end": 858
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 859,
                                "end": 861
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 850,
                        "end": 861
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 849,
                    "end": 862
                },
                "autofix": 0,
                "flags": 256,
                "start": 847,
                "end": 863
            },
            "autofix": 0,
            "flags": 128,
            "start": 847,
            "end": 864
        }
    ],
    "isModule": false,
    "text": "({ x : y } = z = {});\n({ x : foo()[y] } = z = {});\n({ x : { foo: foo().y } });\n[...{a}] = [{}];\n({x:z = 1, x1:y = 20} = {});\n(q, { x = 10 } = {});\n({ x } = { x: 3 });\n({ x = 10 } = {});\n\n({1: x});\n({1: x}=1);\n({1: x}=null);\n({1: x});\n({1: x}=1);\n({1: x}=null);\n({a: b}=null);\n({[x]: 1});\n({a}=1)();\n({a:a}=1)();\n\n({x: {x: y}.length} = x);\n({x: false});\n({x: function(){}});\n({x: typeof x});\n({x: void x});\n({x: x + y});\n({x: new x});\n({x: delete x.y});\n\n({...\"x\"[x]} = x);\n({...[][x]} = x);\n({...[][x]} = x = y);\n({...[][x]} = x = (y));\n({...[][x]} = (x) = (y));\n({...{}[x]} = x);\n({...{}[x = (y)[z]]} = x);\n\n({ async x() {} });\n({ async x() {} });\n({ async [foo]() {} });\n({ get 500() {} });\n({ set 500(b) {} });\n({ set [foo](d) {} });\n\n({...{b: 0}[x]} = {});\n({...{b: 0}.x} = {});\n([target()[targetKey()]] = x);\n({...x.x, y});\n({...x.x = y, y});\n({...x = y, y});\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 466,
            "end": 468
        }
    ],
    "start": 0,
    "end": 865
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

