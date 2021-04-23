# Kataw parser test case

## Input

`````js
var opaque = 0;
opaque += 4;
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
                            "text": "opaque",
                            "rawText": "opaque",
                            "flags": 768,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": 0,
                            "rawText": "0",
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "opaque",
                    "rawText": "opaque",
                    "flags": 768,
                    "start": 15,
                    "end": 22
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 768,
                    "start": 22,
                    "end": 25
                },
                "right": {
                    "kind": 134299649,
                    "text": 4,
                    "rawText": "4",
                    "flags": 768,
                    "start": 25,
                    "end": 27
                },
                "flags": 256,
                "start": 15,
                "end": 27
            },
            "flags": 128,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "var opaque = 0;\nopaque += 4;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

