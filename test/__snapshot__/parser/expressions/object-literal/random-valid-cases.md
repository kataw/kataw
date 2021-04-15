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
    "directives": [],
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
                                        "flags": 0,
                                        "start": 8,
                                        "end": 8
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
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
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 21,
                                                    "end": 22
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 19,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 768,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 15,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 28
                },
                "flags": 256,
                "start": 12,
                "end": 29
            },
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
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 35,
                                        "end": 36
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 36
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 256,
                        "start": 32,
                        "end": 37
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 37,
                        "end": 38
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 38,
                        "end": 41
                    },
                    "flags": 256,
                    "start": 32,
                    "end": 41
                },
                "flags": 256,
                "start": 30,
                "end": 42
            },
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
                                                "flags": 0,
                                                "start": 51,
                                                "end": 51
                                            },
                                            "flags": 256,
                                            "start": 48,
                                            "end": 52
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
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
                                        "flags": 768,
                                        "start": 54,
                                        "end": 56
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 56,
                                        "end": 58
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 768,
                                        "start": 58,
                                        "end": 60
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 768,
                                        "start": 60,
                                        "end": 62
                                    },
                                    "flags": 256,
                                    "start": 46,
                                    "end": 62
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 46,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 46,
                                "end": 62
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 46,
                        "end": 62
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 64
                },
                "flags": 256,
                "start": 43,
                "end": 65
            },
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
                                                            "kind": 134299649,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 79,
                                                            "end": 81
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 768,
                                                            "start": 74,
                                                            "end": 78
                                                        },
                                                        "flags": 256,
                                                        "start": 74,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 74,
                                                "end": 81
                                            },
                                            "flags": 256,
                                            "start": 72,
                                            "end": 82
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 69,
                                        "end": 71
                                    },
                                    "flags": 256,
                                    "start": 69,
                                    "end": 87
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 69,
                            "end": 87
                        },
                        "flags": 256,
                        "start": 68,
                        "end": 89
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
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
                            "flags": 0,
                            "start": 93,
                            "end": 93
                        },
                        "flags": 256,
                        "start": 91,
                        "end": 94
                    },
                    "flags": 256,
                    "start": 68,
                    "end": 94
                },
                "flags": 256,
                "start": 66,
                "end": 95
            },
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
                                        "flags": 768,
                                        "start": 101,
                                        "end": 104
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "flags": 256,
                                    "start": 101,
                                    "end": 106
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 99,
                                    "end": 100
                                },
                                "flags": 256,
                                "start": 99,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 99,
                        "end": 106
                    },
                    "flags": 256,
                    "start": 98,
                    "end": 108
                },
                "flags": 256,
                "start": 96,
                "end": 109
            },
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
                                        "flags": 768,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 120,
                                        "end": 122
                                    },
                                    "flags": 256,
                                    "start": 117,
                                    "end": 122
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "flags": 256,
                                    "start": 113,
                                    "end": 116
                                },
                                "flags": 256,
                                "start": 113,
                                "end": 122
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 113,
                        "end": 122
                    },
                    "flags": 256,
                    "start": 112,
                    "end": 124
                },
                "flags": 256,
                "start": 110,
                "end": 125
            },
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
                                        "flags": 768,
                                        "start": 131,
                                        "end": 134
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 134,
                                        "end": 136
                                    },
                                    "flags": 256,
                                    "start": 131,
                                    "end": 136
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 129,
                                    "end": 130
                                },
                                "flags": 256,
                                "start": 129,
                                "end": 136
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 129,
                        "end": 136
                    },
                    "flags": 256,
                    "start": 128,
                    "end": 138
                },
                "flags": 256,
                "start": 126,
                "end": 139
            },
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
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 151,
                                            "end": 156
                                        },
                                        "flags": 256,
                                        "start": 149,
                                        "end": 157
                                    },
                                    "questionToken": {
                                        "kind": 22,
                                        "flags": 768,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 159,
                                        "end": 165
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 768,
                                        "start": 165,
                                        "end": 167
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "flags": 256,
                                    "start": 143,
                                    "end": 171
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 143,
                                    "end": 148
                                },
                                "flags": 256,
                                "start": 143,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 143,
                        "end": 171
                    },
                    "flags": 256,
                    "start": 142,
                    "end": 172
                },
                "flags": 256,
                "start": 140,
                "end": 173
            },
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
                                    "kind": 134299649,
                                    "text": 100,
                                    "rawText": "100",
                                    "flags": 768,
                                    "start": 182,
                                    "end": 186
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 187,
                                    "end": 188
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 189,
                                        "end": 189
                                    },
                                    "flags": 256,
                                    "start": 188,
                                    "end": 190
                                },
                                "flags": 2304,
                                "start": 186,
                                "end": 190
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 177,
                        "end": 190
                    },
                    "flags": 256,
                    "start": 176,
                    "end": 191
                },
                "flags": 256,
                "start": 174,
                "end": 192
            },
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
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 768,
                                        "start": 200,
                                        "end": 204
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 204,
                                        "end": 206
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "flags": 256,
                                    "start": 196,
                                    "end": 208
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 768,
                                    "start": 196,
                                    "end": 199
                                },
                                "flags": 256,
                                "start": 196,
                                "end": 208
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 196,
                        "end": 208
                    },
                    "flags": 256,
                    "start": 195,
                    "end": 209
                },
                "flags": 256,
                "start": 193,
                "end": 210
            },
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
                                    "kind": 134299649,
                                    "text": "typeof",
                                    "rawText": "typeof",
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 222,
                                                "end": 223
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 222,
                                            "end": 223
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 224,
                                                "end": 226
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 224,
                                            "end": 226
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 222,
                                    "end": 227
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 229,
                                        "end": 229
                                    },
                                    "flags": 256,
                                    "start": 227,
                                    "end": 230
                                },
                                "flags": 256,
                                "start": 221,
                                "end": 230
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 214,
                        "end": 230
                    },
                    "flags": 256,
                    "start": 213,
                    "end": 231
                },
                "flags": 256,
                "start": 211,
                "end": 232
            },
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 236,
                                    "end": 238
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 239,
                                    "end": 240
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 242,
                                        "end": 242
                                    },
                                    "flags": 256,
                                    "start": 240,
                                    "end": 243
                                },
                                "flags": 256,
                                "start": 238,
                                "end": 243
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 247,
                                    "end": 249
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 244,
                                    "end": 246
                                },
                                "flags": 256,
                                "start": 244,
                                "end": 249
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 236,
                        "end": 249
                    },
                    "flags": 256,
                    "start": 235,
                    "end": 250
                },
                "flags": 256,
                "start": 233,
                "end": 251
            },
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 257,
                                    "end": 258
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 259,
                                    "end": 260
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 262,
                                        "end": 262
                                    },
                                    "flags": 256,
                                    "start": 260,
                                    "end": 263
                                },
                                "flags": 1280,
                                "start": 258,
                                "end": 263
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 268,
                                    "end": 270
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 8448,
                                    "start": 271,
                                    "end": 272
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 274,
                                        "end": 274
                                    },
                                    "flags": 256,
                                    "start": 272,
                                    "end": 275
                                },
                                "flags": 8448,
                                "start": 270,
                                "end": 275
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 255,
                        "end": 275
                    },
                    "flags": 256,
                    "start": 254,
                    "end": 276
                },
                "flags": 256,
                "start": 252,
                "end": 277
            },
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
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 286,
                                        "end": 288
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 288,
                                        "end": 289
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 289,
                                        "end": 290
                                    },
                                    "flags": 256,
                                    "start": 282,
                                    "end": 290
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 282,
                                    "end": 285
                                },
                                "flags": 256,
                                "start": 282,
                                "end": 290
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 282,
                        "end": 290
                    },
                    "flags": 256,
                    "start": 281,
                    "end": 291
                },
                "flags": 256,
                "start": 278,
                "end": 292
            },
            "flags": 128,
            "start": 278,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 306,
                    "end": 309
                },
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
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 302,
                                                    "end": 303
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 302,
                                            "end": 303
                                        },
                                        "flags": 256,
                                        "start": 300,
                                        "end": 304
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 296,
                                        "end": 299
                                    },
                                    "flags": 256,
                                    "start": 296,
                                    "end": 304
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 296,
                            "end": 304
                        },
                        "flags": 256,
                        "start": 295,
                        "end": 305
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 309,
                    "end": 311
                },
                "flags": 256,
                "start": 293,
                "end": 311
            },
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
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 768,
                                                    "start": 323,
                                                    "end": 325
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 321,
                                                    "end": 322
                                                },
                                                "flags": 256,
                                                "start": 321,
                                                "end": 325
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 321,
                                        "end": 325
                                    },
                                    "flags": 256,
                                    "start": 319,
                                    "end": 326
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 315,
                                    "end": 318
                                },
                                "flags": 256,
                                "start": 315,
                                "end": 326
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 315,
                        "end": 326
                    },
                    "flags": 256,
                    "start": 314,
                    "end": 327
                },
                "flags": 256,
                "start": 312,
                "end": 328
            },
            "flags": 128,
            "start": 312,
            "end": 329
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
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
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 338,
                                                "end": 339
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 335,
                                                    "end": 336
                                                },
                                                "flags": 256,
                                                "start": 334,
                                                "end": 337
                                            },
                                            "flags": 256,
                                            "start": 334,
                                            "end": 339
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 768,
                                                "start": 346,
                                                "end": 347
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": 15,
                                                    "rawText": "15",
                                                    "flags": 768,
                                                    "start": 342,
                                                    "end": 344
                                                },
                                                "flags": 256,
                                                "start": 340,
                                                "end": 345
                                            },
                                            "flags": 256,
                                            "start": 340,
                                            "end": 347
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 334,
                                    "end": 347
                                },
                                "flags": 256,
                                "start": 333,
                                "end": 348
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 348,
                                "end": 349
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 768,
                                "start": 349,
                                "end": 352
                            },
                            "flags": 256,
                            "start": 333,
                            "end": 352
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 333,
                    "end": 352
                },
                "flags": 256,
                "start": 329,
                "end": 353
            },
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
                                            "kind": 134299649,
                                            "text": 50,
                                            "rawText": "50.",
                                            "flags": 768,
                                            "start": 360,
                                            "end": 364
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
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
                                        "kind": 134299649,
                                        "text": "l",
                                        "rawText": "l",
                                        "flags": 768,
                                        "start": 358,
                                        "end": 359
                                    },
                                    "flags": 256,
                                    "start": 358,
                                    "end": 368
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 358,
                            "end": 368
                        },
                        "flags": 256,
                        "start": 357,
                        "end": 369
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 369,
                        "end": 371
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 371,
                        "end": 373
                    },
                    "flags": 256,
                    "start": 357,
                    "end": 373
                },
                "flags": 256,
                "start": 354,
                "end": 374
            },
            "flags": 128,
            "start": 354,
            "end": 375
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 375,
                    "end": 378
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 378,
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
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 384,
                                        "end": 385
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 385,
                                        "end": 386
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 768,
                                        "start": 386,
                                        "end": 387
                                    },
                                    "flags": 256,
                                    "start": 380,
                                    "end": 387
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 380,
                                    "end": 383
                                },
                                "flags": 256,
                                "start": 380,
                                "end": 387
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 380,
                        "end": 387
                    },
                    "flags": 256,
                    "start": 379,
                    "end": 388
                },
                "flags": 256,
                "start": 375,
                "end": 388
            },
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
                                    "kind": 134299649,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 768,
                                    "start": 395,
                                    "end": 398
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 393,
                                    "end": 394
                                },
                                "flags": 256,
                                "start": 393,
                                "end": 398
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 393,
                        "end": 398
                    },
                    "flags": 256,
                    "start": 392,
                    "end": 399
                },
                "flags": 256,
                "start": 389,
                "end": 400
            },
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
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 768,
                                        "start": 407,
                                        "end": 410
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 405,
                                        "end": 406
                                    },
                                    "flags": 256,
                                    "start": 405,
                                    "end": 410
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 405,
                            "end": 410
                        },
                        "flags": 256,
                        "start": 404,
                        "end": 411
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 411,
                        "end": 413
                    },
                    "right": {
                        "kind": 269,
                        "text": null,
                        "flags": 768,
                        "start": 413,
                        "end": 418
                    },
                    "flags": 256,
                    "start": 404,
                    "end": 418
                },
                "flags": 256,
                "start": 401,
                "end": 419
            },
            "flags": 128,
            "start": 401,
            "end": 420
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 768,
                    "start": 420,
                    "end": 423
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 423,
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
                                    "flags": 768,
                                    "start": 433,
                                    "end": 438
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 427,
                                    "end": 432
                                },
                                "flags": 256,
                                "start": 427,
                                "end": 438
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 427,
                        "end": 438
                    },
                    "flags": 256,
                    "start": 425,
                    "end": 439
                },
                "flags": 256,
                "start": 420,
                "end": 439
            },
            "flags": 128,
            "start": 420,
            "end": 440
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
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
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "foo",
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
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 455,
                                                        "end": 456
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 455,
                                                    "end": 456
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 4352,
                                            "start": 455,
                                            "end": 457
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 458,
                                                "end": 458
                                            },
                                            "flags": 256,
                                            "start": 457,
                                            "end": 459
                                        },
                                        "flags": 4352,
                                        "start": 454,
                                        "end": 459
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 445,
                                "end": 459
                            },
                            "flags": 256,
                            "start": 444,
                            "end": 460
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 444,
                    "end": 460
                },
                "flags": 256,
                "start": 440,
                "end": 461
            },
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 466,
                                        "end": 468
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 768,
                                        "start": 470,
                                        "end": 473
                                    },
                                    "flags": 256,
                                    "start": 466,
                                    "end": 473
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 479,
                                            "end": 481
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
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
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 476,
                                            "end": 477
                                        },
                                        "flags": 256,
                                        "start": 474,
                                        "end": 478
                                    },
                                    "flags": 256,
                                    "start": 474,
                                    "end": 483
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 466,
                            "end": 483
                        },
                        "flags": 256,
                        "start": 465,
                        "end": 485
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 485,
                        "end": 487
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 768,
                        "start": 487,
                        "end": 489
                    },
                    "flags": 256,
                    "start": 465,
                    "end": 489
                },
                "flags": 256,
                "start": 462,
                "end": 490
            },
            "flags": 128,
            "start": 462,
            "end": 491
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 496,
                                            "end": 499
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 500,
                                            "end": 501
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 502,
                                                "end": 502
                                            },
                                            "flags": 256,
                                            "start": 501,
                                            "end": 503
                                        },
                                        "flags": 256,
                                        "start": 499,
                                        "end": 503
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 506,
                                            "end": 509
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 510,
                                            "end": 511
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 512,
                                                "end": 512
                                            },
                                            "flags": 256,
                                            "start": 511,
                                            "end": 513
                                        },
                                        "flags": 1280,
                                        "start": 509,
                                        "end": 513
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 496,
                                "end": 513
                            },
                            "flags": 256,
                            "start": 495,
                            "end": 514
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 495,
                    "end": 514
                },
                "flags": 256,
                "start": 491,
                "end": 515
            },
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
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 524,
                                                "end": 525
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 526,
                                                "end": 528
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 524,
                                        "end": 528
                                    },
                                    "flags": 256,
                                    "start": 523,
                                    "end": 529
                                },
                                "flags": 256,
                                "start": 520,
                                "end": 529
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 520,
                        "end": 529
                    },
                    "flags": 256,
                    "start": 519,
                    "end": 530
                },
                "flags": 256,
                "start": 516,
                "end": 531
            },
            "flags": 128,
            "start": 516,
            "end": 532
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 532,
                    "end": 535
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 535,
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
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 542,
                                    "end": 544
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 539,
                                    "end": 541
                                },
                                "flags": 256,
                                "start": 539,
                                "end": 544
                            },
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 549,
                                    "end": 550
                                },
                                "flags": 256,
                                "start": 545,
                                "end": 550
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 554,
                                    "end": 556
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 551,
                                    "end": 553
                                },
                                "flags": 256,
                                "start": 551,
                                "end": 556
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 539,
                        "end": 556
                    },
                    "flags": 256,
                    "start": 537,
                    "end": 557
                },
                "flags": 256,
                "start": 532,
                "end": 557
            },
            "flags": 128,
            "start": 532,
            "end": 558
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
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
                                            "kind": 134299649,
                                            "text": 2310721,
                                            "rawText": "0x234241",
                                            "flags": 16777984,
                                            "start": 566,
                                            "end": 575
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 576,
                                            "end": 577
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 578,
                                                "end": 578
                                            },
                                            "flags": 256,
                                            "start": 577,
                                            "end": 579
                                        },
                                        "flags": 8448,
                                        "start": 575,
                                        "end": 579
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 563,
                                "end": 579
                            },
                            "flags": 256,
                            "start": 562,
                            "end": 580
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 562,
                    "end": 580
                },
                "flags": 256,
                "start": 558,
                "end": 581
            },
            "flags": 128,
            "start": 558,
            "end": 582
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
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
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 590,
                                            "end": 592
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 593,
                                            "end": 594
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 595,
                                                "end": 595
                                            },
                                            "flags": 256,
                                            "start": 594,
                                            "end": 596
                                        },
                                        "flags": 8448,
                                        "start": 592,
                                        "end": 596
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 587,
                                "end": 596
                            },
                            "flags": 256,
                            "start": 586,
                            "end": 597
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 586,
                    "end": 597
                },
                "flags": 256,
                "start": 582,
                "end": 598
            },
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
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 613,
                                        "end": 615
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "left",
                                                "rawText": "left",
                                                "flags": 768,
                                                "start": 605,
                                                "end": 609
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 610,
                                                "end": 610
                                            },
                                            "flags": 256,
                                            "start": 605,
                                            "end": 611
                                        },
                                        "flags": 256,
                                        "start": 603,
                                        "end": 612
                                    },
                                    "flags": 256,
                                    "start": 603,
                                    "end": 615
                                },
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "flags": 256,
                                    "start": 616,
                                    "end": 621
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 603,
                            "end": 621
                        },
                        "flags": 256,
                        "start": 602,
                        "end": 622
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 622,
                        "end": 624
                    },
                    "right": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "right",
                            "rawText": "right",
                            "flags": 768,
                            "start": 624,
                            "end": 630
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 631,
                            "end": 631
                        },
                        "flags": 256,
                        "start": 624,
                        "end": 632
                    },
                    "flags": 256,
                    "start": 602,
                    "end": 632
                },
                "flags": 256,
                "start": 599,
                "end": 633
            },
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
                                                        "kind": 134299649,
                                                        "text": "x1",
                                                        "rawText": "x1",
                                                        "flags": 768,
                                                        "start": 650,
                                                        "end": 653
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 648,
                                                        "end": 649
                                                    },
                                                    "flags": 256,
                                                    "start": 648,
                                                    "end": 653
                                                },
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y1",
                                                        "rawText": "y1",
                                                        "flags": 768,
                                                        "start": 657,
                                                        "end": 660
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 654,
                                                        "end": 656
                                                    },
                                                    "flags": 256,
                                                    "start": 654,
                                                    "end": 660
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 648,
                                            "end": 660
                                        },
                                        "flags": 256,
                                        "start": 646,
                                        "end": 661
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "topLeft",
                                        "rawText": "topLeft",
                                        "flags": 768,
                                        "start": 638,
                                        "end": 645
                                    },
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
                                                        "kind": 134299649,
                                                        "text": "x2",
                                                        "rawText": "x2",
                                                        "flags": 768,
                                                        "start": 679,
                                                        "end": 682
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 677,
                                                        "end": 678
                                                    },
                                                    "flags": 256,
                                                    "start": 677,
                                                    "end": 682
                                                },
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y2",
                                                        "rawText": "y2",
                                                        "flags": 768,
                                                        "start": 686,
                                                        "end": 689
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 683,
                                                        "end": 685
                                                    },
                                                    "flags": 256,
                                                    "start": 683,
                                                    "end": 689
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 677,
                                            "end": 689
                                        },
                                        "flags": 256,
                                        "start": 675,
                                        "end": 690
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "bottomRight",
                                        "rawText": "bottomRight",
                                        "flags": 768,
                                        "start": 662,
                                        "end": 674
                                    },
                                    "flags": 256,
                                    "start": 662,
                                    "end": 690
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 638,
                            "end": 690
                        },
                        "flags": 256,
                        "start": 637,
                        "end": 691
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 691,
                        "end": 693
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "rect",
                        "rawText": "rect",
                        "flags": 768,
                        "start": 693,
                        "end": 698
                    },
                    "flags": 256,
                    "start": 637,
                    "end": 698
                },
                "flags": 256,
                "start": 634,
                "end": 699
            },
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
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 704,
                                "end": 705
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 704,
                        "end": 705
                    },
                    "flags": 256,
                    "start": 703,
                    "end": 706
                },
                "flags": 256,
                "start": 700,
                "end": 707
            },
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
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 717,
                                        "end": 718
                                    },
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
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 720,
                                                "end": 721
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 720,
                                            "end": 721
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 720,
                                    "end": 722
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 724,
                                                                "end": 730
                                                            },
                                                            "flags": 768,
                                                            "start": 724,
                                                            "end": 730
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "m",
                                                            "rawText": "m",
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
                                                                "kind": 201392131,
                                                                "text": "1",
                                                                "rawText": "1",
                                                                "flags": 768,
                                                                "start": 733,
                                                                "end": 736
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 768,
                                                                "start": 737,
                                                                "end": 739
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 733,
                                                        "end": 739
                                                    },
                                                    "flags": 256,
                                                    "start": 724,
                                                    "end": 740
                                                },
                                                "flags": 128,
                                                "start": 724,
                                                "end": 741
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 724,
                                        "end": 741
                                    },
                                    "flags": 256,
                                    "start": 722,
                                    "end": 743
                                },
                                "flags": 4352,
                                "start": 719,
                                "end": 743
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 712,
                        "end": 743
                    },
                    "flags": 256,
                    "start": 711,
                    "end": 744
                },
                "flags": 256,
                "start": 708,
                "end": 745
            },
            "flags": 128,
            "start": 708,
            "end": 746
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 746,
                    "end": 749
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 749,
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
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 759,
                                        "end": 760
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 768,
                                        "start": 753,
                                        "end": 758
                                    },
                                    "flags": 256,
                                    "start": 753,
                                    "end": 760
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 753,
                            "end": 760
                        },
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
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
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
                                                            "kind": 134299649,
                                                            "text": "v",
                                                            "rawText": "v",
                                                            "flags": 768,
                                                            "start": 773,
                                                            "end": 774
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 773,
                                                        "end": 774
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 4352,
                                                "start": 773,
                                                "end": 775
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 777,
                                                    "end": 777
                                                },
                                                "flags": 256,
                                                "start": 775,
                                                "end": 778
                                            },
                                            "flags": 4352,
                                            "start": 772,
                                            "end": 778
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 765,
                                    "end": 778
                                },
                                "flags": 256,
                                "start": 764,
                                "end": 779
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 764,
                        "end": 779
                    },
                    "flags": 256,
                    "start": 751,
                    "end": 780
                },
                "flags": 256,
                "start": 746,
                "end": 780
            },
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
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 768,
                                    "start": 786,
                                    "end": 789
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 790,
                                    "end": 791
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 793,
                                        "end": 793
                                    },
                                    "flags": 256,
                                    "start": 791,
                                    "end": 794
                                },
                                "flags": 1280,
                                "start": 789,
                                "end": 794
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 785,
                        "end": 794
                    },
                    "flags": 256,
                    "start": 784,
                    "end": 795
                },
                "flags": 256,
                "start": 781,
                "end": 796
            },
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
                                    "kind": 134299649,
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 768,
                                    "start": 802,
                                    "end": 808
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 809,
                                    "end": 810
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 812,
                                        "end": 812
                                    },
                                    "flags": 256,
                                    "start": 810,
                                    "end": 813
                                },
                                "flags": 1280,
                                "start": 808,
                                "end": 813
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 801,
                        "end": 813
                    },
                    "flags": 256,
                    "start": 800,
                    "end": 814
                },
                "flags": 256,
                "start": 797,
                "end": 815
            },
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
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 821,
                                    "end": 826
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 827,
                                    "end": 828
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 829,
                                        "end": 829
                                    },
                                    "flags": 256,
                                    "start": 828,
                                    "end": 830
                                },
                                "flags": 1280,
                                "start": 826,
                                "end": 830
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 820,
                        "end": 830
                    },
                    "flags": 256,
                    "start": 819,
                    "end": 831
                },
                "flags": 256,
                "start": 816,
                "end": 832
            },
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
                                    "kind": 134299649,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 842,
                                    "end": 844
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 768,
                                    "start": 837,
                                    "end": 840
                                },
                                "flags": 256,
                                "start": 837,
                                "end": 844
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 837,
                        "end": 844
                    },
                    "flags": 256,
                    "start": 836,
                    "end": 845
                },
                "flags": 256,
                "start": 833,
                "end": 846
            },
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
                                    "kind": 134299649,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 768,
                                    "start": 854,
                                    "end": 856
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 768,
                                    "start": 851,
                                    "end": 853
                                },
                                "flags": 256,
                                "start": 851,
                                "end": 856
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 851,
                        "end": 856
                    },
                    "flags": 256,
                    "start": 850,
                    "end": 857
                },
                "flags": 256,
                "start": 847,
                "end": 858
            },
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
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 864,
                                    "end": 869
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 870,
                                    "end": 871
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 873,
                                        "end": 873
                                    },
                                    "flags": 256,
                                    "start": 871,
                                    "end": 874
                                },
                                "flags": 1280,
                                "start": 869,
                                "end": 874
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 863,
                        "end": 874
                    },
                    "flags": 256,
                    "start": 862,
                    "end": 875
                },
                "flags": 256,
                "start": 859,
                "end": 876
            },
            "flags": 128,
            "start": 859,
            "end": 877
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 877,
                    "end": 880
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 880,
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
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 885,
                                    "end": 890
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 891,
                                    "end": 892
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 893,
                                        "end": 893
                                    },
                                    "flags": 256,
                                    "start": 892,
                                    "end": 894
                                },
                                "flags": 1280,
                                "start": 890,
                                "end": 894
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 884,
                        "end": 894
                    },
                    "flags": 256,
                    "start": 882,
                    "end": 895
                },
                "flags": 256,
                "start": 877,
                "end": 895
            },
            "flags": 128,
            "start": 877,
            "end": 896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 896,
                    "end": 899
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 899,
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
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
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
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 911,
                                                "end": 912
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 911,
                                            "end": 912
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 911,
                                    "end": 913
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 914,
                                        "end": 914
                                    },
                                    "flags": 256,
                                    "start": 913,
                                    "end": 915
                                },
                                "flags": 4352,
                                "start": 910,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 903,
                        "end": 915
                    },
                    "flags": 256,
                    "start": 901,
                    "end": 916
                },
                "flags": 256,
                "start": 896,
                "end": 916
            },
            "flags": 128,
            "start": 896,
            "end": 917
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 917,
                    "end": 920
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 920,
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
                                        "kind": 138477613,
                                        "flags": 768,
                                        "start": 928,
                                        "end": 935
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 935,
                                        "end": 937
                                    },
                                    "flags": 256,
                                    "start": 928,
                                    "end": 937
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 924,
                                    "end": 927
                                },
                                "flags": 256,
                                "start": 924,
                                "end": 937
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 924,
                        "end": 937
                    },
                    "flags": 256,
                    "start": 922,
                    "end": 938
                },
                "flags": 256,
                "start": 917,
                "end": 938
            },
            "flags": 128,
            "start": 917,
            "end": 939
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 939,
                    "end": 942
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 942,
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
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 954,
                                                        "end": 956
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 768,
                                                        "start": 956,
                                                        "end": 958
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 958,
                                                        "end": 960
                                                    },
                                                    "flags": 256,
                                                    "start": 952,
                                                    "end": 960
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 952,
                                                    "end": 953
                                                },
                                                "flags": 256,
                                                "start": 952,
                                                "end": 960
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 952,
                                        "end": 960
                                    },
                                    "flags": 256,
                                    "start": 950,
                                    "end": 961
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 946,
                                    "end": 949
                                },
                                "flags": 256,
                                "start": 946,
                                "end": 961
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 946,
                        "end": 961
                    },
                    "flags": 256,
                    "start": 944,
                    "end": 962
                },
                "flags": 256,
                "start": 939,
                "end": 962
            },
            "flags": 128,
            "start": 939,
            "end": 963
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 963,
                    "end": 966
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 966,
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
                                    "kind": 134299649,
                                    "text": "w",
                                    "rawText": "w",
                                    "flags": 768,
                                    "start": 970,
                                    "end": 972
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 976,
                                        "end": 978
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 973,
                                        "end": 975
                                    },
                                    "flags": 256,
                                    "start": 973,
                                    "end": 978
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 970,
                            "end": 978
                        },
                        "flags": 256,
                        "start": 968,
                        "end": 980
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 980,
                        "end": 982
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 982,
                        "end": 984
                    },
                    "flags": 256,
                    "start": 968,
                    "end": 984
                },
                "flags": 256,
                "start": 963,
                "end": 984
            },
            "flags": 128,
            "start": 963,
            "end": 985
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 985,
                    "end": 988
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 988,
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
                                                "kind": 134299649,
                                                "text": "src",
                                                "rawText": "src",
                                                "flags": 768,
                                                "start": 995,
                                                "end": 998
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1001,
                                            "end": 1002
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 995,
                                        "end": 1002
                                    },
                                    "flags": 256,
                                    "start": 992,
                                    "end": 1002
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 992,
                            "end": 1002
                        },
                        "flags": 256,
                        "start": 990,
                        "end": 1003
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1003,
                        "end": 1005
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 1005,
                        "end": 1007
                    },
                    "flags": 256,
                    "start": 990,
                    "end": 1007
                },
                "flags": 256,
                "start": 985,
                "end": 1007
            },
            "flags": 128,
            "start": 985,
            "end": 1008
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 1008,
                    "end": 1011
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1011,
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1018,
                                            "end": 1020
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 1020,
                                            "end": 1022
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 1022,
                                            "end": 1024
                                        },
                                        "flags": 256,
                                        "start": 1015,
                                        "end": 1024
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 1015,
                                        "end": 1017
                                    },
                                    "flags": 256,
                                    "start": 1015,
                                    "end": 1024
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 1015,
                            "end": 1024
                        },
                        "flags": 256,
                        "start": 1013,
                        "end": 1026
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 1026,
                        "end": 1028
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 1028,
                        "end": 1030
                    },
                    "flags": 256,
                    "start": 1013,
                    "end": 1030
                },
                "flags": 256,
                "start": 1008,
                "end": 1030
            },
            "flags": 128,
            "start": 1008,
            "end": 1031
        }
    ],
    "isModule": false,
    "text": "({key: {}});\n({key: {a} = x});\n({a:b}=obj);\n({1:  {}.b ? c : d });\n({ a: {prop: 1}.prop } = {});\n({1:  + b });\n({[a]:  + b });\n({a:  + b });\n({async: (await) ? yield : foo});\n({async 100(){}});\n({key: bar = x});\n({ typeof(x, y) {}});\n({ x() {}, x: 1});\n({ *x() {}, get x() {}});\n\n({\"x\": y+z});\n({\"x\": [y]}) => x;\n({\"x\": {y: z}});\n\nx({[a]:b, [15]:d}=obj);\n\n({l: 50..foo} = x);\n\na={\"b\":c=d};\n\n({x:let});\n\n({x:let} = null);\n\ns = {\"foo\": this};\n\nx({set \"foo\"(a){}});\n\n({ a = 42, [b]: c.d } = e);\n\nx({foo(){}, *bar(){}});\n\n({...[a, b]});\n\nx = { a: 1, ...y, b: 1};\n\nx({get 0x234241(){}});\n\nx({get 1(){}});\n\n({ [left()]: y, ...x} = right());\n\n({topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect);\n\n({y});\n\n({set [0](x) { super.m(\"1\", v); }});\n\nx = {async:b}\n\n({set foo(v) {}});\n\n({*set() {}});\n\n({*static() {}});\n\n({*async(){}});\n\n({get : 0});\n\n({if: 4});\n\n({*await() {}});\n\nx = {*\"foo\"(){}};\n\nx = {set get(a){}};\n\nx = {foo: typeof x};\n\nx = {\"x\": {a: y + x}};\n\na = { w, a: x } = b;\n\na = {...src.y.x} = b;\n\na = { y: x = 1 } = b;\n",
    "fileName": "__root__",
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

