# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 22,
                "end": 28
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 29,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 29,
                        "end": 34
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 28,
                "end": 35
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
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 37,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 37,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 37,
                    "end": 43
                },
                "flags": 32,
                "start": 35,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 44,
                    "end": 50
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 52,
                                "end": 57
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 57,
                                "end": 59
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 59,
                                    "end": 65
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 66,
                                            "end": 67
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 66,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 52,
                            "end": 68
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 52,
                    "end": 68
                },
                "flags": 32,
                "start": 44,
                "end": 69
            },
            "flags": 16,
            "start": 44,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 22, end: 28
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 22, end: 28
✖ Identifier expected. Reserved word in strict mode - start: 29, end: 34
✖ Statement expected - start: 43, end: 44
✖ Statement expected - start: 70, end: 72

```

