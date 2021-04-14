# Kataw parser test case

## Input

`````js
function x(){""[new.target]}
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
                "text": "x",
                "rawText": "x",
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
                                "kind": 130,
                                "member": {
                                    "kind": 67174403,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "expression": {
                                    "kind": 211,
                                    "name": {
                                        "kind": 81921,
                                        "text": "target",
                                        "rawText": "target",
                                        "flags": 768,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "flags": 768,
                                    "start": 16,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 27
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 27
                },
                "flags": 256,
                "start": 12,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "function x(){\"\"[new.target]}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

