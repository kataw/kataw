# Kataw parser test case

## Input

`````js
declare var C: Class<string>;
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Class",
                                    "rawText": "Class",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 20
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 21,
                                            "end": 27
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 20,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 28
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 28
            },
            "flags": 4112,
            "start": 7,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "declare var C: Class<string>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

var C;
```

### Diagnostics

```javascript
✔ No errors
```

