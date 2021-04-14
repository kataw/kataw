# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid grouped lhs
> :: case: false
## Input

`````js
async function f() { for await ((x) in y) {} }
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
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 768,
                                "start": 20,
                                "end": 24
                            },
                            "kind": 166,
                            "initializer": {
                                "kind": 121,
                                "expression": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 33,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 32,
                                "end": 35
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 38,
                                "end": 40
                            },
                            "statement": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 128,
                                "start": 41,
                                "end": 44
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 44
                },
                "flags": 256,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "async function f() { for await ((x) in y) {} }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 38
        }
    ],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid grouped lhs
> :: case: false
## Input

`````js
async function f() { for await ((x) in y) {} }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid grouped lhs
> :: case: false
## Input

`````js
async function f() { for await ((x) in y) {} }
`````
```

