# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
'use strict'; function* gf() { var fe = function yield() { } }
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
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 23,
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
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 0,
                                "start": 30,
                                "end": 34
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "fe",
                                            "rawText": "fe",
                                            "flags": 96,
                                            "start": 34,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 48,
                                                "end": 54
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 32,
                                                    "start": 58,
                                                    "end": 58
                                                },
                                                "flags": 32,
                                                "start": 56,
                                                "end": 60
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 39,
                                            "end": 60
                                        },
                                        "flags": 16,
                                        "start": 34,
                                        "end": 60
                                    }
                                ],
                                "flags": 16,
                                "start": 34,
                                "end": 60
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 60
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 30,
                    "end": 60
                },
                "flags": 32,
                "start": 28,
                "end": 62
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { var fe = function yield() { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 48, end: 54

```

