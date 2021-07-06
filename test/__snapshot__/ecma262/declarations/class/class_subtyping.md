# Kataw parser test case

## Input

`````js

class C<X> { x: X; }

class D extends C<O> {
  bar() { this.x; }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 10
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 8,
                "end": 11
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 13,
                            "end": 18
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "flags": 11,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 17,
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
                "end": 28
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
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
                        "start": 30,
                        "end": 38
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 40
                    },
                    "typeParameter": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "O",
                                            "rawText": "O",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 42
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 42
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 40,
                        "end": 43
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 43
                },
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
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 51
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 53
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 60
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 62
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 55,
                                                    "end": 62
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 65
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 65
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 65
                },
                "flags": 30,
                "transformFlags": 0,
                "start": 32,
                "end": 67
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 21,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "\nclass C<X> { x: X; }\n\nclass D extends C<O> {\n  bar() { this.x; }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
class C <X>{
  x: X;;
}
class D extends C<O> {
  bar() {
    this.x;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

