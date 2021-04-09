# Kataw parser test case

## Input

`````js
({key: {}});
({key: {a} = x});
({a:b}=obj);
({1:  {}.b ? c : d });
({ a: {prop: 1}.prop } = {});
({1:  + b });
({[a]:  + b });
({a:  + b });
({async: (await) ? yield : foo});
({async 100(){}});
({key: bar = x});
({ typeof(x, y) {}});
({ x() {}, x: 1});
({ *x() {}, get x() {}});

({"x": y+z});
({"x": [y]}) => x;
({"x": {y: z}});

x({[a]:b, [15]:d}=obj);

({l: 50..foo} = x);

a={"b":c=d};

({x:let});

({x:let} = null);

s = {"foo": this};

x({set "foo"(a){}});

({ a = 42, [b]: c.d } = e);

x({foo(){}, *bar(){}});

({...[a, b]});

x = { a: 1, ...y, b: 1};

x({get 0x234241(){}});

x({get 1(){}});

({ [left()]: y, ...x} = right());

({topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect);

({y});

({set [0](x) { super.m("1", v); }});

x = {async:b}

({set foo(v) {}});

({*set() {}});

({*static() {}});

({*async(){}});

({get : 0});

({if: 4});

({*await() {}});

x = {*"foo"(){}};

x = {set get(a){}};

x = {foo: typeof x};

x = {"x": {a: y + x}};

a = { w, a: x } = b;

a = {...src.y.x} = b;

a = { y: x = 1 } = b;

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
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 8
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "key",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
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
                                                    "start": 21,
                                                    "end": 22
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 19,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "key",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 30
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
                                        "start": 35,
                                        "end": 36
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 36
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 33,
                            "end": 36
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 32,
                        "end": 37
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 37,
                        "end": 38
                    },
                    "right": {
                        "kind": 81921,
                        "value": "obj",
                        "autofix": 0,
                        "flags": 768,
                        "start": 38,
                        "end": 41
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 32,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 30,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 43
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
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 51,
                                                "end": 51
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 48,
                                            "end": 52
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 53,
                                            "end": 54
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 46,
                                        "end": 54
                                    },
                                    "questionToken": {
                                        "kind": 22,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 54,
                                        "end": 56
                                    },
                                    "consequent": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 56,
                                        "end": 58
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 58,
                                        "end": 60
                                    },
                                    "alternate": {
                                        "kind": 81921,
                                        "value": "d",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 60,
                                        "end": 62
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 46,
                                    "end": 62
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 46,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 46,
                                "end": 62
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 46,
                        "end": 62
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 45,
                    "end": 64
                },
                "autofix": 0,
                "flags": 256,
                "start": 43,
                "end": 65
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 66
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
                                                            "value": 1,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 79,
                                                            "end": 81
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "prop",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 74,
                                                            "end": 78
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 74,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 74,
                                                "end": 81
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 72,
                                            "end": 82
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "prop",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 83,
                                            "end": 87
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 69,
                                        "end": 87
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 69,
                                        "end": 71
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 69,
                                    "end": 87
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 69,
                            "end": 87
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 68,
                        "end": 89
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 89,
                        "end": 91
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
                            "start": 93,
                            "end": 93
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 91,
                        "end": 94
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 68,
                    "end": 94
                },
                "autofix": 0,
                "flags": 256,
                "start": 66,
                "end": 95
            },
            "autofix": 0,
            "flags": 128,
            "start": 66,
            "end": 96
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
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 101,
                                        "end": 104
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 101,
                                    "end": 106
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 99,
                                    "end": 100
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 99,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 99,
                        "end": 106
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 98,
                    "end": 108
                },
                "autofix": 0,
                "flags": 256,
                "start": 96,
                "end": 109
            },
            "autofix": 0,
            "flags": 128,
            "start": 96,
            "end": 110
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
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 120,
                                        "end": 122
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 117,
                                    "end": 122
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 113,
                                    "end": 116
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 113,
                                "end": 122
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 113,
                        "end": 122
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 112,
                    "end": 124
                },
                "autofix": 0,
                "flags": 256,
                "start": 110,
                "end": 125
            },
            "autofix": 0,
            "flags": 128,
            "start": 110,
            "end": 126
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
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 131,
                                        "end": 134
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 134,
                                        "end": 136
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 131,
                                    "end": 136
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 129,
                                    "end": 130
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 129,
                                "end": 136
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 129,
                        "end": 136
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 128,
                    "end": 138
                },
                "autofix": 0,
                "flags": 256,
                "start": 126,
                "end": 139
            },
            "autofix": 0,
            "flags": 128,
            "start": 126,
            "end": 140
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
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 151,
                                            "end": 156
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 149,
                                        "end": 157
                                    },
                                    "questionToken": {
                                        "kind": 22,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "consequent": {
                                        "kind": 81921,
                                        "value": "yield",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 159,
                                        "end": 165
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 165,
                                        "end": 167
                                    },
                                    "alternate": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 143,
                                    "end": 171
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 143,
                                    "end": 148
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 143,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 143,
                        "end": 171
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 142,
                    "end": 172
                },
                "autofix": 0,
                "flags": 256,
                "start": 140,
                "end": 173
            },
            "autofix": 0,
            "flags": 128,
            "start": 140,
            "end": 174
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
                                    "value": 100,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 182,
                                    "end": 186
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 187,
                                    "end": 188
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
                                        "start": 189,
                                        "end": 189
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 188,
                                    "end": 190
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 186,
                                "end": 190
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 177,
                        "end": 190
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 176,
                    "end": 191
                },
                "autofix": 0,
                "flags": 256,
                "start": 174,
                "end": 192
            },
            "autofix": 0,
            "flags": 128,
            "start": 174,
            "end": 193
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 200,
                                        "end": 204
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 196,
                                        "end": 206
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 196,
                                    "end": 208
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "key",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 196,
                                    "end": 199
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 196,
                                "end": 208
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 196,
                        "end": 208
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 195,
                    "end": 209
                },
                "autofix": 0,
                "flags": 256,
                "start": 193,
                "end": 210
            },
            "autofix": 0,
            "flags": 128,
            "start": 193,
            "end": 211
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
                                    "value": "typeof",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 214,
                                    "end": 221
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 222,
                                                "end": 223
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 222,
                                            "end": 223
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 224,
                                                "end": 226
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 224,
                                            "end": 226
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 222,
                                    "end": 227
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
                                        "start": 229,
                                        "end": 229
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 227,
                                    "end": 230
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 221,
                                "end": 230
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 214,
                        "end": 230
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 213,
                    "end": 231
                },
                "autofix": 0,
                "flags": 256,
                "start": 211,
                "end": 232
            },
            "autofix": 0,
            "flags": 128,
            "start": 211,
            "end": 233
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
                                    "start": 236,
                                    "end": 238
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 239,
                                    "end": 240
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
                                        "start": 242,
                                        "end": 242
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 240,
                                    "end": 243
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 238,
                                "end": 243
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 247,
                                    "end": 249
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 244,
                                    "end": 246
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 244,
                                "end": 249
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 236,
                        "end": 249
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 235,
                    "end": 250
                },
                "autofix": 0,
                "flags": 256,
                "start": 233,
                "end": 251
            },
            "autofix": 0,
            "flags": 128,
            "start": 233,
            "end": 252
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
                                    "start": 257,
                                    "end": 258
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 259,
                                    "end": 260
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
                                        "start": 262,
                                        "end": 262
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 260,
                                    "end": 263
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 258,
                                "end": 263
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 268,
                                    "end": 270
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 271,
                                    "end": 272
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
                                        "start": 274,
                                        "end": 274
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 272,
                                    "end": 275
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 270,
                                "end": 275
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 255,
                        "end": 275
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 254,
                    "end": 276
                },
                "autofix": 0,
                "flags": 256,
                "start": 252,
                "end": 277
            },
            "autofix": 0,
            "flags": 128,
            "start": 252,
            "end": 278
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
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 286,
                                        "end": 288
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 288,
                                        "end": 289
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 289,
                                        "end": 290
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 282,
                                    "end": 290
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 282,
                                    "end": 285
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 282,
                                "end": 290
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 282,
                        "end": 290
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 281,
                    "end": 291
                },
                "autofix": 0,
                "flags": 256,
                "start": 278,
                "end": 292
            },
            "autofix": 0,
            "flags": 128,
            "start": 278,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 302,
                                                    "end": 303
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 302,
                                            "end": 303
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 300,
                                        "end": 304
                                    },
                                    "right": {
                                        "kind": 67174403,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 296,
                                        "end": 299
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 296,
                                    "end": 304
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 296,
                            "end": 304
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 295,
                        "end": 305
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 309,
                    "end": 311
                },
                "autofix": 0,
                "flags": 256,
                "start": 293,
                "end": 311
            },
            "autofix": 0,
            "flags": 128,
            "start": 293,
            "end": 312
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
                                                    "kind": 81921,
                                                    "value": "z",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 323,
                                                    "end": 325
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 321,
                                                    "end": 322
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 321,
                                                "end": 325
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 321,
                                        "end": 325
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 319,
                                    "end": 326
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 315,
                                    "end": 318
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 315,
                                "end": 326
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 315,
                        "end": 326
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 314,
                    "end": 327
                },
                "autofix": 0,
                "flags": 256,
                "start": 312,
                "end": 328
            },
            "autofix": 0,
            "flags": 128,
            "start": 312,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 329,
                    "end": 332
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
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
                                                "start": 338,
                                                "end": 339
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 335,
                                                    "end": 336
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 334,
                                                "end": 337
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 334,
                                            "end": 339
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 346,
                                                "end": 347
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 15,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 342,
                                                    "end": 344
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 340,
                                                "end": 345
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 340,
                                            "end": 347
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 334,
                                    "end": 347
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 333,
                                "end": 348
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 348,
                                "end": 349
                            },
                            "right": {
                                "kind": 81921,
                                "value": "obj",
                                "autofix": 0,
                                "flags": 768,
                                "start": 349,
                                "end": 352
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 333,
                            "end": 352
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 333,
                    "end": 352
                },
                "flags": 256,
                "start": 329,
                "end": 353
            },
            "autofix": 0,
            "flags": 128,
            "start": 329,
            "end": 354
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
                                            "kind": 81921,
                                            "value": 50,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 360,
                                            "end": 364
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 365,
                                            "end": 368
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 360,
                                        "end": 368
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "l",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 358,
                                        "end": 359
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 358,
                                    "end": 368
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 358,
                            "end": 368
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 357,
                        "end": 369
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 369,
                        "end": 371
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 371,
                        "end": 373
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 357,
                    "end": 373
                },
                "autofix": 0,
                "flags": 256,
                "start": 354,
                "end": 374
            },
            "autofix": 0,
            "flags": 128,
            "start": 354,
            "end": 375
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 375,
                    "end": 378
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 375,
                    "end": 379
                },
                "right": {
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
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 384,
                                        "end": 385
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 380,
                                        "end": 386
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "d",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 386,
                                        "end": 387
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 380,
                                    "end": 387
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 380,
                                    "end": 383
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 380,
                                "end": 387
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 380,
                        "end": 387
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 379,
                    "end": 388
                },
                "autofix": 0,
                "flags": 256,
                "start": 375,
                "end": 388
            },
            "autofix": 0,
            "flags": 128,
            "start": 375,
            "end": 389
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
                                    "value": "let",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 395,
                                    "end": 398
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
                                "end": 398
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 393,
                        "end": 398
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 392,
                    "end": 399
                },
                "autofix": 0,
                "flags": 256,
                "start": 389,
                "end": 400
            },
            "autofix": 0,
            "flags": 128,
            "start": 389,
            "end": 401
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
                                        "value": "let",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 407,
                                        "end": 410
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 405,
                                        "end": 406
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 405,
                                    "end": 410
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 405,
                            "end": 410
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 404,
                        "end": 411
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 411,
                        "end": 413
                    },
                    "right": {
                        "kind": 269,
                        "value": null,
                        "autofix": 0,
                        "flags": 768,
                        "start": 413,
                        "end": 418
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 404,
                    "end": 418
                },
                "autofix": 0,
                "flags": 256,
                "start": 401,
                "end": 419
            },
            "autofix": 0,
            "flags": 128,
            "start": 401,
            "end": 420
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "s",
                    "autofix": 0,
                    "flags": 768,
                    "start": 420,
                    "end": 423
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 420,
                    "end": 425
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 135,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 433,
                                    "end": 438
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 427,
                                    "end": 432
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 427,
                                "end": 438
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 427,
                        "end": 438
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 425,
                    "end": 439
                },
                "autofix": 0,
                "flags": 256,
                "start": 420,
                "end": 439
            },
            "autofix": 0,
            "flags": 128,
            "start": 420,
            "end": 440
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 440,
                    "end": 443
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67174403,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 448,
                                            "end": 454
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
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 455,
                                                        "end": 456
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 455,
                                                    "end": 456
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 455,
                                            "end": 457
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
                                                "start": 458,
                                                "end": 458
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 457,
                                            "end": 459
                                        },
                                        "autofix": 0,
                                        "flags": 4352,
                                        "start": 454,
                                        "end": 459
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 445,
                                "end": 459
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 444,
                            "end": 460
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 444,
                    "end": 460
                },
                "flags": 256,
                "start": 440,
                "end": 461
            },
            "autofix": 0,
            "flags": 128,
            "start": 440,
            "end": 462
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
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 466,
                                        "end": 468
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 42,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 470,
                                        "end": 473
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 466,
                                    "end": 473
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "c",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 479,
                                            "end": 481
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 482,
                                            "end": 483
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 474,
                                        "end": 483
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 476,
                                            "end": 477
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 474,
                                        "end": 478
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 474,
                                    "end": 483
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 466,
                            "end": 483
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 465,
                        "end": 485
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 485,
                        "end": 487
                    },
                    "right": {
                        "kind": 81921,
                        "value": "e",
                        "autofix": 0,
                        "flags": 768,
                        "start": 487,
                        "end": 489
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 465,
                    "end": 489
                },
                "autofix": 0,
                "flags": 256,
                "start": 462,
                "end": 490
            },
            "autofix": 0,
            "flags": 128,
            "start": 462,
            "end": 491
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 491,
                    "end": 494
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 496,
                                            "end": 499
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 500,
                                            "end": 501
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
                                                "start": 502,
                                                "end": 502
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 501,
                                            "end": 503
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 499,
                                        "end": 503
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 506,
                                            "end": 509
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 510,
                                            "end": 511
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
                                                "start": 512,
                                                "end": 512
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 511,
                                            "end": 513
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 509,
                                        "end": 513
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 496,
                                "end": 513
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 495,
                            "end": 514
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 495,
                    "end": 514
                },
                "flags": 256,
                "start": 491,
                "end": 515
            },
            "autofix": 0,
            "flags": 128,
            "start": 491,
            "end": 516
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 524,
                                                "end": 525
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 526,
                                                "end": 528
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 524,
                                        "end": 528
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 523,
                                    "end": 529
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 520,
                                "end": 529
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 520,
                        "end": 529
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 519,
                    "end": 530
                },
                "autofix": 0,
                "flags": 256,
                "start": 516,
                "end": 531
            },
            "autofix": 0,
            "flags": 128,
            "start": 516,
            "end": 532
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 532,
                    "end": 535
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 532,
                    "end": 537
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
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 542,
                                    "end": 544
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 539,
                                    "end": 541
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 539,
                                "end": 544
                            },
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 549,
                                    "end": 550
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 545,
                                "end": 550
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 554,
                                    "end": 556
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 551,
                                    "end": 553
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 551,
                                "end": 556
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 539,
                        "end": 556
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 537,
                    "end": 557
                },
                "autofix": 0,
                "flags": 256,
                "start": 532,
                "end": 557
            },
            "autofix": 0,
            "flags": 128,
            "start": 532,
            "end": 558
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 558,
                    "end": 561
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 2310721,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 566,
                                            "end": 575
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 576,
                                            "end": 577
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
                                                "start": 578,
                                                "end": 578
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 577,
                                            "end": 579
                                        },
                                        "autofix": 0,
                                        "flags": 8448,
                                        "start": 575,
                                        "end": 579
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 563,
                                "end": 579
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 562,
                            "end": 580
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 562,
                    "end": 580
                },
                "flags": 256,
                "start": 558,
                "end": 581
            },
            "autofix": 0,
            "flags": 128,
            "start": 558,
            "end": 582
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 582,
                    "end": 585
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 590,
                                            "end": 592
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 593,
                                            "end": 594
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
                                                "start": 595,
                                                "end": 595
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 594,
                                            "end": 596
                                        },
                                        "autofix": 0,
                                        "flags": 8448,
                                        "start": 592,
                                        "end": 596
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 587,
                                "end": 596
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 586,
                            "end": 597
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 586,
                    "end": 597
                },
                "flags": 256,
                "start": 582,
                "end": 598
            },
            "autofix": 0,
            "flags": 128,
            "start": 582,
            "end": 599
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
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 613,
                                        "end": 615
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "left",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 605,
                                                "end": 609
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 610,
                                                "end": 610
                                            },
                                            "flags": 256,
                                            "start": 605,
                                            "end": 611
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 603,
                                        "end": 612
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 603,
                                    "end": 615
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 616,
                                    "end": 621
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 603,
                            "end": 621
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 602,
                        "end": 622
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 622,
                        "end": 624
                    },
                    "right": {
                        "kind": 131,
                        "expression": {
                            "kind": 81921,
                            "value": "right",
                            "autofix": 0,
                            "flags": 768,
                            "start": 624,
                            "end": 630
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 631,
                            "end": 631
                        },
                        "flags": 256,
                        "start": 624,
                        "end": 632
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 602,
                    "end": 632
                },
                "autofix": 0,
                "flags": 256,
                "start": 599,
                "end": 633
            },
            "autofix": 0,
            "flags": 128,
            "start": 599,
            "end": 634
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
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "x1",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 650,
                                                        "end": 653
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 648,
                                                        "end": 649
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 648,
                                                    "end": 653
                                                },
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y1",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 657,
                                                        "end": 660
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 654,
                                                        "end": 656
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 654,
                                                    "end": 660
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 648,
                                            "end": 660
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 646,
                                        "end": 661
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "topLeft",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 638,
                                        "end": 645
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 638,
                                    "end": 661
                                },
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
                                                        "kind": 81921,
                                                        "value": "x2",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 679,
                                                        "end": 682
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 677,
                                                        "end": 678
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 677,
                                                    "end": 682
                                                },
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y2",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 686,
                                                        "end": 689
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 683,
                                                        "end": 685
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 683,
                                                    "end": 689
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 677,
                                            "end": 689
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 675,
                                        "end": 690
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "bottomRight",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 662,
                                        "end": 674
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 662,
                                    "end": 690
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 638,
                            "end": 690
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 637,
                        "end": 691
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 691,
                        "end": 693
                    },
                    "right": {
                        "kind": 81921,
                        "value": "rect",
                        "autofix": 0,
                        "flags": 768,
                        "start": 693,
                        "end": 698
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 637,
                    "end": 698
                },
                "autofix": 0,
                "flags": 256,
                "start": 634,
                "end": 699
            },
            "autofix": 0,
            "flags": 128,
            "start": 634,
            "end": 700
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
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 704,
                                "end": 705
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 704,
                        "end": 705
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 703,
                    "end": 706
                },
                "autofix": 0,
                "flags": 256,
                "start": 700,
                "end": 707
            },
            "autofix": 0,
            "flags": 128,
            "start": 700,
            "end": 708
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
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 717,
                                        "end": 718
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 715,
                                    "end": 719
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
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 720,
                                                "end": 721
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 720,
                                            "end": 721
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 720,
                                    "end": 722
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 724,
                                                            "end": 730
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "m",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 731,
                                                            "end": 732
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 724,
                                                        "end": 732
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 67174403,
                                                                "value": "1",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 733,
                                                                "end": 736
                                                            },
                                                            {
                                                                "kind": 81921,
                                                                "value": "v",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 737,
                                                                "end": 739
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 733,
                                                        "end": 739
                                                    },
                                                    "flags": 256,
                                                    "start": 724,
                                                    "end": 740
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 724,
                                                "end": 741
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 724,
                                        "end": 741
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 722,
                                    "end": 743
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 719,
                                "end": 743
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 712,
                        "end": 743
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 711,
                    "end": 744
                },
                "autofix": 0,
                "flags": 256,
                "start": 708,
                "end": 745
            },
            "autofix": 0,
            "flags": 128,
            "start": 708,
            "end": 746
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 746,
                    "end": 749
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 746,
                    "end": 751
                },
                "right": {
                    "kind": 131,
                    "expression": {
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
                                        "start": 759,
                                        "end": 760
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 753,
                                        "end": 758
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 753,
                                    "end": 760
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 753,
                            "end": 760
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 751,
                        "end": 761
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 209,
                                            "name": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 768,
                                                "end": 772
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
                                                            "value": "v",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 773,
                                                            "end": 774
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 773,
                                                        "end": 774
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 773,
                                                "end": 775
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
                                                    "start": 777,
                                                    "end": 777
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 775,
                                                "end": 778
                                            },
                                            "autofix": 0,
                                            "flags": 4352,
                                            "start": 772,
                                            "end": 778
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 765,
                                    "end": 778
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 764,
                                "end": 779
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 764,
                        "end": 779
                    },
                    "flags": 256,
                    "start": 751,
                    "end": 780
                },
                "autofix": 0,
                "flags": 256,
                "start": 746,
                "end": 780
            },
            "autofix": 0,
            "flags": 128,
            "start": 746,
            "end": 781
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
                                    "value": "set",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 786,
                                    "end": 789
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 790,
                                    "end": 791
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
                                        "start": 793,
                                        "end": 793
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 791,
                                    "end": 794
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 789,
                                "end": 794
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 785,
                        "end": 794
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 784,
                    "end": 795
                },
                "autofix": 0,
                "flags": 256,
                "start": 781,
                "end": 796
            },
            "autofix": 0,
            "flags": 128,
            "start": 781,
            "end": 797
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
                                    "value": "static",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 802,
                                    "end": 808
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 809,
                                    "end": 810
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
                                        "start": 812,
                                        "end": 812
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 810,
                                    "end": 813
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 808,
                                "end": 813
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 801,
                        "end": 813
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 800,
                    "end": 814
                },
                "autofix": 0,
                "flags": 256,
                "start": 797,
                "end": 815
            },
            "autofix": 0,
            "flags": 128,
            "start": 797,
            "end": 816
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
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 821,
                                    "end": 826
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 827,
                                    "end": 828
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
                                        "start": 829,
                                        "end": 829
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 828,
                                    "end": 830
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 826,
                                "end": 830
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 820,
                        "end": 830
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 819,
                    "end": 831
                },
                "autofix": 0,
                "flags": 256,
                "start": 816,
                "end": 832
            },
            "autofix": 0,
            "flags": 128,
            "start": 816,
            "end": 833
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
                                    "value": 0,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 842,
                                    "end": 844
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "get",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 837,
                                    "end": 840
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 837,
                                "end": 844
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 837,
                        "end": 844
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 836,
                    "end": 845
                },
                "autofix": 0,
                "flags": 256,
                "start": 833,
                "end": 846
            },
            "autofix": 0,
            "flags": 128,
            "start": 833,
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 4,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 854,
                                    "end": 856
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "if",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 851,
                                    "end": 853
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 851,
                                "end": 856
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 851,
                        "end": 856
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 850,
                    "end": 857
                },
                "autofix": 0,
                "flags": 256,
                "start": 847,
                "end": 858
            },
            "autofix": 0,
            "flags": 128,
            "start": 847,
            "end": 859
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
                                    "value": "await",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 864,
                                    "end": 869
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 870,
                                    "end": 871
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
                                        "start": 873,
                                        "end": 873
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 871,
                                    "end": 874
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 869,
                                "end": 874
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 863,
                        "end": 874
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 862,
                    "end": 875
                },
                "autofix": 0,
                "flags": 256,
                "start": 859,
                "end": 876
            },
            "autofix": 0,
            "flags": 128,
            "start": 859,
            "end": 877
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 877,
                    "end": 880
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 877,
                    "end": 882
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 67174403,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 885,
                                    "end": 890
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 891,
                                    "end": 892
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
                                        "start": 893,
                                        "end": 893
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 892,
                                    "end": 894
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 890,
                                "end": 894
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 884,
                        "end": 894
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 882,
                    "end": 895
                },
                "autofix": 0,
                "flags": 256,
                "start": 877,
                "end": 895
            },
            "autofix": 0,
            "flags": 128,
            "start": 877,
            "end": 896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 896,
                    "end": 899
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 896,
                    "end": 901
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "get",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 906,
                                    "end": 910
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
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 911,
                                                "end": 912
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 911,
                                            "end": 912
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 911,
                                    "end": 913
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
                                        "start": 914,
                                        "end": 914
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 913,
                                    "end": 915
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 910,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 903,
                        "end": 915
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 901,
                    "end": 916
                },
                "autofix": 0,
                "flags": 256,
                "start": 896,
                "end": 916
            },
            "autofix": 0,
            "flags": 128,
            "start": 896,
            "end": 917
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 917,
                    "end": 920
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 917,
                    "end": 922
                },
                "right": {
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
                                        "start": 928,
                                        "end": 935
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 935,
                                        "end": 937
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 928,
                                    "end": 937
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 924,
                                    "end": 927
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 924,
                                "end": 937
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 924,
                        "end": 937
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 922,
                    "end": 938
                },
                "autofix": 0,
                "flags": 256,
                "start": 917,
                "end": 938
            },
            "autofix": 0,
            "flags": 128,
            "start": 917,
            "end": 939
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 939,
                    "end": 942
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 939,
                    "end": 944
                },
                "right": {
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
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 954,
                                                        "end": 956
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 956,
                                                        "end": 958
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 958,
                                                        "end": 960
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 952,
                                                    "end": 960
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 952,
                                                    "end": 953
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 952,
                                                "end": 960
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 952,
                                        "end": 960
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 950,
                                    "end": 961
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 946,
                                    "end": 949
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 946,
                                "end": 961
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 946,
                        "end": 961
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 944,
                    "end": 962
                },
                "autofix": 0,
                "flags": 256,
                "start": 939,
                "end": 962
            },
            "autofix": 0,
            "flags": 128,
            "start": 939,
            "end": 963
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 963,
                    "end": 966
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 963,
                    "end": 968
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 81921,
                                    "value": "w",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 970,
                                    "end": 972
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 976,
                                        "end": 978
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 973,
                                        "end": 975
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 973,
                                    "end": 978
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 970,
                            "end": 978
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 968,
                        "end": 980
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 980,
                        "end": 982
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 982,
                        "end": 984
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 968,
                    "end": 984
                },
                "autofix": 0,
                "flags": 256,
                "start": 963,
                "end": 984
            },
            "autofix": 0,
            "flags": 128,
            "start": 963,
            "end": 985
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 985,
                    "end": 988
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 985,
                    "end": 990
                },
                "right": {
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
                                            "kind": 129,
                                            "member": {
                                                "kind": 81921,
                                                "value": "src",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 995,
                                                "end": 998
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 999,
                                                "end": 1000
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 995,
                                            "end": 1000
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 1001,
                                            "end": 1002
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 995,
                                        "end": 1002
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 992,
                                    "end": 1002
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 992,
                            "end": 1002
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 990,
                        "end": 1003
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 1003,
                        "end": 1005
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 1005,
                        "end": 1007
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 990,
                    "end": 1007
                },
                "autofix": 0,
                "flags": 256,
                "start": 985,
                "end": 1007
            },
            "autofix": 0,
            "flags": 128,
            "start": 985,
            "end": 1008
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 1008,
                    "end": 1011
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1008,
                    "end": 1013
                },
                "right": {
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
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 1018,
                                            "end": 1020
                                        },
                                        "operatorToken": {
                                            "kind": 67174402,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 1015,
                                            "end": 1022
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 1022,
                                            "end": 1024
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1015,
                                        "end": 1024
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 1015,
                                        "end": 1017
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 1015,
                                    "end": 1024
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 1015,
                            "end": 1024
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1013,
                        "end": 1026
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 1026,
                        "end": 1028
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 1028,
                        "end": 1030
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1013,
                    "end": 1030
                },
                "autofix": 0,
                "flags": 256,
                "start": 1008,
                "end": 1030
            },
            "autofix": 0,
            "flags": 128,
            "start": 1008,
            "end": 1031
        }
    ],
    "isModule": false,
    "text": "({key: {}});\n({key: {a} = x});\n({a:b}=obj);\n({1:  {}.b ? c : d });\n({ a: {prop: 1}.prop } = {});\n({1:  + b });\n({[a]:  + b });\n({a:  + b });\n({async: (await) ? yield : foo});\n({async 100(){}});\n({key: bar = x});\n({ typeof(x, y) {}});\n({ x() {}, x: 1});\n({ *x() {}, get x() {}});\n\n({\"x\": y+z});\n({\"x\": [y]}) => x;\n({\"x\": {y: z}});\n\nx({[a]:b, [15]:d}=obj);\n\n({l: 50..foo} = x);\n\na={\"b\":c=d};\n\n({x:let});\n\n({x:let} = null);\n\ns = {\"foo\": this};\n\nx({set \"foo\"(a){}});\n\n({ a = 42, [b]: c.d } = e);\n\nx({foo(){}, *bar(){}});\n\n({...[a, b]});\n\nx = { a: 1, ...y, b: 1};\n\nx({get 0x234241(){}});\n\nx({get 1(){}});\n\n({ [left()]: y, ...x} = right());\n\n({topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect);\n\n({y});\n\n({set [0](x) { super.m(\"1\", v); }});\n\nx = {async:b}\n\n({set foo(v) {}});\n\n({*set() {}});\n\n({*static() {}});\n\n({*async(){}});\n\n({get : 0});\n\n({if: 4});\n\n({*await() {}});\n\nx = {*\"foo\"(){}};\n\nx = {set get(a){}};\n\nx = {foo: typeof x};\n\nx = {\"x\": {a: y + x}};\n\na = { w, a: x } = b;\n\na = {...src.y.x} = b;\n\na = { y: x = 1 } = b;\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 1032
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

