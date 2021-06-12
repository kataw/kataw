# Kataw parser test case

## Input

`````js
var a: number & (string | bool)
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
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 6,
                                        "end": 13
                                    },
                                    {
                                        "kind": 260,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 23,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 31
                                    }
                                ],
                                "flags": 0,
                                "start": 13,
                                "end": 31
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 31
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var a: number & (string | bool)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

