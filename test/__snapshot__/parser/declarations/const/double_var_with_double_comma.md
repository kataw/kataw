# Kataw parser test case

## Input

`````js
const {x,, y} = obj;
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
                                "end": 9
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 9
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 10,
                        "end": 12
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "obj",
                "autofix": 0,
                "flags": 768,
                "start": 15,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "const {x,, y} = obj;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 9,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 13,
            "end": 15
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

