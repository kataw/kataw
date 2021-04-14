# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-of-loop
> :: case: async function f(){}
## Input

`````js
for (a of b) async function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 81921,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 12,
                        "end": 18
                    },
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 18,
                        "end": 27
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 29,
                        "end": 31
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 31,
                        "end": 33
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 1280,
                    "start": 12,
                    "end": 33
                },
                "flags": 128,
                "start": 12,
                "end": 33
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "for (a of b) async function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-of-loop
> :: case: async function f(){}
## Input

`````js
for (a of b) async function f(){}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: in for-of-loop
> :: case: async function f(){}
## Input

`````js
for (a of b) async function f(){}
`````
```

