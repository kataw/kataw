# Kataw parser test case

## Input

`````js
function f() {
  (new.target) = 1;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 211,
                                        "name": {
                                            "kind": 81921,
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "flags": 768,
                                        "start": 18,
                                        "end": 28
                                    },
                                    "flags": 256,
                                    "start": 14,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 34
                },
                "flags": 256,
                "start": 12,
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "function f() {\n  (new.target) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

