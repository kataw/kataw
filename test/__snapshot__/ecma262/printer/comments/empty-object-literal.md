while-statement6# Kataw parser test case

## Input

`````js
var obj = { /*comment*/ };
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 9,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var obj = { /*comment*/ };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
var obj = {};
```

### Diagnostics

```javascript
✔ No errors
```

