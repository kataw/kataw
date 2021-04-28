# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function wrap() { async function await() { } };
## Input

`````js
'use strict'; async function wrap() { async function await() { } };
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
            "flags": 4194400,
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
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "start": 28,
                "end": 33
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 33,
                "end": 35
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
                                "start": 37,
                                "end": 43
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 43,
                                "end": 52
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 52,
                                "end": 58
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 58,
                                "end": 60
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 62,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 60,
                                "end": 64
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 37,
                            "end": 64
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 37,
                    "end": 64
                },
                "flags": 32,
                "start": 35,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 66
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 66,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function wrap() { async function await() { } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal - start: 52, end: 58

```

