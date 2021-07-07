# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/gen/with_strict_directive
> :: test: with strict directive
> :: case: x = function *await() {}
## Options

`````js
{}
`````
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
            "transformFlags": 0,
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 36
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 51
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 58
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 59
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 62,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 63
                                            },
                                            "returnType": null,
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 63
                                        },
                                        "flags": 34,
                                        "transformFlags": 4096,
                                        "start": 39,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 63
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 66
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 67
                            },
                            "returnType": null,
                            "flags": 160,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 67
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 67
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 67
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "'use strict'; var f = async function f(x = function *await() {}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

"'use strict'";
var f = async function f(x = function *await() {}) {};
```

### Diagnostics

```javascript
✔ No errors
```

