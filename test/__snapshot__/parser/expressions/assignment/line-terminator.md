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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 0,
                "end": 4
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 4,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 4,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 65,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 134,
                    "text": true,
                    "flags": 97,
                    "start": 12,
                    "end": 17
                },
                "flags": 32,
                "start": 7,
                "end": 17
            },
            "flags": 16,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "\nvar x;\n\nx\n=\ntrue;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

