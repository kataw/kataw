# Kataw parser test case

## Input

`````js
({static x(){}})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                                "kind": 81921,
                                "text": "static",
                                "rawText": "static",
                                "flags": 768,
                                "start": 2,
                                "end": 8
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 12
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
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "({static x(){}})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 8,
            "end": 10
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

