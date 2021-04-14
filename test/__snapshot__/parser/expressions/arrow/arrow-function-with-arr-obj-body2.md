# Kataw parser test case

## Input

`````js
var v = a => <any><any>{}
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
                            "text": "v",
                            "rawText": "v",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 9,
                                "end": 12
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 18,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 12,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "var v = a => <any><any>{}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 25
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

