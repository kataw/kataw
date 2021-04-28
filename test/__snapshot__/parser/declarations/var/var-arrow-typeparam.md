# Kataw parser test case

## Input

`````js
var a: {param1?: number; param2: string; param3: string;}
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
                "flags": 0,
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
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param1",
                                            "rawText": "param1",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 16,
                                            "start": 512,
                                            "end": 23
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 14,
                                            "start": 512,
                                            "end": 15
                                        },
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 23
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param2",
                                            "rawText": "param2",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 32,
                                            "start": 512,
                                            "end": 39
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 39
                                    },
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "param3",
                                            "rawText": "param3",
                                            "flags": 768,
                                            "start": 40,
                                            "end": 47
                                        },
                                        "value": {
                                            "kind": 134234347,
                                            "flags": 48,
                                            "start": 512,
                                            "end": 55
                                        },
                                        "optionalToken": null,
                                        "staticToken": false,
                                        "flags": 0,
                                        "start": 40,
                                        "end": 55
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 6,
                                "end": 57
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 57
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 57
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 57
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "var a: {param1?: number; param2: string; param3: string;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
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

