# Kataw parser test case

## Input

`````js
class C {
    set X(v = 0) { }
    static set X(v2 = 0) { }
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "start": 9,
                                "end": 17
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 34,
                                            "start": 20,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 546,
                                    "start": 20,
                                    "end": 26
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 512,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 30
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 30,
                                "end": 41
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 41,
                                "end": 45
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "v2",
                                                "rawText": "v2",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "flags": 34,
                                            "start": 48,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 546,
                                    "start": 48,
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
                                        "start": 57,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "start": 55,
                                    "end": 59
                                },
                                "flags": 512,
                                "start": 47,
                                "end": 59
                            },
                            "flags": 512,
                            "start": 41,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 59
                },
                "flags": 7,
                "start": 32,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "class C {\n    set X(v = 0) { }\n    static set X(v2 = 0) { }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

class C {
  set X {}
  static set static X {}
}
```

### Diagnostics

```javascript
✔ No errors
```

