# Kataw parser test case

## Input

`````js
var a : A.B<T>
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "id": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "flags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "flags": 0,
                                            "start": 12,
                                            "end": 13
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 14
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "var a : A.B<T>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

