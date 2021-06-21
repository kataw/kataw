# Kataw parser test case

## Input

`````js
var v = a
  ? b
    ? d : e
  : c
    ? f : g;
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
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
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
                                "start": 7,
                                "end": 9
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
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
                                    "start": 13,
                                    "end": 15
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "start": 15,
                                    "end": 21
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 25
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 27
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 27,
                                "end": 31
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "start": 33,
                                    "end": 39
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 39,
                                    "end": 41
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 41,
                                    "end": 43
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var v = a\n  ? b\n    ? d : e\n  : c\n    ? f : g;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
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

