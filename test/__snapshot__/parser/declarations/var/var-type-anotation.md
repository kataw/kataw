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
                                    "flags": 768,
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
                                        "flags": 768,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "start": 13,
                                    "end": 21
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 11,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 29
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "var foo = ((): number => bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

