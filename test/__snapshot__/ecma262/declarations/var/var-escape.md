# Kataw parser test case

## Input

`````js
var _\u{104A6} = 10;
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
                            "text": "_A¦",
                            "rawText": "_\\u{104A6}",
                            "flags": 96,
                            "start": 3,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "var _\\u{104A6} = 10;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

var _\u{104A6} = 10;

```

### Diagnostics

```javascript
✔ No errors
```

