# Kataw parser test case

## Input

`````js
(foo/*1*/++)?.();
async/*2*/ () => {
  (await foo)?.();
} /*3*/
(+foo)/*4*/?./*5*/();
+(+foo);/*6*/
class x extends (/*7*/+Bar/*8*/)/*9*/ {}
class y extends (Bar /*10*/?? Baz) {/*11*/}
const foo = /*12*/class extends (Bar ?? Baz) {}
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 127,
                        "operandToken": {
                            "kind": 196635,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 11
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 11
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 12
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 23
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
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
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 52
                                    },
                                    "member": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 49
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 40,
                                            "end": 49
                                        },
                                        "flags": 36,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 50
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 204,
                                            "chain": null,
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 53
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 52,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 54
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 36,
                                "end": 55
                            }
                        ],
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 55
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 57
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 17,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 77
                },
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 66
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 69
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 69
                    },
                    "flags": 57,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 70
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 83
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 77,
                        "end": 84
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 84
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 57,
                "end": 84
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 57,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 87
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 89
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 92
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 92
                    },
                    "flags": 87,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 93
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 85,
                "end": 93
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 85,
            "end": 94
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 94,
                "end": 105
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 105,
                "end": 107
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 107,
                        "end": 115
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 123
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 126
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 126
                        },
                        "flags": 115,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 132
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 132
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 139
                },
                "flags": 107,
                "transformFlags": 0,
                "start": 32,
                "end": 140
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 94,
            "end": 140
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 140,
                "end": 146
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 146,
                "end": 148
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 148,
                        "end": 156
                    },
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 161
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 170
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "Baz",
                                "rawText": "Baz",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 174
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 156,
                            "end": 174
                        },
                        "flags": 156,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 175
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 175
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 177,
                    "end": 177
                },
                "flags": 148,
                "transformFlags": 0,
                "start": 32,
                "end": 184
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 140,
            "end": 184
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 184,
                "end": 190
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 194
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 196,
                                "end": 208
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 208,
                                        "end": 216
                                    },
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "Bar",
                                                "rawText": "Bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 218,
                                                "end": 221
                                            },
                                            "operatorToken": {
                                                "kind": 33047,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 221,
                                                "end": 224
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "Baz",
                                                "rawText": "Baz",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 224,
                                                "end": 228
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 216,
                                            "end": 228
                                        },
                                        "flags": 216,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 229
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 216,
                                    "end": 229
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 231
                                },
                                "flags": 208,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 232
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 196,
                            "end": 232
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 190,
                        "end": 232
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 190,
                "end": 232
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 184,
            "end": 232
        }
    ],
    "isModule": false,
    "source": "(foo/*1*/++)?.();\nasync/*2*/ () => {\n  (await foo)?.();\n} /*3*/\n(+foo)/*4*/?./*5*/();\n+(+foo);/*6*/\nclass x extends (/*7*/+Bar/*8*/)/*9*/ {}\nclass y extends (Bar /*10*/?? Baz) {/*11*/}\nconst foo = /*12*/class extends (Bar ?? Baz) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 232
}
```

### Printed

```javascript
(foo /*1*/++)?.();
async /*2*/ () => {
  (await foo)?.();
}; /*3*/

(+foo) /*4*/?./*5*/ ();

+(+foo); /*6*/

class x extends (+Bar /*8*/)  /*9*/{}

class y extends (Bar /*10*/ ?? Baz) {/*11*/ }

const foo =/*12*/  class extends (Bar ?? Baz) {};

```

### Diagnostics

```javascript
✔ No errors
```

