# Kataw parser test case

## Input

`````js
var v = a
  ? b ? d : e
  : c ? f : g;
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
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "consequent": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 23
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 27
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 29
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 31
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 35
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 37
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "var v = a\n  ? b ? d : e\n  : c ? f : g;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

var v = a ? b ? d : e : c ? f : g;
```

### Diagnostics

```javascript
✔ No errors
```

