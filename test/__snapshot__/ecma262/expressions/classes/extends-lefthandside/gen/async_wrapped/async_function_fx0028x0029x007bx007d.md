# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: async function f(){}
## Options

`````js
{}
`````
## Input

`````js
async function p(){
  class C extends async function f(){} {}
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
            "asteriskToken": null,
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
                "start": 17,
                "end": 17
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
                                        "asteriskToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 52,
                                            "end": 54
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 55,
                                            "end": 55
                                        },
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
                                            "start": 56,
                                            "end": 58
                                        },
                                        "returnType": null,
                                        "flags": 160,
                                        "start": 37,
                                        "end": 58
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 37,
                                    "end": 58
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 60,
                                    "end": 60
                                },
                                "flags": 29,
                                "start": 32,
                                "end": 61
                            },
                            "flags": 17,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 63
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends async function f(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

async function p() {
  class C  extends async function f() {} {}
}
```

### Diagnostics

```javascript
✔ No errors
```

