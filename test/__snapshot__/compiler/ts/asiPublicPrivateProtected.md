# Kataw parser test case

## Input

`````js
public
class NonPublicClass {
    public s() {
    }
}

class NonPublicClass2 {
    public
    private nonPublicFunction() {
    }
}
private
class NonPrivateClass {
    private s() {
    }
}

class NonPrivateClass2 {
    private
    public nonPrivateFunction() {
    }
}
protected
class NonProtectedClass {
  protected s() {
  }
}

class NonProtectedClass2 {
    protected
    public nonProtectedFunction() {
    }
}

class ClassWithThreeMembers {
    public
    private
    protected
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "public\nclass NonPublicClass {\n    public s() {\n    }\n}\n\nclass NonPublicClass2 {\n    public\n    private nonPublicFunction() {\n    }\n}\nprivate\nclass NonPrivateClass {\n    private s() {\n    }\n}\n\nclass NonPrivateClass2 {\n    private\n    public nonPrivateFunction() {\n    }\n}\nprotected\nclass NonProtectedClass {\n  protected s() {\n  }\n}\n\nclass NonProtectedClass2 {\n    protected\n    public nonProtectedFunction() {\n    }\n}\n\nclass ClassWithThreeMembers {\n    public\n    private\n    protected\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "public",
                    "rawText": "public",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonPublicClass",
                    "rawText": "NonPublicClass",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 12,
                    "end": 27
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
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 44
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 46
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 52
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 29,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 42,
                                "end": 52
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 52
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 29,
                    "end": 54
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 6,
                "end": 54
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonPublicClass2",
                    "rawText": "NonPublicClass2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 61,
                    "end": 77
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "public",
                                "rawText": "public",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 90
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 79,
                            "end": 90
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
                                    "text": "nonPublicFunction",
                                    "rawText": "nonPublicFunction",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 102,
                                    "end": 120
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 121,
                                    "end": 122
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 124
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 122,
                                    "end": 130
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 90,
                                    "end": 102
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 120,
                                "end": 130
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 90,
                            "end": 130
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 79,
                    "end": 132
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 54,
                "end": 132
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "private",
                    "rawText": "private",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 140
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 132,
                "end": 140
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonPrivateClass",
                    "rawText": "NonPrivateClass",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 146,
                    "end": 162
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
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 178
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 179,
                                    "end": 180
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 182
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 180,
                                    "end": 188
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 164,
                                    "end": 176
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 178,
                                "end": 188
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 164,
                            "end": 188
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 164,
                    "end": 190
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 140,
                "end": 190
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonPrivateClass2",
                    "rawText": "NonPrivateClass2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 197,
                    "end": 214
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "private",
                                "rawText": "private",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 228
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 216,
                            "end": 228
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
                                    "text": "nonPrivateFunction",
                                    "rawText": "nonPrivateFunction",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 258
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 260
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 262,
                                        "end": 262
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 260,
                                    "end": 268
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 228,
                                    "end": 239
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 258,
                                "end": 268
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 228,
                            "end": 268
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 216,
                    "end": 270
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 190,
                "end": 270
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "protected",
                    "rawText": "protected",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 270,
                    "end": 280
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 270,
                "end": 280
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonProtectedClass",
                    "rawText": "NonProtectedClass",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 286,
                    "end": 304
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
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 318,
                                    "end": 320
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 321,
                                    "end": 322
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 324,
                                        "end": 324
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 322,
                                    "end": 328
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194493,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 306,
                                    "end": 318
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 320,
                                "end": 328
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 306,
                            "end": 328
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 306,
                    "end": 330
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 280,
                "end": 330
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "NonProtectedClass2",
                    "rawText": "NonProtectedClass2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 337,
                    "end": 356
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "protected",
                                "rawText": "protected",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 372
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 358,
                            "end": 372
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
                                    "text": "nonProtectedFunction",
                                    "rawText": "nonProtectedFunction",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 383,
                                    "end": 404
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 405,
                                    "end": 406
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 408,
                                        "end": 408
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 406,
                                    "end": 414
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 372,
                                    "end": 383
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 404,
                                "end": 414
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 372,
                            "end": 414
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 358,
                    "end": 416
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 330,
                "end": 416
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "ClassWithThreeMembers",
                    "rawText": "ClassWithThreeMembers",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 423,
                    "end": 445
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "public",
                                "rawText": "public",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 447,
                                "end": 458
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 447,
                            "end": 458
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "private",
                                "rawText": "private",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 458,
                                "end": 470
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 458,
                            "end": 470
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "protected",
                                "rawText": "protected",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 470,
                                "end": 484
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 470,
                            "end": 484
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 447,
                    "end": 486
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 416,
                "end": 486
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 486
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 487
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

