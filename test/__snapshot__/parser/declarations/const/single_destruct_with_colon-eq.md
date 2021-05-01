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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 16
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 16
            },
            "flags": 33554448,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "const {a:=c} = z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 10

```

