# Kataw parser test case

## Input

`````js
({ get 5.2322341234123() { } });
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 5.2322341234123,
                                    "rawText": "5.2322341234123",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 8448,
                                    "start": 23,
                                    "end": 24
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 8448,
                                "start": 22,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "({ get 5.2322341234123() { } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
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

