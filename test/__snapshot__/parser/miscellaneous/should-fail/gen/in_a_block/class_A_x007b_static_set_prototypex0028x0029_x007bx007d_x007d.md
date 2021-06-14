# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: class A { static set prototype() {} }
## Options

`````js
{}
`````
## Input

`````js
{ class A { static set prototype() {} } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "start": 1,
                            "end": 7
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 7,
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
                                        "staticKeyword": {
                                            "kind": 8388716,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": {
                                            "kind": 16499,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "prototype",
                                                "rawText": "prototype",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 32
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 512,
                                                "start": 33,
                                                "end": 34
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 36,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "start": 34,
                                                "end": 37
                                            },
                                            "flags": 512,
                                            "start": 32,
                                            "end": 37
                                        },
                                        "flags": 512,
                                        "start": 18,
                                        "end": 37
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 37
                            },
                            "flags": 9,
                            "start": 32,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "{ class A { static set prototype() {} } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Classes may not have a static property named 'prototype' - start: 32, end: 33
✖ A 'set' accessor must have exactly one parameter. - start: 33, end: 34

```

