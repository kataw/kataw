# Kataw parser test case

## Input

`````js
"use strict"; var x = yield => 1;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
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
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 27
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 30
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; var x = yield => 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

"\"use strict\"";
var x = yield => 1;
```

### Diagnostics

```javascript
✔ No errors
```

