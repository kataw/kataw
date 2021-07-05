# Kataw parser test case

## Input

`````js
"use strict";
function f() {
  class C {
    yield() {}
  }
}

"use strict";
function *f() {
  class C {
    yield() {}
  }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 13,
                "end": 22
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 25,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 28,
                                "end": 36
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 36,
                                "end": 38
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
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 97,
                                                    "start": 40,
                                                    "end": 50
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 51,
                                                    "end": 52
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 54,
                                                        "end": 54
                                                    },
                                                    "flags": 32,
                                                    "start": 52,
                                                    "end": 55
                                                },
                                                "flags": 0,
                                                "start": 50,
                                                "end": 55
                                            },
                                            "flags": 0,
                                            "start": 40,
                                            "end": 55
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 40,
                                    "end": 55
                                },
                                "flags": 38,
                                "start": 32,
                                "end": 59
                            },
                            "flags": 17,
                            "start": 28,
                            "end": 59
                        }
                    ],
                    "flags": 33,
                    "start": 28,
                    "end": 59
                },
                "flags": 32,
                "start": 26,
                "end": 61
            },
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 61,
                "end": 75
            },
            "flags": 16,
            "start": 61,
            "end": 76
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 76,
                "end": 85
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 85,
                "end": 87
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 87,
                "end": 88
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 89,
                "end": 89
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 92,
                                "end": 100
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 100,
                                "end": 102
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
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 97,
                                                    "start": 104,
                                                    "end": 114
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
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
                                                        "start": 118,
                                                        "end": 118
                                                    },
                                                    "flags": 32,
                                                    "start": 116,
                                                    "end": 119
                                                },
                                                "flags": 0,
                                                "start": 114,
                                                "end": 119
                                            },
                                            "flags": 0,
                                            "start": 104,
                                            "end": 119
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 104,
                                    "end": 119
                                },
                                "flags": 102,
                                "start": 32,
                                "end": 123
                            },
                            "flags": 17,
                            "start": 92,
                            "end": 123
                        }
                    ],
                    "flags": 33,
                    "start": 92,
                    "end": 123
                },
                "flags": 32,
                "start": 90,
                "end": 125
            },
            "returnType": null,
            "flags": 272,
            "start": 76,
            "end": 125
        }
    ],
    "isModule": false,
    "source": "\"use strict\";\nfunction f() {\n  class C {\n    yield() {}\n  }\n}\n\n\"use strict\";\nfunction *f() {\n  class C {\n    yield() {}\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 125
}
```

### Printed

```javascript

"\"use strict\"";
function f() {
  class C {
    yield(){}
  }
}
"\"use strict\"";
function * f() {
  class C {
    yield(){}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

