# Kataw parser test case

## Input

`````js
type Obj1 = {
  field: {key: ?string | Array<string>},
};
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 200,
            "name": {
                "kind": 81921,
                "value": "Obj1",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 9
            },
            "typeParameters": null,
            "type": {
                "kind": 241,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 81921,
                            "value": "field",
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 21
                        },
                        "value": {
                            "kind": 241,
                            "properties": [
                                {
                                    "kind": 193,
                                    "key": {
                                        "kind": 81921,
                                        "value": "key",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "value": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 242,
                                                "type": {
                                                    "kind": 16619,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 36
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 81921,
                                                    "value": "Array",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "typeParameters": {
                                                    "kind": 146,
                                                    "types": [
                                                        {
                                                            "kind": 16619,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 45,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 44,
                                                    "end": 52
                                                },
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 38,
                                                "end": 52
                                            }
                                        ],
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 36,
                                        "end": 52
                                    },
                                    "optionalToken": null,
                                    "staticToken": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 52
                                }
                            ],
                            "indexers": [],
                            "callProperties": [],
                            "internalSlots": [],
                            "autofix": 0,
                            "flags": 0,
                            "start": 22,
                            "end": 53
                        },
                        "optionalToken": null,
                        "staticToken": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 13,
                        "end": 53
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "autofix": 0,
                "flags": 0,
                "start": 11,
                "end": 56
            },
            "autofix": 0,
            "flags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "type Obj1 = {\n  field: {key: ?string | Array<string>},\n};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

