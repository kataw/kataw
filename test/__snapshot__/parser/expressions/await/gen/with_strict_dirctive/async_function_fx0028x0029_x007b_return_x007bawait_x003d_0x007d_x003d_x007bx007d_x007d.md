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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
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
                                                    "kind": 81921,
                                                    "value": "await",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 43,
                                                    "end": 48
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 0,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 43,
                                                "end": 52
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
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
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 57,
                                        "end": 57
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 55,
                                    "end": 58
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 41,
                                "end": 58
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 34
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 34,
                    "end": 59
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f() { return {await = 0} = {}; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
'use strict'; async function f() { return {await = 0} = {}; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
'use strict'; async function f() { return {await = 0} = {}; }
`````
```

