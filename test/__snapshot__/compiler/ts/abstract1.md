# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
abstract class x { constructor(str: string, other: number) {}}
abstract class x { abstract prop: string; }
abstract class x { other = a.b; fn = () => this.prop; }
abstract class x { other = a.b[c]; fn = () => this.prop; }
abstract class x { other = this.prop; fn = () => this.prop; }
abstract class B extends A {}
abstract class B extends A { abstract bar(); }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class x { constructor(str: string, other: number) {}}\nabstract class x { abstract prop: string; }\nabstract class x { other = a.b; fn = () => this.prop; }\nabstract class x { other = a.b[c]; fn = () => this.prop; }\nabstract class x { other = this.prop; fn = () => this.prop; }\nabstract class B extends A {}\nabstract class B extends A { abstract bar(); }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 30
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "str",
                                            "rawText": "str",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 35,
                                            "end": 42
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 31,
                                        "end": 42
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "other",
                                            "rawText": "other",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 43,
                                            "end": 49
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 50,
                                            "end": 57
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 43,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 58
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 60
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 61
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 61
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 18,
                        "end": 61
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 18,
                "end": 62
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 8,
            "end": 62
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 77,
                "end": 79
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "prop",
                            "rawText": "prop",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 95
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 96,
                            "end": 103
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 81,
                        "end": 104
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 81,
                "end": 106
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 71,
            "end": 106
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 121,
                "end": 123
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "other",
                            "rawText": "other",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 125,
                            "end": 131
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 135
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 136,
                                "end": 137
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 137,
                            "period": {
                                "kind": 255,
                                "pos": 135,
                                "end": 136
                            }
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 125,
                        "end": 138
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 138,
                            "end": 141
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 143
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 4260571,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 149,
                                    "end": 154
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "prop",
                                    "rawText": "prop",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 155,
                                    "end": 159
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 159,
                                "period": {
                                    "kind": 255,
                                    "pos": 154,
                                    "end": 155
                                }
                            },
                            "flags": 1073741824,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 143,
                            "end": 159
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 138,
                        "end": 160
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 125,
                "end": 162
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 115,
            "end": 162
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 177,
                "end": 179
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "other",
                            "rawText": "other",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 181,
                            "end": 187
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 189,
                                    "end": 191
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 192,
                                    "end": 193
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 191,
                                "end": 193,
                                "period": {
                                    "kind": 255,
                                    "pos": 191,
                                    "end": 192
                                }
                            },
                            "expression": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 194,
                                "end": 195
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 193,
                            "end": 196
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 181,
                        "end": 197
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 200
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 202
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 4260571,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 208,
                                    "end": 213
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "prop",
                                    "rawText": "prop",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 214,
                                    "end": 218
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 218,
                                "period": {
                                    "kind": 255,
                                    "pos": 213,
                                    "end": 214
                                }
                            },
                            "flags": 1073741824,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 202,
                            "end": 218
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 197,
                        "end": 219
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 181,
                "end": 221
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 171,
            "end": 221
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 236,
                "end": 238
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "other",
                            "rawText": "other",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 240,
                            "end": 246
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 4260571,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 253
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 254,
                                "end": 258
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 253,
                            "end": 258,
                            "period": {
                                "kind": 255,
                                "pos": 253,
                                "end": 254
                            }
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 240,
                        "end": 259
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 259,
                            "end": 262
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 264,
                                "end": 264
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 4260571,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 270,
                                    "end": 275
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "prop",
                                    "rawText": "prop",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 276,
                                    "end": 280
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 280,
                                "period": {
                                    "kind": 255,
                                    "pos": 275,
                                    "end": 276
                                }
                            },
                            "flags": 1073741824,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 264,
                            "end": 280
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 259,
                        "end": 281
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 240,
                "end": 283
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 230,
            "end": 283
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 298,
                "end": 300
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 308,
                    "end": 310
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 308,
                "end": 310
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 312,
                "end": 313
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536903680,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 292,
            "end": 313
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 328,
                "end": 330
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 338,
                    "end": 340
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 338,
                "end": 340
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 351,
                                "end": 355
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 356,
                                "end": 357
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 355,
                            "end": 358
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 342,
                        "end": 358
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 342,
                "end": 360
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870912,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 322,
            "end": 360
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 360
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

