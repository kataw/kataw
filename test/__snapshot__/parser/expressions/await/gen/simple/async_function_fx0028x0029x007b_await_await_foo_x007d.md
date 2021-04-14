# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f(){ await await foo; }
## Input

`````js
async function f(){ await await foo; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 31,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 36
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 36
                },
                "flags": 256,
                "start": 18,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "async function f(){ await await foo; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f(){ await await foo; }
## Input

`````js
async function f(){ await await foo; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f(){ await await foo; }
## Input

`````js
async function f(){ await await foo; }
`````
```

