# Kataw parser test case

## Input

`````js
class Bar {
  get ['d']() { return 'foo'; }
  set ['d'](x: number) {}
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
                "text": "Bar",
                "rawText": "Bar",
                "flags": 96,
                "start": 5,
                "end": 9
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
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 11,
                                "end": 17
                            },
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "d",
                                        "rawText": "'d'",
                                        "flags": 4194400,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1024,
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
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "'foo'",
                                                    "flags": 4194400,
                                                    "start": 34,
                                                    "end": 40
                                                },
                                                "flags": 80,
                                                "start": 27,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 27,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 43
                                },
                                "flags": 1024,
                                "start": 23,
                                "end": 43
                            },
                            "flags": 1024,
                            "start": 11,
                            "end": 43
                        },
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
                                "start": 43,
                                "end": 49
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "d",
                                        "rawText": "'d'",
                                        "flags": 4194400,
                                        "start": 51,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "start": 49,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 56,
                                                "end": 57
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 58,
                                                    "end": 65
                                                },
                                                "flags": 2097152,
                                                "start": 58,
                                                "end": 65
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 56,
                                            "end": 65
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 56,
                                    "end": 66
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 68,
                                        "end": 68
                                    },
                                    "flags": 32,
                                    "start": 66,
                                    "end": 69
                                },
                                "flags": 512,
                                "start": 55,
                                "end": 69
                            },
                            "flags": 512,
                            "start": 43,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 69
                },
                "flags": 9,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "class Bar {\n  get ['d']() { return 'foo'; }\n  set ['d'](x: number) {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

class Bar {
  get ["'d'"]() {
    return  "'foo'";
  }
  set ["'d'"](x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

