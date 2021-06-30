# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: class C {}; class C2 extends C { async constructor() {} }
## Options

`````js
{}
`````
## Input

`````js
class C {}; class C2 extends C { async constructor() {} }
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 32,
                                "end": 38
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2304,
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
                                "flags": 2304,
                                "start": 50,
                                "end": 55
                            },
                            "flags": 2304,
                            "start": 32,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 32,
                    "end": 55
                },
                "flags": 20,
                "start": 32,
                "end": 57
            },
            "flags": 16,
            "start": 11,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "class C {}; class C2 extends C { async constructor() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class constructor may not be a accessor - start: 50, end: 51

```

