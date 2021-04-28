# Kataw parser test case

## Input

`````js
let [] = [];
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
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
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
                                "flags": 256,
                                "start": 5,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 11
            },
            "flags": 0,
            "start": 128,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "let [] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

