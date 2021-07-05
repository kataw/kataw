# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/gen/in_arrow
> :: test: in arrow
> :: case: x = function *await() {}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var f = async(x = function *await() {}) => {}
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
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 21,
                                "end": 27
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 31,
                                                "end": 40
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 47
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 48,
                                                "end": 48
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
                                                "start": 49,
                                                "end": 52
                                            },
                                            "returnType": null,
                                            "flags": 288,
                                            "start": 31,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 28,
                                "end": 53
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 53,
                                "end": 56
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
                                "start": 56,
                                "end": 59
                            },
                            "flags": 290,
                            "start": 21,
                            "end": 59
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 59
            },
            "flags": 16,
            "start": 13,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async(x = function *await() {}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

'\'use strict\'';
var f = async (x = function * await() {}) => {};
```

### Diagnostics

```javascript
✔ No errors
```

