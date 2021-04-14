# Kataw parser test case

## Input

`````js

var x;

x
=
true;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 4,
                        "end": 6
                    }
                ],
                "flags": 128,
                "start": 4,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 134,
                    "text": true,
                    "flags": 768,
                    "start": 12,
                    "end": 17
                },
                "flags": 256,
                "start": 7,
                "end": 17
            },
            "flags": 128,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "\nvar x;\n\nx\n=\ntrue;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

