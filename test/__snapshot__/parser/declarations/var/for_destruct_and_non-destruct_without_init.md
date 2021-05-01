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
                "flags": 0,
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
                                            "kind": 134299649,
                                            "original": "foo",
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "original": "arr",
                            "text": "arr",
                            "rawText": " arr",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 20
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "bar",
                            "text": "bar",
                            "rawText": " bar",
                            "flags": 96,
                            "start": 21,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 21,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 25
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 25,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 26,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (var [foo] = arr, bar);",
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
✖ ',' expected - start: 25, end: 26
✖ Expression expected - start: 25, end: 26

```

