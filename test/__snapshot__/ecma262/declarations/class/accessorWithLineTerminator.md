# Kataw parser test case

## Input

`````js
class C {
    get
    x() { return 1 }

    set
    x(v) {  }
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "get",
                                "rawText": "get",
                                "flags": 96,
                                "start": 9,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 17
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 25
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "start": 27,
                                                    "end": 34
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "flags": 80,
                                                "start": 27,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 27,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 38
                                },
                                "flags": 0,
                                "start": 23,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 38
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "set",
                                "rawText": "set",
                                "flags": 96,
                                "start": 38,
                                "end": 47
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 38,
                            "end": 47
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 55
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 54,
                                    "end": 56
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 58,
                                        "end": 58
                                    },
                                    "flags": 32,
                                    "start": 56,
                                    "end": 61
                                },
                                "flags": 0,
                                "start": 53,
                                "end": 61
                            },
                            "flags": 0,
                            "start": 47,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 61
                },
                "flags": 7,
                "start": 32,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "class C {\n    get\n    x() { return 1 }\n\n    set\n    x(v) {  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

class C {
  get;
  x() {
    return  1;
  }
  set;
  x() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

