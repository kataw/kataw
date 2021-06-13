# Kataw parser test case

## Input

`````js
var a?: number[][]
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
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 5,
                            "end": 6
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 7,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "var a?: number[][]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

