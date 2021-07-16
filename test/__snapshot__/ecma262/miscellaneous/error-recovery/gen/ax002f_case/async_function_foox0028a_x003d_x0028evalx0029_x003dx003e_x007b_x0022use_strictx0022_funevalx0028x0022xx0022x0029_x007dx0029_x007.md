# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: async function foo(a = (eval) => { "use strict"; funeval("x"); }) {}
## Options

`````js
{}
`````
## Input

`````js
async function foo(a = (eval) => { "use strict"; funeval("x"); }) {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 18
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 29
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [
                                        {
                                            "kind": 201392131,
                                            "text": "use strict",
                                            "rawText": "\"use strict\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 47
                                        }
                                    ],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "funeval",
                                                    "rawText": "funeval",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 56
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392131,
                                                            "text": "x",
                                                            "rawText": "\"x\"",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 57,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 48,
                                                "end": 61
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 48,
                                            "end": 62
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 62
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 64
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 64
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 19,
                        "end": 64
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 19,
                "end": 64
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 67
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 65,
                "end": 68
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function foo(a = (eval) => { \"use strict\"; funeval(\"x\"); }) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
async function foo(a = (eval) => {

  "\"use strict\"";
  funeval("\"x\"");
}) {}
```

### Diagnostics

```javascript
✔ No errors
```

