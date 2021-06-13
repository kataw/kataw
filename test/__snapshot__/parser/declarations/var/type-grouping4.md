# Kataw parser test case

## Input

`````js
var a: (typeof A)
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

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
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 134299891,
                                    "typeOfKeyword": {
                                        "kind": 138477613,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "flags": 2097216,
                                    "start": 8,
                                    "end": 16
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 5,
                            "end": 17
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "var a: (typeof A)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

var a;
```

### Diagnostics

```javascript
✔ No errors
```

