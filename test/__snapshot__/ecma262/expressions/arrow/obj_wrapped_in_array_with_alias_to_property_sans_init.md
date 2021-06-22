# Kataw parser test case

## Input

`````js
([{x: y.z}]) => b
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 3,
                                                        "end": 4
                                                    },
                                                    "value": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 5,
                                                            "end": 7
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 8,
                                                            "end": 9
                                                        },
                                                        "flags": 536870944,
                                                        "start": 3,
                                                        "end": 9
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 3,
                                                    "end": 9
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 3,
                                            "end": 9
                                        },
                                        "flags": 48,
                                        "start": 2,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 12
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 34,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "([{x: y.z}]) => b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 12, end: 15

```

