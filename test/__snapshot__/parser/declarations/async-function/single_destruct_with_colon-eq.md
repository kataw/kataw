# Kataw parser test case

## Input

`````js
let {a:=c} = z;
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
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "initializer": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 9
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 14
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "let {a:=c} = z;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 7,
            "end": 8
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

