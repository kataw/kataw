# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
function not_gen() { yield /* comment */ { yield: 12 } }}
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
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
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 26
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "flags": 128,
                                        "start": 42,
                                        "end": 48
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 42,
                                "end": 48
                            },
                            "flags": 128,
                            "start": 26,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 48
                },
                "flags": 256,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 49,
                "end": 52
            },
            "flags": 128,
            "start": 49,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function not_gen() { yield /* comment */ { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 26, end: 42
@{x2716}@ Unexpected token. - start: 48, end: 49
@{x2716}@ Unexpected token. - start: 48, end: 49
@{x2716}@ Unexpected token. - start: 48, end: 49
@{x2716}@ Statement expected - start: 48, end: 49
@{x2716}@ Statement expected - start: 52, end: 54
@{x2716}@ Statement expected - start: 54, end: 56
@{x2716}@ Statement expected - start: 56, end: 57

```

