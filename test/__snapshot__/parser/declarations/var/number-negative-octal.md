# Kataw parser test case

## Input

`````js
var a: -0x7B
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
                                "kind": 271,
                                "subtractionToken": {
                                    "kind": 35379,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 8
                                },
                                "value": 123,
                                "flags": 64,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 12
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "var a: -0x7B",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

