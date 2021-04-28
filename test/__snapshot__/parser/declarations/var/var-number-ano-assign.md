# Kataw parser test case

## Input

`````js
var numVal:number = otherNumVal;

var a: { [a: number]: string; [b: number]: string; };
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
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 768,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "otherNumVal",
                            "rawText": "otherNumVal",
                            "flags": 768,
                            "start": 19,
                            "end": 31
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 32
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 32,
                "end": 37
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
                            "start": 37,
                            "end": 39
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "indexers": [
                                    {
                                        "kind": 195,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "key": {
                                            "kind": 134234345,
                                            "flags": 768,
                                            "start": 46,
                                            "end": 53
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 768,
                                            "start": 55,
                                            "end": 62
                                        },
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 42,
                                        "end": 63
                                    },
                                    {
                                        "kind": 195,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "key": {
                                            "kind": 134234345,
                                            "flags": 768,
                                            "start": 67,
                                            "end": 74
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 768,
                                            "start": 76,
                                            "end": 83
                                        },
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 63,
                                        "end": 84
                                    }
                                ],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 40,
                                "end": 86
                            },
                            "flags": 0,
                            "start": 39,
                            "end": 86
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 37,
                        "end": 86
                    }
                ],
                "flags": 128,
                "start": 37,
                "end": 86
            },
            "flags": 128,
            "start": 32,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "var numVal:number = otherNumVal;\n\nvar a: { [a: number]: string; [b: number]: string; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
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

