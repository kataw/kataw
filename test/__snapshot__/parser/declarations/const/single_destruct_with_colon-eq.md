# Kataw parser test case

## Input

`````js
const {a:=c} = z;
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "initializer": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 11
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 11
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 16
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "const {a:=c} = z;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 9,
            "end": 10
        }
    ],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

