# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
'use strict'; function *gf(){ function yield(){}; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 24
            },
            "name": {
                "kind": 134299649,
                "original": "gf",
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 26,
                "end": 28
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 29,
                                "end": 38
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "original": "yield",
                                "text": "yield",
                                "rawText": " yield",
                                "flags": 96,
                                "start": 38,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 44,
                                "end": 46
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 46,
                                "end": 48
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 29,
                            "end": 48
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 48,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 29,
                    "end": 49
                },
                "flags": 32,
                "start": 28,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "'use strict'; function *gf(){ function yield(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 38, end: 44

```

