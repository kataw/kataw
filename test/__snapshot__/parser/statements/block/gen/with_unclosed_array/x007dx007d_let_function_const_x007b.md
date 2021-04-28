# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: }} let function const {
## Input

`````js
{[ }} let function const {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 2
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 768,
                "start": 5,
                "end": 9
            },
            "flags": 128,
            "start": 5,
            "end": 9
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 9,
                "start": 0,
                "end": 18
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 18,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 18
                },
                "flags": 256,
                "start": 18,
                "end": 18
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 9,
            "end": 18
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 18,
                "start": 0,
                "end": 24
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 24,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 24,
                        "end": 26
                    }
                ],
                "flags": 160,
                "start": 24,
                "end": 26
            },
            "flags": 128,
            "start": 18,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "{[ }} let function const {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 4, end: 5
✖ Binding identifier expected - start: 18, end: 24
✖ Unexpected token. - start: 18, end: 24
✖ Missing initializer in const declaration - start: 26, end: 26

```

