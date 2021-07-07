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
                "transformFlags": 0,
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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
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
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 22
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "right": {
                    "kind": 201392130,
                    "text": 4,
                    "rawText": "4",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 15,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "var opaque = 0;\nopaque += 4;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
var opaque = 0;
opaque += 4;

```

### Diagnostics

```javascript
✔ No errors
```

