# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/trailing-commas-in-parameters/gen/in_function_body_with_strict_directive
> :: test: in function body with strict directive
> :: case: function* a(b,c,d,) {}
## Options

`````js
{}
`````
## Input

`````js
function foo() {'use strict'; function* a(b,c,d,) {} }
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
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 38,
                                "end": 39
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 39,
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
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 45
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 48
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 52
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 52
                        }
                    ],
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 52
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 54
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "function foo() {'use strict'; function* a(b,c,d,) {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
function foo() {

  "'use strict'";
  function * a(b, c, d) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

