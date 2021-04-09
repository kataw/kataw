# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid strange lhs
> :: case: false
## Input

`````js
async function f() { for await ("foo".x in y) {} }
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
                            "kind": 166,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 67174403,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 32,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 38,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 39
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 42,
                                "end": 44
                            },
                            "statement": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 47,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 45,
                                "end": 48
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "async function f() { for await (\"foo\".x in y) {} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39,
            "end": 42
        }
    ],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid strange lhs
> :: case: false
## Input

`````js
async function f() { for await ("foo".x in y) {} }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for await with valid strange lhs
> :: case: false
## Input

`````js
async function f() { for await ("foo".x in y) {} }
`````
```

