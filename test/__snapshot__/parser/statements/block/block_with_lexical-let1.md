# Kataw parser test case

## Input

`````js
{ let [] = y }
`````

## Output

### Hybrid CST

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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "original": "y",
                                        "text": "y",
                                        "rawText": " y",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 12
                                }
                            ],
                            "flags": 33554448,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{ let [] = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

