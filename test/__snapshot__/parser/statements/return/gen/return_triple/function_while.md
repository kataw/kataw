# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return triple
> :: case: function while
## Input

`````js
return return return function while
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 6,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 20,
                    "end": 29
                },
                "generatorToken": null,
                "name": null,
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 32,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 32,
                "start": 20,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 29,
                "end": 35
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 35,
                "end": 35
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 35,
                    "end": 35
                },
                "flags": 16,
                "start": 35,
                "end": 35
            },
            "flags": 16,
            "start": 29,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "return return return function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 13
✖ A return statement can only be used within a function_body - start: 6, end: 13
✖ Expression expected - start: 13, end: 20
✖ A return statement can only be used within a function_body - start: 13, end: 20
✖ Unexpected token. - start: 29, end: 35
✖ Expression expected - start: 35, end: 35
✖ Expression expected - start: 35, end: 35

```

