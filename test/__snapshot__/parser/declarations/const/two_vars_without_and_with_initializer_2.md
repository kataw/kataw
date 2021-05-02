# Kataw parser test case

## Input

`````js
const [foo=a, bar=b] = arr;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 12
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 7,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "const [foo=a, bar=b] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

