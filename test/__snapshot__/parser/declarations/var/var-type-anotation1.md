# Kataw parser test case

## Input

`````js
var foo = (async (): number => bar);
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
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
                                    "flags": 27,
                                    "start": 0,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 512,
                                    "start": 11,
                                    "end": 16
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 512,
                                        "start": 20,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "start": 19,
                                    "end": 27
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 34
                                },
                                "flags": 2304,
                                "start": 11,
                                "end": 34
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 35
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "var foo = (async (): number => bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
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

