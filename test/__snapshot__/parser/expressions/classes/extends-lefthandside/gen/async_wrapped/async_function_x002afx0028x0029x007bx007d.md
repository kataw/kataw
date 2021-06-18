# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: async function *f(){}
## Options

`````js
{}
`````
## Input

`````js
async function p(){
  class C extends async function *f(){} {}
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 43
                                        },
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 43,
                                            "end": 52
                                        },
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 52,
                                            "end": 54
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 55
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 55,
                                            "end": 57
                                        },
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
                                            "start": 57,
                                            "end": 59
                                        },
                                        "returnType": null,
                                        "flags": 416,
                                        "start": 37,
                                        "end": 59
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 59
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 61,
                                    "end": 61
                                },
                                "flags": 29,
                                "start": 32,
                                "end": 62
                            },
                            "flags": 17,
                            "start": 19,
                            "end": 62
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 62
                },
                "flags": 32,
                "start": 18,
                "end": 64
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends async function *f(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
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

