# Kataw parser test case

## Input

`````js
var x: any;
x.name = "hello";
var z = x + x;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 768,
                                "start": 6,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 768,
                        "start": 14,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 201392131,
                    "text": "hello",
                    "rawText": "hello",
                    "flags": 768,
                    "start": 20,
                    "end": 28
                },
                "flags": 256,
                "start": 11,
                "end": 28
            },
            "flags": 128,
            "start": 11,
            "end": 29
        },
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 29,
                "end": 33
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 33,
                            "end": 35
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 37,
                                "end": 39
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 39,
                                "end": 41
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 41,
                                "end": 43
                            },
                            "flags": 256,
                            "start": 37,
                            "end": 43
                        },
                        "flags": 128,
                        "start": 33,
                        "end": 43
                    }
                ],
                "flags": 128,
                "start": 33,
                "end": 43
            },
            "flags": 128,
            "start": 29,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "var x: any;\nx.name = \"hello\";\nvar z = x + x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

