# Kataw parser test case

## Input

`````js
var a: ?string[]
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                                "kind": 134217970,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 512,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 0,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "var a: ?string[]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

