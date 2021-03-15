# Kataw parser test case

## Input

`````js
class A {
  public a: number;

  public method(this: this): number {
    return this.a;
  }

  public method2(this: A): this {
    return this.a;
  }

  public method3(this: this): number {
    var fn = () => this.a;
    return fn();
  }

  public method4(this: A): number {
    var fn = () => this.a;
    return fn();
  }

  static staticMethod(this: A): number {
    return this.a;
  }

  static typeof(this: A): this {
    return typeof this;
  }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {\n  public a: number;\n\n  public method(this: this): number {\n    return this.a;\n  }\n\n  public method2(this: A): this {\n    return this.a;\n  }\n\n  public method3(this: this): number {\n    var fn = () => this.a;\n    return fn();\n  }\n\n  public method4(this: A): number {\n    var fn = () => this.a;\n    return fn();\n  }\n\n  static staticMethod(this: A): number {\n    return this.a;\n  }\n\n  static typeof(this: A): this {\n    return typeof this;\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 28
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 18
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 9,
                        "end": 29
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
                                "text": "method",
                                "rawText": "method",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 46
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 47,
                                            "end": 51
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202716,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 52,
                                            "end": 57
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 47,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 58
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 79,
                                                    "end": 84
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 86
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 86,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 84,
                                                    "end": 85
                                                }
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 68,
                                            "end": 87
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 87
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 91
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 59,
                                "end": 66
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 39
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 46,
                            "end": 91
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 29,
                        "end": 91
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
                                "text": "method2",
                                "rawText": "method2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 109
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 110,
                                            "end": 114
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 115,
                                                "end": 117
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 115,
                                            "end": 118
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 110,
                                        "end": 117
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 118
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 142
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 143,
                                                    "end": 144
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 142,
                                                "end": 144,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 142,
                                                    "end": 143
                                                }
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 145
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 145
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 149
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202716,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 119,
                                "end": 124
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 91,
                                "end": 101
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 109,
                            "end": 149
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 91,
                        "end": 149
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
                                "text": "method3",
                                "rawText": "method3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 167
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 168,
                                            "end": 172
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202716,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 173,
                                            "end": 178
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 168,
                                        "end": 178
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 179
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097397,
                                            "declarationList": {
                                                "kind": 244,
                                                "declarations": [
                                                    {
                                                        "kind": 16627,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "fn",
                                                            "rawText": "fn",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 197,
                                                            "end": 200
                                                        },
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
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 214,
                                                                    "end": 215
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 213,
                                                                "end": 215,
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
                                                            "end": 215
                                                        },
                                                        "flags": 197,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 0,
                                                        "end": 215
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 197,
                                                "end": 215
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 216
                                        },
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "fn",
                                                    "rawText": "fn",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 227,
                                                    "end": 230
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 232,
                                                    "end": 232
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 230,
                                                "end": 232
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 216,
                                            "end": 233
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 189,
                                    "end": 233
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 237
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 180,
                                "end": 187
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 149,
                                "end": 159
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 167,
                            "end": 237
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 149,
                        "end": 237
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
                                "text": "method4",
                                "rawText": "method4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 247,
                                "end": 255
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 256,
                                            "end": 260
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 261,
                                                "end": 263
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 261,
                                            "end": 264
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 256,
                                        "end": 263
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 256,
                                "end": 264
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097397,
                                            "declarationList": {
                                                "kind": 244,
                                                "declarations": [
                                                    {
                                                        "kind": 16627,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "fn",
                                                            "rawText": "fn",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 282,
                                                            "end": 285
                                                        },
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
                                                                "start": 287,
                                                                "end": 287
                                                            },
                                                            "contents": {
                                                                "kind": 67175096,
                                                                "member": {
                                                                    "kind": 4260571,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 293,
                                                                    "end": 298
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 299,
                                                                    "end": 300
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 298,
                                                                "end": 300,
                                                                "period": {
                                                                    "kind": 255,
                                                                    "pos": 298,
                                                                    "end": 299
                                                                }
                                                            },
                                                            "flags": 1073741824,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 287,
                                                            "end": 300
                                                        },
                                                        "flags": 282,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 0,
                                                        "end": 300
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 282,
                                                "end": 300
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 274,
                                            "end": 301
                                        },
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 196712,
                                                    "text": "fn",
                                                    "rawText": "fn",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 312,
                                                    "end": 315
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 317,
                                                    "end": 317
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 315,
                                                "end": 317
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 318
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 274,
                                    "end": 318
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 272,
                                "end": 322
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 265,
                                "end": 272
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 237,
                                "end": 247
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 255,
                            "end": 322
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 237,
                        "end": 322
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "staticMethod",
                                "rawText": "staticMethod",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 332,
                                "end": 345
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 346,
                                            "end": 350
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 351,
                                                "end": 353
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 351,
                                            "end": 354
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 346,
                                        "end": 353
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 346,
                                "end": 354
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 375,
                                                    "end": 380
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 381,
                                                    "end": 382
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 380,
                                                "end": 382,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 380,
                                                    "end": 381
                                                }
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 364,
                                            "end": 383
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 364,
                                    "end": 383
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 387
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 355,
                                "end": 362
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 387
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 322,
                        "end": 387
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "typeof",
                                "rawText": "typeof",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 404
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "this",
                                            "rawText": "this",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 405,
                                            "end": 409
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 410,
                                                "end": 412
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 410,
                                            "end": 413
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 405,
                                        "end": 412
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 413
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 65774,
                                                "operator": "typeof",
                                                "operand": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 439,
                                                    "end": 444
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 432,
                                                "end": 444
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 421,
                                            "end": 445
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 421,
                                    "end": 445
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 419,
                                "end": 449
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202716,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 414,
                                "end": 419
                            },
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 404,
                            "end": 449
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 387,
                        "end": 449
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 451
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 451
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 451
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

