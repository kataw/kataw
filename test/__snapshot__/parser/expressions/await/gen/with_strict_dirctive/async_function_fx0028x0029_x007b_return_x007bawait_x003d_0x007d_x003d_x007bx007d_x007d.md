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
                "flags": 13,
                "start": 512,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 19,
                "start": 0,
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 34,
                                "start": 0,
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
                                                    "flags": 768,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 768,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "flags": 256,
                                                "start": 43,
                                                "end": 52
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "flags": 256,
                                    "start": 41,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 512,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 57,
                                        "end": 57
                                    },
                                    "flags": 256,
                                    "start": 55,
                                    "end": 58
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 58
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 34
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 34,
                    "end": 59
                },
                "flags": 256,
                "start": 32,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 13,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f() { return {await = 0} = {}; }",
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
✔ No errors
```

