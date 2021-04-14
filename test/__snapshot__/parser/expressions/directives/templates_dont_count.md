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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
                                "start": 13,
                                "end": 26
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 27
                        },
                        {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 768,
                                "start": 27,
                                "end": 32
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 34,
                                "end": 35
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 128,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 128,
                            "start": 27,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 39
                },
                "flags": 256,
                "start": 12,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "function f(){ `use strict`; with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

