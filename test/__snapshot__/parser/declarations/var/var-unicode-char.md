# Kataw parser test case

## Input

`````js
var 𫠝_ = 10;

var _𐒦 = 10;
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
                            "text": "𫠝_",
                            "rawText": "var",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 768,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 13,
                "start": 1,
                "end": 18
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "_𐒦",
                            "rawText": "_𐒦",
                            "flags": 768,
                            "start": 18,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 768,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 18,
                        "end": 27
                    }
                ],
                "flags": 128,
                "start": 18,
                "end": 27
            },
            "flags": 128,
            "start": 13,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "var 𫠝_ = 10;\n\nvar _𐒦 = 10;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

