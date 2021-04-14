# Kataw parser test case

## Input

`````js
({ "__proto__": null, __proto__(){}, })
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
                                    "start": 15,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 67174403,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 20
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 33
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
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 35
                            }
                        ],
                        "trailingComma": true,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 36
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 38
                },
                "flags": 256,
                "start": 0,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "({ \"__proto__\": null, __proto__(){}, })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

