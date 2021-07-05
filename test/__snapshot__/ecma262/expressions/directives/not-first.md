# Kataw parser test case

## Input

`````js
var x; "use strict"; with (x) y;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 96,
                "start": 6,
                "end": 19
            },
            "flags": 16,
            "start": 6,
            "end": 20
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "start": 20,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 27,
                "end": 28
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "flags": 16,
                "start": 29,
                "end": 32
            },
            "flags": 80,
            "start": 20,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "var x; \"use strict\"; with (x) y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

var x;
"\"use strict\"";

with (x) y;

```

### Diagnostics

```javascript
✔ No errors
```

