# Kataw parser test case

## Input

`````js
"use strict"; yield => { let yield; }
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 28
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 34
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 28,
                                            "end": 34
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 34
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 35
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 35
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 37
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; yield => { let yield; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 28, end: 34
✖ Cannot redeclare block-scoped variable - start: 28, end: 34

```

