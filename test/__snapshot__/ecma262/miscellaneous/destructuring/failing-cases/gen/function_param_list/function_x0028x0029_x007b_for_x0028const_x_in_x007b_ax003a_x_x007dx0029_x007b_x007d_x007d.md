# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/function_param_list
> :: test: function param list
> :: case: function () { for (const x in { a: x }) { } }
## Options

`````js
{}
`````
## Input

`````js
function x(function () { for (const x in { a: x }) { } }) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 11,
                "end": 19
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
                "start": 21,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 28
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 35
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
                                                "start": 35,
                                                "end": 37
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 35,
                                            "end": 37
                                        }
                                    ],
                                    "flags": 16777232,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 37
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "transformFlags": 8192,
                                "start": 37,
                                "end": 40
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 44
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 42,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 47
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 40,
                                "end": 49
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 52
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 54
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 54
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 56
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 11,
            "end": 56
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 59,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 57,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function x(function () { for (const x in { a: x }) { } }) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 11, end: 19
✖ Binding identifier expected - start: 19, end: 21
✖ Declaration or statement expected - start: 56, end: 57

```

