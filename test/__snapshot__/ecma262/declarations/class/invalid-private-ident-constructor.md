# Kataw parser test case

## Input

`````js
class x { #constructor }

class y { #constructor() {} }

class z { static #constructor }

class q { static #constructor() {} }

class w { static #\u0063onstructor }
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#constructor",
                                "rawText": "#constructor",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 22
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 22
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 24,
                "end": 31
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 31,
                "end": 33
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
                                    "text": "#constructor",
                                    "rawText": "#constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 50
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
                                        "start": 52,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 53
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 53
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 53
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 53
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 32,
                "end": 55
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 24,
            "end": 55
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 55,
                "end": 62
            },
            "name": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 62,
                "end": 64
            },
            "typeParameters": null,
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 73
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#constructor",
                                "rawText": "#constructor",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 86
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 73,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 86
                },
                "flags": 64,
                "transformFlags": 0,
                "start": 32,
                "end": 88
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 55,
            "end": 88
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 88,
                "end": 95
            },
            "name": {
                "kind": 134299649,
                "text": "q",
                "rawText": "q",
                "flags": 96,
                "transformFlags": 0,
                "start": 95,
                "end": 97
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 106
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "#constructor",
                                    "rawText": "#constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 106,
                                    "end": 119
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 121
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
                                        "start": 123,
                                        "end": 123
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 121,
                                    "end": 124
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 124
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 124
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 124
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 32,
                "end": 126
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 88,
            "end": 126
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 126,
                "end": 133
            },
            "name": {
                "kind": 134299649,
                "text": "w",
                "rawText": "w",
                "flags": 96,
                "transformFlags": 0,
                "start": 133,
                "end": 135
            },
            "typeParameters": null,
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 144
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "staticconstructor",
                                "rawText": "#\\u0063onstructor",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 162
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 144,
                            "end": 162
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 162
                },
                "flags": 135,
                "transformFlags": 0,
                "start": 32,
                "end": 164
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 126,
            "end": 164
        }
    ],
    "isModule": false,
    "source": "class x { #constructor }\n\nclass y { #constructor() {} }\n\nclass z { static #constructor }\n\nclass q { static #constructor() {} }\n\nclass w { static #\\u0063onstructor }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 164
}
```

### Printed

```javascript
class x {
  #constructor;
}
class y {
  #constructor() {}
}

class z {
  static #constructor;
}

class q {
  static #constructor() {}
}

class w {
  static #\u0063onstructor;
}

```

### Diagnostics

```javascript
✔ No errors
```

