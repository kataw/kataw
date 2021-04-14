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
                    "directives": [
                        {
                            "kind": 67174403,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 768,
                            "start": 13,
                            "end": 26
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 81921,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 27,
                                "end": 31
                            },
                            "flags": 128,
                            "start": 27,
                            "end": 32
                        },
                        {
                            "kind": 176,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 32,
                                "end": 41
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "g",
                                "rawText": "g",
                                "flags": 768,
                                "start": 41,
                                "end": 43
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                "flags": 768,
                                                "start": 47,
                                                "end": 52
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 54,
                                                "end": 55
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 128,
                                                "start": 56,
                                                "end": 59
                                            },
                                            "flags": 128,
                                            "start": 47,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 59
                                },
                                "flags": 256,
                                "start": 45,
                                "end": 61
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 32,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 61
                },
                "flags": 256,
                "start": 12,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "function f(){ \"use strict\"; foo; function g() { with (x) y; } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 75,
            "error": "'with' statements are not allowed in strict mode.",
            "start": 47,
            "end": 52
        }
    ],
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

