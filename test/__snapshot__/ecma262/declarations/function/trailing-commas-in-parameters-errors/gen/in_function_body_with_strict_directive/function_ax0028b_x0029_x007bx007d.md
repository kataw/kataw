# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters-errors/gen/in_function_body_with_strict_directive
> :: test: in function body with strict directive
> :: case: function  a(b,,) {}
## Options

`````js
{}
`````
## Input

`````js
function foo() {'use strict'; function  a(b,,) {} }
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 28
                        }
                    ],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 38
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 41
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 44
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 44
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 44
                        }
                    ],
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 44
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 48,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function foo() {'use strict'; function  a(b,,) {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 46
✖ Declaration or statement expected - start: 49, end: 51

```

