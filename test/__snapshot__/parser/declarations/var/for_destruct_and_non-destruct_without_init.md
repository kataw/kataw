# Kataw parser test case

## Input

`````js
for (var [foo] = arr, bar);
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
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 20
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 21,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 21,
                        "end": 25
                    }
                ],
                "flags": 128,
                "start": 8,
                "end": 25
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 25,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 26,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "for (var [foo] = arr, bar);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 25,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 25,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 26
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

