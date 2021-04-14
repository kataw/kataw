# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-loop
> :: case: async function f(){}
## Input

`````js
for (;;) async function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 8,
                        "end": 14
                    },
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 14,
                        "end": 23
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 23,
                        "end": 25
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 25,
                        "end": 27
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 8,
                    "end": 29
                },
                "flags": 128,
                "start": 8,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "for (;;) async function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-loop
> :: case: async function f(){}
## Input

`````js
for (;;) async function f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-loop
> :: case: async function f(){}
## Input

`````js
for (;;) async function f(){}
`````
```

