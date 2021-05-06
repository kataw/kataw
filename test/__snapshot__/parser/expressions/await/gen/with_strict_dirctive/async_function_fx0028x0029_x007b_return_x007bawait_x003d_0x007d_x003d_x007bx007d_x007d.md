# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
'use strict'; async function f() { return {await = 0} = {}; }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 0,
                                "start": 34,
                                "end": 41
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "flags": 32,
                                                "start": 43,
                                                "end": 52
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "start": 41,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 57,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "start": 55,
                                    "end": 58
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 58
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 34,
                    "end": 59
                },
                "flags": 32,
                "start": 32,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function f() { return {await = 0} = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 43, end: 48
✖ Identifier expected. Reserved word in strict mode - start: 48, end: 50

```

