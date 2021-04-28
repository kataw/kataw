# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: function while
## Input

`````js
return[ function while
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 7,
                                "start": 0,
                                "end": 16
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 16,
                                "end": 16
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 16
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 7,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 7,
                    "end": 16
                },
                "flags": 256,
                "start": 6,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 16,
                "start": 0,
                "end": 22
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 22,
                "end": 22
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 22,
                    "end": 22
                },
                "flags": 128,
                "start": 22,
                "end": 22
            },
            "flags": 128,
            "start": 16,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "return[ function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Unexpected token. - start: 16, end: 22
✖ ',' expected - start: 16, end: 22
✖ Expression expected - start: 22, end: 22
✖ Expression expected - start: 22, end: 22

```

