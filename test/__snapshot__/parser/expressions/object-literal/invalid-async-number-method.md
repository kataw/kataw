# Kataw parser test case

## Input

`````js
({async 8(){});
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
                                "original": "async",
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 2,
                                "end": 7
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 8,
                                    "original": "8",
                                    "rawText": " 8",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 11
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 12,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "({async 8(){});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 7, end: 9
✖ ',' expected - start: 13, end: 14

```

