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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 8,
                                        "end": 8
                                    },
                                    "flags": 48,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 18
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
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 22
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "flags": 48,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 15,
                        "end": 27
                    },
                    "flags": 48,
                    "start": 14,
                    "end": 28
                },
                "flags": 32,
                "start": 12,
                "end": 29
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 36
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 48,
                        "start": 32,
                        "end": 37
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 37,
                        "end": 38
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 38,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 41
                },
                "flags": 32,
                "start": 30,
                "end": 42
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 46,
                                    "end": 47
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 51,
                                                "end": 51
                                            },
                                            "flags": 48,
                                            "start": 48,
                                            "end": 52
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 53,
                                            "end": 54
                                        },
                                        "flags": 536870944,
                                        "start": 46,
                                        "end": 54
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 0,
                                        "start": 54,
                                        "end": 56
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 56,
                                        "end": 58
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 0,
                                        "start": 58,
                                        "end": 60
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 60,
                                        "end": 62
                                    },
                                    "flags": 32,
                                    "start": 46,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 46,
                                "end": 62
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 46,
                        "end": 62
                    },
                    "flags": 48,
                    "start": 45,
                    "end": 64
                },
                "flags": 32,
                "start": 43,
                "end": 65
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 69,
                                        "end": 71
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
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 96,
                                                            "start": 74,
                                                            "end": 78
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 79,
                                                            "end": 81
                                                        },
                                                        "flags": 32,
                                                        "start": 74,
                                                        "end": 81
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 74,
                                                "end": 81
                                            },
                                            "flags": 48,
                                            "start": 72,
                                            "end": 82
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 83,
                                            "end": 87
                                        },
                                        "flags": 536870944,
                                        "start": 69,
                                        "end": 87
                                    },
                                    "flags": 32,
                                    "start": 69,
                                    "end": 87
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 69,
                            "end": 87
                        },
                        "flags": 48,
                        "start": 68,
                        "end": 89
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 89,
                        "end": 91
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 93,
                            "end": 93
                        },
                        "flags": 48,
                        "start": 91,
                        "end": 94
                    },
                    "flags": 32,
                    "start": 68,
                    "end": 94
                },
                "flags": 32,
                "start": 66,
                "end": 95
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 99,
                                    "end": 100
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 101,
                                        "end": 104
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "flags": 32,
                                    "start": 101,
                                    "end": 106
                                },
                                "flags": 32,
                                "start": 99,
                                "end": 106
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 99,
                        "end": 106
                    },
                    "flags": 48,
                    "start": 98,
                    "end": 108
                },
                "flags": 32,
                "start": 96,
                "end": 109
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "flags": 32,
                                    "start": 113,
                                    "end": 116
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 120,
                                        "end": 122
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 122
                                },
                                "flags": 32,
                                "start": 113,
                                "end": 122
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 113,
                        "end": 122
                    },
                    "flags": 48,
                    "start": 112,
                    "end": 124
                },
                "flags": 32,
                "start": 110,
                "end": 125
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 129,
                                    "end": 130
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 131,
                                        "end": 134
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 134,
                                        "end": 136
                                    },
                                    "flags": 32,
                                    "start": 131,
                                    "end": 136
                                },
                                "flags": 32,
                                "start": 129,
                                "end": 136
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 129,
                        "end": 136
                    },
                    "flags": 48,
                    "start": 128,
                    "end": 138
                },
                "flags": 32,
                "start": 126,
                "end": 139
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 143,
                                    "end": 148
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 151,
                                            "end": 156
                                        },
                                        "flags": 32,
                                        "start": 149,
                                        "end": 157
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 0,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 159,
                                        "end": 165
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 0,
                                        "start": 165,
                                        "end": 167
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 167,
                                        "end": 171
                                    },
                                    "flags": 32,
                                    "start": 143,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 143,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 143,
                        "end": 171
                    },
                    "flags": 48,
                    "start": 142,
                    "end": 172
                },
                "flags": 32,
                "start": 140,
                "end": 173
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 177,
                                    "end": 182
                                },
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 100,
                                        "rawText": "100",
                                        "flags": 96,
                                        "start": 182,
                                        "end": 186
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 187,
                                        "end": 188
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 189,
                                            "end": 189
                                        },
                                        "flags": 32,
                                        "start": 188,
                                        "end": 190
                                    },
                                    "flags": 288,
                                    "start": 186,
                                    "end": 190
                                },
                                "flags": 32,
                                "start": 177,
                                "end": 190
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 177,
                        "end": 190
                    },
                    "flags": 48,
                    "start": 176,
                    "end": 191
                },
                "flags": 32,
                "start": 174,
                "end": 192
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "key",
                                    "rawText": "key",
                                    "flags": 96,
                                    "start": 196,
                                    "end": 199
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 200,
                                        "end": 204
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 204,
                                        "end": 206
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "flags": 32,
                                    "start": 196,
                                    "end": 208
                                },
                                "flags": 32,
                                "start": 196,
                                "end": 208
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 196,
                        "end": 208
                    },
                    "flags": 48,
                    "start": 195,
                    "end": 209
                },
                "flags": 32,
                "start": 193,
                "end": 210
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "typeof",
                                        "rawText": "typeof",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 222,
                                                    "end": 223
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
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
                                                    "flags": 96,
                                                    "start": 224,
                                                    "end": 226
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 224,
                                                "end": 226
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 222,
                                        "end": 227
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 229,
                                            "end": 229
                                        },
                                        "flags": 32,
                                        "start": 227,
                                        "end": 230
                                    },
                                    "flags": 32,
                                    "start": 221,
                                    "end": 230
                                },
                                "flags": 32,
                                "start": 214,
                                "end": 230
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 214,
                        "end": 230
                    },
                    "flags": 48,
                    "start": 213,
                    "end": 231
                },
                "flags": 32,
                "start": 211,
                "end": 232
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 236,
                                        "end": 238
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 239,
                                        "end": 240
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 242,
                                            "end": 242
                                        },
                                        "flags": 32,
                                        "start": 240,
                                        "end": 243
                                    },
                                    "flags": 32,
                                    "start": 238,
                                    "end": 243
                                },
                                "flags": 32,
                                "start": 236,
                                "end": 243
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 244,
                                    "end": 246
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 247,
                                    "end": 249
                                },
                                "flags": 32,
                                "start": 244,
                                "end": 249
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 236,
                        "end": 249
                    },
                    "flags": 48,
                    "start": 235,
                    "end": 250
                },
                "flags": 32,
                "start": 233,
                "end": 251
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 255,
                                    "end": 257
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 257,
                                        "end": 258
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 259,
                                        "end": 260
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 262,
                                            "end": 262
                                        },
                                        "flags": 32,
                                        "start": 260,
                                        "end": 263
                                    },
                                    "flags": 160,
                                    "start": 258,
                                    "end": 263
                                },
                                "flags": 32,
                                "start": 255,
                                "end": 263
                            },
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 264,
                                    "end": 268
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 268,
                                        "end": 270
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 271,
                                        "end": 272
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 274,
                                            "end": 274
                                        },
                                        "flags": 32,
                                        "start": 272,
                                        "end": 275
                                    },
                                    "flags": 1056,
                                    "start": 270,
                                    "end": 275
                                },
                                "flags": 32,
                                "start": 264,
                                "end": 275
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 255,
                        "end": 275
                    },
                    "flags": 48,
                    "start": 254,
                    "end": 276
                },
                "flags": 32,
                "start": 252,
                "end": 277
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "\"x\"",
                                    "flags": 96,
                                    "start": 282,
                                    "end": 285
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 286,
                                        "end": 288
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 288,
                                        "end": 289
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 289,
                                        "end": 290
                                    },
                                    "flags": 32,
                                    "start": 282,
                                    "end": 290
                                },
                                "flags": 32,
                                "start": 282,
                                "end": 290
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 282,
                        "end": 290
                    },
                    "flags": 48,
                    "start": 281,
                    "end": 291
                },
                "flags": 32,
                "start": 278,
                "end": 292
            },
            "flags": 16,
            "start": 278,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "x",
                                        "rawText": "\"x\"",
                                        "flags": 96,
                                        "start": 296,
                                        "end": 299
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 302,
                                                    "end": 303
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 302,
                                            "end": 303
                                        },
                                        "flags": 32,
                                        "start": 300,
                                        "end": 304
                                    },
                                    "flags": 32,
                                    "start": 296,
                                    "end": 304
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 296,
                            "end": 304
                        },
                        "flags": 48,
                        "start": 295,
                        "end": 305
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 309,
                    "end": 311
                },
                "flags": 34,
                "start": 293,
                "end": 311
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "\"x\"",
                                    "flags": 96,
                                    "start": 315,
                                    "end": 318
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 321,
                                                    "end": 322
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 323,
                                                    "end": 325
                                                },
                                                "flags": 32,
                                                "start": 321,
                                                "end": 325
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 321,
                                        "end": 325
                                    },
                                    "flags": 48,
                                    "start": 319,
                                    "end": 326
                                },
                                "flags": 32,
                                "start": 315,
                                "end": 326
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 315,
                        "end": 326
                    },
                    "flags": 48,
                    "start": 314,
                    "end": 327
                },
                "flags": 32,
                "start": 312,
                "end": 328
            },
            "flags": 16,
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
                    "flags": 96,
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
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 335,
                                                    "end": 336
                                                },
                                                "flags": 32,
                                                "start": 334,
                                                "end": 337
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 338,
                                                "end": 339
                                            },
                                            "flags": 32,
                                            "start": 334,
                                            "end": 339
                                        },
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 15,
                                                    "rawText": "15",
                                                    "flags": 96,
                                                    "start": 342,
                                                    "end": 344
                                                },
                                                "flags": 32,
                                                "start": 340,
                                                "end": 345
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 346,
                                                "end": 347
                                            },
                                            "flags": 32,
                                            "start": 340,
                                            "end": 347
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 334,
                                    "end": 347
                                },
                                "flags": 48,
                                "start": 333,
                                "end": 348
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 348,
                                "end": 349
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 349,
                                "end": 352
                            },
                            "flags": 32,
                            "start": 333,
                            "end": 352
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 333,
                    "end": 352
                },
                "flags": 268435488,
                "start": 329,
                "end": 353
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "l",
                                        "rawText": "l",
                                        "flags": 96,
                                        "start": 358,
                                        "end": 359
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 201392130,
                                            "text": 50,
                                            "rawText": "50.",
                                            "flags": 96,
                                            "start": 360,
                                            "end": 364
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 365,
                                            "end": 368
                                        },
                                        "flags": 536870944,
                                        "start": 360,
                                        "end": 368
                                    },
                                    "flags": 32,
                                    "start": 358,
                                    "end": 368
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 358,
                            "end": 368
                        },
                        "flags": 48,
                        "start": 357,
                        "end": 369
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 369,
                        "end": 371
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 371,
                        "end": 373
                    },
                    "flags": 32,
                    "start": 357,
                    "end": 373
                },
                "flags": 32,
                "start": 354,
                "end": 374
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 375,
                    "end": 378
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "\"b\"",
                                    "flags": 96,
                                    "start": 380,
                                    "end": 383
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 384,
                                        "end": 385
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 385,
                                        "end": 386
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 386,
                                        "end": 387
                                    },
                                    "flags": 32,
                                    "start": 380,
                                    "end": 387
                                },
                                "flags": 32,
                                "start": 380,
                                "end": 387
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 380,
                        "end": 387
                    },
                    "flags": 48,
                    "start": 379,
                    "end": 388
                },
                "flags": 32,
                "start": 375,
                "end": 388
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 393,
                                    "end": 394
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 96,
                                    "start": 395,
                                    "end": 398
                                },
                                "flags": 32,
                                "start": 393,
                                "end": 398
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 393,
                        "end": 398
                    },
                    "flags": 48,
                    "start": 392,
                    "end": 399
                },
                "flags": 32,
                "start": 389,
                "end": 400
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 405,
                                        "end": 406
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "start": 407,
                                        "end": 410
                                    },
                                    "flags": 32,
                                    "start": 405,
                                    "end": 410
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 405,
                            "end": 410
                        },
                        "flags": 48,
                        "start": 404,
                        "end": 411
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 411,
                        "end": 413
                    },
                    "right": {
                        "kind": 269,
                        "text": null,
                        "flags": 96,
                        "start": 413,
                        "end": 418
                    },
                    "flags": 32,
                    "start": 404,
                    "end": 418
                },
                "flags": 32,
                "start": 401,
                "end": 419
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 420,
                    "end": 423
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "start": 427,
                                    "end": 432
                                },
                                "right": {
                                    "kind": 135,
                                    "flags": 433,
                                    "start": 96,
                                    "end": 438
                                },
                                "flags": 32,
                                "start": 427,
                                "end": 438
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 427,
                        "end": 438
                    },
                    "flags": 48,
                    "start": 425,
                    "end": 439
                },
                "flags": 32,
                "start": 420,
                "end": 439
            },
            "flags": 16,
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
                    "flags": 96,
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 64,
                                            "start": 445,
                                            "end": 448
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
                                                "flags": 96,
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
                                                            "flags": 96,
                                                            "start": 455,
                                                            "end": 456
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 455,
                                                        "end": 456
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 544,
                                                "start": 455,
                                                "end": 457
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 458,
                                                    "end": 458
                                                },
                                                "flags": 32,
                                                "start": 457,
                                                "end": 459
                                            },
                                            "flags": 544,
                                            "start": 454,
                                            "end": 459
                                        },
                                        "flags": 32,
                                        "start": 445,
                                        "end": 459
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 445,
                                "end": 459
                            },
                            "flags": 48,
                            "start": 444,
                            "end": 460
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 444,
                    "end": 460
                },
                "flags": 268435488,
                "start": 440,
                "end": 461
            },
            "flags": 16,
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
                                        "flags": 96,
                                        "start": 466,
                                        "end": 468
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 470,
                                        "end": 473
                                    },
                                    "flags": 32,
                                    "start": 466,
                                    "end": 473
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 476,
                                            "end": 477
                                        },
                                        "flags": 32,
                                        "start": 474,
                                        "end": 478
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 479,
                                            "end": 481
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 482,
                                            "end": 483
                                        },
                                        "flags": 536870944,
                                        "start": 474,
                                        "end": 483
                                    },
                                    "flags": 32,
                                    "start": 474,
                                    "end": 483
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 466,
                            "end": 483
                        },
                        "flags": 48,
                        "start": 465,
                        "end": 485
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 485,
                        "end": 487
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 487,
                        "end": 489
                    },
                    "flags": 32,
                    "start": 465,
                    "end": 489
                },
                "flags": 32,
                "start": 462,
                "end": 490
            },
            "flags": 16,
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
                    "flags": 96,
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 496,
                                                "end": 499
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 500,
                                                "end": 501
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 502,
                                                    "end": 502
                                                },
                                                "flags": 32,
                                                "start": 501,
                                                "end": 503
                                            },
                                            "flags": 32,
                                            "start": 499,
                                            "end": 503
                                        },
                                        "flags": 32,
                                        "start": 496,
                                        "end": 503
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 504,
                                            "end": 506
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 506,
                                                "end": 509
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 510,
                                                "end": 511
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 512,
                                                    "end": 512
                                                },
                                                "flags": 32,
                                                "start": 511,
                                                "end": 513
                                            },
                                            "flags": 160,
                                            "start": 509,
                                            "end": 513
                                        },
                                        "flags": 32,
                                        "start": 504,
                                        "end": 513
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 496,
                                "end": 513
                            },
                            "flags": 48,
                            "start": 495,
                            "end": 514
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 495,
                    "end": 514
                },
                "flags": 268435488,
                "start": 491,
                "end": 515
            },
            "flags": 16,
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 520,
                                    "end": 523
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 524,
                                                "end": 525
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 526,
                                                "end": 528
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 524,
                                        "end": 528
                                    },
                                    "flags": 32,
                                    "start": 523,
                                    "end": 529
                                },
                                "flags": 32,
                                "start": 520,
                                "end": 529
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 520,
                        "end": 529
                    },
                    "flags": 48,
                    "start": 519,
                    "end": 530
                },
                "flags": 32,
                "start": 516,
                "end": 531
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 532,
                    "end": 535
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 539,
                                    "end": 541
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 542,
                                    "end": 544
                                },
                                "flags": 32,
                                "start": 539,
                                "end": 544
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 545,
                                    "end": 549
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 549,
                                    "end": 550
                                },
                                "flags": 32,
                                "start": 545,
                                "end": 550
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 551,
                                    "end": 553
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 554,
                                    "end": 556
                                },
                                "flags": 32,
                                "start": 551,
                                "end": 556
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 539,
                        "end": 556
                    },
                    "flags": 48,
                    "start": 537,
                    "end": 557
                },
                "flags": 32,
                "start": 532,
                "end": 557
            },
            "flags": 16,
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
                    "flags": 96,
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 563,
                                            "end": 566
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 2310721,
                                                "rawText": "0x234241",
                                                "flags": 1048672,
                                                "start": 566,
                                                "end": 575
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "start": 576,
                                                "end": 577
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 578,
                                                    "end": 578
                                                },
                                                "flags": 32,
                                                "start": 577,
                                                "end": 579
                                            },
                                            "flags": 1056,
                                            "start": 575,
                                            "end": 579
                                        },
                                        "flags": 32,
                                        "start": 563,
                                        "end": 579
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 563,
                                "end": 579
                            },
                            "flags": 48,
                            "start": 562,
                            "end": 580
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 562,
                    "end": 580
                },
                "flags": 268435488,
                "start": 558,
                "end": 581
            },
            "flags": 16,
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
                    "flags": 96,
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 587,
                                            "end": 590
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 590,
                                                "end": 592
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "start": 593,
                                                "end": 594
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 595,
                                                    "end": 595
                                                },
                                                "flags": 32,
                                                "start": 594,
                                                "end": 596
                                            },
                                            "flags": 1056,
                                            "start": 592,
                                            "end": 596
                                        },
                                        "flags": 32,
                                        "start": 587,
                                        "end": 596
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 587,
                                "end": 596
                            },
                            "flags": 48,
                            "start": 586,
                            "end": 597
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 586,
                    "end": 597
                },
                "flags": 268435488,
                "start": 582,
                "end": 598
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "left",
                                                "rawText": "left",
                                                "flags": 96,
                                                "start": 605,
                                                "end": 609
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 610,
                                                "end": 610
                                            },
                                            "flags": 268435488,
                                            "start": 605,
                                            "end": 611
                                        },
                                        "flags": 32,
                                        "start": 603,
                                        "end": 612
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 613,
                                        "end": 615
                                    },
                                    "flags": 32,
                                    "start": 603,
                                    "end": 615
                                },
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 616,
                                        "end": 620
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 620,
                                        "end": 621
                                    },
                                    "flags": 32,
                                    "start": 616,
                                    "end": 621
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 603,
                            "end": 621
                        },
                        "flags": 48,
                        "start": 602,
                        "end": 622
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 622,
                        "end": 624
                    },
                    "right": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "right",
                            "rawText": "right",
                            "flags": 96,
                            "start": 624,
                            "end": 630
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 631,
                            "end": 631
                        },
                        "flags": 268435488,
                        "start": 624,
                        "end": 632
                    },
                    "flags": 32,
                    "start": 602,
                    "end": 632
                },
                "flags": 32,
                "start": 599,
                "end": 633
            },
            "flags": 16,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "topLeft",
                                        "rawText": "topLeft",
                                        "flags": 96,
                                        "start": 638,
                                        "end": 645
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 648,
                                                        "end": 649
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x1",
                                                        "rawText": "x1",
                                                        "flags": 96,
                                                        "start": 650,
                                                        "end": 653
                                                    },
                                                    "flags": 32,
                                                    "start": 648,
                                                    "end": 653
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 654,
                                                        "end": 656
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y1",
                                                        "rawText": "y1",
                                                        "flags": 96,
                                                        "start": 657,
                                                        "end": 660
                                                    },
                                                    "flags": 32,
                                                    "start": 654,
                                                    "end": 660
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 648,
                                            "end": 660
                                        },
                                        "flags": 48,
                                        "start": 646,
                                        "end": 661
                                    },
                                    "flags": 32,
                                    "start": 638,
                                    "end": 661
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "bottomRight",
                                        "rawText": "bottomRight",
                                        "flags": 96,
                                        "start": 662,
                                        "end": 674
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 677,
                                                        "end": 678
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x2",
                                                        "rawText": "x2",
                                                        "flags": 96,
                                                        "start": 679,
                                                        "end": 682
                                                    },
                                                    "flags": 32,
                                                    "start": 677,
                                                    "end": 682
                                                },
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 683,
                                                        "end": 685
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y2",
                                                        "rawText": "y2",
                                                        "flags": 96,
                                                        "start": 686,
                                                        "end": 689
                                                    },
                                                    "flags": 32,
                                                    "start": 683,
                                                    "end": 689
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 677,
                                            "end": 689
                                        },
                                        "flags": 48,
                                        "start": 675,
                                        "end": 690
                                    },
                                    "flags": 32,
                                    "start": 662,
                                    "end": 690
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 638,
                            "end": 690
                        },
                        "flags": 48,
                        "start": 637,
                        "end": 691
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 691,
                        "end": 693
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "rect",
                        "rawText": "rect",
                        "flags": 96,
                        "start": 693,
                        "end": 698
                    },
                    "flags": 32,
                    "start": 637,
                    "end": 698
                },
                "flags": 32,
                "start": 634,
                "end": 699
            },
            "flags": 16,
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
                                "flags": 96,
                                "start": 704,
                                "end": 705
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 704,
                        "end": 705
                    },
                    "flags": 48,
                    "start": 703,
                    "end": 706
                },
                "flags": 32,
                "start": 700,
                "end": 707
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 712,
                                    "end": 715
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 717,
                                            "end": 718
                                        },
                                        "flags": 32,
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
                                                    "flags": 96,
                                                    "start": 720,
                                                    "end": 721
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 720,
                                                "end": 721
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 720,
                                        "end": 722
                                    },
                                    "returnType": null,
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
                                                                    "flags": 0,
                                                                    "start": 724,
                                                                    "end": 730
                                                                },
                                                                "flags": 96,
                                                                "start": 724,
                                                                "end": 730
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "m",
                                                                "rawText": "m",
                                                                "flags": 96,
                                                                "start": 731,
                                                                "end": 732
                                                            },
                                                            "flags": 536870944,
                                                            "start": 724,
                                                            "end": 732
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 201392131,
                                                                    "text": "1",
                                                                    "rawText": "\"1\"",
                                                                    "flags": 96,
                                                                    "start": 733,
                                                                    "end": 736
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 737,
                                                                    "end": 739
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 733,
                                                            "end": 739
                                                        },
                                                        "flags": 268435488,
                                                        "start": 724,
                                                        "end": 740
                                                    },
                                                    "flags": 16,
                                                    "start": 724,
                                                    "end": 741
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 724,
                                            "end": 741
                                        },
                                        "flags": 32,
                                        "start": 722,
                                        "end": 743
                                    },
                                    "flags": 544,
                                    "start": 719,
                                    "end": 743
                                },
                                "flags": 32,
                                "start": 712,
                                "end": 743
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 712,
                        "end": 743
                    },
                    "flags": 48,
                    "start": 711,
                    "end": 744
                },
                "flags": 32,
                "start": 708,
                "end": 745
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 746,
                    "end": 749
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 753,
                                        "end": 758
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 759,
                                        "end": 760
                                    },
                                    "flags": 32,
                                    "start": 753,
                                    "end": 760
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 753,
                            "end": 760
                        },
                        "flags": 48,
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
                                            "kind": 257,
                                            "asyncKeyword": null,
                                            "generatorToken": null,
                                            "getKeyword": null,
                                            "setKeyword": {
                                                "kind": 16499,
                                                "flags": 64,
                                                "start": 765,
                                                "end": 768
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
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
                                                                "flags": 96,
                                                                "start": 773,
                                                                "end": 774
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 773,
                                                            "end": 774
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 544,
                                                    "start": 773,
                                                    "end": 775
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 777,
                                                        "end": 777
                                                    },
                                                    "flags": 32,
                                                    "start": 775,
                                                    "end": 778
                                                },
                                                "flags": 544,
                                                "start": 772,
                                                "end": 778
                                            },
                                            "flags": 32,
                                            "start": 765,
                                            "end": 778
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 765,
                                    "end": 778
                                },
                                "flags": 48,
                                "start": 764,
                                "end": 779
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 764,
                        "end": 779
                    },
                    "flags": 268435488,
                    "start": 751,
                    "end": 780
                },
                "flags": 32,
                "start": 746,
                "end": 780
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 785,
                                    "end": 786
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 786,
                                        "end": 789
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 790,
                                        "end": 791
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 793,
                                            "end": 793
                                        },
                                        "flags": 32,
                                        "start": 791,
                                        "end": 794
                                    },
                                    "flags": 160,
                                    "start": 789,
                                    "end": 794
                                },
                                "flags": 32,
                                "start": 785,
                                "end": 794
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 785,
                        "end": 794
                    },
                    "flags": 48,
                    "start": 784,
                    "end": 795
                },
                "flags": 32,
                "start": 781,
                "end": 796
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 801,
                                    "end": 802
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 802,
                                        "end": 808
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 809,
                                        "end": 810
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 812,
                                            "end": 812
                                        },
                                        "flags": 32,
                                        "start": 810,
                                        "end": 813
                                    },
                                    "flags": 160,
                                    "start": 808,
                                    "end": 813
                                },
                                "flags": 32,
                                "start": 801,
                                "end": 813
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 801,
                        "end": 813
                    },
                    "flags": 48,
                    "start": 800,
                    "end": 814
                },
                "flags": 32,
                "start": 797,
                "end": 815
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 820,
                                    "end": 821
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 821,
                                        "end": 826
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 827,
                                        "end": 828
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 829,
                                            "end": 829
                                        },
                                        "flags": 32,
                                        "start": 828,
                                        "end": 830
                                    },
                                    "flags": 160,
                                    "start": 826,
                                    "end": 830
                                },
                                "flags": 32,
                                "start": 820,
                                "end": 830
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 820,
                        "end": 830
                    },
                    "flags": 48,
                    "start": 819,
                    "end": 831
                },
                "flags": 32,
                "start": 816,
                "end": 832
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 837,
                                    "end": 840
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 842,
                                    "end": 844
                                },
                                "flags": 32,
                                "start": 837,
                                "end": 844
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 837,
                        "end": 844
                    },
                    "flags": 48,
                    "start": 836,
                    "end": 845
                },
                "flags": 32,
                "start": 833,
                "end": 846
            },
            "flags": 16,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 851,
                                    "end": 853
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 854,
                                    "end": 856
                                },
                                "flags": 32,
                                "start": 851,
                                "end": 856
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 851,
                        "end": 856
                    },
                    "flags": 48,
                    "start": 850,
                    "end": 857
                },
                "flags": 32,
                "start": 847,
                "end": 858
            },
            "flags": 16,
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 863,
                                    "end": 864
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 864,
                                        "end": 869
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 870,
                                        "end": 871
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 873,
                                            "end": 873
                                        },
                                        "flags": 32,
                                        "start": 871,
                                        "end": 874
                                    },
                                    "flags": 160,
                                    "start": 869,
                                    "end": 874
                                },
                                "flags": 32,
                                "start": 863,
                                "end": 874
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 863,
                        "end": 874
                    },
                    "flags": 48,
                    "start": 862,
                    "end": 875
                },
                "flags": 32,
                "start": 859,
                "end": 876
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 877,
                    "end": 880
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 880,
                    "end": 882
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 884,
                                    "end": 885
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 885,
                                        "end": 890
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 891,
                                        "end": 892
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 893,
                                            "end": 893
                                        },
                                        "flags": 32,
                                        "start": 892,
                                        "end": 894
                                    },
                                    "flags": 160,
                                    "start": 890,
                                    "end": 894
                                },
                                "flags": 32,
                                "start": 884,
                                "end": 894
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 884,
                        "end": 894
                    },
                    "flags": 48,
                    "start": 882,
                    "end": 895
                },
                "flags": 32,
                "start": 877,
                "end": 895
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 896,
                    "end": 899
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 899,
                    "end": 901
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 903,
                                    "end": 906
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 911,
                                                    "end": 912
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 911,
                                                "end": 912
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 911,
                                        "end": 913
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 914,
                                            "end": 914
                                        },
                                        "flags": 32,
                                        "start": 913,
                                        "end": 915
                                    },
                                    "flags": 544,
                                    "start": 910,
                                    "end": 915
                                },
                                "flags": 32,
                                "start": 903,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 903,
                        "end": 915
                    },
                    "flags": 48,
                    "start": 901,
                    "end": 916
                },
                "flags": 32,
                "start": 896,
                "end": 916
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 917,
                    "end": 920
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 924,
                                    "end": 927
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 64,
                                        "start": 928,
                                        "end": 935
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 935,
                                        "end": 937
                                    },
                                    "flags": 32,
                                    "start": 928,
                                    "end": 937
                                },
                                "flags": 32,
                                "start": 924,
                                "end": 937
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 924,
                        "end": 937
                    },
                    "flags": 48,
                    "start": 922,
                    "end": 938
                },
                "flags": 32,
                "start": 917,
                "end": 938
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 939,
                    "end": 942
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "\"x\"",
                                    "flags": 96,
                                    "start": 946,
                                    "end": 949
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 952,
                                                    "end": 953
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 954,
                                                        "end": 956
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34098,
                                                        "flags": 64,
                                                        "start": 956,
                                                        "end": 958
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 958,
                                                        "end": 960
                                                    },
                                                    "flags": 32,
                                                    "start": 952,
                                                    "end": 960
                                                },
                                                "flags": 32,
                                                "start": 952,
                                                "end": 960
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 952,
                                        "end": 960
                                    },
                                    "flags": 48,
                                    "start": 950,
                                    "end": 961
                                },
                                "flags": 32,
                                "start": 946,
                                "end": 961
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 946,
                        "end": 961
                    },
                    "flags": 48,
                    "start": 944,
                    "end": 962
                },
                "flags": 32,
                "start": 939,
                "end": 962
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 963,
                    "end": 966
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                    "flags": 96,
                                    "start": 970,
                                    "end": 972
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 973,
                                        "end": 975
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 976,
                                        "end": 978
                                    },
                                    "flags": 32,
                                    "start": 973,
                                    "end": 978
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 970,
                            "end": 978
                        },
                        "flags": 48,
                        "start": 968,
                        "end": 980
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 980,
                        "end": 982
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 982,
                        "end": 984
                    },
                    "flags": 32,
                    "start": 968,
                    "end": 984
                },
                "flags": 32,
                "start": 963,
                "end": 984
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 985,
                    "end": 988
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 992,
                                        "end": 995
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "src",
                                                "rawText": "src",
                                                "flags": 96,
                                                "start": 995,
                                                "end": 998
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 999,
                                                "end": 1000
                                            },
                                            "flags": 536870944,
                                            "start": 995,
                                            "end": 1000
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1001,
                                            "end": 1002
                                        },
                                        "flags": 536870944,
                                        "start": 995,
                                        "end": 1002
                                    },
                                    "flags": 32,
                                    "start": 992,
                                    "end": 1002
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 992,
                            "end": 1002
                        },
                        "flags": 48,
                        "start": 990,
                        "end": 1003
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 1003,
                        "end": 1005
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1005,
                        "end": 1007
                    },
                    "flags": 32,
                    "start": 990,
                    "end": 1007
                },
                "flags": 32,
                "start": 985,
                "end": 1007
            },
            "flags": 16,
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
                    "flags": 96,
                    "start": 1008,
                    "end": 1011
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1015,
                                        "end": 1017
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1018,
                                            "end": 1020
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 1020,
                                            "end": 1022
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 1022,
                                            "end": 1024
                                        },
                                        "flags": 32,
                                        "start": 1015,
                                        "end": 1024
                                    },
                                    "flags": 32,
                                    "start": 1015,
                                    "end": 1024
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1015,
                            "end": 1024
                        },
                        "flags": 48,
                        "start": 1013,
                        "end": 1026
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 1026,
                        "end": 1028
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 1028,
                        "end": 1030
                    },
                    "flags": 32,
                    "start": 1013,
                    "end": 1030
                },
                "flags": 32,
                "start": 1008,
                "end": 1030
            },
            "flags": 16,
            "start": 1008,
            "end": 1031
        }
    ],
    "isModule": false,
    "source": "({key: {}});\n({key: {a} = x});\n({a:b}=obj);\n({1:  {}.b ? c : d });\n({ a: {prop: 1}.prop } = {});\n({1:  + b });\n({[a]:  + b });\n({a:  + b });\n({async: (await) ? yield : foo});\n({async 100(){}});\n({key: bar = x});\n({ typeof(x, y) {}});\n({ x() {}, x: 1});\n({ *x() {}, get x() {}});\n\n({\"x\": y+z});\n({\"x\": [y]}) => x;\n({\"x\": {y: z}});\n\nx({[a]:b, [15]:d}=obj);\n\n({l: 50..foo} = x);\n\na={\"b\":c=d};\n\n({x:let});\n\n({x:let} = null);\n\ns = {\"foo\": this};\n\nx({set \"foo\"(a){}});\n\n({ a = 42, [b]: c.d } = e);\n\nx({foo(){}, *bar(){}});\n\n({...[a, b]});\n\nx = { a: 1, ...y, b: 1};\n\nx({get 0x234241(){}});\n\nx({get 1(){}});\n\n({ [left()]: y, ...x} = right());\n\n({topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect);\n\n({y});\n\n({set [0](x) { super.m(\"1\", v); }});\n\nx = {async:b}\n\n({set foo(v) {}});\n\n({*set() {}});\n\n({*static() {}});\n\n({*async(){}});\n\n({get : 0});\n\n({if: 4});\n\n({*await() {}});\n\nx = {*\"foo\"(){}};\n\nx = {set get(a){}};\n\nx = {foo: typeof x};\n\nx = {\"x\": {a: y + x}};\n\na = { w, a: x } = b;\n\na = {...src.y.x} = b;\n\na = { y: x = 1 } = b;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1032
}
```

### Printed

```javascript

({ key: {} });
({ key: { a } = x });
({ a: b } = obj);
({ 1: {}.b ? c : d });
({ a: { prop: 1 }.prop } = {});
({ 1: +b });
({ [a]: +b });
({ a: +b });
({ async: (await) ? yield : foo });
({ async 100() {} });
({ key: bar = x });
({ typeof(x, y) {} });
({ x() {}, x: 1 });
({ * x() {}, get x() {} });
({ "\"x\"": y + z });
({ "\"x\"": [y] }) =>  x;
({ "\"x\"": { y: z } });
x({ [a]: b, [15]: d } = obj);
({ l: 50.foo } = x);
a = { "\"b\"": c = d };
({ x: let });
({ x: let } = null);
s = { "\"foo\"": this };
x({ set "\"foo\""(a) {} });
({ a = 42, [b]: c.d } = e);
x({ foo() {}, * bar() {} });
({ ...[a, b] });
x = { a: 1, ...y, b: 1 };
x({ get 0x234241() {} });
x({ get 1() {} });
({ [left()]: y, ...x } = right());
({ topLeft: { x: x1, y: y1 }, bottomRight: { x: x2, y: y2 } } = rect);
({ y });
({ set [0](x) {
    .m("\"1\"", v);
  } });
x = { async: b }({ set foo(v) {} });
({ * set() {} });
({ * static() {} });
({ * async() {} });
({ get: 0 });
({ if: 4 });
({ * await() {} });
x = { * "\"foo\""() {} };
x = { set get(a) {} };
x = { foo: typeof x };
x = { "\"x\"": { a: y + x } };
a = { w, a: x } = b;
a = { ...src.y.x } = b;
a = { y: x = 1 } = b;
```

### Diagnostics

```javascript
✔ No errors
```

