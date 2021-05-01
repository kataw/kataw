# Kataw parser test case

## Input

`````js
function f(){ `use strict`; with (x) y; }
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
                "original": "f",
                "text": "f",
                "rawText": " f",
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
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 458761,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 96,
                                "start": 13,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 27
                        },
                        {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 0,
                                "start": 27,
                                "end": 32
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "x",
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 34,
                                "end": 35
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "original": "y",
                                    "text": "y",
                                    "rawText": " y",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 16,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 39
                },
                "flags": 32,
                "start": 12,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function f(){ `use strict`; with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

