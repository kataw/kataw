# Kataw parser test case

## Input

`````js
const [foo:bar] = obj;
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 81921,
                                                    "value": "bar",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 11,
                                                    "end": 14
                                                },
                                                "typeParameters": null,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 14
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 21
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "const [foo:bar] = obj;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

