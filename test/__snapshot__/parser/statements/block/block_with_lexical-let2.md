# Kataw parser test case

## Input

`````js
{ let {x} = y }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 162,
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 222,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "right": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "multiline": false,
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 5,
                                    "end": 13
                                }
                            ],
                            "autofix": 0,
                            "flags": 128,
                            "start": 5,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "{ let {x} = y }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

