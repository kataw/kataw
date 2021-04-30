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
            "flags": 96,
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
                "flags": 0,
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
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 27,
                                "end": 30
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 32
            },
            "flags": 16,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; var x = yield => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 21, end: 27

```

