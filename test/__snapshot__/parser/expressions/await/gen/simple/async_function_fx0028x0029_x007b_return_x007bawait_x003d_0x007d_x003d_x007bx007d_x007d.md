# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
async function f() { return {await = 0} = {}; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                                    "start": 29,
                                                    "end": 34
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 0,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 36,
                                                    "end": 38
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 29,
                                                "end": 38
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 29,
                                        "end": 38
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 39
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 39,
                                    "end": 41
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
                                        "start": 43,
                                        "end": 43
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 44
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 27,
                                "end": 44
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 45
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "async function f() { return {await = 0} = {}; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
async function f() { return {await = 0} = {}; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
async function f() { return {await = 0} = {}; }
`````
```

