# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function wrap() { async function await() { } };
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function wrap() { async function await() { } };
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
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 33
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 52
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 52,
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
                                "end": 64
                            },
                            "returnType": null,
                            "flags": 144,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 64
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 64
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 35,
                "end": 66
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 66
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 66,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function wrap() { async function await() { } };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 52, end: 58

```

