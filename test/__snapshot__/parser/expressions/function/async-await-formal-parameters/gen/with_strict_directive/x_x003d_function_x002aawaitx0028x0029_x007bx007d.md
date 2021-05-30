# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\function\async-await-formal-parameters\gen\with_strict_directive
> :: test: with strict directive
> :: case: x = function *await() {}
## Input

`````js
'use strict'; var f = async function f(x = function *await() {}) {}
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
                                        "kind": 203,
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
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 53,
                                                "end": 58
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 58,
                                                "end": 60
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 62,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "start": 60,
                                                "end": 63
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 288,
                                            "start": 42,
                                            "end": 63
                                        },
                                        "flags": 34,
                                        "start": 39,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 38,
                                "end": 64
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 66,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 64,
                                "end": 67
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 21,
                            "end": 67
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 67
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 67
            },
            "flags": 16,
            "start": 13,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async function f(x = function *await() {}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

var f = async function f(x = function * await() {}) {};
```

### Diagnostics

```javascript
✔ No errors
```

