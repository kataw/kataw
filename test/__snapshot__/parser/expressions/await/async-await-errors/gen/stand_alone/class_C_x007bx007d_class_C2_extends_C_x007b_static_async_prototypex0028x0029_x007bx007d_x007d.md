# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\async-await-errors\gen\stand_alone
> :: test: stand alone
> :: case: class C {}; class C2 extends C { static async prototype() {} }
## Input

`````js
class C {}; class C2 extends C { static async prototype() {} }
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
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 10,
            "end": 11
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 11,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 17,
                "end": 20
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 20,
                        "end": 28
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 28,
                    "end": 30
                },
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 32,
                                "end": 39
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 39,
                                "end": 45
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "prototype",
                                    "rawText": "prototype",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 55
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 56,
                                    "end": 57
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 256,
                                "start": 55,
                                "end": 60
                            },
                            "flags": 256,
                            "start": 39,
                            "end": 60
                        }
                    ],
                    "flags": 32,
                    "start": 32,
                    "end": 60
                },
                "flags": 20,
                "start": 32,
                "end": 62
            },
            "flags": 16,
            "start": 11,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "class C {}; class C2 extends C { static async prototype() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Classes may not have a static property named 'prototype' - start: 55, end: 56

```

