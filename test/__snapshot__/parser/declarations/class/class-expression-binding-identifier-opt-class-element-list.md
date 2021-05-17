# Kataw parser test case

## Input

`````js
var A = class B {
  method() {}
  static method() {}
  ;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "method",
                                                    "rawText": "method",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 31
                                                },
                                                "flags": 0,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "start": 17,
                                            "end": 31
                                        },
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "start": 31,
                                                "end": 40
                                            },
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "method",
                                                    "rawText": "method",
                                                    "flags": 96,
                                                    "start": 40,
                                                    "end": 47
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 48,
                                                    "end": 49
                                                },
                                                "type": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 51,
                                                        "end": 51
                                                    },
                                                    "flags": 32,
                                                    "start": 49,
                                                    "end": 52
                                                },
                                                "flags": 0,
                                                "start": 47,
                                                "end": 52
                                            },
                                            "flags": 0,
                                            "start": 40,
                                            "end": 52
                                        },
                                        {
                                            "kind": 281,
                                            "flags": 96,
                                            "start": 52,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 17,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 58
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 58
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "var A = class B {\n  method() {}\n  static method() {}\n  ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

var A = class B {
  method() {}
  static static method() {}

};
```

### Diagnostics

```javascript
✔ No errors
```

