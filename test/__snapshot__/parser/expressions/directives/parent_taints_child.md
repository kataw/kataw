# Kataw parser test case

## Input

`````js
function f(){ "use strict"; foo; function g() { with (x) y; } }
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
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 13,
                            "end": 26
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 27,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 32
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 32,
                                "end": 41
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 41,
                                "end": 43
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 43,
                                "end": 45
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 153,
                                            "withKeyword": {
                                                "kind": 37757029,
                                                "flags": 0,
                                                "start": 47,
                                                "end": 52
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 16,
                                                "start": 56,
                                                "end": 59
                                            },
                                            "flags": 16,
                                            "start": 47,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 47,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 61
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 32,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 61
                },
                "flags": 32,
                "start": 12,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "function f(){ \"use strict\"; foo; function g() { with (x) y; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'with' statements are not allowed in strict mode. - start: 47, end: 52

```

