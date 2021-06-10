# Kataw parser test case

## Input

`````js
for (let {x:y=z});
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 16
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 16
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 16,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 17,
                "end": 18
            },
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (let {x:y=z});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 16, end: 17
✖ Identifier expected - start: 16, end: 17

```

