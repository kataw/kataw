# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: let x = function f(foo = await bar){
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { let x = function f(foo = await bar){ });
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 10,
                "end": 14
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
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 34
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
                                    "start": 35,
                                    "end": 35
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
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "asteriskToken": null,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 55,
                                                                    "end": 57
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
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 58,
                                                                                "end": 61
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 63,
                                                                                "end": 69
                                                                            },
                                                                            "flags": 34,
                                                                            "transformFlags": 4096,
                                                                            "start": 58,
                                                                            "end": 69
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "bar",
                                                                            "rawText": "bar",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 69,
                                                                            "end": 73
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 34,
                                                                    "transformFlags": 0,
                                                                    "start": 58,
                                                                    "end": 73
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 75,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "returnType": null,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 77
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 42,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 77
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 77
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 77
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 77
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 78
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 78
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { let x = function f(foo = await bar){ });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 70, end: 73
✖ Lexical declaration expected - start: 77, end: 78
✖ ')' is not allowed here. Did you mean ';'? - start: 77, end: 78

```

