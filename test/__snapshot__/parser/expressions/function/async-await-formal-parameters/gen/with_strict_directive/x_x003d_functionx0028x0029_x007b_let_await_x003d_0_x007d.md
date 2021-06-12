# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\function\async-await-formal-parameters\gen\with_strict_directive
> :: test: with strict directive
> :: case: x = function() { let await = 0; }
## Input

`````js
'use strict'; var f = async function f(x = function() { let await = 0; }) {}
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 21,
                                "end": 27
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 27,
                                "end": 36
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
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
                                            "start": 39,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 42,
                                                "end": 51
                                            },
                                            "generatorToken": null,
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 162,
                                                            "lexicalKeyword": {
                                                                "kind": 41951307,
                                                                "flags": 80,
                                                                "start": 55,
                                                                "end": 59
                                                            },
                                                            "binding": {
                                                                "kind": 151,
                                                                "bindingList": [
                                                                    {
                                                                        "kind": 190,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 59,
                                                                            "end": 65
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 201392130,
                                                                            "text": 0,
                                                                            "rawText": "0",
                                                                            "flags": 96,
                                                                            "start": 67,
                                                                            "end": 69
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 59,
                                                                        "end": 69
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "start": 59,
                                                                "end": 69
                                                            },
                                                            "flags": 33554448,
                                                            "start": 55,
                                                            "end": 70
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 53,
                                                "end": 72
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 42,
                                            "end": 72
                                        },
                                        "flags": 34,
                                        "start": 39,
                                        "end": 72
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 38,
                                "end": 73
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 75,
                                    "end": 75
                                },
                                "flags": 32,
                                "start": 73,
                                "end": 76
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 21,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 76
            },
            "flags": 16,
            "start": 13,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async function f(x = function() { let await = 0; }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

var f = async function f(x = function () {
  let await = 0;
}) {};
```

### Diagnostics

```javascript
✔ No errors
```

