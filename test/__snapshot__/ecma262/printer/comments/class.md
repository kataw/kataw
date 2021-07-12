# Kataw parser test case

## Input

`````js
// #8718
class C {
    ma() {} /* D */ /* E */
    mb() {}
}

class D {
    ma() {} /* D */ /* E */ /* F */
    mb() {}
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
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
                                    "text": "ma",
                                    "rawText": "ma",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 27
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
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 30
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 30
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 30
                        },
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
                                    "text": "mb",
                                    "rawText": "mb",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 55
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
                                        "start": 57,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 58
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 58
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 58
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 32,
                "end": 60
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 60,
                "end": 67
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "transformFlags": 0,
                "start": 67,
                "end": 69
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
                                    "text": "ma",
                                    "rawText": "ma",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 78
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 80
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
                                        "start": 82,
                                        "end": 82
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 80,
                                    "end": 83
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 83
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 83
                        },
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
                                    "text": "mb",
                                    "rawText": "mb",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 114
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 116
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
                                        "start": 118,
                                        "end": 118
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 119
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 119
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 119
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 119
                },
                "flags": 69,
                "transformFlags": 0,
                "start": 32,
                "end": 121
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 60,
            "end": 121
        }
    ],
    "isModule": false,
    "source": "// #8718\nclass C {\n    ma() {} /* D */ /* E */\n    mb() {}\n}\n\nclass D {\n    ma() {} /* D */ /* E */ /* F */\n    mb() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 121
}
```

### Printed

```javascript
// #8718
class C {
  ma() {} /* D */ /* E */
  mb() {}
}
class D {
  ma() {} /* D */ /* E */ /* F */
  mb() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

