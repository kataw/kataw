# Kataw parser test case

## Input

`````js
var a : [] = [];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "var a : [] = [];",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

