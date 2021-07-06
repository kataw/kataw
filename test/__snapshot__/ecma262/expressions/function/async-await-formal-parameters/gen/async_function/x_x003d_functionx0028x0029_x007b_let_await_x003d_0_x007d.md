# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/async-await-formal-parameters/gen/async_function
> :: test: async function
> :: case: x = function() { let await = 0; }
## Options

`````js
{}
`````
## Input

`````js
var f = async function f(x = function() { let await = 0; }) {}
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 22
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
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
                                            "start": 25,
                                            "end": 26
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
                                                "start": 28,
                                                "end": 37
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 38
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
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 45
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
                                                                            "transformFlags": 0,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        },
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 201392130,
                                                                            "text": 0,
                                                                            "rawText": "0",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 53,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 128,
                                                                        "start": 45,
                                                                        "end": 55
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 45,
                                                                "end": 55
                                                            },
                                                            "flags": 33554448,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 56
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 58
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 58
                                        },
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 58
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 58
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 61
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "returnType": null,
                            "flags": 160,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 62
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 62
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var f = async function f(x = function() { let await = 0; }) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
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

