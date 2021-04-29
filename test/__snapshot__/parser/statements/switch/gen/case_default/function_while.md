# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: function while
## Input

`````js
case function while default
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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 4,
                "end": 13
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 4,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 19,
                "end": 19
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "case function while default",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ Binding identifier expected - start: 13, end: 19
✖ Unexpected token. - start: 13, end: 19
✖ Expression expected - start: 19, end: 27
✖ Expression expected - start: 19, end: 27
✖ Statement expected - start: 19, end: 27

```

