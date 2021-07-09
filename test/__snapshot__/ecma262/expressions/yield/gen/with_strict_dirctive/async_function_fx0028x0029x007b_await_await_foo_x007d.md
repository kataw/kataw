# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function f(){ await await foo; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function f(){ await await foo; }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 45
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 39,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 33,
                                "end": 49
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 33,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function f(){ await await foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

"'use strict'";
async function f() {
  await await foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

