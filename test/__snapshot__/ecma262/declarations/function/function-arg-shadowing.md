# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
class A { foo() { } }
class B { bar() { } }
function foo(x: A) {
   var x: B = new B();
     x.bar();
}

class C {
	constructor(number) {
		var p: string;

		var n: number = p;
	}
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
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
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 19
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 27,
                "end": 29
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 37
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
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 41
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 41
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 41
                },
                "flags": 29,
                "transformFlags": 0,
                "start": 32,
                "end": 43
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 21,
            "end": 43
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 43,
                "end": 52
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 52,
                "end": 56
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 58
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 57,
                        "end": 58
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 57,
                "end": 58
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 61
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 61,
                "end": 61
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 61
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 61
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 59,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 61
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 71
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 71,
                                        "end": 73
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 71,
                                    "end": 73
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 73
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 73
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 64,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 62,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 76
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 78
                },
                "right": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 78,
                        "end": 82
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 82,
                        "end": 84
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 85,
                        "end": 85
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 78,
                    "end": 86
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 74,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 74,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 94
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 98
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 87,
                    "end": 98
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 99
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 87,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 87,
            "end": 101
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 103,
                "end": 110
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 110,
                "end": 112
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 127
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "number",
                                            "rawText": "number",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 134
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2144,
                                    "transformFlags": 0,
                                    "start": 128,
                                    "end": 135
                                },
                                "returnType": null,
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
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 143
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "p",
                                                                "rawText": "p",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 143,
                                                                "end": 145
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 143,
                                                            "end": 145
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 143,
                                                    "end": 145
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 137,
                                                "end": 145
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 145
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 145
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 145
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 145
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 145
                },
                "flags": 112,
                "transformFlags": 0,
                "start": 32,
                "end": 145
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 103,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 146,
                "end": 153
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 146,
            "end": 154
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 154,
                "end": 161
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 163
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 161,
                        "end": 163
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 161,
                "end": 163
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 154,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 171
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 171,
                    "end": 173
                },
                "right": {
                    "kind": 134299649,
                    "text": "p",
                    "rawText": "p",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 175
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 164,
                "end": 175
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 164,
            "end": 176
        }
    ],
    "isModule": true,
    "source": "class A { foo() { } }\nclass B { bar() { } }\nfunction foo(x: A) {\n   var x: B = new B();\n     x.bar();\n}\n\nclass C {\n\tconstructor(number) {\n\t\tvar p: string;\n\n\t\tvar n: number = p;\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 181
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 58, end: 59
✖ Missing an opening brace - '{ - start: 61, end: 62
✖ Variable declaration not allowed at this location - start: 73, end: 74
✖ Expected a `;` - start: 73, end: 74
✖ Declaration or statement expected - start: 101, end: 103
✖ Variable declaration not allowed at this location - start: 145, end: 146
✖ Expected a `;` - start: 145, end: 146
✖ Variable declaration not allowed at this location - start: 163, end: 164
✖ Expected a `;` - start: 163, end: 164
✖ Declaration or statement expected - start: 176, end: 179
✖ Declaration or statement expected - start: 179, end: 181

```

