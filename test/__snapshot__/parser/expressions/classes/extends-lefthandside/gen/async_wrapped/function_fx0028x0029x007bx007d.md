# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: d
> :: test: async wrapped
> :: case: function f(){}
## Input

`````js
async function p(){
  class C extends function f(){} {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "p",
                "rawText": "p",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "expression": {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 46
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 46,
                                            "end": 48
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 48,
                                            "end": 50
                                        },
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
                                            "start": 50,
                                            "end": 52
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 37,
                                        "end": 52
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 52
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 54,
                                    "end": 54
                                },
                                "flags": 29,
                                "start": 32,
                                "end": 55
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 55
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 55
                },
                "flags": 32,
                "start": 18,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends function f(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

async function p() {
  class C  {}
}
```

### Diagnostics

```javascript
✔ No errors
```

