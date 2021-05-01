# Kataw parser test case

## Input

`````js
+{f(){}==
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
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "original": "f",
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 6,
                                            "end": 6
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 7
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 9,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "+{f(){}==",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 7, end: 9
✖ Expression expected - start: 9, end: 9

```

