# Kataw parser test case

## Input

`````js
`a ${function(){}} b`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 0,
                    "end": 0
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 13
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 15
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 32,
                                "start": 5,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 17,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "`a ${function(){}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 5

```

