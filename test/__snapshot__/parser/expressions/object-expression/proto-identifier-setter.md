# Kataw parser test case

## Input

`````js
({ __proto__: null, set __proto__(x){} })
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
                                "kind": 219,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 34,
                                    "end": 36
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
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 4352,
                                "start": 33,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "({ __proto__: null, set __proto__(x){} })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

