# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f() { await 3; }
## Input

`````js
'use strict'; async function f() { await 3; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
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
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 30,
                "end": 32
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
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 34,
                                    "end": 40
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 768,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 34,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 34,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 34,
                    "end": 43
                },
                "flags": 256,
                "start": 32,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 13,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f() { await 3; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

