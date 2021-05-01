# Kataw parser test case

## Input

`````js
({async typeof(){}});
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
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 2,
                                "end": 7
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "typeof",
                                    "rawText": "typeof",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 15,
                                    "end": 16
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({async typeof(){}});",
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
✖ ',' expected - start: 7, end: 14

```

