# Kataw parser test case

## Input

`````js
function x(){""[new.target]}
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
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
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "\"\"",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "expression": {
                                    "kind": 211,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "targetIdentifier": {
                                        "kind": 16594,
                                        "flags": 96,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "flags": 96,
                                    "start": 16,
                                    "end": 26
                                },
                                "flags": 536870944,
                                "start": 13,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "start": 12,
                "end": 28
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function x(){\"\"[new.target]}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

function x() { '""'[new.target]; }

```

### Diagnostics

```javascript
✔ No errors
```

