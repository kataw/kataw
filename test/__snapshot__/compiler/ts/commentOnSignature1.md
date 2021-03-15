# Kataw parser test case

## Input

`````js
/*!=================
    Keep this pinned
   =================
*/

/*! Don't keep this pinned comment */
function foo(n: number): void;
// Don't keep this comment.
function foo(s: string): void;
function foo(a: any): void {
}

class c {
    // dont keep this comment
    constructor(a: string);
    /*! keep this pinned comment */
    constructor(a: number);
    constructor(a: any) {
    }

    // dont keep this comment
    foo(a: string);
    /*! keep this pinned comment */
    foo(a: number);
    foo(a: any) {
    }
}

//@filename:b.ts
///<reference path='a.ts'/>
function foo2(n: number): void;
// Don't keep this comment.
function foo2(s: string): void;
function foo2(a: any): void {
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "/*!=================\n    Keep this pinned\n   =================\n*/\n\n/*! Don't keep this pinned comment */\nfunction foo(n: number): void;\n// Don't keep this comment.\nfunction foo(s: string): void;\nfunction foo(a: any): void {\n}\n\nclass c {\n    // dont keep this comment\n    constructor(a: string);\n    /*! keep this pinned comment */\n    constructor(a: number);\n    constructor(a: any) {\n    }\n\n    // dont keep this comment\n    foo(a: string);\n    /*! keep this pinned comment */\n    foo(a: number);\n    foo(a: any) {\n    }\n}\n\n//@filename:b.ts\n///<reference path='a.ts'/>\nfunction foo2(n: number): void;\n// Don't keep this comment.\nfunction foo2(s: string): void;\nfunction foo2(a: any): void {\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 113,
                "end": 117
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "n",
                            "rawText": "n",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 118,
                            "end": 119
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 120,
                            "end": 127
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 118,
                        "end": 127
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 118,
                "end": 128
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 129,
                "end": 134
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 135
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 172,
                "end": 176
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 177,
                            "end": 178
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 179,
                            "end": 186
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 177,
                        "end": 186
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 177,
                "end": 187
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 188,
                "end": 193
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 135,
            "end": 194
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 203,
                "end": 207
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 208,
                            "end": 209
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 210,
                            "end": 214
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 208,
                        "end": 214
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 208,
                "end": 215
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 216,
                "end": 221
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 223,
                    "end": 223
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 221,
                "end": 225
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 194,
            "end": 225
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "c",
                "rawText": "c",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 232,
                "end": 234
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
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 236,
                                "end": 282
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 283,
                                            "end": 284
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 285,
                                            "end": 292
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 283,
                                        "end": 292
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 283,
                                "end": 293
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 294
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 236,
                        "end": 294
                    },
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
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 346
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 347,
                                            "end": 348
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 349,
                                            "end": 356
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 347,
                                        "end": 356
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 347,
                                "end": 357
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 346,
                            "end": 358
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 294,
                        "end": 358
                    },
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
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 374
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 375,
                                            "end": 376
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 377,
                                            "end": 381
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 375,
                                        "end": 381
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 375,
                                "end": 382
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 384,
                                    "end": 384
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 382,
                                "end": 390
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 374,
                            "end": 390
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 358,
                        "end": 390
                    },
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 390,
                                "end": 429
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 430,
                                            "end": 431
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 432,
                                            "end": 439
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 430,
                                        "end": 439
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 430,
                                "end": 440
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 429,
                            "end": 441
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 390,
                        "end": 441
                    },
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 485
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 486,
                                            "end": 487
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 488,
                                            "end": 495
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 486,
                                        "end": 495
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 486,
                                "end": 496
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 485,
                            "end": 497
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 441,
                        "end": 497
                    },
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 497,
                                "end": 505
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 506,
                                            "end": 507
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 508,
                                            "end": 512
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 506,
                                        "end": 512
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 506,
                                "end": 513
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 515,
                                    "end": 515
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 513,
                                "end": 521
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 505,
                            "end": 521
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 497,
                        "end": 521
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 236,
                "end": 523
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 225,
            "end": 523
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 578,
                "end": 583
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "n",
                            "rawText": "n",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 584,
                            "end": 585
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 586,
                            "end": 593
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 584,
                        "end": 593
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 584,
                "end": 594
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 595,
                "end": 600
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 523,
            "end": 601
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 638,
                "end": 643
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 644,
                            "end": 645
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 646,
                            "end": 653
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 644,
                        "end": 653
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 644,
                "end": 654
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 655,
                "end": 660
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 601,
            "end": 661
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 670,
                "end": 675
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 676,
                            "end": 677
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 678,
                            "end": 682
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 676,
                        "end": 682
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 676,
                "end": 683
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 684,
                "end": 689
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 691,
                    "end": 691
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 689,
                "end": 693
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 661,
            "end": 693
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
    "end": 693
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

