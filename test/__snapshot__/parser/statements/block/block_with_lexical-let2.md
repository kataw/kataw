# Kataw parser test case

## Input

`````js
{ let {x} = y }
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
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
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "right": null,
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 13
                                }
                            ],
                            "flags": 33554448,
                            "start": 5,
                            "end": 13
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ let {x} = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

