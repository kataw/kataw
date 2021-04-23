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
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 6,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 6,
                                "end": 6
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 6
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 6
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 35379,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "expression": {
                    "kind": 134299649,
                    "text": 123,
                    "rawText": "0x7B",
                    "flags": 16777984,
                    "start": 8,
                    "end": 12
                },
                "flags": 256,
                "start": 6,
                "end": 12
            },
            "flags": 128,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "var a: -0x7B",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

