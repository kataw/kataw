# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: return return
> :: case: function while
## Input

`````js
return function while return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 6,
                    "end": 15
                },
                "generatorToken": null,
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 32,
                "start": 6,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 15,
                "end": 21
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 21,
                "end": 21
            },
            "statement": {
                "kind": 161,
                "returnKeyword": {
                    "kind": 37757022,
                    "flags": 0,
                    "start": 21,
                    "end": 28
                },
                "expression": null,
                "flags": 16,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "return function while return",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Unexpected token. - start: 15, end: 21
✖ Expression expected - start: 21, end: 28
✖ A return statement can only be used within a function_body - start: 21, end: 28

```

