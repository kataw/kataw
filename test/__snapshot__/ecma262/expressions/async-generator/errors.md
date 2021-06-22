# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
  "var yield;",
async function * gen() {var await;}
async function * gen() {var foo, yield;}
async function * gen() {var foo, await;}
async function * gen() {try { } catch (yield) { }}
async function * gen() {try { } catch (await) { }}
async function * gen() {function yield() { }}
async function * gen() {function await() { }}
    // The name of the NFE is bound in the generator, which does not permit
    // yield or await to be identifiers.
async function * gen() {(async function * yield() { })}
async function * gen() {(async function * await() { })}
    // Yield and Await aren't valid as a formal parameter for generators.
async function * gen() {async function * foo(yield) { }}
async function * gen() {(async function * foo(yield) { })}
async function * gen() {async function * foo(await) { }}
async function * gen() {(async function * foo(await) { })}
async function * gen() {yield = 1;}
async function * gen() {await = 1;}
async function * gen() {var foo = yield = 1;}
async function * gen() {var foo = await = 1;}
async function * gen() {++yield;}
async function * gen() {++await;}
async function * gen() {yield++;}
async function * gen() {await++;}
async function * gen() {yield *}
async function * gen() {(yield *)}
    // Yield binds very loosely, so this parses as "yield (3 + yield 4)} which
    // is invalid.
async function * gen() {yield 3 + yield 4;}
async function * gen() {yield: 34}
async function * gen() {yield ? 1 : 2}
    // Parses as yield (/ yield): invalid.
async function * gen() {yield / yield}
async function * gen() {+ yield}
async function * gen() {+ yield 3}
    // Invalid (no newline allowed between yield and *).
async function * gen() {yield\n*3}
    // Invalid (we see a newline, so we parse {yield:42} as a statement, not an
    // object literal, and yield is not a valid label).
async function * gen() {yield\n{yield: 42}}
async function * gen() {yield /* comment */\n {yield: 42}}
async function * gen() {yield //comment\n {yield: 42}}
    // Destructuring binding and assignment are both disallowed
async function * gen() {var [yield] = [42];}
async function * gen() {var [await] = [42];}
async function * gen() {var {foo: yield} = {a: 42};}
async function * gen() {var {foo: await} = {a: 42};}
async function * gen() {[yield] = [42];}
async function * gen() {[await] = [42];}
async function * gen() {({a: yield} = {a: 42});}
async function * gen() {({a: await} = {a: 42});}
    // Also disallow full yield/await expressions on LHS
async function * gen() {var [yield 24] = [42];}
async function * gen() {var [await 24] = [42];}
async function * gen() {var {foo: yield 24} = {a: 42};}
async function * gen() {var {foo: await 24} = {a: 42};}
async function * gen() {[yield 24] = [42];}
async function * gen() {[await 24] = [42];}
async function * gen() {({a: yield 24} = {a: 42});}
async function * gen() {({a: await 24} = {a: 42});}
async function * gen() {for (yield 'x' in {});}
async function * gen() {for (await 'x' in {});}
async function * gen() {for (yield 'x' of {});}
async function * gen() {for (await 'x' of {});}
async function * gen() {for (yield 'x' in {} in {});}
async function * gen() {for (await 'x' in {} in {});}
async function * gen() {for (yield 'x' in {} of {});}
async function * gen() {for (await 'x' in {} of {});}
async function * gen() {class C extends yield { }}
async function * gen() {class C extends await { }}
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "var yield;",
                        "rawText": "\"var yield;\"",
                        "flags": 96,
                        "start": 0,
                        "end": 14
                    },
                    {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 65,
                            "start": 15,
                            "end": 21
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 21,
                            "end": 30
                        },
                        "asteriskToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 30,
                            "end": 32
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 96,
                            "start": 32,
                            "end": 36
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 36,
                            "end": 38
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 40,
                                            "end": 43
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 43,
                                                    "end": 49
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 43,
                                            "end": 49
                                        },
                                        "flags": 16,
                                        "start": 40,
                                        "end": 50
                                    }
                                ],
                                "flags": 32,
                                "start": 40,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 51
                        },
                        "returnType": null,
                        "flags": 416,
                        "start": 15,
                        "end": 51
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 51,
                "end": 57
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 57,
                "end": 66
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 66,
                "end": 68
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 68,
                "end": 72
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 72,
                "end": 74
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 76,
                                "end": 79
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 79,
                                            "end": 83
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 79,
                                        "end": 83
                                    },
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 84,
                                            "end": 90
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 84,
                                        "end": 90
                                    }
                                ],
                                "flags": 16,
                                "start": 79,
                                "end": 90
                            },
                            "flags": 16,
                            "start": 76,
                            "end": 91
                        }
                    ],
                    "flags": 32,
                    "start": 76,
                    "end": 91
                },
                "flags": 32,
                "start": 74,
                "end": 92
            },
            "returnType": null,
            "flags": 400,
            "start": 51,
            "end": 92
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 92,
                "end": 98
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 98,
                "end": 107
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 107,
                "end": 109
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 109,
                "end": 113
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 113,
                "end": 115
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 117,
                                "end": 120
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 120,
                                            "end": 124
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 120,
                                        "end": 124
                                    },
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 125,
                                            "end": 131
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 125,
                                        "end": 131
                                    }
                                ],
                                "flags": 16,
                                "start": 120,
                                "end": 131
                            },
                            "flags": 16,
                            "start": 117,
                            "end": 132
                        }
                    ],
                    "flags": 32,
                    "start": 117,
                    "end": 132
                },
                "flags": 32,
                "start": 115,
                "end": 133
            },
            "returnType": null,
            "flags": 400,
            "start": 92,
            "end": 133
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 133,
                "end": 139
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 139,
                "end": 148
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 148,
                "end": 150
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 150,
                "end": 154
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 154,
                "end": 156
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 80,
                                "start": 158,
                                "end": 161
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 163,
                                    "end": 163
                                },
                                "flags": 16,
                                "start": 161,
                                "end": 165
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 165,
                                    "end": 171
                                },
                                "catchParameter": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 173,
                                    "end": 178
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 181,
                                        "end": 181
                                    },
                                    "flags": 16,
                                    "start": 179,
                                    "end": 183
                                },
                                "flags": 80,
                                "start": 165,
                                "end": 183
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 158,
                            "end": 183
                        }
                    ],
                    "flags": 32,
                    "start": 158,
                    "end": 183
                },
                "flags": 32,
                "start": 156,
                "end": 184
            },
            "returnType": null,
            "flags": 400,
            "start": 133,
            "end": 184
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 184,
                "end": 190
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 190,
                "end": 199
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 199,
                "end": 201
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 201,
                "end": 205
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 205,
                "end": 207
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 80,
                                "start": 209,
                                "end": 212
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 214,
                                    "end": 214
                                },
                                "flags": 16,
                                "start": 212,
                                "end": 216
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 216,
                                    "end": 222
                                },
                                "catchParameter": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 224,
                                    "end": 229
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 232,
                                        "end": 232
                                    },
                                    "flags": 16,
                                    "start": 230,
                                    "end": 234
                                },
                                "flags": 80,
                                "start": 216,
                                "end": 234
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 209,
                            "end": 234
                        }
                    ],
                    "flags": 32,
                    "start": 209,
                    "end": 234
                },
                "flags": 32,
                "start": 207,
                "end": 235
            },
            "returnType": null,
            "flags": 400,
            "start": 184,
            "end": 235
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 235,
                "end": 241
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 241,
                "end": 250
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 250,
                "end": 252
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 252,
                "end": 256
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 256,
                "end": 258
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 260,
                                "end": 268
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 268,
                                "end": 274
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 274,
                                "end": 276
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 278,
                                    "end": 278
                                },
                                "flags": 32,
                                "start": 276,
                                "end": 280
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 260,
                            "end": 280
                        }
                    ],
                    "flags": 32,
                    "start": 260,
                    "end": 280
                },
                "flags": 32,
                "start": 258,
                "end": 281
            },
            "returnType": null,
            "flags": 400,
            "start": 235,
            "end": 281
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 281,
                "end": 287
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 287,
                "end": 296
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 296,
                "end": 298
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 298,
                "end": 302
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 302,
                "end": 304
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 306,
                                "end": 314
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 314,
                                "end": 320
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 320,
                                "end": 322
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 324,
                                    "end": 324
                                },
                                "flags": 32,
                                "start": 322,
                                "end": 326
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 306,
                            "end": 326
                        }
                    ],
                    "flags": 32,
                    "start": 306,
                    "end": 326
                },
                "flags": 32,
                "start": 304,
                "end": 327
            },
            "returnType": null,
            "flags": 400,
            "start": 281,
            "end": 327
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 327,
                "end": 450
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 450,
                "end": 459
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 459,
                "end": 461
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 461,
                "end": 465
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 465,
                "end": 467
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 470,
                                        "end": 475
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 475,
                                        "end": 484
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 484,
                                        "end": 486
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 486,
                                        "end": 492
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 492,
                                        "end": 494
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 496,
                                            "end": 496
                                        },
                                        "flags": 32,
                                        "start": 494,
                                        "end": 498
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 470,
                                    "end": 498
                                },
                                "flags": 32,
                                "start": 469,
                                "end": 499
                            },
                            "flags": 16,
                            "start": 469,
                            "end": 499
                        }
                    ],
                    "flags": 32,
                    "start": 469,
                    "end": 499
                },
                "flags": 32,
                "start": 467,
                "end": 500
            },
            "returnType": null,
            "flags": 400,
            "start": 327,
            "end": 500
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 500,
                "end": 506
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 506,
                "end": 515
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 515,
                "end": 517
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 517,
                "end": 521
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 521,
                "end": 523
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 526,
                                        "end": 531
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 531,
                                        "end": 540
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 540,
                                        "end": 542
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 542,
                                        "end": 548
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 548,
                                        "end": 550
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 552,
                                            "end": 552
                                        },
                                        "flags": 32,
                                        "start": 550,
                                        "end": 554
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 526,
                                    "end": 554
                                },
                                "flags": 32,
                                "start": 525,
                                "end": 555
                            },
                            "flags": 16,
                            "start": 525,
                            "end": 555
                        }
                    ],
                    "flags": 32,
                    "start": 525,
                    "end": 555
                },
                "flags": 32,
                "start": 523,
                "end": 556
            },
            "returnType": null,
            "flags": 400,
            "start": 500,
            "end": 556
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 556,
                "end": 636
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 636,
                "end": 645
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 645,
                "end": 647
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 647,
                "end": 651
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 651,
                "end": 653
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 655,
                                "end": 660
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 660,
                                "end": 669
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 669,
                                "end": 671
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 671,
                                "end": 675
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 676,
                                        "end": 681
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 675,
                                "end": 682
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 684,
                                    "end": 684
                                },
                                "flags": 32,
                                "start": 682,
                                "end": 686
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 655,
                            "end": 686
                        }
                    ],
                    "flags": 32,
                    "start": 655,
                    "end": 686
                },
                "flags": 32,
                "start": 653,
                "end": 687
            },
            "returnType": null,
            "flags": 400,
            "start": 556,
            "end": 687
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 687,
                "end": 693
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 693,
                "end": 702
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 702,
                "end": 704
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 704,
                "end": 708
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 708,
                "end": 710
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 713,
                                        "end": 718
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 718,
                                        "end": 727
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 727,
                                        "end": 729
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 729,
                                        "end": 733
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 734,
                                                "end": 739
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 733,
                                        "end": 740
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 742,
                                            "end": 742
                                        },
                                        "flags": 32,
                                        "start": 740,
                                        "end": 744
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 713,
                                    "end": 744
                                },
                                "flags": 32,
                                "start": 712,
                                "end": 745
                            },
                            "flags": 16,
                            "start": 712,
                            "end": 745
                        }
                    ],
                    "flags": 32,
                    "start": 712,
                    "end": 745
                },
                "flags": 32,
                "start": 710,
                "end": 746
            },
            "returnType": null,
            "flags": 400,
            "start": 687,
            "end": 746
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 746,
                "end": 752
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 752,
                "end": 761
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 761,
                "end": 763
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 763,
                "end": 767
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 767,
                "end": 769
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 771,
                                "end": 776
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 776,
                                "end": 785
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 785,
                                "end": 787
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 787,
                                "end": 791
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 792,
                                        "end": 797
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 791,
                                "end": 798
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 800,
                                    "end": 800
                                },
                                "flags": 32,
                                "start": 798,
                                "end": 802
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 771,
                            "end": 802
                        }
                    ],
                    "flags": 32,
                    "start": 771,
                    "end": 802
                },
                "flags": 32,
                "start": 769,
                "end": 803
            },
            "returnType": null,
            "flags": 400,
            "start": 746,
            "end": 803
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 803,
                "end": 809
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 809,
                "end": 818
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 818,
                "end": 820
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 820,
                "end": 824
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 824,
                "end": 826
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 829,
                                        "end": 834
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 834,
                                        "end": 843
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 843,
                                        "end": 845
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 845,
                                        "end": 849
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 850,
                                                "end": 855
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 849,
                                        "end": 856
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 858,
                                            "end": 858
                                        },
                                        "flags": 32,
                                        "start": 856,
                                        "end": 860
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 829,
                                    "end": 860
                                },
                                "flags": 32,
                                "start": 828,
                                "end": 861
                            },
                            "flags": 16,
                            "start": 828,
                            "end": 861
                        }
                    ],
                    "flags": 32,
                    "start": 828,
                    "end": 861
                },
                "flags": 32,
                "start": 826,
                "end": 862
            },
            "returnType": null,
            "flags": 400,
            "start": 803,
            "end": 862
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 862,
                "end": 868
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 868,
                "end": 877
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 877,
                "end": 879
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 879,
                "end": 883
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 883,
                "end": 885
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 887,
                                        "end": 892
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 887,
                                    "end": 892
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 892,
                                    "end": 894
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 894,
                                    "end": 896
                                },
                                "flags": 32,
                                "start": 887,
                                "end": 896
                            },
                            "flags": 16,
                            "start": 887,
                            "end": 897
                        }
                    ],
                    "flags": 32,
                    "start": 887,
                    "end": 897
                },
                "flags": 32,
                "start": 885,
                "end": 898
            },
            "returnType": null,
            "flags": 400,
            "start": 862,
            "end": 898
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 898,
                "end": 904
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 904,
                "end": 913
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 913,
                "end": 915
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 915,
                "end": 919
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 919,
                "end": 921
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 923,
                                        "end": 928
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 928,
                                        "end": 928
                                    },
                                    "flags": 32,
                                    "start": 923,
                                    "end": 928
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 928,
                                    "end": 930
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 930,
                                    "end": 932
                                },
                                "flags": 32,
                                "start": 923,
                                "end": 932
                            },
                            "flags": 16,
                            "start": 923,
                            "end": 933
                        }
                    ],
                    "flags": 32,
                    "start": 923,
                    "end": 933
                },
                "flags": 32,
                "start": 921,
                "end": 934
            },
            "returnType": null,
            "flags": 400,
            "start": 898,
            "end": 934
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 934,
                "end": 940
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 940,
                "end": 949
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 949,
                "end": 951
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 951,
                "end": 955
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 955,
                "end": 957
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 959,
                                "end": 962
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 962,
                                            "end": 966
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 968,
                                                    "end": 974
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 968,
                                                "end": 974
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 974,
                                                "end": 976
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 976,
                                                "end": 978
                                            },
                                            "flags": 32,
                                            "start": 968,
                                            "end": 978
                                        },
                                        "flags": 16,
                                        "start": 962,
                                        "end": 978
                                    }
                                ],
                                "flags": 16,
                                "start": 962,
                                "end": 978
                            },
                            "flags": 16,
                            "start": 959,
                            "end": 979
                        }
                    ],
                    "flags": 32,
                    "start": 959,
                    "end": 979
                },
                "flags": 32,
                "start": 957,
                "end": 980
            },
            "returnType": null,
            "flags": 400,
            "start": 934,
            "end": 980
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 980,
                "end": 986
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 986,
                "end": 995
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 995,
                "end": 997
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 997,
                "end": 1001
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1001,
                "end": 1003
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 1005,
                                "end": 1008
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 1008,
                                            "end": 1012
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 1014,
                                                    "end": 1020
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 1020,
                                                    "end": 1020
                                                },
                                                "flags": 32,
                                                "start": 1014,
                                                "end": 1020
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
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
                                            "start": 1014,
                                            "end": 1024
                                        },
                                        "flags": 16,
                                        "start": 1008,
                                        "end": 1024
                                    }
                                ],
                                "flags": 16,
                                "start": 1008,
                                "end": 1024
                            },
                            "flags": 16,
                            "start": 1005,
                            "end": 1025
                        }
                    ],
                    "flags": 32,
                    "start": 1005,
                    "end": 1025
                },
                "flags": 32,
                "start": 1003,
                "end": 1026
            },
            "returnType": null,
            "flags": 400,
            "start": 980,
            "end": 1026
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1026,
                "end": 1032
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1032,
                "end": 1041
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1041,
                "end": 1043
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1043,
                "end": 1047
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1047,
                "end": 1049
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 1051,
                                    "end": 1053
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 1053,
                                        "end": 1058
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 1053,
                                    "end": 1058
                                },
                                "flags": 32,
                                "start": 1051,
                                "end": 1058
                            },
                            "flags": 16,
                            "start": 1051,
                            "end": 1059
                        }
                    ],
                    "flags": 32,
                    "start": 1051,
                    "end": 1059
                },
                "flags": 32,
                "start": 1049,
                "end": 1060
            },
            "returnType": null,
            "flags": 400,
            "start": 1026,
            "end": 1060
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1060,
                "end": 1066
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1066,
                "end": 1075
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1075,
                "end": 1077
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1077,
                "end": 1081
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1081,
                "end": 1083
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 1085,
                                    "end": 1087
                                },
                                "operand": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 1087,
                                        "end": 1092
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 1092,
                                        "end": 1092
                                    },
                                    "flags": 32,
                                    "start": 1087,
                                    "end": 1092
                                },
                                "flags": 32,
                                "start": 1085,
                                "end": 1092
                            },
                            "flags": 16,
                            "start": 1085,
                            "end": 1093
                        }
                    ],
                    "flags": 32,
                    "start": 1085,
                    "end": 1093
                },
                "flags": 32,
                "start": 1083,
                "end": 1094
            },
            "returnType": null,
            "flags": 400,
            "start": 1060,
            "end": 1094
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1094,
                "end": 1100
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1100,
                "end": 1109
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1109,
                "end": 1111
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1111,
                "end": 1115
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1115,
                "end": 1117
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1119,
                                    "end": 1124
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "start": 1124,
                                        "end": 1126
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 1126,
                                        "end": 1126
                                    },
                                    "flags": 32,
                                    "start": 1124,
                                    "end": 1126
                                },
                                "flags": 32,
                                "start": 1119,
                                "end": 1126
                            },
                            "flags": 16,
                            "start": 1119,
                            "end": 1127
                        }
                    ],
                    "flags": 32,
                    "start": 1119,
                    "end": 1127
                },
                "flags": 32,
                "start": 1117,
                "end": 1128
            },
            "returnType": null,
            "flags": 400,
            "start": 1094,
            "end": 1128
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1128,
                "end": 1134
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1134,
                "end": 1143
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1143,
                "end": 1145
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1145,
                "end": 1149
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1149,
                "end": 1151
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 1153,
                                    "end": 1158
                                },
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "start": 1158,
                                        "end": 1160
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 1160,
                                        "end": 1160
                                    },
                                    "flags": 32,
                                    "start": 1158,
                                    "end": 1160
                                },
                                "flags": 32,
                                "start": 1153,
                                "end": 1160
                            },
                            "flags": 16,
                            "start": 1153,
                            "end": 1161
                        }
                    ],
                    "flags": 32,
                    "start": 1153,
                    "end": 1161
                },
                "flags": 32,
                "start": 1151,
                "end": 1162
            },
            "returnType": null,
            "flags": 400,
            "start": 1128,
            "end": 1162
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1162,
                "end": 1168
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1168,
                "end": 1177
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1177,
                "end": 1179
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1179,
                "end": 1183
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1183,
                "end": 1185
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1187,
                                    "end": 1192
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 1192,
                                    "end": 1194
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 1194,
                                    "end": 1194
                                },
                                "flags": 32,
                                "start": 1187,
                                "end": 1194
                            },
                            "flags": 16,
                            "start": 1187,
                            "end": 1194
                        }
                    ],
                    "flags": 32,
                    "start": 1187,
                    "end": 1194
                },
                "flags": 32,
                "start": 1185,
                "end": 1195
            },
            "returnType": null,
            "flags": 400,
            "start": 1162,
            "end": 1195
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1195,
                "end": 1201
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1201,
                "end": 1210
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1210,
                "end": 1212
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1212,
                "end": 1216
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1216,
                "end": 1218
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 1221,
                                        "end": 1226
                                    },
                                    "delegate": true,
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 1226,
                                        "end": 1228
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 1228,
                                        "end": 1228
                                    },
                                    "flags": 32,
                                    "start": 1221,
                                    "end": 1228
                                },
                                "flags": 32,
                                "start": 1220,
                                "end": 1229
                            },
                            "flags": 16,
                            "start": 1220,
                            "end": 1229
                        }
                    ],
                    "flags": 32,
                    "start": 1220,
                    "end": 1229
                },
                "flags": 32,
                "start": 1218,
                "end": 1230
            },
            "returnType": null,
            "flags": 400,
            "start": 1195,
            "end": 1230
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1230,
                "end": 1334
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1334,
                "end": 1343
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1343,
                "end": 1345
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1345,
                "end": 1349
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1349,
                "end": 1351
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1353,
                                    "end": 1358
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 1358,
                                        "end": 1360
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 1360,
                                        "end": 1362
                                    },
                                    "right": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 1362,
                                            "end": 1368
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "start": 1368,
                                            "end": 1370
                                        },
                                        "flags": 32,
                                        "start": 1362,
                                        "end": 1370
                                    },
                                    "flags": 32,
                                    "start": 1358,
                                    "end": 1370
                                },
                                "flags": 32,
                                "start": 1353,
                                "end": 1370
                            },
                            "flags": 16,
                            "start": 1353,
                            "end": 1371
                        }
                    ],
                    "flags": 32,
                    "start": 1353,
                    "end": 1371
                },
                "flags": 32,
                "start": 1351,
                "end": 1372
            },
            "returnType": null,
            "flags": 400,
            "start": 1230,
            "end": 1372
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1372,
                "end": 1378
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1378,
                "end": 1387
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1387,
                "end": 1389
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1389,
                "end": 1393
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1393,
                "end": 1395
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1397,
                                    "end": 1402
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 1397,
                                "end": 1402
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1402,
                                "end": 1403
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 34,
                                    "rawText": "34",
                                    "flags": 96,
                                    "start": 1403,
                                    "end": 1406
                                },
                                "flags": 16,
                                "start": 1403,
                                "end": 1406
                            },
                            "flags": 16,
                            "start": 1397,
                            "end": 1406
                        }
                    ],
                    "flags": 32,
                    "start": 1397,
                    "end": 1406
                },
                "flags": 32,
                "start": 1395,
                "end": 1407
            },
            "returnType": null,
            "flags": 400,
            "start": 1372,
            "end": 1407
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1407,
                "end": 1413
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1413,
                "end": 1422
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1422,
                "end": 1424
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1424,
                "end": 1428
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1428,
                "end": 1430
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 1432,
                                        "end": 1437
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 1432,
                                    "end": 1437
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 1437,
                                    "end": 1439
                                },
                                "consequent": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1439,
                                    "end": 1441
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 1441,
                                    "end": 1443
                                },
                                "alternate": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 1443,
                                    "end": 1445
                                },
                                "flags": 32,
                                "start": 1432,
                                "end": 1445
                            },
                            "flags": 16,
                            "start": 1432,
                            "end": 1445
                        }
                    ],
                    "flags": 32,
                    "start": 1432,
                    "end": 1445
                },
                "flags": 32,
                "start": 1430,
                "end": 1446
            },
            "returnType": null,
            "flags": 400,
            "start": 1407,
            "end": 1446
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1446,
                "end": 1495
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1495,
                "end": 1504
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1504,
                "end": 1506
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1506,
                "end": 1510
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1510,
                "end": 1512
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1514,
                                    "end": 1519
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 221,
                                    "text": "/ yield}",
                                    "flags": 96,
                                    "start": 1519,
                                    "end": 1528
                                },
                                "flags": 32,
                                "start": 1514,
                                "end": 1528
                            },
                            "flags": 16,
                            "start": 1514,
                            "end": 1528
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 1528,
                                "end": 1534
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 1534,
                                "end": 1543
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 1543,
                                "end": 1545
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 1545,
                                "end": 1549
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1549,
                                "end": 1551
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 1553,
                                                    "end": 1554
                                                },
                                                "operand": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 1554,
                                                        "end": 1560
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 1554,
                                                    "end": 1560
                                                },
                                                "flags": 32,
                                                "start": 1553,
                                                "end": 1560
                                            },
                                            "flags": 16,
                                            "start": 1553,
                                            "end": 1560
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 1553,
                                    "end": 1560
                                },
                                "flags": 32,
                                "start": 1551,
                                "end": 1561
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 1528,
                            "end": 1561
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 1561,
                                "end": 1567
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 1567,
                                "end": 1576
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 1576,
                                "end": 1578
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 1578,
                                "end": 1582
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1582,
                                "end": 1584
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 126,
                                                "operandToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 1586,
                                                    "end": 1587
                                                },
                                                "operand": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 1587,
                                                        "end": 1593
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 1593,
                                                        "end": 1595
                                                    },
                                                    "flags": 32,
                                                    "start": 1587,
                                                    "end": 1595
                                                },
                                                "flags": 32,
                                                "start": 1586,
                                                "end": 1595
                                            },
                                            "flags": 16,
                                            "start": 1586,
                                            "end": 1595
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 1586,
                                    "end": 1595
                                },
                                "flags": 32,
                                "start": 1584,
                                "end": 1596
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 1561,
                            "end": 1596
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 1596,
                                "end": 1659
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 1659,
                                "end": 1668
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 1668,
                                "end": 1670
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 1670,
                                "end": 1674
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1674,
                                "end": 1676
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 1678,
                                                    "end": 1683
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 1678,
                                                "end": 1683
                                            },
                                            "flags": 16,
                                            "start": 1678,
                                            "end": 1683
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 1678,
                                    "end": 1683
                                },
                                "flags": 32,
                                "start": 1676,
                                "end": 1683
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 1596,
                            "end": 1683
                        }
                    ],
                    "flags": 32,
                    "start": 1514,
                    "end": 1683
                },
                "flags": 32,
                "start": 1512,
                "end": 1683
            },
            "returnType": null,
            "flags": 400,
            "start": 1446,
            "end": 1683
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "n",
                    "rawText": "n",
                    "flags": 96,
                    "start": 1684,
                    "end": 1685
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "start": 1685,
                    "end": 1686
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 96,
                    "start": 1686,
                    "end": 1687
                },
                "flags": 32,
                "start": 1684,
                "end": 1687
            },
            "flags": 16,
            "start": 1684,
            "end": 1687
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1688,
                "end": 1830
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1830,
                "end": 1839
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1839,
                "end": 1841
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1841,
                "end": 1845
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1845,
                "end": 1847
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1849,
                                    "end": 1854
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 1849,
                                "end": 1854
                            },
                            "flags": 16,
                            "start": 1849,
                            "end": 1854
                        }
                    ],
                    "flags": 32,
                    "start": 1849,
                    "end": 1854
                },
                "flags": 32,
                "start": 1847,
                "end": 1854
            },
            "returnType": null,
            "flags": 400,
            "start": 1688,
            "end": 1854
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 1855,
                "end": 1856
            },
            "flags": 16,
            "start": 1855,
            "end": 1856
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 1857,
                            "end": 1862
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 1862,
                            "end": 1863
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1863,
                                "end": 1866
                            },
                            "flags": 16,
                            "start": 1863,
                            "end": 1866
                        },
                        "flags": 16,
                        "start": 1857,
                        "end": 1866
                    }
                ],
                "flags": 16,
                "start": 1857,
                "end": 1866
            },
            "flags": 16,
            "start": 1856,
            "end": 1867
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1868,
                "end": 1874
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1874,
                "end": 1883
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1883,
                "end": 1885
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1885,
                "end": 1889
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1889,
                "end": 1891
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1893,
                                    "end": 1898
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 1893,
                                "end": 1898
                            },
                            "flags": 16,
                            "start": 1893,
                            "end": 1898
                        }
                    ],
                    "flags": 32,
                    "start": 1893,
                    "end": 1898
                },
                "flags": 32,
                "start": 1891,
                "end": 1898
            },
            "returnType": null,
            "flags": 400,
            "start": 1868,
            "end": 1898
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 1913,
                "end": 1914
            },
            "flags": 16,
            "start": 1913,
            "end": 1914
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 1916,
                            "end": 1921
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 1921,
                            "end": 1922
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1922,
                                "end": 1925
                            },
                            "flags": 16,
                            "start": 1922,
                            "end": 1925
                        },
                        "flags": 16,
                        "start": 1916,
                        "end": 1925
                    }
                ],
                "flags": 16,
                "start": 1916,
                "end": 1925
            },
            "flags": 16,
            "start": 1914,
            "end": 1926
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 1927,
                "end": 1933
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 1933,
                "end": 1942
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 1942,
                "end": 1944
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 1944,
                "end": 1948
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1948,
                "end": 1950
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 1952,
                                    "end": 1957
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 65,
                                        "start": 1957,
                                        "end": 2052
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 2052,
                                        "end": 2061
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 2061,
                                        "end": 2063
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 2063,
                                        "end": 2067
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2067,
                                        "end": 2069
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 2071,
                                                        "end": 2074
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 201,
                                                                    "elementList": {
                                                                        "kind": 324,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 96,
                                                                                "start": 2076,
                                                                                "end": 2081
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 2076,
                                                                        "end": 2081
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2074,
                                                                    "end": 2082
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 42,
                                                                                "rawText": "42",
                                                                                "flags": 96,
                                                                                "start": 2086,
                                                                                "end": 2088
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 2086,
                                                                        "end": 2088
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2084,
                                                                    "end": 2089
                                                                },
                                                                "flags": 16,
                                                                "start": 2074,
                                                                "end": 2089
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 2074,
                                                        "end": 2089
                                                    },
                                                    "flags": 16,
                                                    "start": 2071,
                                                    "end": 2090
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 2071,
                                            "end": 2090
                                        },
                                        "flags": 32,
                                        "start": 2069,
                                        "end": 2091
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 1957,
                                    "end": 2091
                                },
                                "flags": 32,
                                "start": 1952,
                                "end": 2091
                            },
                            "flags": 16,
                            "start": 1952,
                            "end": 2091
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2091,
                                "end": 2097
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2097,
                                "end": 2106
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2106,
                                "end": 2108
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2108,
                                "end": 2112
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2112,
                                "end": 2114
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 2116,
                                                "end": 2119
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 324,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 2121,
                                                                        "end": 2126
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 2121,
                                                                "end": 2126
                                                            },
                                                            "flags": 32,
                                                            "start": 2119,
                                                            "end": 2127
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 201392130,
                                                                        "text": 42,
                                                                        "rawText": "42",
                                                                        "flags": 96,
                                                                        "start": 2131,
                                                                        "end": 2133
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 2131,
                                                                "end": 2133
                                                            },
                                                            "flags": 32,
                                                            "start": 2129,
                                                            "end": 2134
                                                        },
                                                        "flags": 16,
                                                        "start": 2119,
                                                        "end": 2134
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 2119,
                                                "end": 2134
                                            },
                                            "flags": 16,
                                            "start": 2116,
                                            "end": 2135
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2116,
                                    "end": 2135
                                },
                                "flags": 32,
                                "start": 2114,
                                "end": 2136
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2091,
                            "end": 2136
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2136,
                                "end": 2142
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2142,
                                "end": 2151
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2151,
                                "end": 2153
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2153,
                                "end": 2157
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2157,
                                "end": 2159
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 2161,
                                                "end": 2164
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "key": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 2166,
                                                                            "end": 2169
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "yield",
                                                                            "rawText": "yield",
                                                                            "flags": 96,
                                                                            "start": 2170,
                                                                            "end": 2176
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 2166,
                                                                        "end": 2176
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 2166,
                                                                "end": 2176
                                                            },
                                                            "flags": 32,
                                                            "start": 2164,
                                                            "end": 2177
                                                        },
                                                        "type": null,
                                                        "initializer": {
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
                                                                            "start": 2181,
                                                                            "end": 2182
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392130,
                                                                            "text": 42,
                                                                            "rawText": "42",
                                                                            "flags": 96,
                                                                            "start": 2183,
                                                                            "end": 2186
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2181,
                                                                        "end": 2186
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 2181,
                                                                "end": 2186
                                                            },
                                                            "flags": 48,
                                                            "start": 2179,
                                                            "end": 2187
                                                        },
                                                        "flags": 16,
                                                        "start": 2164,
                                                        "end": 2187
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 2164,
                                                "end": 2187
                                            },
                                            "flags": 16,
                                            "start": 2161,
                                            "end": 2188
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2161,
                                    "end": 2188
                                },
                                "flags": 32,
                                "start": 2159,
                                "end": 2189
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2136,
                            "end": 2189
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2189,
                                "end": 2195
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2195,
                                "end": 2204
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2204,
                                "end": 2206
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2206,
                                "end": 2210
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2210,
                                "end": 2212
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 2214,
                                                "end": 2217
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "key": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 2219,
                                                                            "end": 2222
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 2223,
                                                                            "end": 2229
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 2219,
                                                                        "end": 2229
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 2219,
                                                                "end": 2229
                                                            },
                                                            "flags": 32,
                                                            "start": 2217,
                                                            "end": 2230
                                                        },
                                                        "type": null,
                                                        "initializer": {
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
                                                                            "start": 2234,
                                                                            "end": 2235
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392130,
                                                                            "text": 42,
                                                                            "rawText": "42",
                                                                            "flags": 96,
                                                                            "start": 2236,
                                                                            "end": 2239
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2234,
                                                                        "end": 2239
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 2234,
                                                                "end": 2239
                                                            },
                                                            "flags": 48,
                                                            "start": 2232,
                                                            "end": 2240
                                                        },
                                                        "flags": 16,
                                                        "start": 2217,
                                                        "end": 2240
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 2217,
                                                "end": 2240
                                            },
                                            "flags": 16,
                                            "start": 2214,
                                            "end": 2241
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2214,
                                    "end": 2241
                                },
                                "flags": 32,
                                "start": 2212,
                                "end": 2242
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2189,
                            "end": 2242
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2242,
                                "end": 2248
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2248,
                                "end": 2257
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2257,
                                "end": 2259
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2259,
                                "end": 2263
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2263,
                                "end": 2265
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
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
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 2268,
                                                                    "end": 2273
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 2268,
                                                                "end": 2273
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2268,
                                                        "end": 2273
                                                    },
                                                    "flags": 32,
                                                    "start": 2267,
                                                    "end": 2274
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 2274,
                                                    "end": 2276
                                                },
                                                "right": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 42,
                                                                "rawText": "42",
                                                                "flags": 96,
                                                                "start": 2278,
                                                                "end": 2280
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2278,
                                                        "end": 2280
                                                    },
                                                    "flags": 32,
                                                    "start": 2276,
                                                    "end": 2281
                                                },
                                                "flags": 32,
                                                "start": 2267,
                                                "end": 2281
                                            },
                                            "flags": 16,
                                            "start": 2267,
                                            "end": 2282
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2267,
                                    "end": 2282
                                },
                                "flags": 32,
                                "start": 2265,
                                "end": 2283
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2242,
                            "end": 2283
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2283,
                                "end": 2289
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2289,
                                "end": 2298
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2298,
                                "end": 2300
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2300,
                                "end": 2304
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2304,
                                "end": 2306
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
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
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 2309,
                                                                    "end": 2314
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 2314,
                                                                    "end": 2314
                                                                },
                                                                "flags": 32,
                                                                "start": 2309,
                                                                "end": 2314
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2309,
                                                        "end": 2314
                                                    },
                                                    "flags": 32,
                                                    "start": 2308,
                                                    "end": 2315
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 2315,
                                                    "end": 2317
                                                },
                                                "right": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 42,
                                                                "rawText": "42",
                                                                "flags": 96,
                                                                "start": 2319,
                                                                "end": 2321
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2319,
                                                        "end": 2321
                                                    },
                                                    "flags": 32,
                                                    "start": 2317,
                                                    "end": 2322
                                                },
                                                "flags": 32,
                                                "start": 2308,
                                                "end": 2322
                                            },
                                            "flags": 16,
                                            "start": 2308,
                                            "end": 2323
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2308,
                                    "end": 2323
                                },
                                "flags": 32,
                                "start": 2306,
                                "end": 2324
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2283,
                            "end": 2324
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2324,
                                "end": 2330
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2330,
                                "end": 2339
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2339,
                                "end": 2341
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2341,
                                "end": 2345
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2345,
                                "end": 2347
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
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
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 2351,
                                                                        "end": 2352
                                                                    },
                                                                    "right": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 64,
                                                                            "start": 2353,
                                                                            "end": 2359
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 32,
                                                                        "start": 2353,
                                                                        "end": 2359
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2351,
                                                                    "end": 2359
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 2351,
                                                            "end": 2359
                                                        },
                                                        "flags": 48,
                                                        "start": 2350,
                                                        "end": 2360
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 2360,
                                                        "end": 2362
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
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 2364,
                                                                        "end": 2365
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 42,
                                                                        "rawText": "42",
                                                                        "flags": 96,
                                                                        "start": 2366,
                                                                        "end": 2369
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2364,
                                                                    "end": 2369
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 2364,
                                                            "end": 2369
                                                        },
                                                        "flags": 48,
                                                        "start": 2362,
                                                        "end": 2370
                                                    },
                                                    "flags": 32,
                                                    "start": 2350,
                                                    "end": 2370
                                                },
                                                "flags": 32,
                                                "start": 2349,
                                                "end": 2371
                                            },
                                            "flags": 16,
                                            "start": 2349,
                                            "end": 2372
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2349,
                                    "end": 2372
                                },
                                "flags": 32,
                                "start": 2347,
                                "end": 2373
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2324,
                            "end": 2373
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2373,
                                "end": 2379
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2379,
                                "end": 2388
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2388,
                                "end": 2390
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2390,
                                "end": 2394
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2394,
                                "end": 2396
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
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
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 2400,
                                                                        "end": 2401
                                                                    },
                                                                    "right": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "start": 2402,
                                                                            "end": 2408
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "rawText": "",
                                                                            "flags": 64,
                                                                            "start": 2408,
                                                                            "end": 2408
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2402,
                                                                        "end": 2408
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2400,
                                                                    "end": 2408
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 2400,
                                                            "end": 2408
                                                        },
                                                        "flags": 48,
                                                        "start": 2399,
                                                        "end": 2409
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 2409,
                                                        "end": 2411
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
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 2413,
                                                                        "end": 2414
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 42,
                                                                        "rawText": "42",
                                                                        "flags": 96,
                                                                        "start": 2415,
                                                                        "end": 2418
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 2413,
                                                                    "end": 2418
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 2413,
                                                            "end": 2418
                                                        },
                                                        "flags": 48,
                                                        "start": 2411,
                                                        "end": 2419
                                                    },
                                                    "flags": 32,
                                                    "start": 2399,
                                                    "end": 2419
                                                },
                                                "flags": 32,
                                                "start": 2398,
                                                "end": 2420
                                            },
                                            "flags": 16,
                                            "start": 2398,
                                            "end": 2421
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2398,
                                    "end": 2421
                                },
                                "flags": 32,
                                "start": 2396,
                                "end": 2422
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2373,
                            "end": 2422
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 2422,
                                "end": 2485
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 2485,
                                "end": 2494
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 2494,
                                "end": 2496
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 2496,
                                "end": 2500
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2500,
                                "end": 2502
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 80,
                                                "start": 2504,
                                                "end": 2507
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 324,
                                                                "elements": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "yield",
                                                                        "rawText": "yield",
                                                                        "flags": 96,
                                                                        "start": 2509,
                                                                        "end": 2514
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 2509,
                                                                "end": 2514
                                                            },
                                                            "flags": 32,
                                                            "start": 2507,
                                                            "end": 2514
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 2507,
                                                        "end": 2514
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 2507,
                                                "end": 2514
                                            },
                                            "flags": 16,
                                            "start": 2504,
                                            "end": 2514
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 24,
                                                "rawText": "24",
                                                "flags": 96,
                                                "start": 2514,
                                                "end": 2517
                                            },
                                            "flags": 16,
                                            "start": 2514,
                                            "end": 2517
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 2504,
                                    "end": 2517
                                },
                                "flags": 32,
                                "start": 2502,
                                "end": 2517
                            },
                            "returnType": null,
                            "flags": 400,
                            "start": 2422,
                            "end": 2517
                        }
                    ],
                    "flags": 32,
                    "start": 1952,
                    "end": 2517
                },
                "flags": 32,
                "start": 1950,
                "end": 2517
            },
            "returnType": null,
            "flags": 400,
            "start": 1927,
            "end": 2517
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 2522,
                            "end": 2524
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2522,
                    "end": 2524
                },
                "flags": 32,
                "start": 2520,
                "end": 2525
            },
            "flags": 16,
            "start": 2520,
            "end": 2526
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2527,
                "end": 2533
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2533,
                "end": 2542
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2542,
                "end": 2544
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2544,
                "end": 2548
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2548,
                "end": 2550
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 2552,
                                "end": 2555
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 2557,
                                                        "end": 2562
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 2557,
                                                "end": 2562
                                            },
                                            "flags": 32,
                                            "start": 2555,
                                            "end": 2562
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 2555,
                                        "end": 2562
                                    }
                                ],
                                "flags": 16,
                                "start": 2555,
                                "end": 2562
                            },
                            "flags": 16,
                            "start": 2552,
                            "end": 2562
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 24,
                                "rawText": "24",
                                "flags": 96,
                                "start": 2562,
                                "end": 2565
                            },
                            "flags": 16,
                            "start": 2562,
                            "end": 2565
                        }
                    ],
                    "flags": 32,
                    "start": 2552,
                    "end": 2565
                },
                "flags": 32,
                "start": 2550,
                "end": 2565
            },
            "returnType": null,
            "flags": 400,
            "start": 2527,
            "end": 2565
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 2570,
                            "end": 2572
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2570,
                    "end": 2572
                },
                "flags": 32,
                "start": 2568,
                "end": 2573
            },
            "flags": 16,
            "start": 2568,
            "end": 2574
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2575,
                "end": 2581
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2581,
                "end": 2590
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2590,
                "end": 2592
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2592,
                "end": 2596
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2596,
                "end": 2598
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 2600,
                                "end": 2603
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 2605,
                                                            "end": 2608
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "start": 2609,
                                                            "end": 2615
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 2605,
                                                        "end": 2615
                                                    },
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 201392130,
                                                            "text": 24,
                                                            "rawText": "24",
                                                            "flags": 96,
                                                            "start": 2615,
                                                            "end": 2618
                                                        },
                                                        "value": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 2618,
                                                            "end": 2618
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 2615,
                                                        "end": 2618
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 2605,
                                                "end": 2618
                                            },
                                            "flags": 32,
                                            "start": 2603,
                                            "end": 2619
                                        },
                                        "type": null,
                                        "initializer": {
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
                                                            "start": 2623,
                                                            "end": 2624
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 42,
                                                            "rawText": "42",
                                                            "flags": 96,
                                                            "start": 2625,
                                                            "end": 2628
                                                        },
                                                        "flags": 32,
                                                        "start": 2623,
                                                        "end": 2628
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 2623,
                                                "end": 2628
                                            },
                                            "flags": 48,
                                            "start": 2621,
                                            "end": 2629
                                        },
                                        "flags": 16,
                                        "start": 2603,
                                        "end": 2629
                                    }
                                ],
                                "flags": 16,
                                "start": 2603,
                                "end": 2629
                            },
                            "flags": 16,
                            "start": 2600,
                            "end": 2630
                        }
                    ],
                    "flags": 32,
                    "start": 2600,
                    "end": 2630
                },
                "flags": 32,
                "start": 2598,
                "end": 2631
            },
            "returnType": null,
            "flags": 400,
            "start": 2575,
            "end": 2631
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2631,
                "end": 2637
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2637,
                "end": 2646
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2646,
                "end": 2648
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2648,
                "end": 2652
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2652,
                "end": 2654
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 2656,
                                "end": 2659
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 2661,
                                                            "end": 2664
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "start": 2665,
                                                            "end": 2671
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 2661,
                                                        "end": 2671
                                                    },
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 201392130,
                                                            "text": 24,
                                                            "rawText": "24",
                                                            "flags": 96,
                                                            "start": 2671,
                                                            "end": 2674
                                                        },
                                                        "value": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 2674,
                                                            "end": 2674
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 2671,
                                                        "end": 2674
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 2661,
                                                "end": 2674
                                            },
                                            "flags": 32,
                                            "start": 2659,
                                            "end": 2675
                                        },
                                        "type": null,
                                        "initializer": {
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
                                                            "start": 2679,
                                                            "end": 2680
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 42,
                                                            "rawText": "42",
                                                            "flags": 96,
                                                            "start": 2681,
                                                            "end": 2684
                                                        },
                                                        "flags": 32,
                                                        "start": 2679,
                                                        "end": 2684
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 2679,
                                                "end": 2684
                                            },
                                            "flags": 48,
                                            "start": 2677,
                                            "end": 2685
                                        },
                                        "flags": 16,
                                        "start": 2659,
                                        "end": 2685
                                    }
                                ],
                                "flags": 16,
                                "start": 2659,
                                "end": 2685
                            },
                            "flags": 16,
                            "start": 2656,
                            "end": 2686
                        }
                    ],
                    "flags": 32,
                    "start": 2656,
                    "end": 2686
                },
                "flags": 32,
                "start": 2654,
                "end": 2687
            },
            "returnType": null,
            "flags": 400,
            "start": 2631,
            "end": 2687
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2687,
                "end": 2693
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2693,
                "end": 2702
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2702,
                "end": 2704
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2704,
                "end": 2708
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2708,
                "end": 2710
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
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
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 2713,
                                                    "end": 2718
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 24,
                                                    "rawText": "24",
                                                    "flags": 96,
                                                    "start": 2718,
                                                    "end": 2721
                                                },
                                                "flags": 32,
                                                "start": 2713,
                                                "end": 2721
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2713,
                                        "end": 2721
                                    },
                                    "flags": 32,
                                    "start": 2712,
                                    "end": 2722
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 2722,
                                    "end": 2724
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 2726,
                                                "end": 2728
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2726,
                                        "end": 2728
                                    },
                                    "flags": 32,
                                    "start": 2724,
                                    "end": 2729
                                },
                                "flags": 32,
                                "start": 2712,
                                "end": 2729
                            },
                            "flags": 16,
                            "start": 2712,
                            "end": 2730
                        }
                    ],
                    "flags": 32,
                    "start": 2712,
                    "end": 2730
                },
                "flags": 32,
                "start": 2710,
                "end": 2731
            },
            "returnType": null,
            "flags": 400,
            "start": 2687,
            "end": 2731
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2731,
                "end": 2737
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2737,
                "end": 2746
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2746,
                "end": 2748
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2748,
                "end": 2752
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2752,
                "end": 2754
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
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
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 2757,
                                                    "end": 2762
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 24,
                                                    "rawText": "24",
                                                    "flags": 96,
                                                    "start": 2762,
                                                    "end": 2765
                                                },
                                                "flags": 32,
                                                "start": 2757,
                                                "end": 2765
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2757,
                                        "end": 2765
                                    },
                                    "flags": 32,
                                    "start": 2756,
                                    "end": 2766
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 2766,
                                    "end": 2768
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 2770,
                                                "end": 2772
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2770,
                                        "end": 2772
                                    },
                                    "flags": 32,
                                    "start": 2768,
                                    "end": 2773
                                },
                                "flags": 32,
                                "start": 2756,
                                "end": 2773
                            },
                            "flags": 16,
                            "start": 2756,
                            "end": 2774
                        }
                    ],
                    "flags": 32,
                    "start": 2756,
                    "end": 2774
                },
                "flags": 32,
                "start": 2754,
                "end": 2775
            },
            "returnType": null,
            "flags": 400,
            "start": 2731,
            "end": 2775
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2775,
                "end": 2781
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2781,
                "end": 2790
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2790,
                "end": 2792
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2792,
                "end": 2796
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2796,
                "end": 2798
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 2802,
                                                        "end": 2803
                                                    },
                                                    "right": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 2804,
                                                            "end": 2810
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 24,
                                                            "rawText": "24",
                                                            "flags": 96,
                                                            "start": 2810,
                                                            "end": 2813
                                                        },
                                                        "flags": 32,
                                                        "start": 2804,
                                                        "end": 2813
                                                    },
                                                    "flags": 32,
                                                    "start": 2802,
                                                    "end": 2813
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 2802,
                                            "end": 2813
                                        },
                                        "flags": 48,
                                        "start": 2801,
                                        "end": 2814
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 2814,
                                        "end": 2816
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 2818,
                                                        "end": 2819
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 2820,
                                                        "end": 2823
                                                    },
                                                    "flags": 32,
                                                    "start": 2818,
                                                    "end": 2823
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 2818,
                                            "end": 2823
                                        },
                                        "flags": 48,
                                        "start": 2816,
                                        "end": 2824
                                    },
                                    "flags": 32,
                                    "start": 2801,
                                    "end": 2824
                                },
                                "flags": 32,
                                "start": 2800,
                                "end": 2825
                            },
                            "flags": 16,
                            "start": 2800,
                            "end": 2826
                        }
                    ],
                    "flags": 32,
                    "start": 2800,
                    "end": 2826
                },
                "flags": 32,
                "start": 2798,
                "end": 2827
            },
            "returnType": null,
            "flags": 400,
            "start": 2775,
            "end": 2827
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2827,
                "end": 2833
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2833,
                "end": 2842
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2842,
                "end": 2844
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2844,
                "end": 2848
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2848,
                "end": 2850
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 2854,
                                                        "end": 2855
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 2856,
                                                            "end": 2862
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 24,
                                                            "rawText": "24",
                                                            "flags": 96,
                                                            "start": 2862,
                                                            "end": 2865
                                                        },
                                                        "flags": 32,
                                                        "start": 2856,
                                                        "end": 2865
                                                    },
                                                    "flags": 32,
                                                    "start": 2854,
                                                    "end": 2865
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 2854,
                                            "end": 2865
                                        },
                                        "flags": 48,
                                        "start": 2853,
                                        "end": 2866
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 2866,
                                        "end": 2868
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
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 2870,
                                                        "end": 2871
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 2872,
                                                        "end": 2875
                                                    },
                                                    "flags": 32,
                                                    "start": 2870,
                                                    "end": 2875
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 2870,
                                            "end": 2875
                                        },
                                        "flags": 48,
                                        "start": 2868,
                                        "end": 2876
                                    },
                                    "flags": 32,
                                    "start": 2853,
                                    "end": 2876
                                },
                                "flags": 32,
                                "start": 2852,
                                "end": 2877
                            },
                            "flags": 16,
                            "start": 2852,
                            "end": 2878
                        }
                    ],
                    "flags": 32,
                    "start": 2852,
                    "end": 2878
                },
                "flags": 32,
                "start": 2850,
                "end": 2879
            },
            "returnType": null,
            "flags": 400,
            "start": 2827,
            "end": 2879
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2879,
                "end": 2885
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2885,
                "end": 2894
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2894,
                "end": 2896
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2896,
                "end": 2900
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2900,
                "end": 2902
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 2904,
                                "end": 2907
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 2909,
                                    "end": 2914
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 2914,
                                    "end": 2918
                                },
                                "flags": 32,
                                "start": 2909,
                                "end": 2918
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 2918,
                                "end": 2921
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 2923,
                                    "end": 2923
                                },
                                "flags": 48,
                                "start": 2921,
                                "end": 2924
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 2925,
                                "end": 2926
                            },
                            "flags": 80,
                            "start": 2904,
                            "end": 2926
                        }
                    ],
                    "flags": 32,
                    "start": 2904,
                    "end": 2926
                },
                "flags": 32,
                "start": 2902,
                "end": 2927
            },
            "returnType": null,
            "flags": 400,
            "start": 2879,
            "end": 2927
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2927,
                "end": 2933
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2933,
                "end": 2942
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2942,
                "end": 2944
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2944,
                "end": 2948
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2948,
                "end": 2950
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 2952,
                                "end": 2955
                            },
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 2957,
                                    "end": 2962
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 2962,
                                    "end": 2966
                                },
                                "flags": 32,
                                "start": 2957,
                                "end": 2966
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 2966,
                                "end": 2969
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 2971,
                                    "end": 2971
                                },
                                "flags": 48,
                                "start": 2969,
                                "end": 2972
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 2973,
                                "end": 2974
                            },
                            "flags": 80,
                            "start": 2952,
                            "end": 2974
                        }
                    ],
                    "flags": 32,
                    "start": 2952,
                    "end": 2974
                },
                "flags": 32,
                "start": 2950,
                "end": 2975
            },
            "returnType": null,
            "flags": 400,
            "start": 2927,
            "end": 2975
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 2975,
                "end": 2981
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 2981,
                "end": 2990
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 2990,
                "end": 2992
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 2992,
                "end": 2996
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 2996,
                "end": 2998
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3000,
                                "end": 3003
                            },
                            "awaitKeyword": null,
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 3005,
                                    "end": 3010
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3010,
                                    "end": 3014
                                },
                                "flags": 32,
                                "start": 3005,
                                "end": 3014
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 3014,
                                "end": 3017
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3019,
                                    "end": 3019
                                },
                                "flags": 48,
                                "start": 3017,
                                "end": 3020
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 3021,
                                "end": 3022
                            },
                            "flags": 80,
                            "start": 3000,
                            "end": 3022
                        }
                    ],
                    "flags": 32,
                    "start": 3000,
                    "end": 3022
                },
                "flags": 32,
                "start": 2998,
                "end": 3023
            },
            "returnType": null,
            "flags": 400,
            "start": 2975,
            "end": 3023
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3023,
                "end": 3029
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3029,
                "end": 3038
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3038,
                "end": 3040
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3040,
                "end": 3044
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3044,
                "end": 3046
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3048,
                                "end": 3051
                            },
                            "awaitKeyword": null,
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 3053,
                                    "end": 3058
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3058,
                                    "end": 3062
                                },
                                "flags": 32,
                                "start": 3053,
                                "end": 3062
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 3062,
                                "end": 3065
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3067,
                                    "end": 3067
                                },
                                "flags": 48,
                                "start": 3065,
                                "end": 3068
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 3069,
                                "end": 3070
                            },
                            "flags": 80,
                            "start": 3048,
                            "end": 3070
                        }
                    ],
                    "flags": 32,
                    "start": 3048,
                    "end": 3070
                },
                "flags": 32,
                "start": 3046,
                "end": 3071
            },
            "returnType": null,
            "flags": 400,
            "start": 3023,
            "end": 3071
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3071,
                "end": 3077
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3077,
                "end": 3086
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3086,
                "end": 3088
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3088,
                "end": 3092
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3092,
                "end": 3094
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3096,
                                "end": 3099
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 3101,
                                    "end": 3106
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3106,
                                    "end": 3110
                                },
                                "flags": 32,
                                "start": 3101,
                                "end": 3110
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 3110,
                                "end": 3113
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3115,
                                        "end": 3115
                                    },
                                    "flags": 48,
                                    "start": 3113,
                                    "end": 3116
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 3116,
                                    "end": 3119
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3121,
                                        "end": 3121
                                    },
                                    "flags": 48,
                                    "start": 3119,
                                    "end": 3122
                                },
                                "flags": 32,
                                "start": 3113,
                                "end": 3122
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 3123,
                                "end": 3124
                            },
                            "flags": 80,
                            "start": 3096,
                            "end": 3124
                        }
                    ],
                    "flags": 32,
                    "start": 3096,
                    "end": 3124
                },
                "flags": 32,
                "start": 3094,
                "end": 3125
            },
            "returnType": null,
            "flags": 400,
            "start": 3071,
            "end": 3125
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3125,
                "end": 3131
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3131,
                "end": 3140
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3140,
                "end": 3142
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3142,
                "end": 3146
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3146,
                "end": 3148
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3150,
                                "end": 3153
                            },
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 3155,
                                    "end": 3160
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3160,
                                    "end": 3164
                                },
                                "flags": 32,
                                "start": 3155,
                                "end": 3164
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 3164,
                                "end": 3167
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3169,
                                        "end": 3169
                                    },
                                    "flags": 48,
                                    "start": 3167,
                                    "end": 3170
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 3170,
                                    "end": 3173
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3175,
                                        "end": 3175
                                    },
                                    "flags": 48,
                                    "start": 3173,
                                    "end": 3176
                                },
                                "flags": 32,
                                "start": 3167,
                                "end": 3176
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 3177,
                                "end": 3178
                            },
                            "flags": 80,
                            "start": 3150,
                            "end": 3178
                        }
                    ],
                    "flags": 32,
                    "start": 3150,
                    "end": 3178
                },
                "flags": 32,
                "start": 3148,
                "end": 3179
            },
            "returnType": null,
            "flags": 400,
            "start": 3125,
            "end": 3179
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3179,
                "end": 3185
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3185,
                "end": 3194
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3194,
                "end": 3196
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3196,
                "end": 3200
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3200,
                "end": 3202
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3204,
                                "end": 3207
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 3209,
                                    "end": 3214
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3214,
                                    "end": 3218
                                },
                                "flags": 32,
                                "start": 3209,
                                "end": 3218
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 3218,
                                "end": 3221
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3223,
                                    "end": 3223
                                },
                                "flags": 48,
                                "start": 3221,
                                "end": 3224
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "of",
                                    "rawText": "of",
                                    "flags": 96,
                                    "start": 3224,
                                    "end": 3227
                                },
                                "flags": 16,
                                "start": 3224,
                                "end": 3227
                            },
                            "flags": 80,
                            "start": 3204,
                            "end": 3227
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3229,
                                "end": 3229
                            },
                            "flags": 16,
                            "start": 3227,
                            "end": 3230
                        }
                    ],
                    "flags": 32,
                    "start": 3204,
                    "end": 3230
                },
                "flags": 32,
                "start": 3202,
                "end": 3230
            },
            "returnType": null,
            "flags": 400,
            "start": 3179,
            "end": 3230
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3231,
            "end": 3232
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3233,
                "end": 3239
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3239,
                "end": 3248
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3248,
                "end": 3250
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3250,
                "end": 3254
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3254,
                "end": 3256
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 3258,
                                "end": 3261
                            },
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 3263,
                                    "end": 3268
                                },
                                "expression": {
                                    "kind": 201392131,
                                    "text": "x",
                                    "rawText": "'x'",
                                    "flags": 4194400,
                                    "start": 3268,
                                    "end": 3272
                                },
                                "flags": 32,
                                "start": 3263,
                                "end": 3272
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 3272,
                                "end": 3275
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 3277,
                                    "end": 3277
                                },
                                "flags": 48,
                                "start": 3275,
                                "end": 3278
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "of",
                                    "rawText": "of",
                                    "flags": 96,
                                    "start": 3278,
                                    "end": 3281
                                },
                                "flags": 16,
                                "start": 3278,
                                "end": 3281
                            },
                            "flags": 80,
                            "start": 3258,
                            "end": 3281
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3283,
                                "end": 3283
                            },
                            "flags": 16,
                            "start": 3281,
                            "end": 3284
                        }
                    ],
                    "flags": 32,
                    "start": 3258,
                    "end": 3284
                },
                "flags": 32,
                "start": 3256,
                "end": 3284
            },
            "returnType": null,
            "flags": 400,
            "start": 3233,
            "end": 3284
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 3285,
            "end": 3286
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3287,
                "end": 3293
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3293,
                "end": 3302
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3302,
                "end": 3304
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3304,
                "end": 3308
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3308,
                "end": 3310
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 80,
                                "start": 3312,
                                "end": 3317
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 3317,
                                "end": 3319
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 3319,
                                        "end": 3327
                                    },
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 3327,
                                            "end": 3333
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 3335,
                                                "end": 3335
                                            },
                                            "flags": 48,
                                            "start": 3333,
                                            "end": 3337
                                        },
                                        "flags": 32,
                                        "start": 3327,
                                        "end": 3337
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 3327,
                                    "end": 3337
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 3319,
                                    "end": 3319
                                },
                                "flags": 3319,
                                "start": 32,
                                "end": 3319
                            },
                            "flags": 16,
                            "start": 3312,
                            "end": 3337
                        }
                    ],
                    "flags": 32,
                    "start": 3312,
                    "end": 3337
                },
                "flags": 32,
                "start": 3310,
                "end": 3338
            },
            "returnType": null,
            "flags": 400,
            "start": 3287,
            "end": 3338
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 3338,
                "end": 3344
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 3344,
                "end": 3353
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 3353,
                "end": 3355
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 3355,
                "end": 3359
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 3359,
                "end": 3361
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 80,
                                "start": 3363,
                                "end": 3368
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 3368,
                                "end": 3370
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 3370,
                                        "end": 3378
                                    },
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 3378,
                                            "end": 3384
                                        },
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 3386,
                                                "end": 3386
                                            },
                                            "flags": 48,
                                            "start": 3384,
                                            "end": 3388
                                        },
                                        "flags": 32,
                                        "start": 3378,
                                        "end": 3388
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 3378,
                                    "end": 3388
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 3370,
                                    "end": 3370
                                },
                                "flags": 3370,
                                "start": 32,
                                "end": 3370
                            },
                            "flags": 16,
                            "start": 3363,
                            "end": 3388
                        }
                    ],
                    "flags": 32,
                    "start": 3363,
                    "end": 3388
                },
                "flags": 32,
                "start": 3361,
                "end": 3389
            },
            "returnType": null,
            "flags": 400,
            "start": 3338,
            "end": 3389
        }
    ],
    "isModule": false,
    "source": "  \"var yield;\",\nasync function * gen() {var await;}\nasync function * gen() {var foo, yield;}\nasync function * gen() {var foo, await;}\nasync function * gen() {try { } catch (yield) { }}\nasync function * gen() {try { } catch (await) { }}\nasync function * gen() {function yield() { }}\nasync function * gen() {function await() { }}\n    // The name of the NFE is bound in the generator, which does not permit\n    // yield or await to be identifiers.\nasync function * gen() {(async function * yield() { })}\nasync function * gen() {(async function * await() { })}\n    // Yield and Await aren't valid as a formal parameter for generators.\nasync function * gen() {async function * foo(yield) { }}\nasync function * gen() {(async function * foo(yield) { })}\nasync function * gen() {async function * foo(await) { }}\nasync function * gen() {(async function * foo(await) { })}\nasync function * gen() {yield = 1;}\nasync function * gen() {await = 1;}\nasync function * gen() {var foo = yield = 1;}\nasync function * gen() {var foo = await = 1;}\nasync function * gen() {++yield;}\nasync function * gen() {++await;}\nasync function * gen() {yield++;}\nasync function * gen() {await++;}\nasync function * gen() {yield *}\nasync function * gen() {(yield *)}\n    // Yield binds very loosely, so this parses as \"yield (3 + yield 4)} which\n    // is invalid.\nasync function * gen() {yield 3 + yield 4;}\nasync function * gen() {yield: 34}\nasync function * gen() {yield ? 1 : 2}\n    // Parses as yield (/ yield): invalid.\nasync function * gen() {yield / yield}\nasync function * gen() {+ yield}\nasync function * gen() {+ yield 3}\n    // Invalid (no newline allowed between yield and *).\nasync function * gen() {yield\\n*3}\n    // Invalid (we see a newline, so we parse {yield:42} as a statement, not an\n    // object literal, and yield is not a valid label).\nasync function * gen() {yield\\n{yield: 42}}\nasync function * gen() {yield /* comment */\\n {yield: 42}}\nasync function * gen() {yield //comment\\n {yield: 42}}\n    // Destructuring binding and assignment are both disallowed\nasync function * gen() {var [yield] = [42];}\nasync function * gen() {var [await] = [42];}\nasync function * gen() {var {foo: yield} = {a: 42};}\nasync function * gen() {var {foo: await} = {a: 42};}\nasync function * gen() {[yield] = [42];}\nasync function * gen() {[await] = [42];}\nasync function * gen() {({a: yield} = {a: 42});}\nasync function * gen() {({a: await} = {a: 42});}\n    // Also disallow full yield/await expressions on LHS\nasync function * gen() {var [yield 24] = [42];}\nasync function * gen() {var [await 24] = [42];}\nasync function * gen() {var {foo: yield 24} = {a: 42};}\nasync function * gen() {var {foo: await 24} = {a: 42};}\nasync function * gen() {[yield 24] = [42];}\nasync function * gen() {[await 24] = [42];}\nasync function * gen() {({a: yield 24} = {a: 42});}\nasync function * gen() {({a: await 24} = {a: 42});}\nasync function * gen() {for (yield 'x' in {});}\nasync function * gen() {for (await 'x' in {});}\nasync function * gen() {for (yield 'x' of {});}\nasync function * gen() {for (await 'x' of {});}\nasync function * gen() {for (yield 'x' in {} in {});}\nasync function * gen() {for (await 'x' in {} in {});}\nasync function * gen() {for (yield 'x' in {} of {});}\nasync function * gen() {for (await 'x' in {} of {});}\nasync function * gen() {class C extends yield { }}\nasync function * gen() {class C extends await { }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3389
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 43, end: 49
✖ 'yield' cannot be used as an identifier here - start: 84, end: 90
✖ 'await' cannot be used as an identifier here - start: 125, end: 131
✖ 'yield' cannot be used as an identifier here - start: 173, end: 178
✖ 'await' cannot be used as an identifier here - start: 224, end: 229
✖ Cannot use 'yield' as a name on a async generator declaration - start: 268, end: 274
✖ Cannot use 'await' as a name on a async function declaration - start: 314, end: 320
✖ Cannot use 'yield' as a name on a generator function expression - start: 486, end: 492
✖ Cannot use 'await' as a name on a async generator expression - start: 542, end: 548
✖ `yield` expression cannot be used in function parameters - start: 676, end: 681
✖ `yield` expression cannot be used in function parameters - start: 734, end: 739
✖ `await` expression cannot be used in function parameters - start: 792, end: 797
✖ `await` expression cannot be used in function parameters - start: 850, end: 855
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 892, end: 894
✖ Identifier expected - start: 928, end: 930
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 928, end: 930
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 974, end: 976
✖ Identifier expected - start: 1020, end: 1022
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1020, end: 1022
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1058, end: 1059
✖ Identifier expected - start: 1092, end: 1093
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1092, end: 1093
✖ Identifier expected - start: 1126, end: 1127
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1126, end: 1127
✖ Identifier expected - start: 1160, end: 1161
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1160, end: 1161
✖ Identifier expected - start: 1194, end: 1195
✖ Identifier expected - start: 1228, end: 1229
✖ Expected a `;` - start: 1362, end: 1370
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 1397, end: 1403
✖ Cannot use the 'yield' keyword on the left-hand side of conditional expression in a generator context - start: 1432, end: 1439
✖ Unterminated regular expression - start: 1519, end: 1528
✖ Invalid hexadecimal escape sequence - start: 1678, end: 1683
✖ Invalid hexadecimal escape sequence - start: 1683, end: 1683
✖ Expected a `;` - start: 1683, end: 1684
✖ Declaration or statement expected - start: 1687, end: 1688
✖ Invalid hexadecimal escape sequence - start: 1849, end: 1854
✖ Invalid hexadecimal escape sequence - start: 1854, end: 1854
✖ Expected a `;` - start: 1854, end: 1855
✖ Expected a `;` - start: 1856, end: 1857
✖ Declaration or statement expected - start: 1867, end: 1868
✖ Invalid hexadecimal escape sequence - start: 1898, end: 1912
✖ Expected a `;` - start: 1898, end: 1913
✖ Expected a `;` - start: 1914, end: 1916
✖ Declaration or statement expected - start: 1926, end: 1927
✖ 'yield' cannot be used as an identifier here - start: 2076, end: 2081
✖ 'await' cannot be used as an identifier here - start: 2121, end: 2126
✖ 'yield' cannot be used as an identifier here - start: 2170, end: 2176
✖ 'await' cannot be used as an identifier here - start: 2223, end: 2229
✖ The left-hand side must be a variable or a property access. - start: 2274, end: 2276
✖ Identifier expected - start: 2314, end: 2315
✖ The left-hand side must be a variable or a property access. - start: 2315, end: 2317
✖ The left-hand side must be a variable or a property access. - start: 2350, end: 2362
✖ Identifier expected - start: 2408, end: 2409
✖ The left-hand side must be a variable or a property access. - start: 2399, end: 2411
✖ 'yield' cannot be used as an identifier here - start: 2509, end: 2514
✖ ',' expected - start: 2514, end: 2517
✖ Did you forgot a ']' to match the `[` token? - start: 2515, end: 2517
✖ ',' expected - start: 2514, end: 2517
✖ Expected a `;` - start: 2517, end: 2518
✖ Declaration or statement expected - start: 2518, end: 2520
✖ Declaration or statement expected - start: 2526, end: 2527
✖ 'await' cannot be used as an identifier here - start: 2557, end: 2562
✖ ',' expected - start: 2562, end: 2565
✖ Did you forgot a ']' to match the `[` token? - start: 2563, end: 2565
✖ ',' expected - start: 2562, end: 2565
✖ Expected a `;` - start: 2565, end: 2566
✖ Declaration or statement expected - start: 2566, end: 2568
✖ Declaration or statement expected - start: 2574, end: 2575
✖ 'yield' cannot be used as an identifier here - start: 2609, end: 2615
✖ ',' expected - start: 2615, end: 2618
✖ Object property expected - start: 2618, end: 2619
✖ 'await' cannot be used as an identifier here - start: 2665, end: 2671
✖ ',' expected - start: 2671, end: 2674
✖ Object property expected - start: 2674, end: 2675
✖ The left-hand side must be a variable or a property access. - start: 2722, end: 2724
✖ The left-hand side must be a variable or a property access. - start: 2766, end: 2768
✖ The left-hand side must be a variable or a property access. - start: 2801, end: 2816
✖ The left-hand side must be a variable or a property access. - start: 2853, end: 2868
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 2909, end: 2918
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2921, end: 2923
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 2969, end: 2971
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 3005, end: 3014
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 3017, end: 3019
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 3065, end: 3067
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 3101, end: 3110
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 3113, end: 3115
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 3167, end: 3169
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 3209, end: 3218
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 3221, end: 3223
✖ Expected a ')' to match the '(' token here - start: 3225, end: 3227
✖ Expected a `;` - start: 3227, end: 3229
✖ The parser expected to find a '}' to match the '{' token here - start: 3230, end: 3231
✖ Declaration or statement expected - start: 3232, end: 3233
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 3275, end: 3277
✖ Expected a ')' to match the '(' token here - start: 3279, end: 3281
✖ Expected a `;` - start: 3281, end: 3283
✖ The parser expected to find a '}' to match the '{' token here - start: 3284, end: 3285
✖ Declaration or statement expected - start: 3286, end: 3287
✖ Expected a `;` - start: 3327, end: 3335
✖ Missing an opening brace - '{ - start: 3337, end: 3338
✖ Expression expected - start: 3378, end: 3384
✖ Missing an opening brace - '{ - start: 3388, end: 3389

```

