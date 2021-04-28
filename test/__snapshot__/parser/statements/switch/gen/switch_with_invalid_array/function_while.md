# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: switch with invalid array
> :: case: function while
## Input

`````js
switch [catch] function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 8,
                    "end": 8
                },
                "flags": 256,
                "start": 6,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 14
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 14,
                "start": 0,
                "end": 23
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 23,
                "end": 23
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 23,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 23,
                    "end": 23
                },
                "flags": 256,
                "start": 23,
                "end": 23
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 14,
            "end": 23
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 23,
                "start": 0,
                "end": 29
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 29,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 29,
                    "end": 29
                },
                "flags": 128,
                "start": 29,
                "end": 29
            },
            "flags": 128,
            "start": 23,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "switch [catch] function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 23, end: 29
✖ Unexpected token. - start: 23, end: 29
✖ Expression expected - start: 29, end: 29
✖ Expression expected - start: 29, end: 29

```

