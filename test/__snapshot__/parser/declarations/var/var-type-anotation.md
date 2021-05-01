# Kataw parser test case

## Input

`````js
var foo = ((): number => bar);
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
                            "original": "foo",
                            "text": "foo",
                            "rawText": " foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": null,
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "start": 13,
                                    "end": 21
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "original": "bar",
                                    "text": "bar",
                                    "rawText": " bar",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "var foo = ((): number => bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

