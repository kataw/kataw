# Kataw parser test case

## Input

`````js
({ async a(){ await 0; } })
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
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 11,
                                    "end": 12
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitToken": {
                                                        "kind": 82032,
                                                        "flags": 768,
                                                        "start": 13,
                                                        "end": 19
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 768,
                                                        "start": 19,
                                                        "end": 21
                                                    },
                                                    "flags": 256,
                                                    "start": 13,
                                                    "end": 21
                                                },
                                                "flags": 128,
                                                "start": 13,
                                                "end": 22
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 22
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 24
                                },
                                "flags": 2304,
                                "start": 10,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 26
                },
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "({ async a(){ await 0; } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

