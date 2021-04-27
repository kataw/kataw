# Kataw parser test case

## Input

`````js
"use strict"; var x = yield => 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 768,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 27,
                                "end": 30
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 21,
                                "end": 27
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 256,
                            "start": 21,
                            "end": 32
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 32
            },
            "flags": 128,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "\"use strict\"; var x = yield => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

