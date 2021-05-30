# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\function\async-await-formal-parameters\gen\async_function
> :: test: async function
> :: case: x = function *await() {}
## Input

`````js
var f = async function f(x = function *await() {}) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 13,
                                "end": 22
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 28,
                                                "end": 37
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 44
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 44,
                                                "end": 46
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 48,
                                                    "end": 48
                                                },
                                                "flags": 32,
                                                "start": 46,
                                                "end": 49
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 288,
                                            "start": 28,
                                            "end": 49
                                        },
                                        "flags": 34,
                                        "start": 25,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 24,
                                "end": 50
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 52,
                                    "end": 52
                                },
                                "flags": 32,
                                "start": 50,
                                "end": 53
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 7,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var f = async function f(x = function *await() {}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
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

